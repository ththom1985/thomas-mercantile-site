# thomasmercantile.de

Statische Website für **Thomas Mercantile** (Thorsten Thomas, München). Reines HTML, CSS
und ein kleines Skript – keine Build-Kette, keine Frameworks, kein Tracking. Gehostet über
GitHub Pages, gleiche Technik wie `ththom1985/mjoar`.

## Dateien

| Datei | Zweck |
|---|---|
| `index.html` | Startseite (Englisch) |
| `impressum.html`, `datenschutz.html` | Rechtstexte (Deutsch, `noindex`) |
| `styles.css` | gesamtes Stylesheet, Farben in `:root`, Schriften per `@font-face` |
| `script.js` | Sprachumschalter EN/DE, Jahreszahl im Footer, sanftes Einblenden beim Scrollen |
| `assets/mjoar-wordmark.svg` | MJØÅR-Wortmarke (im `index.html` zusätzlich inline) |
| `assets/fonts/` | Cormorant Garamond und Montserrat als WOFF2, plus Lizenztexte |
| `og.png` | Vorschaubild für Social/Link-Previews (1200 × 630) |
| `favicon.svg`, `favicon.ico` | Favicons |
| `CNAME` | `thomasmercantile.de` für GitHub Pages |
| `robots.txt`, `sitemap.xml` | Suchmaschinen |

## Farbwelt

Die ganze Seite steht auf Dunkelgrün, es gibt keine hellen Flächen und kein Korn –
die Flächen sind flach. Alle Werte stehen oben in `styles.css` unter `:root`:

| Token | Wert | Verwendung |
|---|---|---|
| `--green` | `#384035` | Grundfläche, Hero. Aus der Logodatei gemessen |
| `--green-deep` | `#2F3730` | jede zweite Sektion, Footer |
| `--green-lift` | `#424C45` | Flächen, die sich abheben (Markenkarte) |
| `--cream` | `#F2EEE4` | Wortmarke, Überschriften, Links |
| `--cream-70` | `rgba(242,238,228,.72)` | Fließtext, Claim, Sprachumschalter |
| `--cream-50` | `rgba(242,238,228,.5)` | Eyebrows, Meta-Zeilen |
| `--tan` | `#C8A87A` | nur Haarlinien, Fokus und Hover |
| `--line` | `rgba(242,238,228,.14)` | 1-px-Trennlinien zwischen den Sektionen |

## Wortmarke und Claim

Die Wortmarke ist **Text**, kein Bild – damit ist sie auf jeder Größe scharf und
sitzt auf exakt demselben Grün. Gesetzt mit der lokalen Montserrat:

| Element | Werte |
|---|---|
| THOMAS | Montserrat 400, `letter-spacing:.42em`, `font-size:clamp(2.2rem,6vw,4.6rem)` |
| MERCANTILE | Montserrat 300, `letter-spacing:.38em`, 38 % von THOMAS |
| Linie | 72 × 2 px in `--tan`, 28 px Abstand |
| Claim | Montserrat 300, 12–13 px, `letter-spacing:.35em`, `--cream-70` |

Der Claim **„THINGS WORTH KEEPING"** steht im Markup an genau einer Stelle
(`p.wm-claim` in `index.html`) und bleibt in beiden Sprachen englisch.
Ändert er sich, müssen zusätzlich `description` und die `og:*`-Angaben im `<head>`
sowie `og.png` angepasst werden.

Die Logodatei (`ThomasMercantile_Logo_ThingsWorthKeeping.png`) liegt nicht mehr auf
der Seite; sie war nur die Quelle für die Farbwerte.

## Sprachen

Eine URL, beide Sprachen im selben HTML. Der Umschalter **EN | DE** steht oben rechts
(`.langtoggle`, Buttons mit `data-lang`).

- Jeder zweisprachige Textknoten trägt `data-en` und `data-de`; `script.js` setzt den
  `textContent` und `<html lang>` um. Der Kontaktlink trägt zusätzlich `data-href-en`
  und `data-href-de`, weil der `mailto`-Betreff je Sprache anders lautet.
- Die Wahl liegt in `localStorage` unter `tm_lang`. Ohne gespeicherte Wahl entscheidet
  `navigator.language`: `de…` → DE, sonst EN. Ohne JavaScript bleibt Englisch stehen,
  weil die englische Fassung im Markup steht.
- Impressum und Datenschutz bleiben deutsch (verbindlicher Text) und tragen keinen
  Umschalter; darüber steht je ein englischer Kurzabsatz.

## Schriften

Cormorant Garamond (Überschriften) und Montserrat (Wortmarke, gesperrte Zeilen,
Fließtext) liegen als WOFF2 unter `assets/fonts/` und werden vom eigenen Server
ausgeliefert. Es gibt keinen Google-Fonts-Link und keine externe Verbindung – deshalb
kommt die Datenschutzerklärung ohne einen Absatz zu Google aus. Details und Lizenz:
`assets/fonts/README.md`.

## og.png und favicon.ico neu erzeugen

Beide sind Screenshots derselben Textsetzung, aufgenommen von einer Hilfsseite, die
im Repo nicht mitliegt:

1. Lokalen Server starten (`python -m http.server 8777`).
2. Eine Seite `__og.html` anlegen, die `/styles.css` einbindet und den Wortmarken-Block
   (`.wordmark`, `.wm-rule`, `.wm-claim`) in einer Box 1200 × 630 auf `#384035`
   zentriert; im Browser bei `deviceScaleFactor 2` aufnehmen und auf 1200 × 630
   herunterrechnen → `og.png`.
3. Für das Favicon dasselbe mit einer Kachel 256 × 256 (`#384035`, „TM" in
   Montserrat 400) → `favicon.ico` (16/32/48). `favicon.svg` ist handgeschrieben und
   zeigt dieselbe Kachel.

Beide Bilder tragen die Marke als Bildinhalt und müssen bei jeder Änderung an
Wortmarke, Claim oder Farben neu erzeugt werden.

## Veröffentlichen

### 1. GitHub Pages (im Repository)

1. **Settings → Pages**: Source `Deploy from a branch`, Branch `main`, Ordner `/ (root)`.
2. **Custom domain**: `thomasmercantile.de` eintragen und speichern (die Datei `CNAME`
   im Repo enthält den Wert bereits).
3. **Enforce HTTPS** aktivieren, sobald GitHub das Zertifikat ausgestellt hat
   (dauert nach der DNS-Umstellung in der Regel einige Minuten bis wenige Stunden).

### 2. DNS bei IONOS

**Stand 06.09.2026: bereits gesetzt.** Eine Abfrage über 8.8.8.8 an diesem Tag liefert für
`thomasmercantile.de` die vier GitHub-A-Records und die vier GitHub-AAAA-Records, und
`www.thomasmercantile.de` zeigt als CNAME auf `ththom1985.github.io`. Die Liste hier ist die
Soll-Fassung zum Nachprüfen.

In der IONOS-Domainverwaltung für `thomasmercantile.de` unter **DNS**:

**A-Records für `@` (die Domain ohne www) – vier Stück, den A-Record der IONOS-Parkseite vorher entfernen:**

```
@   A   185.199.108.153
@   A   185.199.109.153
@   A   185.199.110.153
@   A   185.199.111.153
```

**AAAA-Records für `@` – vier Stück, den AAAA-Record der Parkseite vorher entfernen.**
Ohne diesen Schritt landen Besucher über IPv6 weiterhin auf der alten Parkseite:

```
@   AAAA   2606:50c0:8000::153
@   AAAA   2606:50c0:8001::153
@   AAAA   2606:50c0:8002::153
@   AAAA   2606:50c0:8003::153
```

**CNAME für `www`:**

```
www   CNAME   ththom1985.github.io
```

Die MX-, SPF-, DMARC-, DKIM- und autodiscover-Einträge von IONOS bleiben unangetastet – daran
hängt die Mail für `t.thomas@thomasmercantile.de`. Ebenso der A-Record von
`dashboard.thomasmercantile.de`.

Danach in den Repo-Settings unter Pages die Custom Domain prüfen (GitHub zeigt den
DNS-Check an) und „Enforce HTTPS“ setzen.

## Lokal ansehen

```
python -m http.server 8777
```

und `http://127.0.0.1:8777/` öffnen. Ein Server ist nötig, weil die Seiten absolute Pfade
(`/styles.css`) verwenden.
