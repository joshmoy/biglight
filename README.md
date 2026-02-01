# `create-preact`

## Setup

-   `npm create preact@latest .` - Create the Preact app
-   `npm install` - Install base dependencies
-   `npm add -D tailwindcss postcss autoprefixer` - Install Tailwind tooling
-   `npx storybook@latest init` - Initialize Storybook

## Getting Started

-   `npm run dev` - Starts a dev server at http://localhost:5173/

-   `npm run tokens:generate` - Generate CSS tokens from `public/figma-tokens.json`

-   `npm run storybook` - Starts Storybook locally at http://localhost:6006/

-   `npm run build` - Builds for production, emitting to `dist/`

-   `npm run preview` - Starts a server at http://localhost:4173/ to test production build locally

## Tokens

-   Source: `public/figma-tokens.json`
-   Generated CSS: `src/styles/generated/design-tokens.css`
-   Themes: `src/styles/themes/brand-a.css`, `src/styles/themes/brand-b.css`
