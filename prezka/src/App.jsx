import AppShell from './components/layout/AppShell';
import ChaosSpeedDial from './components/layout/ChaosSpeedDial';
import HomeSection from './components/sections/HomeSection';
import AnatomySection from './components/sections/anatomy/AnatomySection';
import CodeInspectorSection from './components/sections/code/CodeInspectorSection';
import GameSection from './components/sections/game/GameSection';
import EffectsSection from './components/sections/effects/EffectsSection';

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

      <GameSection />

      <EffectsSection />

      {/* Globalny SpeedDial — Tryby Chaosu */}
      <ChaosSpeedDial />
    </AppShell>
  );
}
