# Unit Testing in JavaScript

![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-29-C21325?logo=jest&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)

Three self-contained Node.js subprojects demonstrating Jest unit testing across arithmetic, array, string-routing, DOM utility, and conditional logic functions.

---

## Table of Contents

- [Subprojects](#subprojects)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation and Usage](#installation-and-usage)
- [Project Structure](#project-structure)
- [Limitations](#limitations)
- [License](#license)

---

## Subprojects

### `basic-unit-tests/`
Jest unit tests for four standalone functions:
- **`sum.js`** — adds two numbers
- **`subtract.js`** — subtracts two numbers
- **`cloneArray.js`** — shallow-clones an array via the spread operator
- **`eng-spa.js`** — maps English/Spanish language codes to URL path strings

### `dom-e2e-tests/`
DOM utility functions with Jest unit tests and a Puppeteer E2E scaffold:
- **`util.js`** — three exported functions: `generateText` (formats a name + age string), `createElement` (creates a DOM element), `validateInput` (validates non-empty and numeric inputs)
- **`app.js`** — event-driven DOM app that appends user entries to a list
- **`index.html`** — form UI rendered in the browser
- Puppeteer E2E tests are present in `util.test.js` but commented out; they require a live local server and a manually set URL

### `unitlinter/`
Jest unit tests with coverage reporting for three functions:
- **`arrayss.js`** — maps array elements to their squares
- **`equal.js`** — equality check, number squaring with type validation, and a stub DB connection
- **`conditional.js`** — returns different values based on numeric input ranges

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| Node.js 18+ | Runtime |
| Jest 29 | Test runner and assertion library |
| Puppeteer 19 | Headless browser for E2E testing (`dom-e2e-tests` only) |

---

## Prerequisites

- Node.js 18 or later
- npm

---

## Installation and Usage

Each subproject is independent. Run the following inside each directory:

```bash
npm install
npm test
```

**`basic-unit-tests/`**
```bash
cd basic-unit-tests
npm install
npm test          # runs jest
```

**`dom-e2e-tests/`**
```bash
cd dom-e2e-tests
npm install
npm test          # runs jest (unit tests only; E2E tests are commented out)
```

> To enable E2E tests: open a local server serving `index.html`, then paste the URL into `util.test.js` line 19 and uncomment the Puppeteer test block.

**`unitlinter/`**
```bash
cd unitlinter
npm install
npm test          # runs jest --coverage; HTML report at coverage/lcov-report/index.html
```

---

## Project Structure

```
unit-testing/
├── basic-unit-tests/
│   ├── package.json
│   ├── cloneArray.js / cloneArray.test.js
│   ├── sum.js / sum.test.js
│   ├── subtract.js / subtract.test.js
│   └── eng-spa.js / eng-spa.test.js
├── dom-e2e-tests/
│   ├── package.json
│   ├── util.js / util.test.js
│   ├── app.js
│   ├── index.html / styles.css
│   └── dist/main.js
├── unitlinter/
│   ├── package.json
│   ├── arrayss.js / __tests__/arrayss.test.js
│   ├── equal.js / __tests__/equal.test.js
│   └── conditional.js / __tests__/condition.test.js
├── LICENSE
└── README.md
```

---

## Limitations

- **Exercises only** — these are learning examples, not a shared library or application.
- **No root test runner** — each subproject must be tested individually; there is no top-level `npm test` that runs all three.
- **E2E tests non-functional by default** — the Puppeteer test block in `dom-e2e-tests/util.test.js` is commented out and requires a running local server plus a manually entered URL.

---

## License

Released under the [MIT License](LICENSE).
