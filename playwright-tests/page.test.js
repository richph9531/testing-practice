import test, { expect } from '@playwright/test';

test('google', async ({ page }) => {
  await page.goto('https://google.com');
  await expect(page).toHaveScreenshot();
});

test('local app', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveScreenshot();
});