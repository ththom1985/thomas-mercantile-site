# thomasmercantile.de

Statische Website für **Thomas Mercantile** (Thorsten Thomas, München). Reines HTML, CSS
und ein kleines Skript – keine Build-Kette, keine Frameworks, kein Tracking. Gehostet über
GitHub Pages, gleiche Technik wie `ththom1985/mjoar`.

## Dateien

| Datei | Zweck |
|---|---|
| `index.html` | Startseite (Englisch) |
| `impressum.html`, `datenschutz.html` | Rechtstexte (Deutsch, `noindex`) |
| `styles.css` | gesamtes Stylesheet, Farben und Schrifteinbindung in `:root` bzw. `@font-face` |
| `script.js` | Jahreszahl im Footer, sanftes Einblenden beim Scrollen |
| `assets/thomas-mercantile-logo.webp` / `.jpg` | Logo im Hero (Wortmarke, Linie, Claim), Ausschnitt aus der Logodatei |
| `assets/mjoar-wordmark.svg` | MJØÅR-Wortmarke (im `index.html` zusätzlich inline) |
| `assets/fonts/` | Cormorant Garamond und Montserrat als WOFF2, plus Lizenztexte |
| `og.png` | Vorschaubild für Social/Link-Previews (1200 × 630) |
| `favicon.svg`, `favicon.ico` | Favicons |
| `CNAME` | `thomasmercantile.de` für GitHub Pages |
| `robots.txt`, `sitemap.xml` | Suchmaschinen |

## Farbwelt

Die ganze Seite steht auf Dunkelgrün, es gibt keine hellen Flächen. Alle Werte
stehen oben in `styles.css` unter `:root`:

| Token | Wert | Verwendung |
|---|---|---|
| `--green` | `#384035` | Grundfläche, Hero. Aus der Logodatei gemessen, damit der Bildausschnitt nahtlos aufliegt |
| `--green-deep` | `#2F3730` | jede zweite Sektion, Footer |
| `--green-lift` | `#424C45` | Flächen, die sich abheben (Markenkarte) |
| `--cream` | `#F2EEE4` | Überschriften, Wortmarke, Links |
| `--cream-70` | `rgba(242,238,228,.72)` | Fließtext |
| `--cream-50` | `rgba(242,238,228,.5)` | Eyebrows, Meta-Zeilen |
| `--tan` | `#C8A87A` | nur Haarlinien, Fokus und Hover |
| `--line` | `rgba(242,238,228,.14)` | 1-px-Trennlinien zwischen den Sektionen |

Über der ganzen Seite liegt ein feines, statisches Korn (`body::after`, SVG-Rauschen
als Data-URI, `opacity:.035`, `mix-blend-mode:soft-light`), damit die Bildtextur des
Logos und die CSS-Flächen als eine Oberfläche wirken.

## Logo und Claim

Im Hero liegt die Logodatei als Bild: ein unveränderter Ausschnitt aus
`ThomasMercantile_Logo_ThingsWorthKeeping.png` (WebP mit JPEG-Fallback, 1140 × 570).
Wortmarke, Linie und der Claim **„Things worth keeping.“** stecken im Bild; der Claim
steht zusätzlich im `alt`-Text. Die Ränder des Ausschnitts laufen über zwei
CSS-Verläufe in die Fläche aus, damit keine Bildkante sichtbar wird – die Datei
selbst bleibt unangetastet.

Die Wortmarke als Text (Montserrat 300, gesperrt) steht im Footer und im Kopf der
Rechtsseiten (`.wordmark`) und ist damit weiterhin im Code, falls eine Fläche ohne
Bild gebraucht wird.

**Wenn sich der Claim ändert**, müssen vier Stellen zusammen geändert werden:
die Logodatei, der `alt`-Text in `index.html`, die `description`/`og:*`-Angaben
im `<head>` und `og.png`.

## Schriften

Cormorant Garamond (Überschriften) und Montserrat (gesperrte Zeilen und Fließtext)
liegen als WOFF2 unter `assets/fonts/` und werden vom eigenen Server ausgeliefert.
Es gibt keinen Google-Fonts-Link und keine externe Verbindung – deshalb kommt die
Datenschutzerklärung ohne einen Absatz zu Google aus. Details und Lizenz:
`assets/fonts/README.md`.

## og.png und favicon.ico neu erzeugen

Beide sind Screenshots einer kleinen Hilfsseite, die im Repo nicht mitliegt:

1. Lokalen Server starten (`python -m http.server 8777`).
2. Eine Seite `__og.html` (1200 × 630, doppelt gerendert) mit `#384035` als Grund und
   `assets/thomas-mercantile-logo.webp` zentriert anlegen, im Browser aufnehmen und
   auf 1200 × 630 herunterrechnen → `og.png`.
3. Für das Favicon dasselbe mit einer 256 × 256 großen Kachel (`#384035`, „TM“ in
   Montserrat 300, tan Haarlinie) → `favicon.ico` (16/32/48). `favicon.svg` ist
   handgeschrieben und enthält dieselbe Kachel.

Beide Bilder enthalten Marke bzw. Claim als Bildinhalt und müssen deshalb bei jeder
Änderung an Logo, Claim oder Farben neu erzeugt werden.

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
