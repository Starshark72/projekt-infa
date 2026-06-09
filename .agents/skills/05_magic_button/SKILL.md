# Skill 5: Magiczny Przycisk i Efekty Wizualne (05_visual_effects_and_chaos.md)

## Cel
Maksymalne wykorzystanie możliwości dynamicznych modyfikacji drzewa DOM i zaawansowanych komponentów PrimeReact, dające użytkownikowi pełną kontrolę nad "grawitacją" i estetyką interfejsu.

## Instrukcje dla Antigravity
1. **Menu Akcji (SpeedDial):** W prawym dolnym rogu ekranu umieść komponent `SpeedDial` z efektowną ikoną (np. `pi pi-bolt`). Rozwinięcie tego przycisku ma oferować trzy unikalne "Tryby Chaosu":
   - **Opcja A - "Odwróć Grawitację":** Kliknięcie nakłada na główny kontener aplikacji specyficzną klasę CSS, która obraca wybrane komponenty (np. karty lub zdjęcia) o 180 stopni lub dodaje efekt lekkiego lewitowania (`animation: float 3s ease-in-out infinite`).
   - **Opcja B - "Glitch Mode / Zhaszuj Kod":** Tymczasowo podmienia losowe litery w nagłówkach `h1`/`h2` na znaki specjalne (efekt cyberpunka / uszkodzonej transmisji) przy użyciu interwału w JS.
   - **Opcja C - "Tryb Turbo (Neon)":** Aktywuje dynamiczne style CSS dodające intensywny efekt `box-shadow` (neonowe podświetlenie) wokół wszystkich komponentów PrimeReact na stronie.
2. **Animacje Przewijania:** Do wszystkich sekcji i kart w aplikacji dodaj klasy animacji z biblioteki PrimeFlex lub natywne wsparcie dla animacji aktywowanych podczas scrollowania (`AnimateOnScroll`), sprawiając, że elementy interfejsu pojawiają się na ekranie z płynnym efektem przesunięcia lub powiększenia (fade-in / scale-up).