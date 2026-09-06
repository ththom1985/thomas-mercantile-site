# Schriften

Lokal eingebunden, damit die Seite keine Verbindung zu Google Fonts aufbaut
(dadurch entfällt der entsprechende Absatz in der Datenschutzerklärung).

| Familie | Schnitte | Dateien |
|---|---|---|
| Cormorant Garamond | 400, 500, italic 400 | `cormorant-garamond-latin.woff2`, `-latin-ext`, `-italic-latin`, `-italic-latin-ext` |
| Montserrat | 300, 400 | `montserrat-latin.woff2`, `montserrat-latin-ext.woff2` |

Beide Familien werden als variable WOFF2 ausgeliefert; deshalb teilen sich die
Schnitte einer Familie und eines Subsets eine Datei, und die Gewichte werden im
`@font-face` in `styles.css` über den `font-weight`-Deskriptor festgelegt.

Quelle: Google Fonts (`fonts.gstatic.com`), Subsets `latin` und `latin-ext`.
Lizenz beider Familien: SIL Open Font License 1.1, Text in `OFL-CormorantGaramond.txt`
und `OFL-Montserrat.txt`.
