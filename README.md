# Playwright Smoke Tests

Headless smoke pack with retries and trace viewer enabled.

## Setup & Run
```bash
npm install
npx playwright install
npx playwright test
# View trace
npx playwright show-trace ./test-results/**/trace.zip
```
