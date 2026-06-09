# Skill 1: Fundamenty, Architektura i Globalny Layout (01_theme_and_shell.md)

## Cel
Inicjalizacja projektu React + Vite z biblioteką PrimeReact, konfiguracja ultra-nowoczesnego motywu wizualnego oraz stworzenie nieszablonowego szkieletu aplikacji (App Shell), który odchodzi od klasycznego podziału na nudne menu.

## Wymagania i Zależności
- React 18+ (Vite)
- `primereact`
- `primeicons`
- `primeflex` (do pozycjonowania i utility classes)

## Instrukcje dla Antigravity
1. **Konfiguracja Stylów globalnych:** W pliku wejściowym (np. `main.jsx` lub `App.jsx`) zaimportuj ciemny, nowoczesny motyw PrimeReact, np. `primereact/resources/themes/lara-dark-teal/theme.css`, a także `primereact/resources/primereact.min.css`, `primeicons/primeicons.css` oraz `primeflex/primeflex.css`.
2. **Główny Layout (AppShell):** Stwórz komponent, który otacza całą aplikację. Tło strony powinno mieć głęboki, satynowy odcień ciemnego granatu/grafitu (`#0f172a` lub zbliżony) z delikatnym, radialnym gradientem.
3. **Nawigacja nowej generacji:**
   - Zamiast standardowego paska bocznego, zaimplementuj na dole ekranu komponent `Dock` z PrimeReact. Ikony w Docku mają reprezentować kolejne sekcje prezentacji (np. Home, Anatomia, Kod, Tryb Gry, Efekty).
   - Na górze ekranu umieść minimalistyczny komponent `Menubar`. Powinien być w pełni przezroczysty z efektem rozmycia tła (`backdrop-filter: blur(10px)` i `background: rgba(15, 23, 42, 0.6)`), wyświetlając jedynie dynamiczny tytuł aktualnej sekcji oraz logotyp wariacji prezentacji.
4. **Płynność:** Zastosuj płynne przejścia CSS (`transition: all 0.3s ease`) dla wszystkich elementów interaktywnych.