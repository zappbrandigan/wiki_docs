import React, { JSX, useEffect, useState } from 'react';
import styles from './ExtensionsList.module.css';

type ExtensionItem = {
  name: string;
  summary: string;
  downloadUrl: string | null;
};

const OWNER = 'zappbrandigan';
const REPO = 'tulbox-extensions';
const API_BASE = `https://api.github.com/repos/${OWNER}/${REPO}/contents`;
const RAW_BASE = `https://raw.githubusercontent.com/${OWNER}/${REPO}/main`;

function extractSummary(markdown: string): string {
  const lines = markdown.split(/\r?\n/);
  let paragraph = '';

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      if (paragraph) break;
      continue;
    }
    if (trimmed.startsWith('#')) {
      continue;
    }
    paragraph = paragraph ? `${paragraph} ${trimmed}` : trimmed;
  }

  return paragraph || 'Summary unavailable.';
}

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }
  return response.json() as Promise<T>;
}

async function fetchExtensionInfo(dirName: string): Promise<ExtensionItem> {
  const contents = await fetchJson<
    Array<{
      name: string;
      type: 'file' | 'dir';
      download_url: string | null;
    }>
  >(`${API_BASE}/${dirName}`);

  const zipFile = contents.find(
    (item) => item.type === 'file' && item.name.endsWith('.zip')
  );

  let summary = 'Summary unavailable.';
  try {
    const readmeResponse = await fetch(
      `${RAW_BASE}/${dirName}/README.md`
    );
    if (readmeResponse.ok) {
      const readmeText = await readmeResponse.text();
      summary = extractSummary(readmeText);
    }
  } catch (error) {
    summary = 'Summary unavailable.';
  }

  return {
    name: dirName,
    summary,
    downloadUrl: zipFile?.download_url ?? null,
  };
}

export default function ExtensionsList(): JSX.Element {
  const [items, setItems] = useState<ExtensionItem[] | null>(null);
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
          directories.map((dir) => fetchExtensionInfo(dir))
        );

        if (!cancelled) {
          setItems(results);
        }
      } catch (err) {
        if (!cancelled) {
          setError('Unable to load extensions right now.');
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
    return <p className={styles.status}>Loading extensions...</p>;
  }

  if (items.length === 0) {
    return <p className={styles.status}>No extensions found.</p>;
  }

  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <div className={styles.card} key={item.name}>
          <div className={styles.title}>{item.name}</div>
          <p className={styles.summary}>{item.summary}</p>
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
