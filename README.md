# `Biglight Preact App`

## Setup App and Dependencies

-   `npm create preact@latest .` - Create the Preact app
-   `npm add -D tailwindcss postcss autoprefixer` - Install Tailwind tooling
-   `npx storybook@latest init` - Initialize Storybook

## Installation

-   `npm install`

## Getting Started

-   `npm run dev` - Starts a dev server at http://localhost:5173/

-   `npm run tokens:generate` - Generate CSS tokens from `tokens/figma-tokens.json`

-   `npm run storybook` - Starts Storybook locally at http://localhost:6006/. To use locally, navigate to the url and interact  with the components. The `AppShell` component shows the full implementation with a header to toggle between the themes.

-   `npm run build` - Builds for production, emitting to `dist/`

-   `npm run preview` - Starts a server at http://localhost:4173/ to test production build locally

## Tokens

-   Source: `tokens/figma-tokens.json`
-   Generated CSS: `src/styles/generated/design-tokens.css`
-   Themes: `src/styles/themes/brand-a.css`, `src/styles/themes/brand-b.css`

## Switch Themes

-   Use the theme toggle in the app header or Storybook preview.
-   Themes are applied via `data-theme="brand-a"` or `data-theme="brand-b"` on the document root.

## Hosted Storybook

-   https://biglight-git-main-joshmoys-projects.vercel.app/

## Time Spent

-   Approximate time spent: TODO
