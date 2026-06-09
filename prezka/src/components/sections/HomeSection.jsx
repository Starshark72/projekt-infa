/**
 * HomeSection — główna sekcja powitalna prezentacji.
 * Zawiera animowany tytuł, opis projektu i wizualne akcenty.
 */
export default function HomeSection() {
  return (
    <section id="section-home" className="app-section">
      <div className="section-badge">
        <i className="pi pi-sparkles" />
        <span>Prezentacja Interaktywna</span>
      </div>

      <h1 className="section-title">
        Anatomia Aplikacji Webowej
      </h1>

      <p className="section-subtitle">
        Odkryj, jak działa nowoczesna aplikacja React od środka.
        Eksploruj architekturę, kod i efekty wizualne — w pełni interaktywnie.
      </p>

      <div
        className="flex align-items-center gap-3 mt-5"
        style={{ animation: 'fade-in-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards', opacity: 0 }}
      >
        <div className="glass-panel flex align-items-center gap-2 px-4 py-2">
          <i className="pi pi-bolt" style={{ color: 'var(--accent-primary)' }} />
          <span className="text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>
            React 19
          </span>
        </div>
        <div className="glass-panel flex align-items-center gap-2 px-4 py-2">
          <i className="pi pi-palette" style={{ color: 'var(--accent-secondary)' }} />
          <span className="text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>
            PrimeReact
          </span>
        </div>
        <div className="glass-panel flex align-items-center gap-2 px-4 py-2">
          <i className="pi pi-play" style={{ color: '#c084fc' }} />
          <span className="text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>
            Vite
          </span>
        </div>
      </div>

      {/* Dekoracyjny element — animowany pierścień */}
      <div
        className="mt-6 animate-float"
        style={{
          width: 120,
          height: 120,
          borderRadius: '50%',
          border: '2px solid rgba(56, 189, 248, 0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.1) 0%, rgba(129, 140, 248, 0.1) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <i
            className="pi pi-arrow-down"
            style={{
              fontSize: '1.5rem',
              color: 'var(--accent-primary)',
              animation: 'float 2s ease-in-out infinite',
            }}
          />
        </div>

        {/* Orbitalny pierścień */}
        <div
          style={{
            position: 'absolute',
            inset: -8,
            borderRadius: '50%',
            border: '1px solid rgba(129, 140, 248, 0.08)',
            animation: 'pulse-glow 3s ease-in-out infinite',
          }}
        />
      </div>
    </section>
  );
}
