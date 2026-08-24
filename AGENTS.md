# ZADDY Cooking Club — Build Instructions

## Architecture
- `index.html` = frontgate ritual only
- `landing-page.html` = single shell for all content
- `recipes/<dish>/` = source markdown, **never copy/mirror/build**
- Client-side `marked.js` renders `.md` directly in browser
- No `docs/`, no `site/`, no build step

## Core Rules
1. **md-source-as-is**: markdown files are the pages. Do not copy, mirror, or pre-render.
2. **Single shell**: only `landing-page.html` for content. No per-page HTML wrappers.
3. **Frontgate isolated**: `index.html` is ritual only; redirects to `landing-page.html`.
4. **No duplicate listeners**: attach `hashchange` + `DOMContentLoaded` in exactly one place.
5. **Reuse `loadPage`**: keep render logic in shell; `nav.js` only handles routing.
6. **Git**: commit after each logical change. Push only when asked.

## Frontgate
- 3x3 card grid, 1 distinct ZADDY face, 8 decoys, shuffled per load
- Enter button unlocks on win

## Landing Page
- Top nav: brand stack left, theme picker right
- Sidebar: ko-fi buttons, collapsible recipe tree
- Block-A: title + random quirky message (set before async load)
- Block-B: rendered markdown via `loadPage(src)`
- Theme picker: `zaddy`, `gdk`, `dab`, `equinox` via CSS vars + localStorage

## Common Fixes
- **Broken images**: use `recipes/<dish>/assets/...` not repo-root-relative paths
- **GitHub Pages path resolution**: `landing-page.html` loads markdown via `fetch()`; relative URLs in rendered content resolve from repo root, not from the markdown file location. Use repo-root-relative paths for assets: `recipes/<dish>/audios/...`, `recipes/<dish>/assets/...`
- **Code overflow**: `.markdown-body pre, .markdown-body code { white-space: pre-wrap; word-break: break-word; }`
- **Double nav load**: ensure `hashchange` listener exists in only one script
- **Dead CSS link**: remove `<link>` to missing files; keep styles inline

## Deploy
```bash
git add index.html landing-page.html scripts/ recipes/
git commit -m "fix: ..."
git push origin main
```
Enable GitHub Pages: `main` branch, `/` root.
