import React, { JSX, useEffect, useState } from 'react';
import styles from './ExtensionsList.module.css';

type ScriptItem = {
  name: string;
  summary: {
    version: string | null;
    description: string | null;
  };
  downloadUrl: string | null;
};

const OWNER = 'zappbrandigan';
const REPO = 'excel-scripts';
const BRANCH = 'main';
const ROOT_DIR = 'out';
const API_BASE = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${ROOT_DIR}`;
const RAW_BASE = `https://raw.githubusercontent.com/${OWNER}/${REPO}/${BRANCH}`;

function normalizeKey(line: string): string {
  return line.replace(/\*\*/g, '').trim();
}

function isKeyLine(line: string): boolean {
  return (
    /^[-*]\s*\w+\s*[:\-]/i.test(line) ||
    /^\w+\s*[:\-]/i.test(line) ||
    /^\|\s*\w+\s*\|/i.test(line)
  );
}

function extractSummary(markdown: string): {
  version: string | null;
  description: string | null;
} {
  const lines = markdown.split(/\r?\n/);
  let version: string | null = null;
  let description: string | null = null;

  for (let index = 0; index < lines.length; index += 1) {
    const line = normalizeKey(lines[index]);
    if (!line) {
      continue;
    }

    if (!version) {
      const match =
        line.match(/^[-*]?\s*version\s*[:\-]\s*(.+)$/i) ??
        line.match(/^\|\s*version\s*\|\s*(.+?)\s*\|?$/i);
      if (match) {
        version = match[1].trim();
      }
    }

    if (!description) {
      const match =
        line.match(/^[-*]?\s*description\s*[:\-]\s*(.+)$/i) ??
        line.match(/^\|\s*description\s*\|\s*(.+?)\s*\|?$/i);
      const inlineValue =
        match?.[1]?.trim() ??
        (line.toLowerCase().startsWith('description')
          ? line.split(/[:\-]/).slice(1).join(':').trim()
          : '');

      const collected: string[] = [];
      if (inlineValue !== '') {
        collected.push(inlineValue);
      }

      if (line.toLowerCase().startsWith('description')) {
        for (let nextIndex = index + 1; nextIndex < lines.length; nextIndex += 1) {
          const nextLine = normalizeKey(lines[nextIndex]);
          if (!nextLine) {
            if (collected.length === 0) {
              continue;
            }
            break;
          }
          if (isKeyLine(nextLine)) {
            break;
          }
          collected.push(nextLine);
        }
      }

      if (collected.length > 0) {
        description = collected.join(' ');
      }
    }

    if (version && description) {
      break;
    }
  }

  return { version, description };
}

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }
  return response.json() as Promise<T>;
}

async function fetchReadme(dirName: string): Promise<string> {
  const readmeCandidates = ['README.md', 'readme.md'];

  for (const filename of readmeCandidates) {
    const response = await fetch(
      `${RAW_BASE}/${ROOT_DIR}/${dirName}/${filename}`
    );
    if (response.ok) {
      return response.text();
    }
  }

  throw new Error('README not found.');
}

async function fetchScriptInfo(dirName: string): Promise<ScriptItem> {
  const contents = await fetchJson<
    Array<{
      name: string;
      type: 'file' | 'dir';
      download_url: string | null;
    }>
  >(`${API_BASE}/${dirName}`);

  const scriptFile = contents.find(
    (item) =>
      item.type === 'file' &&
      (item.name.endsWith('.osts') || item.name.endsWith('.vba'))
  );

  let summary = { version: null, description: null };
  try {
    const readmeText = await fetchReadme(dirName);
    summary = extractSummary(readmeText);
  } catch (error) {
    summary = { version: null, description: null };
  }

  return {
    name: dirName,
    summary,
    downloadUrl: scriptFile?.download_url ?? null,
  };
}

export default function ExcelScriptsList(): JSX.Element {
  const [items, setItems] = useState<ScriptItem[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const root = await fetchJson<
          Array<{ name: string; type: 'file' | 'dir' }>
        >(API_BASE);

        const directories = root
          .filter((item) => item.type === 'dir')
          .map((item) => item.name)
          .sort((a, b) => a.localeCompare(b));

        const results = await Promise.all(
          directories.map((dir) => fetchScriptInfo(dir))
        );

        if (!cancelled) {
          setItems(results);
        }
      } catch (err) {
        if (!cancelled) {
          setError('Unable to load Excel scripts right now.');
        }
      }
    }

    void load();

    return () => {
      cancelled = true;
    };
  }, []);

  if (error) {
    return <p className={styles.status}>{error}</p>;
  }

  if (!items) {
    return <p className={styles.status}>Loading Excel scripts...</p>;
  }

  if (items.length === 0) {
    return <p className={styles.status}>No Excel scripts found.</p>;
  }

  return (
    <div className={styles.list}>
      {items.map((item) => (
        <div className={styles.card} key={item.name}>
          <div className={styles.title}>{item.name}</div>
          <p className={styles.summary}>
            {item.summary.version ? `Version: ${item.summary.version}` : 'Version unavailable.'}
            <br />
            {item.summary.description
              ? `Description: ${item.summary.description}`
              : 'Description unavailable.'}
          </p>
          {item.downloadUrl ? (
            <a className={styles.download} href={item.downloadUrl}>
              Download
            </a>
          ) : (
            <span className={styles.muted}>Download unavailable.</span>
          )}
        </div>
      ))}
    </div>
  );
}
