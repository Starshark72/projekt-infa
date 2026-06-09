import { useState } from 'react';
import { Button } from 'primereact/button';

/**
 * EasterEgg — ukryty przycisk-niespodzianka.
 * Po kliknięciu odpala animację, blokuje się i przyznaje punkty.
 *
 * @param {Object} props
 * @param {string} props.id - unikalny identyfikator sekretu
 * @param {string} props.icon - klasa ikony PrimeIcons
 * @param {number} props.points - ilość punktów do przyznania
 * @param {Object} props.position - { top, bottom, left, right } w procentach
 * @param {boolean} props.found - czy został już znaleziony
 * @param {Function} props.onFound - callback wywoływany po kliknięciu: onFound(id, points)
 */
export default function EasterEgg({ id, icon, points, position, found, onFound }) {
  const [animating, setAnimating] = useState(false);

  const handleClick = () => {
    if (found || animating) return;
    setAnimating(true);

    // Odpal callback po krótkiej animacji
    setTimeout(() => {
      onFound(id, points);
    }, 600);
  };

  if (found) {
    // Po znalezieniu: mała ikona potwierdzenia, nieklikalna
    return (
      <div
        className="easter-egg easter-egg--found"
        style={{ ...position }}
      >
        <i className="pi pi-check" />
      </div>
    );
  }

  return (
    <Button
      className={`easter-egg p-button-text ${animating ? 'easter-egg--boom' : ''}`}
      style={{ ...position }}
      icon={icon}
      onClick={handleClick}
      aria-label="Easter Egg"
      tooltip="Kliknij mnie!"
      tooltipOptions={{ position: 'top', showDelay: 800 }}
      unstyled={false}
    />
  );
}
