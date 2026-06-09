import { useState, useCallback } from 'react';
import GlassMenubar from './GlassMenubar';
import NavigationDock, { SECTIONS } from './NavigationDock';

/**
 * AppShell — główny layout owijający całą aplikację.
 * Zapewnia:
 * - Szklany menubar na górze z dynamicznym tytułem sekcji
 * - Nawigacyjny Dock na dole
 * - Kontener na treść sekcji (children)
 * - Zarządzanie aktywną sekcją
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - zawartość sekcji
 */
export default function AppShell({ children }) {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigate = useCallback((sectionId) => {
    setActiveSection(sectionId);

    // Płynne przewinięcie do sekcji
    const el = document.getElementById(`section-${sectionId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  // Znajdź label aktualnej sekcji
  const currentLabel = SECTIONS.find((s) => s.id === activeSection)?.label || 'Home';

  return (
    <>
      {/* Górny menubar z efektem glass */}
      <GlassMenubar currentSection={currentLabel} />

      {/* Główna zawartość */}
      <main className="app-content">
        {children}
      </main>

      {/* Dolna nawigacja Dock */}
      <NavigationDock
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />
    </>
  );
}
