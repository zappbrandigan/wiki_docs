import React from 'react';

function ClickToZoom({ src, alt }) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <div
        style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}
      >
        <img
          src={src}
          alt={alt}
          onClick={() => setOpen(true)}
          role="button"
          aria-pressed={open}
          style={{
            maxWidth: '80%',
            height: 'auto',
            borderRadius: 12,
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            cursor: 'zoom-in',
          }}
        />
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged image"
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.75)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: 16,
            cursor: 'zoom-out',
          }}
        >
          <img
            src={src}
            alt=""
            style={{
              maxWidth: '95vw',
              maxHeight: '95vh',
              borderRadius: 12,
              boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
            }}
          />
        </div>
      )}
    </>
  );
}

export default ClickToZoom;
