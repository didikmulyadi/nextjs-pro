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

| Category | Context                        | Package Name                                                                                                                                                                                 | Status |
| -------- | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| UI       | UI CSS Support                 | [Tailwind](https://tailwindcss.com/)                                                                                                                                                         | ✅     |
| State    | State Management               | [Redux Toolkit](https://github.com/reduxjs/redux-toolkit)                                                                                                                                    | ✅     |
| State    | Data Fetching and Caching Tool | [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)                                                                                                                                 | ✅     |
| Doc      | Component Documentation        | [Storybook](https://storybook.js.org/)                                                                                                                                                       | _TBD_  |
| Testing  | Unit Testing                   | _TBD_                                                                                                                                                                                        | _TBD_  |
| Testing  | Component Testing              | _TBD_                                                                                                                                                                                        | _TBD_  |
| Testing  | Automation Testing             | _TBD_                                                                                                                                                                                        | _TBD_  |
| Rules    | GitHub - Commit Rules          | [Husky](https://typicode.github.io/husky/) with [Commitlint](https://commitlint.js.org/#/concepts-commit-conventions) and [ConventionCommit](https://www.conventionalcommits.org/en/v1.0.0/) | ✅     |
| Rules    | Eslint - Auto Sort Import      | [Eslint auto import](https://www.npmjs.com/package/eslint-plugin-simple-import-sort)                                                                                                         | ✅     |

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
