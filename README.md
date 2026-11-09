# White Shirt Project — Research Hub

A VitePress workspace for researching the plain white T-shirt market before developing a brand.

## Review the project

**GitHub Pages:** https://jit380.github.io/white-shirt-research/

**Public repository:** https://github.com/Jit380/white-shirt-research

## Current status

Research hub ready for review. Six candidate profiles are awaiting research. No competitor facts, prices, or single-product classifications have been verified.

## Run locally

Requires Node.js 22 or newer.

```sh
npm ci
npm run docs:dev
```

Build and check the production output:

```sh
npm run docs:build
npm run docs:preview
```

## Where to work

- `docs/research/brief.md`: scope and research questions
- `docs/competitors/`: directory, reusable template, candidate profiles
- `docs/research/comparison.md`: comparison matrix
- `docs/research/sources.md`: dated source register
- `docs/research/customers.md`: customer interview prompts
- `docs/research/insights.md`: hypotheses and opportunity brief
- `docs/research/backlog.md`: next tasks
- `docs/research/log.md`: decision log and AI disclosure

## Contribute

Create an issue using the competitor research template. Work on a branch such as `research/asket`, collect dated sources, and open a pull request. Keep observations, brand claims, and interpretations separate. Run the build before merging.

For a new profile, copy `docs/competitors/template.md`, then add its link to the directory and `.vitepress/config.mjs` sidebar.

## Publishing

The public repository is `Jit380/white-shirt-research`. GitHub Actions builds and deploys the site to GitHub Pages on each push to `main`. Pull requests run a build check. You can also run **Deploy research hub** manually in Actions.

The VitePress base path is `/white-shirt-research/`. Update it if the repository name changes.

## Research integrity

The initial structure and candidate list were prepared with AI assistance. Candidate pages are explicitly unverified. Source checking and human review are required before drawing conclusions.

Technical setup follows [VitePress documentation](https://vitepress.dev/guide/getting-started) and its [deployment guide](https://vitepress.dev/guide/deploy).
