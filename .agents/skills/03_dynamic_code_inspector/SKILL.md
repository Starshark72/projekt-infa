# Skill 3: Dynamiczny Inspektor Kodu, Skilli i CSS (03_matrix_code_viewer.md)

## Cel
Spektakularne zaprezentowanie architektury aplikacji poprzez pokazanie pełnego procesu twórczego: od promptu w Antigravity (plik .md), przez logikę (JavaScript), aż po stylizację (CSS). Całość ma mieć formę hakerskiego terminala / IDE.

## Instrukcje dla Antigravity
1. **Struktura Zakładek (Trójwarstwowy Inspektor):** Użyj komponentu `TabView` wraz z `TabPanel`. Skonfiguruj trzy zakładki:
   - **Zakładka 1: "Antigravity Skill (.md)"** – Miejsce na treść promptów, które zbudowały tę aplikację.
   - **Zakładka 2: "Architektura Logiki (JS/React)"** – Kod źródłowy komponentów React.
   - **Zakładka 3: "Geometria Stylu (CSS/PrimeFlex)"** – Definicje stylów i klas narzędziowych.

2. **Hakerski Terminal z Efektem Typewriter:**
   - Wewnątrz każdej zakładki umieść komponent `ScrollPanel` z ciemnym tłem, zielonym lub neonowo-turkusowym fontem o stałej szerokości (monospace).
   - Zaimplementuj efekt "Typewriter" (maszyny do pisania) – tekst (szczególnie instrukcje ze skilla w pierwszej zakładce) powinien płynnie renderować się znak po znaku przy pierwszym otwarciu danej zakładki.

3. **Komponent Inplace do Podglądu:** - Wykorzystaj `Inplace` z PrimeReact w zakładce ze skillami. Pozwól użytkownikowi kliknąć nagłówek danego skilla (np. "Skill 1: Fundamenty"), aby płynnie rozwinąć jego pełną treść instrukcji bezpośrednio wewnątrz terminala.

4. **Wizualizacja Metryk Twórczych:** - Obok terminala wyświetl komponent `Chart` (wykres kołowy lub pierścieniowy - Doughnut), przedstawiający proporcje "wkładu" w aplikację. 
   - Przykładowe dane wykresu: **40% Skille Antigravity (AI Prompting)**, **40% Czysty React JS**, **20% Stylizacja PrimeFlex**.