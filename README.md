# Fira Sostenible i Solidària (RE-VIU)

Lloc web de la fira (Vite + React + Tailwind). Basat en el disseny de [Figma](https://www.figma.com/design/HfYLifEqB8evK2CEFkGxz4/Dise%C3%B1o-web-profesional-adaptado).

## Requisits

- [Node.js](https://nodejs.org/) **18 o superior** (recomanat LTS).

## Instal·lació i execució

```bash
npm install
npm run dev
```

Obre el navegador a l’URL que mostri la consola (normalment `http://localhost:5173`).

## Producció

```bash
npm run build
npm run preview
```

La carpeta `dist/` conté els fitxers estàtics generats.

## Imatges (logos)

Els logos són **PNG** a `src/assets/images/`, importats amb `?url` (Vite). Fitxers:

- `logo-reciclaje-rosa.png` — Hero (símbol sense text)
- `logo-fira-reviu.png` — Footer (logo horitzontal RE-VIU)
- `logo-arep.png` — secció AREP
- `logo-fira-vertical.png` — variant vertical RE-VIU (al repositori per si la vols usar; afegeix `import … ?url` al component on la necessitis)

## GitHub Pages (opcional)

Si el repositori es publica com a pàgina de projecte (`usuario.github.io/nom-repo/`), cal definir la base de Vite abans de fer el build. A `vite.config.ts`, afegeix `base: '/nom-del-repositori/'` (amb barres inicial i final) o consulta la [documentació de Vite sobre desplegament](https://vitejs.dev/guide/static-deploy.html).
