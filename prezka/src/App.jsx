import AppShell from './components/layout/AppShell';
import HomeSection from './components/sections/HomeSection';
import PlaceholderSection from './components/sections/PlaceholderSection';

/**
 * App — główny komponent aplikacji-prezentacji.
 * Renderuje AppShell (menubar + dock) i sekcje w kolejności nawigacji.
 */
export default function App() {
  return (
    <AppShell>
      <HomeSection />

      <PlaceholderSection
        id="anatomy"
        icon="pi pi-sitemap"
        title="Anatomia Komponentu"
        subtitle="Interaktywna oś czasu klocków Reacta: State, Props, Hooks, JSX."
      />

      <PlaceholderSection
        id="code"
        icon="pi pi-code"
        title="Inspektor Kodu"
        subtitle="Hakerski terminal z podglądem skilli, logiki i stylów w czasie rzeczywistym."
      />

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
