import React from 'react';
import styles from './regex.module.css';

type Props = {
  title?: string;
  before: string;
  pattern: string; // JS regex source, e.g. "(\\d{2})(\\d{2})(\\d{2})"
  replace: string; // e.g. "$2$120$3"
  flags?: string; // e.g. "g"
  note?: string; // optional footnote/explanation
};

function renderHighlighted(before: string, re: RegExp) {
  const m = re.exec(before);
  if (!m) return <>{before}</>;

  const start = m.index;
  const end = start + m[0].length;
  const pre = before.slice(0, start);
  const hit = before.slice(start, end);
  const post = before.slice(end);

  // Map out group boundaries within the match
  const segs: Array<{ text: string; cls?: string }> = [];
  let cursor = 0;
  const groups: Array<{ start: number; end: number; cls: string }> = [];

  for (let g = 1; g < m.length; g++) {
    const gText = m[g];
    if (gText == null) continue;
    const idx = hit.indexOf(gText, cursor);
    if (idx === -1) continue;
    groups.push({
      start: idx,
      end: idx + gText.length,
      cls: styles[`g${g}`] || styles.gn,
    });
    cursor = idx + gText.length;
  }
  groups.sort((a, b) => a.start - b.start);

  let pos = 0;
  for (const gs of groups) {
    if (gs.start > pos) segs.push({ text: hit.slice(pos, gs.start) });
    segs.push({ text: hit.slice(gs.start, gs.end), cls: gs.cls });
    pos = gs.end;
  }
  if (pos < hit.length) segs.push({ text: hit.slice(pos) });

  return (
    <>
      {pre}
      <span className={styles.match}>
        {segs.map((s, i) =>
          s.cls ? (
            <span key={i} className={s.cls}>
              {s.text}
            </span>
          ) : (
            <span key={i}>{s.text}</span>
          )
        )}
      </span>
      {post}
    </>
  );
}

function escapeHtml(s: string) {
  return s
    .replaceAll(/&/g, '&amp;')
    .replaceAll(/</g, '&lt;')
    .replaceAll(/>/g, '&gt;')
    .replaceAll(/"/g, '&quot;');
}

export default function RegexExample({
  title,
  before,
  pattern,
  replace,
  flags = 'g',
  note,
}: Props) {
  const re = new RegExp(pattern, flags);

  // Compute "after" by actually applying the replace
  let after: string;
  try {
    after = before.replace(re, replace);
  } catch {
    after = before; // fail-safe
  }

  // Build legend items for each group count we find
  const groupCount = (pattern.match(/(?<!\\)\(/g) || []).length;
  const legend = Array.from({ length: groupCount }, (_, i) => i + 1);
  const firstMatchNoG = new RegExp(pattern, flags.replace('g', ''));

  return (
    <div className={styles.card}>
      {title && <div className={styles.title}>{title}</div>}

      <div className={styles.row}>
        <div className={styles.label}>Search</div>
        <code className={styles.code}>{pattern}</code>
      </div>

      <div className={styles.row}>
        <div className={styles.label}>Replace</div>
        <code className={styles.code}>{replace}</code>
      </div>

      <div className={styles.legend} aria-hidden={groupCount === 0}>
        {legend.map((n) => (
          <span key={n} className={`${styles.badge} ${styles[`g${n}`]}`}>
            ${n}
          </span>
        ))}
        {groupCount > 0 && (
          <span className={styles.badge + ' ' + styles.match}>match</span>
        )}
      </div>

      <div className={styles.io}>
        <div className={styles.ioCol}>
          <div className={styles.ioLabel}>Before</div>
          <pre className={styles.pre}>
            <code>{renderHighlighted(before, firstMatchNoG)}</code>
          </pre>
        </div>
        <div className={styles.arrow} aria-hidden>
          →
        </div>
        <div className={styles.ioCol}>
          <div className={styles.ioLabel}>After</div>
          <pre className={styles.pre}>
            <code>{after}</code>
          </pre>
        </div>
      </div>

      {note && <div className={styles.note}>{note}</div>}
    </div>
  );
}
