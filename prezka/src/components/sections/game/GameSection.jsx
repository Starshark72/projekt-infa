import { useState, useEffect, useCallback } from 'react';
import { Steps } from 'primereact/steps';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Badge } from 'primereact/badge';
import { Tag } from 'primereact/tag';
import EasterEgg from './EasterEgg';
import { SLIDES, MAX_SCORE } from '../../../data/gameData';

/**
 * GameSection — interaktywna prezentacja w trybie gry.
 * Nawigacja Steps + slajdy, system punktacji, easter eggi, modal finałowy.
 */
export default function GameSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [foundSecrets, setFoundSecrets] = useState([]);
  const [showFinalDialog, setShowFinalDialog] = useState(false);
  const [scorePopup, setScorePopup] = useState(null);

  const currentSlide = SLIDES[activeIndex];
  const isFirst = activeIndex === 0;
  const isLast = activeIndex === SLIDES.length - 1;

  // Obsługa klawiatury: strzałki ← →
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' && !isLast) {
        setActiveIndex((prev) => prev + 1);
      } else if (e.key === 'ArrowLeft' && !isFirst) {
        setActiveIndex((prev) => prev - 1);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isFirst, isLast]);

  // Sprawdź czy modal finałowy powinien się otworzyć
  useEffect(() => {
    if (isLast && score === MAX_SCORE && MAX_SCORE > 0 && !showFinalDialog) {
      const timer = setTimeout(() => setShowFinalDialog(true), 800);
      return () => clearTimeout(timer);
    }
  }, [isLast, score, showFinalDialog]);

  const handleEasterEggFound = useCallback((id, points) => {
    if (foundSecrets.includes(id)) return;
    setFoundSecrets((prev) => [...prev, id]);
    setScore((prev) => prev + points);

    // Popup z punktami
    setScorePopup(`+${points}`);
    setTimeout(() => setScorePopup(null), 1500);
  }, [foundSecrets]);

  const handleRestart = () => {
    setActiveIndex(0);
    setScore(0);
    setFoundSecrets([]);
    setShowFinalDialog(false);
  };

  // Konfiguracja Steps
  const stepsItems = SLIDES.map((s) => ({
    label: s.stepLabel,
    icon: s.stepIcon,
  }));

  return (
    <section id="section-game" className="app-section">
      <div className="section-badge">
        <i className="pi pi-trophy" />
        <span>Tryb Gry</span>
      </div>

      <h2 className="section-title">Prezentacja Interaktywna</h2>
      <p className="section-subtitle mb-4">
        Nawiguj między slajdami i szukaj ukrytych sekretów. Użyj strzałek ← → lub przycisków.
      </p>

      {/* Wrapper gry */}
      <div className="game-wrapper w-full mx-auto" style={{ maxWidth: '900px', position: 'relative' }}>

        {/* Trophy Badge — wynik w rogu */}
        <div className="game-score-badge">
          <i className="pi pi-trophy p-overlay-badge" style={{ fontSize: '1.5rem', color: '#fbbf24' }}>
            <Badge value={score} severity="warning" />
          </i>
          {scorePopup && (
            <span className="score-popup">{scorePopup}</span>
          )}
        </div>

        {/* Steps — wskaźnik postępu */}
        <div className="game-steps-wrapper mb-4">
          <Steps
            model={stepsItems}
            activeIndex={activeIndex}
            onSelect={(e) => setActiveIndex(e.index)}
            readOnly={false}
            className="game-steps"
          />
        </div>

        {/* Slajd */}
        <div className="game-slide glass-panel p-5" style={{ position: 'relative', minHeight: '380px' }}>
          {/* Easter Egg */}
          {currentSlide.easterEgg && (
            <EasterEgg
              key={currentSlide.easterEgg.id}
              id={currentSlide.easterEgg.id}
              icon={currentSlide.easterEgg.icon}
              points={currentSlide.easterEgg.points}
              position={currentSlide.easterEgg.position}
              found={foundSecrets.includes(currentSlide.easterEgg.id)}
              onFound={handleEasterEggFound}
            />
          )}

          {/* Treść slajdu */}
          <div className="slide-content animate-fade-in-up" key={currentSlide.id}>
            <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
              {currentSlide.title}
            </h3>
            <Tag
              value={currentSlide.subtitle}
              className="mb-4"
              style={{
                background: 'rgba(56, 189, 248, 0.1)',
                color: 'var(--accent-primary)',
                border: 'none',
                fontSize: '0.8rem',
              }}
            />
            <p className="line-height-3 mt-3" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              {currentSlide.content}
            </p>

            {currentSlide.codeSnippet && (
              <div className="anatomy-code-block mt-4">
                <pre>{currentSlide.codeSnippet}</pre>
              </div>
            )}
          </div>

          {/* Nawigacja slajdów */}
          <div className="flex justify-content-between align-items-center mt-5 pt-3" style={{ borderTop: '1px solid rgba(56, 189, 248, 0.08)' }}>
            <Button
              label="Wstecz"
              icon="pi pi-arrow-left"
              className="p-button-text p-button-sm"
              disabled={isFirst}
              onClick={() => setActiveIndex((prev) => prev - 1)}
            />
            <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
              {activeIndex + 1} / {SLIDES.length}
            </span>
            <Button
              label={isLast ? 'Koniec' : 'Dalej'}
              icon={isLast ? 'pi pi-check' : 'pi pi-arrow-right'}
              iconPos="right"
              className="p-button-sm"
              severity={isLast ? 'success' : undefined}
              onClick={() => {
                if (isLast) {
                  setShowFinalDialog(true);
                } else {
                  setActiveIndex((prev) => prev + 1);
                }
              }}
            />
          </div>
        </div>

        {/* Info o easter eggach */}
        <div className="flex justify-content-center align-items-center gap-3 mt-3">
          <Tag
            icon="pi pi-search"
            value={`Sekrety: ${foundSecrets.length} / ${SLIDES.filter((s) => s.easterEgg).length}`}
            style={{
              background: 'rgba(251, 191, 36, 0.1)',
              color: '#fbbf24',
              border: 'none',
              fontSize: '0.75rem',
            }}
          />
          <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
            Tip: Szukaj pulsujących elementów na slajdach
          </span>
        </div>
      </div>

      {/* ─── DIALOG FINAŁOWY ─── */}
      <Dialog
        visible={showFinalDialog}
        onHide={() => setShowFinalDialog(false)}
        header={null}
        closable
        modal
        className="game-final-dialog"
        style={{ width: '90vw', maxWidth: '500px' }}
      >
        <div className="text-center p-4">
          <div className="game-trophy-icon mb-4">🏆</div>
          <h2 className="text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
            Gratulacje!
          </h2>
          <p className="mb-4" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            {score === MAX_SCORE
              ? 'Znalazłeś wszystkie sekrety! Jesteś prawdziwym ekspertem.'
              : `Dotarłeś do końca prezentacji! Twój wynik: ${score} / ${MAX_SCORE} pkt.`}
          </p>

          <div className="flex justify-content-center gap-3 mb-4">
            <Tag
              icon="pi pi-trophy"
              value={`${score} pkt`}
              style={{ background: 'rgba(251, 191, 36, 0.15)', color: '#fbbf24', border: 'none', fontSize: '1rem', padding: '0.5rem 1rem' }}
            />
            <Tag
              icon="pi pi-search"
              value={`${foundSecrets.length} sekretów`}
              style={{ background: 'rgba(192, 132, 252, 0.15)', color: '#c084fc', border: 'none', fontSize: '1rem', padding: '0.5rem 1rem' }}
            />
          </div>

          <Button
            label="Zagraj ponownie"
            icon="pi pi-replay"
            className="p-button-lg"
            severity="success"
            onClick={handleRestart}
            style={{ width: '100%' }}
          />
        </div>
      </Dialog>
    </section>
  );
}
