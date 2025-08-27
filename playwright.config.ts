import { defineConfig } from '@playwright/test';

export default defineConfig({
  retries: 2,
  use: {
    headless: true,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  reporter: [['list'], ['html']]
});
