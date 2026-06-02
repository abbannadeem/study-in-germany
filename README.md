# Study in Germany 🇩🇪

A complete web app guiding international students through studying in Germany —
public universities, student cities, jobs and the full visa/application process.

Built with **Next.js 16 (App Router)**, **React 19**, **JavaScript** and
**Tailwind CSS v4**.

## Getting Started

```bash
npm run dev      # start the dev server (http://localhost:3000)
npm run build    # production build
npm run start    # serve the production build
```

Open the printed URL in your browser (Next.js falls back to the next free port
if 3000 is busy).

> **If `npm run dev` crashes with a Turbopack error** (`0xc0000142` while
> processing `globals.css`) on Windows, it's an environment issue with spawning
> the PostCSS worker (often antivirus-related), not a code problem. Use a clean
> terminal, or run the production server instead:
> `npm run build` then `npm run start`.

## What's inside

| Section | Route | Description |
| --- | --- | --- |
| Home | `/` | Hero, stats and highlights |
| Universities | `/universities` | Searchable & filterable list of public universities |
| University detail | `/universities/[slug]` | Fees, programmes, ranking, key facts |
| Cities | `/cities` | Student cities (with landmark photos) sorted by cost of living |
| City detail | `/cities/[slug]` | Budget, rent, highlights, universities |
| Industries | `/industries` | Major industries & top employers of every German state |
| Industry detail | `/industries/[slug]` | Sectors, companies and photo per state |
| Jobs | `/jobs` | Work rules, job types, careers, job portals |
| Visa & Process | `/visa` | 8-step process, blocked account, documents, FAQ |

## Editing / adding data

All content lives in plain data files under [`src/data/`](src/data/) — just edit
these files to add or update information (no database needed):

- [`universities.js`](src/data/universities.js) — university entries
- [`cities.js`](src/data/cities.js) — city entries
- [`jobs.js`](src/data/jobs.js) — work rules, job types, portals
- [`visa.js`](src/data/visa.js) — process steps, documents, FAQ
- [`industries.js`](src/data/industries.js) — industries & employers per state

To add a new university or city, copy an existing object in the array and give it
a unique `slug`. The listing and detail pages update automatically.

### Photos (cities & industries)

Real photos live in [`public/cities/`](public/cities/) (the iconic landmark of
each city) and [`public/industries/`](public/industries/) (a representative site
per state), named `<slug>.jpg`. They are fetched from Wikipedia by
[`scripts/fetch-images.mjs`](scripts/fetch-images.mjs):

```bash
npm run images              # download any missing city + industry photos
node scripts/fetch-images.mjs cities       # only cities
node scripts/fetch-images.mjs industries   # only industries
```

The script skips files that already exist (so re-run it freely — Wikipedia
rate-limits and the script retries with backoff). To swap a city's landmark,
edit the `cityLandmarks` map in the script. When you add a new city/industry,
give it a `wiki` field (English Wikipedia title) and run `npm run images`. If a
photo is ever missing, the UI falls back to a coloured gradient, so nothing
breaks.

## Project structure

```
src/
  app/          # routes (App Router)
  components/   # Navbar, Footer, cards, banner, explorer
  data/         # all content as editable JS data files
  lib/          # small helpers (formatting)
```

## Disclaimer

This is an educational guide. Tuition rules, the blocked-account amount, work-hour
limits and visa requirements change over time — always verify with official
sources (DAAD, Make it in Germany, and the German embassy in your country).
