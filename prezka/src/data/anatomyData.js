/**
 * anatomyData.js — dane dla interaktywnej osi czasu "Anatomia Komponentu".
 * Każdy element opisuje kluczowy klocek Reacta z dowcipnym i technicznym opisem.
 */

const ANATOMY_ITEMS = [
  {
    id: 'jsx',
    icon: 'pi pi-code',
    color: '#38bdf8',
    title: 'JSX',
    tagline: 'HTML, ale nie do końca',
    description:
      'JSX to cukier składniowy, który pozwala pisać strukturę UI bezpośrednio w JavaScript. ' +
      'Pod maską Babel zamienia każdy <tag> na wywołanie React.createElement(). ' +
      'Dzięki temu masz pełną moc JS w szablonach — warunki, pętle, interpolację — bez magicznych dyrektyw.',
    codeSnippet:
      `// To nie jest HTML — to JavaScript!\nconst element = (\n  <div className="card">\n    <h1>{user.name}</h1>\n    {isAdmin && <Badge value="Admin" />}\n  </div>\n);`,
    liveDemo: 'jsx',
  },
  {
    id: 'components',
    icon: 'pi pi-box',
    color: '#818cf8',
    title: 'Komponenty',
    tagline: 'Klocki LEGO interfejsu',
    description:
      'Komponent to niezależna, wielokrotnie używalna jednostka UI. ' +
      'Każdy komponent to zwykła funkcja JS, która przyjmuje props i zwraca JSX. ' +
      'Myśl o nich jak o klocku LEGO — mały, wyspecjalizowany, łatwy do podmiany. ' +
      'Ta prezentacja sama składa się z ~10 takich klocków!',
    codeSnippet:
      `function UserCard({ name, role }) {\n  return (\n    <div className="glass-panel">\n      <h3>{name}</h3>\n      <span>{role}</span>\n    </div>\n  );\n}`,
    liveDemo: 'components',
  },
  {
    id: 'props',
    icon: 'pi pi-arrow-right-arrow-left',
    color: '#34d399',
    title: 'Props',
    tagline: 'Dane lecą w dół jak grawitacja',
    description:
      'Props (properties) to mechanizm przekazywania danych z komponentu-rodzica do dziecka. ' +
      'Są read-only — dziecko nie może ich modyfikować, co wymusza jednokierunkowy przepływ danych. ' +
      'Dzięki temu debugowanie jest proste: dane zawsze płyną w jednym kierunku, od góry do dołu drzewa.',
    codeSnippet:
      `// Rodzic przekazuje dane w dół\n<UserCard\n  name="Jan Kowalski"\n  role="Developer"\n  isActive={true}\n/>\n\n// Dziecko je odbiera\nfunction UserCard({ name, role, isActive }) { ... }`,
    liveDemo: 'props',
  },
  {
    id: 'state',
    icon: 'pi pi-database',
    color: '#fb923c',
    title: 'State',
    tagline: 'Pamięć komponentu',
    description:
      'State to wewnętrzna pamięć komponentu — dane, które mogą się zmieniać w czasie. ' +
      'Każda zmiana stanu (setState) powoduje ponowne renderowanie komponentu z nowymi danymi. ' +
      'To jest serce interaktywności Reacta: kliknięcie przycisku → zmiana state → nowy UI. Magia? Nie — reaktywność!',
    codeSnippet:
      `const [count, setCount] = useState(0);\nconst [theme, setTheme] = useState('dark');\n\n// Zmiana stanu = nowy render\n<button onClick={() => setCount(c => c + 1)}>\n  Kliknięto: {count} razy\n</button>`,
    liveDemo: 'state',
  },
  {
    id: 'hooks',
    icon: 'pi pi-wrench',
    color: '#f472b6',
    title: 'Hooks',
    tagline: 'Superkomputer w funkcji',
    description:
      'Hooks to funkcje zaczynające się od "use", które dają komponentom funkcyjnym supermoce: ' +
      'useState (pamięć), useEffect (efekty uboczne), useRef (referencje DOM), useCallback (memoizacja). ' +
      'Przed hookami trzeba było pisać klasy — teraz wystarczy jedna elegancka funkcja. ' +
      'Zasada nr 1: wywoływać tylko na najwyższym poziomie, nigdy w if/for!',
    codeSnippet:
      `// useState — pamięć\nconst [data, setData] = useState(null);\n\n// useEffect — efekty uboczne\nuseEffect(() => {\n  fetchData().then(setData);\n  return () => cleanup();\n}, [dependency]);\n\n// useRef — referencja DOM\nconst inputRef = useRef(null);`,
    liveDemo: 'hooks',
  },
];

export default ANATOMY_ITEMS;
