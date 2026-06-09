import { useState, useEffect } from 'react';

/**
 * TypewriterText — efekt maszyny do pisania.
 * Tekst renderuje się znak po znaku.
 *
 * @param {Object} props
 * @param {string} props.text - pełen tekst do napisania
 * @param {number} props.speed - szybkość pisania w ms na znak (domyślnie 25)
 * @param {number} props.delay - opóźnienie startu w ms (domyślnie 0)
 * @param {boolean} props.active - czy efekt ma działać (przydatne w zakładkach)
 */
export default function TypewriterText({ text = '', speed = 20, delay = 0, active = true }) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  // Reset, gdy tekst lub aktywność się zmienia (np. zmiana zakładki)
  useEffect(() => {
    if (active) {
      setDisplayedText('');
      setCurrentIndex(0);
      setHasStarted(false);
    }
  }, [text, active]);

  useEffect(() => {
    if (!active) return;

    if (!hasStarted) {
      const startTimer = setTimeout(() => setHasStarted(true), delay);
      return () => clearTimeout(startTimer);
    }

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, active, hasStarted, text, speed, delay]);

  return (
    <span className="typewriter-text">
      {displayedText}
      {active && currentIndex < text.length && <span className="cursor-blink">_</span>}
    </span>
  );
}
