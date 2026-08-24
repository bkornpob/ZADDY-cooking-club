# ZADDY Cooking Club

Public red-team / jailbreak cookbook published by multiverselib-collectives.

## Portal

This repo feeds the public HTTP portal. The portal loads `index.html` as the frontgate and `landing-page.html` as the shell; recipe content is rendered from `recipes/<dish>/` markdown via client-side `marked.js`.

## Contents

- `index.html` — frontgate ritual only
- `landing-page.html` — single shell for all content
- `recipes/` — source markdown for each episode/dish
- `assets/` — shared assets
- `scripts/` — client-side logic

## Citation

```
Bhirombhakdi, K. (2026). ZADDY cooking club -- hacktheagent-Ola-320. Zenodo. https://doi.org/10.5281/zenodo.22075458
```

## Contributing

This repo is published as-is from the working tree. Do not add build artifacts, mirrored HTML, or cached assets.
