import AppShell from './components/layout/AppShell';
import HomeSection from './components/sections/HomeSection';
import AnatomySection from './components/sections/anatomy/AnatomySection';
import CodeInspectorSection from './components/sections/code/CodeInspectorSection';
import PlaceholderSection from './components/sections/PlaceholderSection';

/**
 * App — główny komponent aplikacji-prezentacji.
 * Renderuje AppShell (menubar + dock) i sekcje w kolejności nawigacji.
 */
export default function App() {
  return (
    <AppShell>
      <HomeSection />

      <AnatomySection />

      <CodeInspectorSection />

      <PlaceholderSection
        id="game"
        icon="pi pi-trophy"
        title="Tryb Gry"
        subtitle="Prezentacja w formie gry eksploracyjnej z systemem punktowym i Easter Eggs."
      />

      <PlaceholderSection
        id="effects"
        icon="pi pi-sparkles"
        title="Efekty Wizualne"
        subtitle="Magiczny przycisk, tryby chaosu i animacje przewijania."
      />
    </AppShell>
  );
}
