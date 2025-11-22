# Playwright TS Starter

A simple Playwright TypeScript project for E2E testing:

- Uses Playwright Fixtures
- Includes Page Object Pattern
- Supports trace debugging
- Generates HTML reports
- GitHub Pages auto-publishes HTML report

## Get Started

```bash
# Install dependencies
npm install

# Run tests
npx playwright test

# Open HTML report
npx playwright show-report
```

View HTML test report: [Playwright Report](https://yassineouhadi.github.io/playwright-ts-starter/playwright-report/)

## Project Structure

```
/tests             # E2E test files
/pages             # Page Object Models
/playwright-report # HTML test report
/playwright.config.ts
```