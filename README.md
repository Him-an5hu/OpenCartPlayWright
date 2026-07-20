# Open Cart Playwright Automation

Playwright + TypeScript UI automation framework for the TutorialsNinja OpenCart demo site: `https://tutorialsninja.com/demo/`.

The suite is built around the Page Object Model, supports tag-based execution, includes data-driven login coverage from JSON and CSV, and produces both Playwright HTML and Allure reports.

## At a Glance

| Area | Details |
| --- | --- |
| Test runner | Playwright Test |
| Language | TypeScript |
| Design pattern | Page Object Model |
| Data-driven sources | JSON, CSV |
| Reporting | HTML, Allure, dot, list |
| Current browser project | Firefox |

## What This Project Covers

- Account registration with randomized user data
- Login with configured valid credentials
- Data-driven login scenarios using JSON test records
- Data-driven login scenarios using CSV test records

## Quick Start

```bash
npm install
npx playwright install
npx playwright test
```

To open the Playwright HTML report after a run:

```bash
npx playwright show-report
```

## Available Test Commands

| Command | Purpose |
| --- | --- |
| `npx playwright test` | Run the full suite |
| `npm run test:master` | Run tests tagged with `@master` |
| `npm run test:sanity` | Run tests tagged with `@sanity` |
| `npm run test:regression` | Run tests tagged with `@regression` |
| `npm run test:datadriven` | Run tests tagged with `@datadriven` |
| `npm run test:master:headed` | Run `@master` tests in headed mode |
| `npm run test:sanity:debug` | Run `@sanity` tests in debug mode |

## Tag Strategy

The suite uses Playwright grep tags for targeted execution:

- `@master`
- `@sanity`
- `@regression`
- `@datadriven`

## Project Layout

```text
.
|-- pages/                 # Page objects for application flows
|-- tests/                 # Playwright spec files
|-- testdata/              # JSON and CSV input files
|-- utils/                 # Shared helpers and generators
|-- playwright.config.ts   # Playwright runner setup
|-- test.config.ts         # Environment-specific test values
|-- allure-results/        # Raw Allure output
|-- allure-report/         # Generated Allure HTML report
|-- playwright-report/     # Generated Playwright HTML report
|-- reports/               # Additional report output
`-- test-results/          # Screenshots, traces, videos, and failures
```

## Core Framework Design

### Page Object Layer

The `pages/` directory contains reusable page classes for major application areas, including:

- Home page navigation
- Login page interactions and error validation
- Registration flow actions
- My Account page verification
- Product, cart, checkout, and logout page abstractions

### Utility Layer

The `utils/` directory provides:

- `dataProvider.ts` for JSON and CSV test data loading
- `randomDataGenerator.ts` for generating registration data

## Test Data

The login data-driven suite currently reads from:

- `testdata/logindata.json`
- `testdata/logindata.csv`

`utils/dataProvider.ts` exposes:

- `getTestDataFromJson()` to read JSON records
- `getTestDataFromCsv()` to parse CSV rows into objects

## Configuration

### Shared Test Values

`test.config.ts` stores values reused across tests, including:

- application URL
- valid login email
- valid login password
- sample product values used by commerce flows

If the target environment or account changes, update `test.config.ts` before running authentication-related scenarios.

### Playwright Runner Settings

The active configuration in `playwright.config.ts` currently uses:

| Setting | Current Value |
| --- | --- |
| `testDir` | `./tests` |
| `timeout` | `30 * 1000` |
| `retries` | `1` |
| `workers` | `2` |
| `trace` | `on-first-retry` |
| `screenshot` | `only-on-failure` |
| `video` | `retain-on-failure` |
| Browser project | Firefox only |

## Reporting and Artifacts

The project is configured with these reporters:

- HTML
- Allure Playwright
- dot
- list

Generated outputs are written to:

- `playwright-report/`
- `allure-results/`
- `allure-report/`
- `test-results/`

If you use the Allure CLI locally, you can regenerate or serve Allure output from the raw results directory.

## Current Specs

- `tests/AccountRegistration.spec.ts`
- `tests/Login.spec.ts`
- `tests/LoginDataDriven.spec.ts`

## Prerequisites

- Node.js 18 or later
- npm
- Local Playwright browser installation

## Notes

- The suite currently targets the public TutorialsNinja demo application.
- Firefox is the only active browser project in the current Playwright configuration.
- Login success scenarios depend on the credentials defined in `test.config.ts` staying valid.
- Generated report folders are already present in the repository and will change after each run.

## Recommended Next Improvements

- Move environment-specific values into `.env` files or CI-managed secrets.
- Add a default `test` script in `package.json` for the full suite.
- Document CI usage once the suite is wired into GitHub Actions or another pipeline.
- Expand active coverage for search, cart, checkout, and logout if those page objects are intended to be part of the maintained suite.