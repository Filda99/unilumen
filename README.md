# Unilumen web

Webové stránky společnosti UNILUMEN s.r.o., hostované na GitHub Pages.

Jednostránkový statický web (HTML, CSS, trochu JS) bez build kroku. Texty vychází z podkladů klienta, barvy ze specifikace loga (`#202C34` antracit, `#EAB34E` zlatá).

## Struktura

| Cesta | Účel |
| --- | --- |
| `site/` | Obsah webu, který se publikuje |
| `site/index.html` | Celá stránka (Úvod, O společnosti, Služby, Reference, Kontakt) |
| `site/assets/style.css`, `main.js` | Vzhled a mobilní menu |
| `site/varianta-1/`, `site/varianta-4/` | Dočasné náhledy dvou variant pro klientku (noindex). Po výběru finální varianty smazat. Varianta 4 = stejné HTML + `assets/theme-minimal.css` |
| `site/assets/img/` | Logo, favicony, náhledový obrázek pro sdílení |
| `site/assets/fonts/` | Písmo Montserrat (OFL), hostované lokálně kvůli GDPR |
| `.github/workflows/pages.yml` | Automatické nasazení na GitHub Pages |

## Nasazení

Každý push do větve `main` spustí workflow, které obsah složky `site/` nasadí na GitHub Pages.
Vlastní doména se nastavuje jen v **Settings → Pages** (Source: *GitHub Actions*), v repozitáři není uložená.

## Lokální náhled

```sh
python3 -m http.server 8000 --directory site
```

a otevřít <http://localhost:8000>.
