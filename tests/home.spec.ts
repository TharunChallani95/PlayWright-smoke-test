import { test, expect } from '@playwright/test';

test('homepage loads and has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

test('docs search works', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByPlaceholder('Search').click();
  await page.keyboard.type('trace viewer');
  await expect(page).toHaveURL(/search/);
});
