# Chiptuning Stroje — Prezentačný Web

Jednoduchá, moderná a responzívna statická stránka pre propagáciu chiptuningu stavebných a poľnohospodárskych strojov. Postavené pomocou **Jekyll** a **Bootstrap 5**.

## 🔧 Funkcie

- Plne responzívny dizajn (mobil, tablet, desktop)
- Carousel banner s možnosťou rotácie obrázkov
- Pevne ukotvená hlavička s logom a navigáciou
- Sekcia s dôvodmi „Prečo si vybrať nás“
- Moderné dvojstĺpcové rozloženie výhod chiptuningu
- Pripravené na nasadenie cez GitHub Pages alebo Netlify

## 💡 Struktúra projektu

```
.
├── _layouts/
│   └── default.html          # Základný layout pre stránku
├── assets/
│   ├── css/
│   │   └── main.scss         # Všetky štýly na jednom mieste
│   └── img/                  # Bannery, logo
├── index.md                  # Obsah hlavnej stránky
├── _config.yml               # Nastavenia Jekyll
└── README.md                 # Tento súbor
```

## 🚀 Spustenie lokálne

1. Uisti sa, že máš nainštalovaný Ruby a Jekyll:

```bash
gem install bundler jekyll
```

2. Nainštaluj závislosti a spusti server:

```bash
bundle install
bundle exec jekyll serve
```

3. Otvor v prehliadači:

```
http://localhost:4000
```

## 🌐 Nasadenie

Tento projekt je vhodný na nasadenie pomocou:

- [GitHub Pages](https://pages.github.com/)
- [Netlify](https://www.netlify.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)

## ✏️ Úpravy

- Bannery sa nachádzajú v `assets/img/`
- Textový obsah je definovaný v `index.md`
- Všetky štýly upravuj v `main.scss`
- Navigácia a carousel sú v `default.html` (v `_layouts/`)

## 📄 Licencia

Tento projekt je dostupný pod [MIT licenciou](LICENSE), môžeš ho voľne upravovať a šíriť.

---

> Autor: [Tvoje meno alebo firma]  
> Web: [www.chiptuning-stroje.sk](https://www.chiptuning-stroje.sk)
