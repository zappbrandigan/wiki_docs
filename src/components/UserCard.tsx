import React from 'react';

interface Props {
  name: string;
  title: string;
  avatar: string;
}

export default function UserCard({ name, title, avatar }: Props) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '8px 12px',
        border: '1px solid #e5e7eb',
        borderRadius: 10,
        maxWidth: 300,
        background: 'var(--ifm-background-color)',
      }}
    >
      <img
        src={avatar}
        alt={`${name} avatar`}
        style={{
          width: 60,
          height: 60,
          borderRadius: '50%',
          objectFit: 'cover',
        }}
      />

      <div style={{ lineHeight: 1.25 }}>
        <div style={{ fontWeight: 600 }}>{name}</div>
        <div style={{ fontSize: '0.875rem', color: '#666' }}>{title}</div>
      </div>
    </div>
  );
}
