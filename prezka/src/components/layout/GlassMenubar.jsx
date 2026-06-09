import { Menubar } from 'primereact/menubar';

/**
 * GlassMenubar — przezroczysty menubar z efektem blur na górze ekranu.
 * Wyświetla logo prezentacji oraz dynamiczny tytuł aktualnej sekcji.
 *
 * @param {Object} props
 * @param {string} props.currentSection - nazwa aktualnie widocznej sekcji
 */
export default function GlassMenubar({ currentSection = 'Home' }) {
  const start = (
    <div className="flex align-items-center gap-3">
      <i className="pi pi-bolt" style={{ fontSize: '1.2rem', color: 'var(--accent-primary)' }} />
      <span className="menubar-logo">Antigravity Prezentacja</span>
      <div className="menubar-divider" />
      <span className="menubar-section-title">{currentSection}</span>
    </div>
  );

  const end = (
    <div className="flex align-items-center gap-2">
      <span
        className="text-xs font-medium"
        style={{ color: 'var(--text-muted)', letterSpacing: '0.05em' }}
      >
        React + Vite + PrimeReact
      </span>
      <i
        className="pi pi-github"
        style={{
          fontSize: '1.1rem',
          color: 'var(--text-muted)',
          cursor: 'pointer',
          transition: 'var(--transition-smooth)',
        }}
      />
    </div>
  );

  return (
    <Menubar
      className="glass-menubar"
      start={start}
      end={end}
    />
  );
}
