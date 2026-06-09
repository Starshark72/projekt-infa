<div align="center">
  <img src="https://raw.githubusercontent.com/primefaces/primereact/master/public/layout/images/logo-dark.svg" alt="PrimeReact Logo" width="200" style="margin-bottom: 20px;"/>
  
  <h1>⚡ Projekt Infa: Anatomia Nowoczesnej Aplikacji Webowej</h1>
  
  <p>
    <b>Nie zgadzamy się na nudne prezentacje PowerPoint!</b> To repozytorium zawiera w pełni interaktywną, grywalną aplikację-prezentację, udowadniającą siłę i elastyczność współczesnego stosu technologicznego Front-End.
  </p>
  
  [![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![PrimeReact](https://img.shields.io/badge/PrimeReact-0081C6?style=for-the-badge&logo=react&logoColor=white)](https://primereact.org/)
  [![GitHub Actions](https://img.shields.io/badge/Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](#)
</div>

<br/>

## 🚀 O Projekcie

Ten projekt został stworzony na zajęcia z informatyki jako demonstracja możliwości tworzenia interfejsów webowych. Zamiast statycznych slajdów, aplikacja angażuje widza dzięki interaktywnemu eksploratorowi kodu, "Trybom Chaosu", które manipulują Document Object Model na żywo, oraz wbudowanemu Trybowi Gry z Easter Eggami.

Wizualnie projekt opiera się na **Glassmorfizmie**, głębokich, ciemnych kolorach i precyzyjnych mikro-animacjach. 

## 🧠 Główne Funkcjonalności (Features)

- **🔍 Interaktywny Inspektor Kodu**: Widzowie mogą podglądać kod źródłowy React-Hooków obok wykresów w czasie rzeczywistym.
- **🕹️ Grywalizacja i Easter Eggi**: Prezentacja to gra. Ukryte punkty interakcji zachęcają do "klikania wszystkiego" w celu zdobycia pucharu. Posiada globalny licznik punktów i system gratyfikacji.
- **🌀 Tryby Chaosu (DOM Manipulation)**:
  - **Odwrócenie Grawitacji**: Cała aplikacja wywraca się o 180°, a karty zaczynają magicznie lewitować za sprawą transformacji CSS w czasie rzeczywistym.
  - **Glitch Mode**: Skrypty "uszkadzają transmisję", dynamicznie podmieniając znaki na całej stronie (efekt Neo-Cyberpunkowy).
  - **Tryb Neon**: Dynamiczna zmiana zmiennych CSS podświetla wszystkie komponenty aplikacji agresywnym, fioletowo-niebieskim światłem `box-shadow`.
- **✨ Płynne Scroll-Reveal**: Własne implementacje `IntersectionObserver` do animowania elementów wchodzących w Viewport.
- **🛠️ Architektura modułowa**: Kod jest restrykcyjnie podzielony na sekcje (Hero, Anatomy, Timeline, Inspector, Game, Effects) zgodnie z najlepszymi praktykami inżynierii oprogramowania.

## 💻 Tech Stack

Aplikacja oparta jest o najnowsze standardy przemysłu web-developmentu:

* **Środowisko:** [Vite.js](https://vitejs.dev/) — Ultraszybki bundler i serwer deweloperski, zapewniający HMR (Hot Module Replacement) w milisekundach.
* **Biblioteka UI:** [React 18](https://react.dev/) — Komponentowe podejście, deklaratywny UI i hooki (`useState`, `useEffect`, `useRef`).
* **System Komponentów:** [PrimeReact v10+](https://primereact.org/) — Bogata kolekcja zaawansowanych gotowych bloków UI.
* **Layout i Siatka:** [PrimeFlex](https://primeflex.org/) — Wszechstronny system klas użytkowych dla precyzyjnego budowania siatki flexbox bez pisania customowego CSS.
* **CI/CD:** [GitHub Actions](https://github.com/features/actions) — Zaprojektowane potoki (pipelines) do zautomatyzowanego wdrażania buildu prosto na środowisko produkcyjne GitHub Pages po każdym commicie do gałęzi `main`.

## 🌐 Live Demo

Zapraszam do testów pod adresem: [kliknij tutaj!](https://starshark72.github.io/prezka/) 


## ⚙️ Jak uruchomić to cudo u siebie?

Aby uruchomić tę maszynę lokalnie na własnym sprzęcie, potrzebujesz `Node.js` w wersji 18+.

1. **Sklonuj repozytorium**
   ```bash
   git clone https://github.com/Starshark72/projekt-infa.git
   cd projekt-infa/prezka
   ```

2. **Zainstaluj zależności (Install packages)**
   ```bash
   npm install
   ```

3. **Odpal silnik (Start Dev Server)**
   ```bash
   npm run dev
   ```
   *Wpisz `http://localhost:5173` w przeglądarce i poczuj prędkość Vite!*

## 🌐 Publikacja Produkcyjna (Deployment)

Aplikacja posiada gotową pipeline z deploymentem. 
Każdy `push` do gałęzi `main` uruchamia w tle system **GitHub Actions**, który stawia środowisko Ubuntu, buduje zoptymalizowane, lekkie assety i hostuje je przez **GitHub Pages**.

*(Pamiętaj, by w ustawieniach repozytorium: `Settings` > `Pages` > `Source` wybrać `GitHub Actions`)*.

---

<div align="center">
  <p><b>Zbudowane z pasją do czystego kodu. ☕</b></p>
</div>
