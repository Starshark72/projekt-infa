import { useRef, useEffect } from 'react';
import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';

/**
 * useScrollReveal — prosty hook animujący element po wejściu w viewport.
 */
function useScrollReveal(delay = 0) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('scroll-reveal--visible'), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return ref;
}

/**
 * EffectsSection — sekcja demonstrująca efekty wizualne Trybu Chaosu.
 * Wyjaśnia użytkownikowi co robi SpeedDial i pokazuje "techniczne karty".
 */
export default function EffectsSection() {
  const refs = [useScrollReveal(0), useScrollReveal(120), useScrollReveal(240)];
  const tipRef = useScrollReveal(0);
  const modes = [
    {
      icon: '🔄',
      name: 'Odwróć Grawitację',
      tag: 'Tryb A',
      tagColor: '#fbbf24',
      tagBg: 'rgba(251,191,36,0.1)',
      description:
        'Nakłada klasę CSS na całą aplikację, która sprawia że karty zaczynają lewitować (floating animation) i obracają się o 180°. Czysta magia DOM!',
      tech: ['CSS Transforms', 'CSS Animations', 'classList API'],
    },
    {
      icon: '⚡',
      name: 'Glitch Mode',
      tag: 'Tryb B',
      tagColor: '#f87171',
      tagBg: 'rgba(248,113,113,0.1)',
      description:
        'Co 120ms podmienia losowe litery w nagłówkach h1/h2 na glitch-znaki (█▓Ξ∆Ω). Efekt cyberpunk / uszkodzonej transmisji. Używa setInterval i innerHTML.',
      tech: ['setInterval', 'innerHTML', 'DOM querySelectorAll'],
    },
    {
      icon: '🌟',
      name: 'Tryb Neon',
      tag: 'Tryb C',
      tagColor: '#a78bfa',
      tagBg: 'rgba(167,139,250,0.1)',
      description:
        'Dodaje intensywny neonowy box-shadow do wszystkich komponentów PrimeReact. Jeden selector CSS, globalny efekt Neo-Tokyo na całej stronie.',
      tech: ['CSS Variables', 'box-shadow', 'Global class toggle'],
    },
  ];

  return (
    <section id="section-effects" className="app-section">
      <div className="section-badge">
        <i className="pi pi-sparkles" />
        <span>Efekty Wizualne</span>
      </div>

      <h2 className="section-title">Tryby Chaosu</h2>
      <p className="section-subtitle mb-6">
        Kliknij przycisk <strong style={{ color: 'var(--accent-primary)' }}>⚡</strong> w prawym
        dolnym rogu, aby odblokować tryby chaosu i zobaczyć możliwości dynamicznych modyfikacji DOM.
      </p>

      {/* Karty trybów */}
      <div className="flex flex-column md:flex-row gap-4 w-full mx-auto" style={{ maxWidth: '900px' }}>
        {modes.map((mode, i) => (
          <div
            key={mode.name}
            ref={refs[i]}
            className="flex-1 scroll-reveal"
          >
            <Card
              className="effects-mode-card glass-panel h-full"
              style={{ '--delay': `${i * 120}ms` }}
            >
              <div className="flex flex-column gap-3 h-full">
                {/* Icon + Tag */}
                <div className="flex justify-content-between align-items-center">
                  <span style={{ fontSize: '2.5rem', lineHeight: 1 }}>{mode.icon}</span>
                  <Tag
                    value={mode.tag}
                    style={{
                      background: mode.tagBg,
                      color: mode.tagColor,
                      border: 'none',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      letterSpacing: '0.05em',
                    }}
                  />
                </div>

                {/* Nazwa */}
                <h3
                  className="text-lg font-bold mt-1"
                  style={{ color: 'var(--text-primary)', margin: 0 }}
                >
                  {mode.name}
                </h3>

                {/* Opis */}
                <p
                  className="line-height-3 flex-1"
                  style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}
                >
                  {mode.description}
                </p>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-2 mt-auto pt-3" style={{ borderTop: '1px solid rgba(56,189,248,0.08)' }}>
                  {mode.tech.map((t) => (
                    <span key={t} className="tech-pill">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>

      {/* Tip box */}
      <div
        ref={tipRef}
        className="w-full mx-auto mt-5 scroll-reveal"
        style={{ maxWidth: '900px' }}
      >
        <div className="effects-tip-box">
          <i className="pi pi-info-circle mr-2" style={{ color: 'var(--accent-primary)' }} />
          <span>
            Tryby chaosu działają <strong>globalnie</strong> — efekty widoczne są na całej aplikacji jednocześnie.
            Kliknij tę samą opcję ponownie, aby wyłączyć.
          </span>
        </div>
      </div>
    </section>
  );
}
