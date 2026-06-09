/**
 * gameData.js — dane slajdów prezentacji w trybie gry.
 * Każdy slajd ma treść edukacyjną + konfigurację easter egga.
 */

export const SLIDES = [
  {
    id: 'intro',
    stepLabel: 'Start',
    stepIcon: 'pi pi-flag',
    title: '🚀 Witaj w Trybie Gry!',
    subtitle: 'Przeglądaj slajdy i szukaj ukrytych sekretów',
    content:
      'Ta prezentacja to nie nudny PowerPoint. Każdy slajd kryje interaktywne niespodzianki. Twoim zadaniem jest znaleźć ukryte przyciski (Easter Eggs) rozsiane po slajdach. Za każdy znaleziony sekret dostajesz **+100 punktów**. Powodzenia!',
    codeSnippet: null,
    easterEgg: {
      id: 'egg-intro',
      icon: 'pi pi-star-fill',
      hint: 'Czy widzisz gwiazdkę? 👀',
      points: 100,
      // Pozycja relative do slajdu (procenty)
      position: { top: '15%', right: '8%' },
    },
  },
  {
    id: 'react-basics',
    stepLabel: 'React',
    stepIcon: 'pi pi-code',
    title: '⚛️ React — Biblioteka UI',
    subtitle: 'Deklaratywny, komponentowy, reaktywny',
    content:
      'React to biblioteka JavaScript stworzona przez Meta (Facebook). Pozwala budować interfejsy użytkownika z małych, izolowanych kawałków kodu zwanych **komponentami**. Każdy komponent zarządza swoim stanem i renderuje się ponownie, gdy dane się zmienią.',
    codeSnippet: `function Greeting({ name }) {\n  return <h1>Cześć, {name}!</h1>;\n}\n\n// Użycie:\n<Greeting name="Jaś" />`,
    easterEgg: {
      id: 'egg-react',
      icon: 'pi pi-heart-fill',
      hint: 'React to ❤️',
      points: 100,
      position: { bottom: '12%', left: '5%' },
    },
  },
  {
    id: 'primereact',
    stepLabel: 'PrimeReact',
    stepIcon: 'pi pi-prime',
    title: '💎 PrimeReact — Bogata Biblioteka UI',
    subtitle: '90+ gotowych komponentów enterprise-grade',
    content:
      'PrimeReact dostarcza ponad 90 komponentów gotowych do użycia w produkcji: od prostych Buttonów, przez DataTable i Tree, aż po zaawansowane Charty i Edytory. W połączeniu z PrimeFlex (utility-first CSS) i PrimeIcons tworzymy kompletny design system bez pisania CSS od zera.',
    codeSnippet: `import { Button } from 'primereact/button';\nimport { Card } from 'primereact/card';\n\n<Card title="Mój Panel">\n  <Button\n    label="Kliknij mnie"\n    icon="pi pi-check"\n    severity="success"\n  />\n</Card>`,
    easterEgg: {
      id: 'egg-prime',
      icon: 'pi pi-bolt',
      hint: 'Energia PrimeReact ⚡',
      points: 100,
      position: { top: '20%', left: '3%' },
    },
  },
  {
    id: 'summary',
    stepLabel: 'Finał',
    stepIcon: 'pi pi-trophy',
    title: '🏆 Podsumowanie',
    subtitle: 'Gratulacje — dotarłeś do końca!',
    content:
      'Właśnie przeszedłeś przez interaktywną prezentację stworzoną w React + Vite + PrimeReact. Zobaczyłeś anatomię komponentów, inspektor kodu i tryb gry. Cała aplikacja została wygenerowana przy pomocy AI (Antigravity) na podstawie precyzyjnych instrukcji (skilli).',
    codeSnippet: null,
    easterEgg: null, // Ostatni slajd bez easter egga
  },
];

export const MAX_SCORE = SLIDES.reduce(
  (sum, s) => sum + (s.easterEgg?.points || 0),
  0
);
