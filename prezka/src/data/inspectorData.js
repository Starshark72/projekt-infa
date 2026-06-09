/**
 * inspectorData.js — zawartość do wyświetlenia w hakerskim terminalu.
 * Zawiera instrukcje skilli (prompty) oraz snippety kodu JS/CSS.
 */

export const SKILLS_DATA = [
  {
    id: 1,
    title: 'Skill 1: Fundamenty, Architektura i Globalny Layout',
    content: `## Cel\nInicjalizacja projektu React + Vite z biblioteką PrimeReact, konfiguracja ultra-nowoczesnego motywu wizualnego oraz stworzenie nieszablonowego szkieletu aplikacji (App Shell), który odchodzi od klasycznego podziału na nudne menu.\n\n## Instrukcje\n1. Konfiguracja Stylów globalnych: lara-dark-teal, glassmorphism.\n2. Główny Layout (AppShell): Tło strony satynowe #0f172a z gradientem.\n3. Nawigacja nowej generacji: Na dole Dock, na górze przezroczysty Menubar (blur).`,
  },
  {
    id: 2,
    title: 'Skill 2: Interaktywna Oś Czasu Komponentów',
    content: `## Cel\nStworzenie interaktywnej sekcji "Anatomia Komponentu" z PrimeReact do wizualnego i merytorycznego wyjaśnienia klocków Reacta.\n\n## Instrukcje\n1. Użyj Timeline naprzemiennego.\n2. Kliknięcie otwiera boczny panel (Sidebar).\n3. Wewnątrz panelu opisy i sekcja Live Preview używająca InputSwitch do zmiany zachowania.`,
  },
  {
    id: 3,
    title: 'Skill 3: Dynamiczny Inspektor Kodu, Skilli i CSS',
    content: `## Cel\nSpektakularne zaprezentowanie architektury przez pokazanie pełnego procesu: od promptu w Antigravity, przez logikę, po stylizację. Całość ma mieć formę terminala / IDE.\n\n## Instrukcje\n1. Struktura Zakładek (TabView).\n2. Terminal z Efektem Typewriter (zielony font monospace).\n3. Komponent Inplace do podglądu skilli.\n4. Wykres (Chart Doughnut) wizualizujący wkład w kod.`,
  },
  {
    id: 4,
    title: 'Skill 4: Prezentacja jako Gra – "Tryb Gry" (Wkrótce)',
    content: `Tryb gry, który złamie zasady standardowej prezentacji. System punktacji, ukryte Easter Eggs i nawigacja przez Carousel/Steps.`,
  },
];

export const LOGIC_CODE = `import { useState, useCallback } from 'react';
import NavigationDock, { SECTIONS } from './NavigationDock';

export default function AppShell({ children }) {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigate = useCallback((sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(\`section-\${sectionId}\`)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }, []);

  return (
    <>
      <GlassMenubar currentSection={activeSection} />
      <main className="app-content">{children}</main>
      <NavigationDock
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />
    </>
  );
}`;

export const CSS_CODE = `/* ============================================================
   GLOBAL STYLES — Ultra-nowoczesny ciemny motyw
   ============================================================ */
:root {
  --surface-ground: #0a0e1a;
  --surface-section: #0f172a;
  --accent-primary: #38bdf8;
  --accent-secondary: #818cf8;
  --font-mono: 'JetBrains Mono', monospace;
}

body {
  background: radial-gradient(
    ellipse 80% 50% at 50% -20%,
    rgba(56, 189, 248, 0.08) 0%,
    transparent 60%
  ), var(--surface-ground);
}

.glass-panel {
  background: rgba(15, 23, 42, 0.5);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(56, 189, 248, 0.1);
  border-radius: 16px;
}`;
