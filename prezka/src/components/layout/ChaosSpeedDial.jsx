import { useState, useEffect, useRef, useCallback } from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { Toast } from 'primereact/toast';
import { Tooltip } from 'primereact/tooltip';

/**
 * ChaosSpeedDial — globalny przycisk akcji z trybami chaosu.
 *
 * Tryb A — "Odwróć Grawitację": nakłada klasę .chaos-gravity na <body>,
 *           która sprawia że karty i obrazki lewitują + obracają się.
 *
 * Tryb B — "Glitch Mode": podmienia losowe litery w h1/h2 na glitch-znaki
 *           przy użyciu setInterval (efekt cyberpunk / uszkodzona transmisja).
 *
 * Tryb C — "Tryb Neon": nakłada klasę .chaos-neon na <body>,
 *           dodając intensywny neonowy box-shadow do elementów PrimeReact.
 */
export default function ChaosSpeedDial() {
  const toast = useRef(null);
  const glitchIntervalRef = useRef(null);
  const originalTextsRef = useRef(new Map());

  const [activeMode, setActiveMode] = useState(null); // 'gravity' | 'glitch' | 'neon' | null

  // ─── Cleanup glitch przy odmontowaniu ───
  useEffect(() => {
    return () => stopGlitch();
  }, []);

  // ─── Toggle helper ───
  const toggleMode = useCallback((mode) => {
    if (activeMode === mode) {
      deactivateAll();
      setActiveMode(null);
    } else {
      deactivateAll();
      activateMode(mode);
      setActiveMode(mode);
    }
  }, [activeMode]);

  const deactivateAll = () => {
    document.body.classList.remove('chaos-gravity', 'chaos-neon');
    stopGlitch();
  };

  const activateMode = (mode) => {
    if (mode === 'gravity') {
      document.body.classList.add('chaos-gravity');
      toast.current?.show({
        severity: 'warn',
        summary: '🔄 Grawitacja Odwrócona',
        detail: 'Interfejs poddał się prawom fizyki... albo i nie.',
        life: 3000,
      });
    } else if (mode === 'glitch') {
      startGlitch();
      toast.current?.show({
        severity: 'error',
        summary: '⚡ GLITCH MODE AKTYWNY',
        detail: 'ERR_SIGNAL_CORRUPTED — transmisja zakłócona.',
        life: 3000,
      });
    } else if (mode === 'neon') {
      document.body.classList.add('chaos-neon');
      toast.current?.show({
        severity: 'info',
        summary: '🌟 Tryb Neon',
        detail: 'Neo-Tokyo vibes. Neonowy cyberpunk aktywowany.',
        life: 3000,
      });
    }
  };

  // ─── Glitch logic ───
  const GLITCH_CHARS = '!@#$%^&*<>?/\\|█▓▒░Ξ¥₿∆Ω';

  const startGlitch = () => {
    // Zbierz wszystkie nagłówki
    const headings = Array.from(document.querySelectorAll('h1, h2, h3'));
    // Zapamiętaj oryginalne teksty (tylko węzły tekstowe)
    headings.forEach((el) => {
      if (!originalTextsRef.current.has(el)) {
        originalTextsRef.current.set(el, el.innerHTML);
      }
    });

    glitchIntervalRef.current = setInterval(() => {
      headings.forEach((el) => {
        const original = originalTextsRef.current.get(el) || el.innerHTML;
        const chars = original.split('');
        // Losowo zastąp 1-3 znaki
        const numGlitch = Math.floor(Math.random() * 3) + 1;
        for (let i = 0; i < numGlitch; i++) {
          const idx = Math.floor(Math.random() * chars.length);
          if (chars[idx] && chars[idx] !== '<' && chars[idx] !== '>' && chars[idx] !== ' ') {
            chars[idx] = GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
          }
        }
        el.innerHTML = chars.join('');
      });
    }, 120);
  };

  const stopGlitch = () => {
    if (glitchIntervalRef.current) {
      clearInterval(glitchIntervalRef.current);
      glitchIntervalRef.current = null;
    }
    // Przywróć oryginalne teksty
    originalTextsRef.current.forEach((original, el) => {
      if (document.contains(el)) {
        el.innerHTML = original;
      }
    });
    originalTextsRef.current.clear();
  };

  // ─── SpeedDial items ───
  const items = [
    {
      label: 'Odwróć Grawitację',
      icon: activeMode === 'gravity' ? 'pi pi-times' : 'pi pi-refresh',
      className: activeMode === 'gravity' ? 'chaos-btn-active' : '',
      command: () => toggleMode('gravity'),
    },
    {
      label: 'Glitch Mode',
      icon: activeMode === 'glitch' ? 'pi pi-times' : 'pi pi-bolt',
      className: activeMode === 'glitch' ? 'chaos-btn-active' : '',
      command: () => toggleMode('glitch'),
    },
    {
      label: 'Tryb Neon',
      icon: activeMode === 'neon' ? 'pi pi-times' : 'pi pi-star',
      className: activeMode === 'neon' ? 'chaos-btn-active' : '',
      command: () => toggleMode('neon'),
    },
  ];

  return (
    <>
      <Toast ref={toast} position="bottom-left" />
      <Tooltip target=".chaos-speeddial .p-speeddial-action" position="left" />

      <div className="chaos-speeddial">
        <SpeedDial
          model={items}
          direction="up"
          style={{ position: 'fixed', bottom: '6rem', right: '1.5rem', zIndex: 9999 }}
          buttonClassName={`chaos-main-btn ${activeMode ? 'chaos-main-btn--active' : ''}`}
          buttonIcon={activeMode ? 'pi pi-times' : 'pi pi-bolt'}
          showIcon="pi pi-bolt"
          hideIcon="pi pi-times"
          transitionDelay={60}
          tooltip="Tryby Chaosu"
          tooltipOptions={{ position: 'left' }}
          mask
        />
      </div>
    </>
  );
}
