# Unilumen web

Webové stránky společnosti UNILUMEN s.r.o., hostované na GitHub Pages.

Zatím je zde jen dočasná stránka, která ověřuje, že nasazení funguje. Skutečný obsah a grafika přijdou později.

## Struktura

| Cesta | Účel |
| --- | --- |
| `site/` | Obsah webu, který se publikuje |
| `.github/workflows/pages.yml` | Automatické nasazení na GitHub Pages |

## Nasazení

Každý push do větve `main` spustí workflow, které obsah složky `site/` nasadí na GitHub Pages.
Vlastní doména se nastavuje jen v **Settings → Pages** (Source: *GitHub Actions*), v repozitáři není uložená.

## Lokální náhled

```sh
python3 -m http.server 8000 --directory site
```

a otevřít <http://localhost:8000>.
