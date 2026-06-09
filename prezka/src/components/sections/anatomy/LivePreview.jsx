import { useState } from 'react';
import { InputSwitch } from 'primereact/inputswitch';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';

/**
 * LivePreview — interaktywne demo konceptów Reacta.
 * Każdy typ demo używa InputSwitch do natychmiastowej zmiany
 * wyglądu/zachowania, demonstrując koncept "na żywo".
 *
 * @param {Object} props
 * @param {string} props.type - typ demo: 'jsx'|'components'|'props'|'state'|'hooks'
 */
export default function LivePreview({ type }) {
  return (
    <div className="live-preview-container">
      <div className="live-preview-header">
        <i className="pi pi-play" />
        <span>Live Preview</span>
      </div>
      <div className="live-preview-content">
        {type === 'jsx' && <JsxDemo />}
        {type === 'components' && <ComponentsDemo />}
        {type === 'props' && <PropsDemo />}
        {type === 'state' && <StateDemo />}
        {type === 'hooks' && <HooksDemo />}
      </div>
    </div>
  );
}

/* ─────────────────── JSX Demo ─────────────────── */
function JsxDemo() {
  const [useJsx, setUseJsx] = useState(true);

  return (
    <div className="flex flex-column gap-3">
      <div className="flex align-items-center justify-content-between">
        <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          Pokaż JSX vs createElement
        </span>
        <InputSwitch checked={useJsx} onChange={(e) => setUseJsx(e.value)} />
      </div>
      <div
        className="glass-panel p-3"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.8rem',
          lineHeight: 1.6,
          transition: 'var(--transition-smooth)',
          borderColor: useJsx ? 'rgba(56, 189, 248, 0.2)' : 'rgba(251, 146, 60, 0.2)',
        }}
      >
        {useJsx ? (
          <pre style={{ margin: 0, color: 'var(--accent-primary)' }}>
{`<Button
  label="Kliknij"
  icon="pi pi-check"
/>`}
          </pre>
        ) : (
          <pre style={{ margin: 0, color: '#fb923c' }}>
{`React.createElement(
  Button,
  {
    label: "Kliknij",
    icon: "pi pi-check"
  }
)`}
          </pre>
        )}
      </div>
      <Tag
        value={useJsx ? '✨ JSX — czytelny i elegancki' : '⚙️ createElement — pod maską'}
        style={{
          background: useJsx ? 'rgba(56, 189, 248, 0.1)' : 'rgba(251, 146, 60, 0.1)',
          color: useJsx ? 'var(--accent-primary)' : '#fb923c',
          border: 'none',
          transition: 'var(--transition-smooth)',
        }}
      />
    </div>
  );
}

/* ─────────────────── Components Demo ─────────────────── */
function ComponentsDemo() {
  const [isCompact, setIsCompact] = useState(false);

  return (
    <div className="flex flex-column gap-3">
      <div className="flex align-items-center justify-content-between">
        <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          Przełącz wariant komponentu
        </span>
        <InputSwitch checked={isCompact} onChange={(e) => setIsCompact(e.value)} />
      </div>

      {/* Demonstracja: ten sam komponent, różny układ */}
      <div
        className="glass-panel p-3"
        style={{
          display: 'flex',
          flexDirection: isCompact ? 'row' : 'column',
          alignItems: isCompact ? 'center' : 'flex-start',
          gap: isCompact ? '0.75rem' : '0.5rem',
          transition: 'var(--transition-smooth)',
        }}
      >
        <div
          style={{
            width: isCompact ? 32 : 48,
            height: isCompact ? 32 : 48,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #818cf8, #c084fc)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'var(--transition-smooth)',
            flexShrink: 0,
          }}
        >
          <i className="pi pi-user" style={{ color: '#fff', fontSize: isCompact ? '0.8rem' : '1rem' }} />
        </div>
        <div>
          <div className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
            Jan Kowalski
          </div>
          {!isCompact && (
            <div className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
              React Developer · Warszawa
            </div>
          )}
        </div>
        {isCompact && (
          <Tag value="Online" severity="success" style={{ marginLeft: 'auto', fontSize: '0.65rem' }} />
        )}
      </div>
      <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
        {isCompact ? '→ Tryb kompaktowy (wiersz)' : '→ Tryb pełny (kolumna)'}
      </span>
    </div>
  );
}

/* ─────────────────── Props Demo ─────────────────── */
function PropsDemo() {
  const [isPrimary, setIsPrimary] = useState(true);

  return (
    <div className="flex flex-column gap-3">
      <div className="flex align-items-center justify-content-between">
        <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          Zmień propsy przycisku
        </span>
        <InputSwitch checked={isPrimary} onChange={(e) => setIsPrimary(e.value)} />
      </div>

      {/* Przycisk, którego propsy zmieniamy switchem */}
      <div className="flex flex-column align-items-center gap-2">
        <Button
          label={isPrimary ? 'Akcja główna' : 'Akcja drugorzędna'}
          icon={isPrimary ? 'pi pi-check' : 'pi pi-times'}
          severity={isPrimary ? undefined : 'secondary'}
          outlined={!isPrimary}
          style={{ transition: 'var(--transition-smooth)' }}
        />
      </div>

      <div
        className="glass-panel p-2"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          color: 'var(--text-muted)',
        }}
      >
        <pre style={{ margin: 0 }}>
{`<Button
  label="${isPrimary ? 'Akcja główna' : 'Akcja drugorzędna'}"
  icon="${isPrimary ? 'pi pi-check' : 'pi pi-times'}"${!isPrimary ? '\n  severity="secondary"\n  outlined' : ''}
/>`}
        </pre>
      </div>
    </div>
  );
}

/* ─────────────────── State Demo ─────────────────── */
function StateDemo() {
  const [darkMode, setDarkMode] = useState(true);
  const [counter, setCounter] = useState(0);

  return (
    <div className="flex flex-column gap-3">
      <div className="flex align-items-center justify-content-between">
        <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          Przełącz motyw panelu
        </span>
        <InputSwitch checked={darkMode} onChange={(e) => setDarkMode(e.value)} />
      </div>

      <div
        className="p-3 border-round-lg"
        style={{
          background: darkMode ? 'rgba(15, 23, 42, 0.8)' : 'rgba(241, 245, 249, 0.95)',
          color: darkMode ? 'var(--text-primary)' : '#0f172a',
          border: `1px solid ${darkMode ? 'rgba(56, 189, 248, 0.15)' : 'rgba(15, 23, 42, 0.15)'}`,
          transition: 'var(--transition-smooth)',
        }}
      >
        <div className="flex align-items-center justify-content-between mb-2">
          <span className="font-semibold text-sm">
            {darkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
          </span>
          <Tag
            value={`renders: ${counter}`}
            style={{
              background: darkMode ? 'rgba(56, 189, 248, 0.1)' : 'rgba(15, 23, 42, 0.08)',
              color: darkMode ? 'var(--accent-primary)' : '#0f172a',
              border: 'none',
              fontSize: '0.65rem',
            }}
          />
        </div>
        <Button
          label={`Kliknięto ${counter}×`}
          icon="pi pi-plus"
          size="small"
          severity={darkMode ? 'info' : 'warning'}
          outlined
          onClick={() => setCounter((c) => c + 1)}
          style={{ width: '100%', transition: 'var(--transition-smooth)' }}
        />
      </div>
      <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
        Każde kliknięcie = setState → re-render 🔄
      </span>
    </div>
  );
}

/* ─────────────────── Hooks Demo ─────────────────── */
function HooksDemo() {
  const [autoUpdate, setAutoUpdate] = useState(false);
  const [tick, setTick] = useState(0);

  // Symulacja useEffect — auto-increment co sekundę gdy switch włączony
  useState(() => {
    const interval = setInterval(() => {
      setAutoUpdate((prev) => {
        if (prev) {
          setTick((t) => t + 1);
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="flex flex-column gap-3">
      <div className="flex align-items-center justify-content-between">
        <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          Aktywuj useEffect (auto-timer)
        </span>
        <InputSwitch checked={autoUpdate} onChange={(e) => setAutoUpdate(e.value)} />
      </div>

      <div
        className="glass-panel p-3 flex align-items-center justify-content-between"
        style={{
          borderColor: autoUpdate ? 'rgba(244, 114, 182, 0.3)' : 'rgba(56, 189, 248, 0.1)',
          transition: 'var(--transition-smooth)',
        }}
      >
        <div className="flex align-items-center gap-2">
          <i
            className={autoUpdate ? 'pi pi-spin pi-cog' : 'pi pi-cog'}
            style={{ color: autoUpdate ? '#f472b6' : 'var(--text-muted)', transition: 'var(--transition-smooth)' }}
          />
          <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
            Timer
          </span>
        </div>
        <span
          className="font-bold"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '1.5rem',
            color: autoUpdate ? '#f472b6' : 'var(--text-muted)',
            transition: 'var(--transition-smooth)',
          }}
        >
          {tick}s
        </span>
      </div>

      <div className="flex gap-2">
        <Tag
          value="useState ✓"
          style={{ background: 'rgba(56, 189, 248, 0.1)', color: 'var(--accent-primary)', border: 'none', fontSize: '0.65rem' }}
        />
        <Tag
          value={autoUpdate ? 'useEffect ● Active' : 'useEffect ○ Idle'}
          style={{
            background: autoUpdate ? 'rgba(244, 114, 182, 0.1)' : 'rgba(100, 116, 139, 0.1)',
            color: autoUpdate ? '#f472b6' : 'var(--text-muted)',
            border: 'none',
            fontSize: '0.65rem',
            transition: 'var(--transition-smooth)',
          }}
        />
      </div>
    </div>
  );
}
