# White Shirt Project

Research for our future plain white T-shirt brand.

**[Review the live site](https://jit380.github.io/white-shirt-research/)** · **[Suggest a change](https://github.com/Jit380/white-shirt-research/issues/new?template=site-feedback.md)** · **[Track issues](https://github.com/Jit380/white-shirt-research/issues)**

## Simple structure

- **Overview:** what we are doing now.
- **Competitor research:** profiles and a comparison table, with sources kept on each profile.
- **Our project:** future customer persona, archetype branding, Cialdini persuasion principles, design direction, and website/coding plan.

Three initial competitor profiles are researched with dated official sources: ASKET, True Classic, and Fresh Clean Threads. Three more remain in the queue. Brand direction is still undecided.

The homepage includes a synthetic welcome recording, native audio controls, a download link, and a collapsed transcript. Audio source text is in `docs/public/audio/welcome-transcript.txt`.

## Feedback and changes

Every page has a **Suggest a change** link. It opens a GitHub issue draft with the page URL included. Reviewers add their suggestion and submit it on GitHub. A GitHub account is required, and feedback is public.

Use issues for feedback and tasks. Link the issue in a pull request; use `Closes #NUMBER` when the change resolves it. Changes are reviewed and implemented before being published; submitting an issue does not edit the site automatically.

## Local development

Requires Node.js 22 or newer.

```sh
npm ci
npm run docs:dev
```

Run `npm run docs:build` before merging. `npm run docs:preview` previews the production build. GitHub Actions checks pull requests and publishes GitHub Pages on pushes to `main`.

## Add research

Copy `docs/competitors/template.md`, add a row to `docs/competitors/index.md`, and add the profile to the sidebar in `docs/.vitepress/config.mjs`. Keep dated source links with observations. Clearly label interpretations and unknowns.

Future planning documents will be linked from `docs/project.md`. Old research URLs remain as short pointers to the simplified sections.

Prepared with AI assistance. Research claims require verification.
