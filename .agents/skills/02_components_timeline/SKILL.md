# Skill 2: Interaktywna Oś Czasu Komponentów (02_component_blueprint.md)

## Cel
Stworzenie interaktywnej sekcji "Anatomia Komponentu", która wykorzystuje komponenty PrimeReact do wizualnego i merytorycznego wyjaśnienia, z jakich klocków (State, Props, Hooks, JSX) składa się ta aplikacja.

## Instrukcje dla Antigravity
1. **Komponent Osi Czasu:** Użyj `Timeline` z PrimeReact, ustawiony w orientacji pionowej (lub naprzemiennej `align="alternate"`). Każdy punkt na osi czasu reprezentuje jeden kluczowy element Reacta.
2. **Dynamiczna Zawartość (State & Sidebar):**
   - Przygotuj stan aplikacji przechowujący dane o wybranym elemencie osi czasu.
   - Kliknięcie w dany punkt osi czasu ma otwierać boczny panel za pomocą komponentu `Sidebar` (wysuwany z prawej strony) lub pokazywać zaawansowaną kartę `Card`.
3. **Interaktywna Edukacja w panelu bocznym:**
   - Wewnątrz panelu umieść dowcipny i techniczny opis wybranego zagadnienia.
   - Dodaj sekcję "Live Preview" zawierającą komponent `InputSwitch`. Włączenie switcha ma natychmiastowo zmieniać działanie lub wygląd otaczającego panelu (np. zmiana lokalnego stanu koloru, zmiana propsów przekazywanych do testowego przycisku), demonstrując użytkownikowi działanie omawianego konceptu na żywo bez przeładowania strony.
