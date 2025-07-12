import React, { PropsWithChildren } from 'react';
import UserCard from './UserCard';

type Priority = 'P0' | 'P1' | 'P2' | 'P3';
type Status =
  | 'Open'
  | 'In Progress'
  | 'Patched'
  | 'Blocked'
  | 'Resolved'
  | "Won't Fix"
  | 'Closed';

interface Props {
  id: string; // “#001”
  tool: string; // “IMDb Search”
  summary: string;
  date: string; // “2025-07-12”
  appVersion: string;
  platform: string; // “Chrome”
  area: string; // “IMDb Search page”
  toolVersion?: string;
  priority: Priority;
  status: Status;
  reporterName: string;
  reporterTitle: string;
  reporterAvatar: string;
  fixRef?: string; // commit / PR link
}

/** A lightweight, collapsible bug report card for MDX pages */
export default function BugCard({
  children,
  ...meta
}: PropsWithChildren<Props>) {
  const badgeColor = {
    P0: '#ef4444',
    P1: '#f97316',
    P2: '#eab308',
    P3: '#38bdf8',
  }[meta.priority];

  const statusColor =
    meta.status === 'Closed' || meta.status === 'Resolved'
      ? '#16a34a'
      : '#64748b';

  return (
    <details
      className="bug-summary"
      open={false} // Closed issues start collapsed
      style={{
        border: `1px solid ${badgeColor}`,
        borderRadius: 12,
        padding: '12px 16px',
        marginBottom: 20,
        background: 'var(--ifm-background-color)',
      }}
    >
      <summary
        style={{
          cursor: 'pointer',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 8,
          alignItems: 'center',
          fontWeight: 600,
        }}
      >
        <span className="bug-caret" aria-hidden="true" />
        <span>{meta.id}</span>
        <span>—</span>
        <span>{meta.tool}</span>
        <span style={{ color: badgeColor }}>• {meta.priority}</span>
        <span style={{ color: statusColor }}>• {meta.status}</span>
        <span style={{ flex: '1 1 auto' }}>{meta.summary}</span>
      </summary>

      {/* Main body */}
      <div style={{ marginTop: 12, lineHeight: 1.55 }}>
        {/* Meta grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'max-content 1fr',
            rowGap: 6,
            columnGap: 12,
            fontSize: '0.9rem',
          }}
        >
          <strong>Reporter:</strong>
          <UserCard
            name={meta.reporterName}
            title={meta.reporterTitle}
            avatar={meta.reporterAvatar}
          />
          <strong>Date:</strong> <span>{meta.date}</span>
          <strong>App Version:</strong> <span>{meta.appVersion}</span>
          <strong>Platform:</strong> <span>{meta.platform}</span>
          <strong>Area:</strong>{' '}
          <span>
            {meta.area}
            {meta.toolVersion && `  (v${meta.toolVersion})`}
          </span>
          <strong>Fix Ref:</strong>{' '}
          <span>{meta.fixRef ? meta.fixRef : '—'}</span>
        </div>

        {children && (
          <div style={{ marginTop: 14 }}>
            <hr style={{ margin: '12px 0' }} />
            {children}
          </div>
        )}
      </div>
    </details>
  );
}
