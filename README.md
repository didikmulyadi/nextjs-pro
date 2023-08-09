# Boilerplate or Starter Template for Next.JS

Production boilerplate/template to develop nextjs application 🛠️🎉. Next.js App Directory + TypeScript + ESLint + Prettier + Husky + Jest + Testing Library + Cypress + Storybook + Commitlint + VSCode + Tailwind CSS + Redux Tookit + RTK Query.

Click "Use this template" to use this template and getting the updates

## Features

Developer experience first:

⚡ Next.js with App Router <br/>
🔥 Type checking TypeScript <br/>
💎 Tailwind CSS to develop the UI <br/>
🎉 Storybook for UI documentation <br/>
🦺 Unit Testing with Jest and React Testing Library <br/>
🧪 E2E Testing with Cypress <br/>
🗺️ Support multi language <br />
✅ Strict Mode for TypeScript and React 18 <br/>
📏 Linter with ESLint (default NextJS, NextJS Core Web Vitals, Eslint testing library, JS Doc, Import/Export) <br/>
💖 Code Formatter with Prettier <br/>
🦊 Husky for Git Hooks <br/>
🚓 Lint git commit with Commitlint <br/>
🗂 VSCode configuration: ESLint, Prettier <br/>
<br/>
Built-in feature from Next.js: <br/>
💡 Absolute Imports using @ prefix <br/>
☕ Minify HTML & CSS <br/>
💨 Live reload <br/>
✅ Cache busting <br/>
🗺️ Sitemap.xml and robots.txt with next-sitemap <br/>

## Installed Packages

| Category | Context                        | Package Name                                                                                                                                                                                 | Status |
| -------- | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| UI       | UI CSS Support                 | [Tailwind](https://tailwindcss.com/)                                                                                                                                                         | ✅     |
| State    | State Management               | [Redux Toolkit](https://github.com/reduxjs/redux-toolkit)                                                                                                                                    | ✅     |
| State    | Data Fetching and Caching Tool | [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)                                                                                                                                 | ✅     |
| Doc      | Component Documentation        | [Storybook](https://storybook.js.org/docs/react/get-started/install)                                                                                                                         | ✅     |
| Rules    | GitHub - Commit Rules          | [Husky](https://typicode.github.io/husky/) with [Commitlint](https://commitlint.js.org/#/concepts-commit-conventions) and [ConventionCommit](https://www.conventionalcommits.org/en/v1.0.0/) | ✅     |
| Rules    | Eslint - Auto Sort Import      | [Eslint auto import](https://www.npmjs.com/package/eslint-plugin-simple-import-sort)                                                                                                         | ✅     |
| Rules    | Eslint - Data Test ID format   | [Eslint plugin testing library](https://www.npmjs.com/package/eslint-plugin-testing-library)                                                                                                 | ✅     |
| Rules    | Eslint - Require JSDoc         | [Eslint plugin JS Doc](https://github.com/gajus/eslint-plugin-jsdoc)                                                                                                                         | ✅     |
| Rules    | Eslint - Export Rules          | [Eslint plugin import](https://github.com/import-js/eslint-plugin-import)                                                                                                                    | ✅     |
| Testing  | Unit Testing                   | [Jest](https://jestjs.io/)                                                                                                                                                                   | ✅     |
| Testing  | Component Testing              | [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)                                                                        | ✅     |
| Testing  | Automation Testing             | [Cycpress](https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test)                                                                                             | ✅     |
| I18n     | Internationalization           | Language based on route e.g. `/en`, `/id`                                                                                                                                                    | ✅     |
| Google   | Google Analytic                | _TBD_                                                                                                                                                                                        | _TBD_  |
| PWA      | Progressive Web Apps           | _TBD_                                                                                                                                                                                        | _TBD_  |

## Getting Started

Install the dependency and trigger husky

```bash
npm install && npm prepare
```

Run the project

```bash
npm run dev
```

## Environments

| Name                     | Description                      |
| ------------------------ | -------------------------------- |
| NODE_ENV                 | e.g. `production`, `development` |
| NEXT_PUBLIC_API_BASE_URL | e.g. `https://dummyjson.com`     |
| NEXT_PUBLIC_WEB_BASE_URL | e.g. `https://didikmulyadi.com`  |

## Rules

### Commit

By default, you will got an error when the commit format is wrong. See the rules [commitlint.config.js](https://github.com/didikmulyadi/nextjs-advance/blob/main/commitlint.config.js)

### Eslint

We implement the eslint to enforce React best practice is applied in the project. The config stored in `eslintrc.json`

1. For the import rules, check `"simple-import-sort/imports"` from `rules`
2. For the test id format, check `"testing-library/consistent-data-testid"` from `rules`

```
❌ input__email#
✅ input__email
✅ button__login
✅ list__user
✅ item__user1
```

3. For the boolean props name, check `"react/boolean-prop-naming"` from `rules`

```
❌ enabled
✅ isEnabled
✅ hasItem
```

4. For the component function type, check `"react/function-component-definition"` from `rules`

```
❌ function Component() {
    return (
        ...
    )
}
✅ const Component = () => {
    return (
        ...
    )
}
```

3. For the JS Doc, every interface or function should have a js-doc, check `"jsdoc/require-jsdoc"` from `rules`

```
/**
 * Used to store the main data after logged-in
 */
export interface IUserSlice {
  /**
   * User name
   */
  name: string
  /**
   * Authorization token
   */
  token: string
}
```

4. For the export, we will throw you an error when the export is unused. check `"import/no-unused-modules"` from `rules`.
   This rules is disabled for spesific path, the configuration is stored in `.eslintrc.json`

```
  "overrides": [
    {
      "files": [
        "./src/app/**/*.ts",
        "./src/redux/modules/**/*.api.ts",
        "./src/redux/modules/**/*.slice.ts",
        "./src/component/**/*.stories.ts"
      ],
      "rules": {
        "import/no-unused-modules": "off"
      }
    }
  ],
```

5. For the export should be in the last of the code. check `"import/exports-last"` from `rules`.

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

### Remove Material UI Guide

_TBD_

### Remove Tailwind UI Guide

_TBD_

### Remove Eslint Auto Import Rules

1. run `npm uninstall eslint-plugin-simple-import-sort`
2. remove `"simple-import-sort"` from `plugins` in `eslintrc.json`
3. remove `"simple-import-sort/imports"` from `rules` in `eslintrc.json`

### Remove Eslint Testing Library

1. run `npm uninstall eslint-plugin-testing-library`
2. remove `""testing-library""` from `plugins` in `eslintrc.json`
3. remove `"testing-library/*"` from `rules` in `eslintrc.json`

### Remove Eslint JS Doc

1. run `npm uninstall eslint-plugin-jsdoc`
2. remove `""js-doc""` from `plugins` in `eslintrc.json`
3. remove `"jsdoc/*"` from `rules` in `eslintrc.json`

### Remove Export Rules

1. run `npm uninstall eslint-plugin-import`
2. remove `""import""` from `plugins` in `eslintrc.json`
3. remove `"import/no-unused-modules"` from `rules` in `eslintrc.json`
4. remove `"import/exports-last"` from `rules` in `eslintrc.json`
