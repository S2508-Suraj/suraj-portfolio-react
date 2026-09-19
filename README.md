# Suraj Kesharwani — Portfolio

Personal portfolio site. React 19 + Vite + Tailwind CSS v4 + Framer Motion.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # -> dist/   (normal build, deploy this)
npm run preview  # preview the production build
```

Single-file build (everything inlined into one `index.html`):

```bash
SINGLE_FILE=1 npx vite build --outDir dist-single
```

## Editing the content

**Everything on the site comes from one file: `src/data/content.js`.**
You should not need to touch any component to update your details.

| What you want to change | Where |
| --- | --- |
| Name, role, tagline, email, phone, location, GitHub/LinkedIn | `profile` |
| The four tiles under the hero | `quickFacts` |
| Skill categories and chips | `skillGroups` |
| Job entries and bullet groups | `experience` |
| Project cards and their tech stacks | `projects` |
| The three amber metric tiles | `achievements` |
| Education / training timeline | `timeline` |
| Languages, strengths, interests | `extras` |
| Nav links and section order | `sections` |

To add your GitHub and LinkedIn buttons, fill in the empty `github` and
`linkedin` strings in `profile` — the buttons appear automatically once they
have a value, and stay hidden while they're empty.

### Replacing the résumé PDF

Drop the new file in `public/` and point `profile.resumeUrl` at its filename.

## Structure

```
src/
  data/content.js        ← all copy and data
  index.css              ← design tokens (colors, fonts) + base styles
  App.jsx                ← section order
  components/
    primitives.jsx       ← Reveal (scroll animation), Section, Chip
    Nav.jsx  Hero.jsx  About.jsx  Skills.jsx
    Experience.jsx  Projects.jsx  Journey.jsx  Contact.jsx
```

## Design tokens

Colors and fonts are defined once in `src/index.css` under `@theme`, then used
as Tailwind utilities (`bg-ink`, `text-muted`, `border-line`, `text-accent`,
`text-signal`). Change a hex there and it updates everywhere.

- `ink` / `ink-raised` / `panel` — backgrounds, darkest to lightest
- `line` — hairline borders
- `text` / `muted` / `faint` — text, in descending emphasis
- `accent` — indigo, the one bold colour
- `signal` — amber, reserved for metrics and the "available" dot

Fonts: **Sora** (headings), **IBM Plex Sans** (body), **JetBrains Mono**
(labels, chips, dates). Loaded from Google Fonts in `index.html`.

The site is deliberately dark-only and respects `prefers-reduced-motion`.

## Deploying

`npm run build` produces a static `dist/` folder — deploy it to Vercel,
Netlify, GitHub Pages, Cloudflare Pages or any static host. `base: './'` is
already set in `vite.config.js`, so it works from a subfolder too.
