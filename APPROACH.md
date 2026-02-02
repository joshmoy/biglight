# Approach

## Design-to-code workflow

I started by using the provided `tokens/figma-tokens.json` as the source of truth and generated CSS variables so the UI values could be derived by tokens rather than hard-coded values. From there, I built each component in Preact and used Storybook to compare states and variants against the designs, iterating on spacing, typography, and interaction states.

## Token management

Token management is handled by a small generator script (`scripts/generate-tokens.mjs`) that resolves references in the JSON and outputs CSS variables into `src/styles/generated/design-tokens.css` and theme files (`src/styles/themes/brand-a.css`, `src/styles/themes/brand-b.css`). Tailwind is setup via `@theme` in `src/styles/tokens.css`, so the variables map directly to utilities and can be used consistently across components.

## Theme switching

Theme switching is done by setting `data-theme="brand-a"` or `data-theme="brand-b"` on the document root in `ThemeProvider`. The theme-specific CSS variables are scoped to those selectors, so components switch automatically as long as they use token-based classes.

## When tokens change

When tokens change, update or replace the JSON file with the lates file and run `npm run tokens:generate`. That regenerates the CSS variables without manual edits and keeps the codebase aligned with design updates.

## What I would do differently

With more time or a production setup, I’d add regression tests to catch UI drift, improve UI design & linting, and add validations for tokens. I’d also improve font loading to use a production-ready hosting strategy.

## Trade-offs and limitations

Trade-offs in this implementation include using a lightweight custom generator rather than a full CI-validated pipeline, relying on Google Fonts, and focusing on primary component states rather than exhaustive accessibility audits and edge cases.

## AI usage

I used AI as a support tool throughout the project. It helped me brainstorm the pipeline approach, build a step-by-step checklist, and understand the Figma token structure more quickly. I also used it to draft the token generation script, map theme variables into Tailwind, and debug Storybook configuration issues.
