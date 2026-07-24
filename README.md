# OpenCart Playwright Automation Framework

UI automation framework built with Playwright and TypeScript for the TutorialsNinja OpenCart demo application:
https://tutorialsninja.com/demo/

This project follows the Page Object Model (POM), supports tag-based execution, includes data-driven login coverage using JSON and CSV, and generates both Playwright HTML and Allure reports.

## Quick Overview

| Area | Value |
| --- | --- |
| Test runner | Playwright Test |
| Language | TypeScript |
| Framework style | Page Object Model (POM) |
| Data-driven inputs | JSON, CSV |
| Reporters | HTML, Allure, dot, list |
| Active browser project | Firefox |

## Features Covered

- Account registration with generated user data
- Login with configured valid credentials
- Logout flow validation
- Product search and shopping cart validation
- End-to-end checkout-oriented flow coverage
- Data-driven login scenarios from JSON and CSV

## Prerequisites

- Node.js 18+
- npm
- Playwright browser binaries

## Setup

```bash
npm install
npx playwright install
```

## Run Tests

Run all tests:

```bash
npx playwright test
```

Run tagged suites:

```bash
npm run test:master
npm run test:sanity
npm run test:regression
npm run test:datadriven
npm run test:end-to-end
npm run test:smoke
```

Run in headed or debug mode:

```bash
npm run test:master:headed
npm run test:sanity:debug
```

## Tags Used in This Suite

- @master
- @sanity
- @regression
- @datadriven
- @end-to-end
- @smoke

## Project Structure

```text
.
|-- pages/                 # Page Object classes
|-- tests/                 # Playwright test specs
|-- testdata/              # JSON and CSV input data
|-- utils/                 # Shared helpers
|-- playwright.config.ts   # Runner and project configuration
|-- test.config.ts         # Shared environment test data
|-- allure-results/        # Raw Allure results
|-- allure-report/         # Generated Allure report
|-- playwright-report/     # Generated Playwright HTML report
|-- reports/               # Additional report outputs
`-- test-results/          # Artifacts: traces, videos, screenshots
```

## Test Specs Currently in Repository

- tests/AccountRegistration.spec.ts
- tests/AddToCart.spec.ts
- tests/EndToEndTest.spec.ts
- tests/Login.spec.ts
- tests/LoginDataDriven.spec.ts
- tests/Logout.spec.ts
- tests/SearchProduct.spec.ts

## Data-Driven Inputs

Login data is consumed from:

- testdata/logindata.json
- testdata/logindata.csv

Helper methods are provided in utils/dataProvider.ts:

- getTestDataFromJson()
- getTestDataFromCsv()

## Configuration Notes

Shared test values are stored in test.config.ts:

- application URL
- login email and password
- sample product values

Current key runner settings in playwright.config.ts:

| Setting | Current Value |
| --- | --- |
| testDir | ./tests |
| timeout | 30 * 1000 |
| retries | 1 |
| workers | 1 |
| trace | on-first-retry |
| screenshot | only-on-failure |
| video | retain-on-failure |
| browser project | Firefox only |

## Reports

Open Playwright HTML report:

```bash
npx playwright show-report
```

Report and artifact directories:

- playwright-report/
- allure-results/
- allure-report/
- test-results/


