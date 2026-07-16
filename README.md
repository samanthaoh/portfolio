# Portfolio

A blueprint/schematic-themed portfolio site — your work (agentic systems, data science, product)
literally rendered as an annotated systems diagram.

## Run it locally

```bash
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`).

## Build for deployment

```bash
npm run build
```

Output goes to `dist/`. Deploy that folder to Vercel, Netlify, GitHub Pages, or Firebase Hosting
(you already know Firebase Hosting from the Sip project, so that's a fast option).

## Where to edit content

Everything text-based lives in **`src/content.js`** — name, tagline, email, LinkedIn, GitHub,
experience, projects, skills, and leadership. You shouldn't need to touch component files just to
update copy. Anything in `[brackets]` is a placeholder — search the file for `[` to find them all.

Specifically, fill in:
- `profile.lastName`, `profile.email`, `profile.linkedin`, `profile.github`
- dates/locations on the NT Concepts and GMU research entries
- real links for each project in the `projects` array
- drop your résumé PDF at `public/resume.pdf` (the nav button already points there)

## Structure

```
src/
  content.js          — all copy and data (edit here first)
  index.css            — design tokens + all styles
  App.jsx               — page layout
  components/
    Nav.jsx
    Hero.jsx           — the schematic diagram hero
    Experience.jsx      — "revision log" styled timeline
    Projects.jsx         — "spec sheet" project cards
    Skills.jsx
    Leadership.jsx
    Footer.jsx
```

## Design notes

- Palette: ink navy background, warm chalk text, blueprint cyan for lines/links, amber for
  highlights and CTAs, steel for secondary/muted text.
- Type: Fraunces (display serif) for headings, IBM Plex Mono for technical labels/tags, Inter for
  body copy.
- The hero's four "FIG." labels are the facets of your work — edit the `facets` array in
  `content.js` if you want to change what they say.
- Respects `prefers-reduced-motion` and has visible keyboard focus states throughout.
