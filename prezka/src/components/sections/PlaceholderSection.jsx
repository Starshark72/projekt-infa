/**
 * PlaceholderSection — tymczasowa sekcja-placeholder.
 * Zostanie zastąpiona właściwym komponentem po wdrożeniu danego skilla.
 *
 * @param {Object} props
 * @param {string} props.id - ID sekcji (musi pasować do SECTIONS w NavigationDock)
 * @param {string} props.icon - klasa ikony PrimeIcons
 * @param {string} props.title - tytuł sekcji
 * @param {string} props.subtitle - opis sekcji
 */
export default function PlaceholderSection({ id, icon, title, subtitle }) {
  return (
    <section id={`section-${id}`} className="app-section">
      <div
        className="glass-panel flex flex-column align-items-center justify-content-center gap-3"
        style={{
          padding: '3rem',
          minWidth: 320,
          opacity: 0.6,
        }}
      >
        <i
          className={icon}
          style={{
            fontSize: '2.5rem',
            color: 'var(--accent-primary)',
            opacity: 0.4,
          }}
        />
        <h2 style={{ color: 'var(--text-secondary)', fontSize: '1.3rem', fontWeight: 600 }}>
          {title}
        </h2>
        <p
          className="text-sm text-center"
          style={{ color: 'var(--text-muted)', maxWidth: 300 }}
        >
          {subtitle}
        </p>
        <span
          className="text-xs font-medium px-3 py-1"
          style={{
            color: 'var(--accent-secondary)',
            background: 'rgba(129, 140, 248, 0.08)',
            borderRadius: 100,
            border: '1px solid rgba(129, 140, 248, 0.15)',
          }}
        >
          Wkrótce...
        </span>
      </div>
    </section>
  );
}
