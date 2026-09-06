# thomasmercantile.de

Statische Website für **Thomas Mercantile** (Thorsten Thomas, München). Reines HTML, CSS
und ein kleines Skript – keine Build-Kette, keine Frameworks, kein Tracking. Gehostet über
GitHub Pages, gleiche Technik wie `ththom1985/mjoar`.

## Dateien

| Datei | Zweck |
|---|---|
| `index.html` | Startseite (Englisch) |
| `impressum.html`, `datenschutz.html` | Rechtstexte (Deutsch, `noindex`) |
| `styles.css` | gesamtes Stylesheet, Farben in `:root` |
| `script.js` | Jahreszahl im Footer, sanftes Einblenden beim Scrollen |
| `assets/mjoar-wordmark.svg` | MJØÅR-Wortmarke (im `index.html` zusätzlich inline) |
| `og.png` | Vorschaubild für Social/Link-Previews (1200 × 630) |
| `favicon.svg`, `favicon.ico` | Favicons |
| `CNAME` | `thomasmercantile.de` für GitHub Pages |
| `robots.txt`, `sitemap.xml` | Suchmaschinen |

## Zwei Stellen zum Ändern

- **Claim:** einmal in `index.html`, Absatz mit der Klasse `wm-claim`.
- **Farben:** oben in `styles.css` unter `:root`. Die Werte sind aus dem Logo abgelesen;
  wenn die Logodatei vorliegt, die exakten Werte dort eintragen.

## Logo

Solange keine Logodatei vorliegt, ist die Wortmarke als Text gesetzt („THOMAS“ groß gesperrt,
„MERCANTILE“ kleiner darunter, tan Linie, Claim). Kommt die Datei, wird sie nach `assets/`
gelegt und der `<span>`-Block in `.wordmark` durch ein `<img>` ersetzt; der Kommentar
darüber in `index.html` beschreibt den Handgriff. Die Textfassung bleibt als Fallback im Code.

## og.png neu erzeugen

`og.png` ist ein Screenshot einer kleinen Hilfsseite mit denselben Farben und Schriften
(1200 × 630, in doppelter Auflösung gerendert und heruntergerechnet). Beim Ändern von Claim
oder Farben muss das Bild neu erzeugt werden – es enthält den Claim als Bildtext.

## Veröffentlichen

### 1. GitHub Pages (im Repository)

1. **Settings → Pages**: Source `Deploy from a branch`, Branch `main`, Ordner `/ (root)`.
2. **Custom domain**: `thomasmercantile.de` eintragen und speichern (die Datei `CNAME`
   im Repo enthält den Wert bereits).
3. **Enforce HTTPS** aktivieren, sobald GitHub das Zertifikat ausgestellt hat
   (dauert nach der DNS-Umstellung in der Regel einige Minuten bis wenige Stunden).

### 2. DNS bei IONOS (macht Thorsten selbst)

In der IONOS-Domainverwaltung für `thomasmercantile.de` unter **DNS**:

**A-Records für `@` (die Domain ohne www) – vier Stück, bestehende A-Records auf `@` vorher entfernen:**

```
@   A   185.199.108.153
@   A   185.199.109.153
@   A   185.199.110.153
@   A   185.199.111.153
```

**CNAME für `www`:**

```
www   CNAME   ththom1985.github.io
```

Danach in den Repo-Settings unter Pages die Custom Domain prüfen (GitHub zeigt den
DNS-Check an) und „Enforce HTTPS“ setzen.

## Lokal ansehen

```
python -m http.server 8777
```

und `http://127.0.0.1:8777/` öffnen. Ein Server ist nötig, weil die Seiten absolute Pfade
(`/styles.css`) verwenden.
