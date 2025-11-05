# Rail Demo — Local React + Vite Landing Page

This is a local demo site inspired by https://raildevhub.pia-team.com/.
It is a Vite + React single-page app with multiple pages (Home, About, Expertise, Projects, Stories).

## Run locally (requires Node.js)
```bash
npm install
npm run dev
```

## Offline-ready
All assets are local and no external APIs or CDNs are required. The project uses system fonts to keep it fully offline-friendly.

## Structure
- /src - React source
- /public - static index.html
- /src/assets - local images & icons
- /README.md - this file

## Notes
- Replace placeholder images in `/src/assets/images` as needed.
- Styling uses CSS variables in `/src/styles/variables.css` for easy theming.


## Theme & Interactions
- Default: Light theme. Toggle theme via the sun/moon button in the header. Preference is saved to `localStorage`.
- Interactive hero shimmer, card hover lifts, and smooth transitions are included.
