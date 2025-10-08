# RealStore (Work-in-Progress E‑Commerce)

> A simple React + Vite storefront UI. This is an unfinished, non-production demo focused on layout and component structure. Responsiveness and the footer are intentionally left for later.

## Quick start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Lint
npm run lint

# Build for production
npm run build

# Preview the production build
npm run preview
```

## Tech stack
- **React 18** (functional components)
- **Vite** (dev/build tooling)
- **ESLint** (basic lint rules)
- **Tailwind base import** in `src/style.css` (utility reset only; custom CSS used for layout)

## Features (current)
- Home page with hero, category grid, and product grid
- Product data fetched from `fakestoreapi.com` (client-side)
- Basic header with search box and cart icon
- Newsletter form section
- Light UX polish: loading skeletons, error and empty states

## Not done yet (planned)
- Responsive styles (mobile/tablet)
- Footer content and links
- Real cart/checkout/auth flows
- Routing and product details
- Global state management

## Project structure
```
realstore/
  public/
  src/
    assets/              # images/icons
    components/          # UI components
      Header.jsx
      Hero.jsx
      CategoryCard.jsx
      ProductCard.jsx
      NewsletterForm.jsx
    style.css            # main custom styles
    index.css            # global base
    App.jsx              # page composition
    main.jsx             # React entry
  index.html
  vite.config.js
  eslint.config.js
  package.json
```

## Development notes
- Product list uses Fake Store API. Network errors will show a friendly message; otherwise a skeleton is shown while loading.
- Buttons and inputs have minimal focus styles for accessibility. The search input intentionally has no extra outline on focus per current design.
- Category section uses inline SVG icons.

## Environment
No environment variables are required. The app fetches public data from `https://fakestoreapi.com`.

## Scripts
- **npm run dev**: start the Vite dev server
- **npm run build**: create a production build
- **npm run preview**: preview the production build locally
- **npm run lint**: run ESLint

## Contributing
This is a personal demo. If you want to extend it:
- Keep edits small and focused.
- Match existing code style and naming.
- Avoid adding dependencies unless necessary.

## License
No license specified. Assume all rights reserved unless stated otherwise.
