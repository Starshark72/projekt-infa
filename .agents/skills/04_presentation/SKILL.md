# Skill 4: Prezentacja jako Gra – "Tryb Gry" (04_gamified_slides.md)

## Cel
Przełamanie schematu nudnych slajdów. Zamiana tradycyjnej formy prezentacji w interaktywną grę eksploracyjną z systemem punktowym i ukrytymi sekretami (Easter Eggs).

## Instrukcje dla Antigravity
1. **Nawigacja Slajdów:** Użyj połączenia komponentu `Steps` (wskaźnik postępu u góry) oraz `Carousel` lub `Galleria` do renderowania głównych "slajdów" prezentacji. Umożliw nawigację zarówno za pomocą przycisków, jak i strzałek na klawiaturze.
2. **Mechanika Grywalizacji (Stan Globalny):**
   - Zdefiniuj stan licznika punktów (`score`) oraz tablicę znalezionych sekretów (`foundSecrets`).
   - W prawym górnym rogu ekranu umieść stały element interfejsu: ikonkę trofeum z komponentem `Badge`, który wyświetla aktualną liczbę punktów.
3. **Implementacja Easter Eggs:**
   - Na wybranych slajdach ukryj miniaturowe, lekko przezroczyste komponenty `Button` (np. w kształcie logotypu React lub małej gwiazdki).
   - Kliknięcie przycisku odtwarza animację CSS, blokuje przycisk przed ponownym kliknięciem i zwiększa stan `score` o +100 punktów.
4. **Ekran Finałowy (Modal Gratulacyjny):** W momencie osiągnięcia maksymalnej liczby punktów lub dotarcia do ostatniego kroku `Steps`, wywołaj komponent `Dialog` (modal). Dialog ma zawierać animowane podsumowanie, gratulacje dla użytkownika oraz przycisk restartu prezentacji.

