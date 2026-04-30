# berzerkerlegion.com

Official website for the international death metal band **Berzerker Legion**.
Static site built with [Astro](https://astro.build/), deployed to GitHub Pages.

## Stack

- Astro 6 (TypeScript strict)
- `@astrojs/sitemap` for auto sitemap
- Plain scoped CSS in components (no Tailwind / no SCSS)
- Zero animation libraries — all motion via CSS
- GitHub Actions → GitHub Pages, custom domain via `public/CNAME`

## Local development

```sh
npm install
npm run dev          # http://localhost:4321
npm run build        # outputs to /dist
npm run preview      # serves /dist locally
```

## Editing content

All editable content lives in `src/data/`:

| File                    | What it controls                                  |
| ----------------------- | ------------------------------------------------- |
| `site.ts`               | Band name, tagline, social URLs, booking email    |
| `shows.ts`              | Upcoming tour dates (typed array)                 |
| `discography.ts`        | Albums + Spotify embed IDs                        |
| `members.ts`            | Lineup shown on Bio page and JSON-LD              |

To **feature a YouTube video** on the homepage, set `featuredVideo` at the top
of `src/pages/index.astro` to a YouTube URL or 11-character video ID.

To **add a show**, append an entry to the `shows` array in `src/data/shows.ts`:

```ts
{
  date: '2026-08-15T20:00:00+02:00',
  city: 'Brno',
  country: 'Czechia',
  venue: 'Letiste Hradiste',
  festival: 'Brutal Assault 2026',  // optional
  ticketUrl: 'https://...',
  soldOut: false,
}
```

