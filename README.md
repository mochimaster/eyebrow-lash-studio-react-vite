# Arch & Lash Studio — React + Vite

A practice React/Vite website for an eyebrow, eyelash and eyelash-extension studio.

## Run locally

Use Node 22 LTS.

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

For a production build:

```bash
npm run build
npm run preview
```

## GitHub Pages

This project is configured for:

`https://mochimaster.github.io/eyebrow-lash-studio-react-vite/`

The repository-specific Vite base is configured in `vite.config.js`:

```js
base: "/eyebrow-lash-studio-react-vite/"
```

The included `.github/workflows/deploy.yml` builds the project and deploys `dist/` to GitHub Pages whenever `main` or `master` is pushed.

### GitHub settings

In the repository:

1. Settings → Pages
2. Build and deployment → Source → GitHub Actions
3. Make sure the workflow file exists in the repository at `.github/workflows/deploy.yml`
4. Push the project to the repository
5. Open Actions and wait for the deployment workflow to finish successfully
6. In Settings → Pages, use the Visit site link

If the repository is named differently, change the `base` value in `vite.config.js` to:

```js
base: "/YOUR-REPOSITORY-NAME/"
```

If you use a custom domain or a user/organization site at `https://USERNAME.github.io/`, use:

```js
base: "/"
```

## Images

The site uses remote Unsplash images as placeholders. See `IMAGE-SOURCES.md` for the source pages. For a real portfolio/business site, replace these with images you have permission to use.
