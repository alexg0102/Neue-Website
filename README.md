# alexandergraf.me — Neue Website

Persönliche Portfolio-Website von Alexander Graf: eine schnelle, lebendige
Single-Page ohne Build-Schritt.

## Struktur

```
index.html      – Inhalt (Hero, Über mich, Interessen, Projekte, Kontakt)
css/style.css   – Design (Farben, Layout, Animationen)
js/main.js      – Interaktion (Menü, Scroll-Reveal, Discord-Kopieren)
```

## Lokal ansehen

Einfach `index.html` im Browser öffnen — kein Server, kein Build nötig.

## Veröffentlichen

Die drei Dateien/Ordner (`index.html`, `css/`, `js/`) unverändert zum Hoster
hochladen (z. B. IONOS Webspace oder GitHub Pages).

## Inhalte pflegen

- **Texte & Projekte:** direkt in `index.html` anpassen.
- **Socials:** Links erscheinen zweimal — kompakt im Hero und mit Beschriftung
  im Kontakt-Bereich (Abschnitt `id="kontakt"`).
- **Discord:** Der Button kopiert den Namen aus dem `data-name`-Attribut.
