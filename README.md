This is a [Next.js](https://nextjs.org/) boilerplate that is already installed with some packages.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Environments

| Name                     | Description                      |
| ------------------------ | -------------------------------- |
| NODE_ENV                 | e.g. `production`, `development` |
| NEXT_PUBLIC_API_BASE_URL | e.g. `https://dummyjson.com`     |

## Installed Packages

| Context                        | Package Name                  | Status |
| ------------------------------ | ----------------------------- | ------ |
| State Management               | Redux                         | ✅     |
| Data Fetching and Caching Tool | RTK Query                     | ✅     |
| Component Documentation        | Storybook                     | _TBD_  |
| Eslint - Auto Sort Import      | Eslint auto import            | _TBD_  |
| Unit Testing                   | Jest                          | _TBD_  |
| Component Testing              | Jest with React Test Renderer | _TBD_  |
| Automation Testing             | Cypress                       | _TBD_  |
| UI Framework                   | Tailwind                      | _TBD_  |
| UI Framework                   | Material UI                   | _TBD_  |

## Project Structure

```
nextjs-advance
├─ .env.example
├─ .eslintrc.json
├─ .gitignore
├─ next.config.js
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
│  ├─ next.svg
│  └─ vercel.svg
├─ README.md
├─ src
│  ├─ app
│  │  ├─ favicon.ico
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  └─ page.tsx
│  ├─ component
│  │  ├─ layouts
│  │  ├─ pages
│  │  └─ shareds
│  ├─ config
│  │  └─ env.ts
│  └─ redux
│     ├─ libs.tsx
│     ├─ modules
│     │  ├─ index.ts
│     │  └─ user
│     │     ├─ user.api.ts
│     │     ├─ user.slice.ts
│     │     ├─ user.type.reqres.ts
│     │     └─ user.type.ts
│     └─ store.ts
├─ tailwind.config.js
└─ tsconfig.json

```

## Remove Package Guide

To Remove the Material UI or Tailwind please follow below section

### Remove Material UI Guide

_TBD_

### Remove Tailwind UI Guide

_TBD_
