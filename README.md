<div align="center">
  
  <h1>🛍️ UrbanCart</h1>
  <p><em>Elegant, fast e‑commerce UI built with React + Vite</em></p>
  
  <sub>Clean, minimal, and easy to navigate — no clutter.</sub>
  
</div>

---

## At a Glance

- React 19 + Vite 7 + Tailwind 4 + React Router 7
- Pages: Home, Collection, Product, Cart, Place Order, Orders, Login, About, Contact
- Context‑based state: products, cart, and UI flows

## Features

- Fast dev/build, HMR via Vite
- Responsive design with Tailwind
- Product listing, details, related products
- Cart and checkout flow with totals
- Protected routes via `ProtectedRoute`
- Toast notifications and search

## Quickstart

```bash
cd frontend
npm install
npm run dev
```

Build and preview:

```bash
npm run build
npm run preview
```

Lint:

```bash
npm run lint
```

## Project Structure

```
frontend/
├─ index.html
├─ vite.config.js
├─ package.json
├─ src/
│  ├─ App.jsx
│  ├─ main.jsx
│  ├─ index.css
│  ├─ assets/
│  ├─ components/
│  │  ├─ Navbar.jsx • Hero.jsx • ProductItem.jsx • RelatedProducts.jsx
│  │  ├─ BestSeller.jsx • LatestCollection.jsx • CartTotal.jsx • ProtectedRoute.jsx
│  ├─ context/
│  │  ├─ ShopContext.jsx • ShopContextProvider.jsx
│  └─ pages/
│     ├─ Home.jsx • Collection.jsx • Product.jsx • Cart.jsx
│     ├─ PlaceOrder.jsx • Orders.jsx • Login.jsx • About.jsx • Contact.jsx
└─ README.md
```

## Routes

`/` Home • `/collection` Collection • `/product/:id` Product • `/cart` Cart • `/place-order` Place Order • `/orders` Orders • `/login` Login • `/about` About • `/contact` Contact

## Configuration

Optional `.env` in `frontend/`:

```
VITE_API_BASE_URL=https://api.example.com
```

Use in code: `import.meta.env.VITE_API_BASE_URL`.

## Notes

- Global state lives in the context files and is consumed throughout components and pages.
- Styles are Tailwind utilities plus minimal global rules in `src/index.css`.

## Troubleshooting

- Port in use: `npm run dev -- --port 5174`
- Fresh install: delete `node_modules` and `package-lock.json`, then `npm install`

---

Made with care using React, Vite, Tailwind, and React Router.


# UrbanCart — React + Vite E‑commerce Frontend

A fast, modern e‑commerce frontend built with React, Vite, React Router, and Tailwind CSS. This app showcases a storefront experience with collections, product pages, cart, checkout flow, and order views.

</div>

---

## Overview

- Lightning‑fast dev/build with Vite
- Modern React (v19) with hooks and context
- Routing via React Router (v7)
- Utility‑first styling with Tailwind CSS (v4)
- Linting with ESLint for a consistent codebase

Key app areas: Home, Collections, Product Detail, Cart, Place Order, Orders, Login, and static pages (About/Contact).

See scripts and dependencies in [frontend/package.json](frontend/package.json).

## Tech Stack

- React 19 + React DOM
- Vite 7
- React Router 7
- Tailwind CSS 4
- ESLint 9
- React Toastify

## Features

- Browse latest collections and best sellers
- Product details with related products
- Add to cart and view cart totals
- Protected routes (e.g., orders flow) via `ProtectedRoute`
- Search bar and responsive layout
- Toast notifications for feedback
- Newsletter signup and simple policy/marketing sections

## Project Structure

The important bits of the frontend:

```
frontend/
├─ index.html
├─ vite.config.js
├─ package.json
├─ src/
│  ├─ App.jsx
│  ├─ main.jsx
│  ├─ index.css
│  ├─ assets/
│  ├─ components/
│  │  ├─ Navbar.jsx
│  │  ├─ Hero.jsx
│  │  ├─ ProductItem.jsx
│  │  ├─ RelatedProducts.jsx
│  │  ├─ BestSeller.jsx
│  │  ├─ LatestCollection.jsx
│  │  ├─ CartTotal.jsx
│  │  ├─ ProtectedRoute.jsx
│  │  └─ ...
│  ├─ context/
│  │  ├─ ShopContext.jsx
│  │  └─ ShopContextProvider.jsx
│  └─ pages/
│     ├─ Home.jsx
│     ├─ Collection.jsx
│     ├─ Product.jsx
│     ├─ Cart.jsx
│     ├─ PlaceOrder.jsx
│     ├─ Orders.jsx
│     ├─ Login.jsx
│     ├─ About.jsx
│     └─ Contact.jsx
└─ README.md
```

## Getting Started

### Prerequisites

- Node.js 18+ (recommended) and npm

### Install

```bash
cd frontend
npm install
```

### Run in development

```bash
npm run dev
```

Vite will print a local URL (typically http://localhost:5173). Open it in your browser.

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Routing

Common routes provided by the pages in [frontend/src/pages](frontend/src/pages):

- `/` → `Home`
- `/collection` → `Collection`
- `/product/:id` → `Product`
- `/cart` → `Cart`
- `/place-order` → `PlaceOrder`
- `/orders` → `Orders` (may be behind `ProtectedRoute`)
- `/login` → `Login`
- `/about` → `About`
- `/contact` → `Contact`

## State & Context

- App state is organized via context in [frontend/src/context/ShopContextProvider.jsx](frontend/src/context/ShopContextProvider.jsx) and [frontend/src/context/ShopContext.jsx](frontend/src/context/ShopContext.jsx).
- Components consume context to manage cart data, products, and UI flows.

## Styling

- Tailwind CSS v4 utilities are used throughout components and pages.
- Global styles live in [frontend/src/index.css](frontend/src/index.css).

## Environment Variables (optional)

If you later integrate APIs, add a `.env` file in `frontend/` using the Vite prefix:

```
VITE_API_BASE_URL=https://api.example.com
```

Access them in code via `import.meta.env.VITE_API_BASE_URL`.

## Contributing

- Fork this repo and create a feature branch.
- Keep changes focused, run `npm run lint`, and open a PR.

## Troubleshooting

- Port in use: run `npm run dev -- --port 5174` to use a different port.
- Cache issues: delete `node_modules` and `package-lock.json`, then re‑install.

---

Built with ❤️ using React, Vite, and Tailwind CSS.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
