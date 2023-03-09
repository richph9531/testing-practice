import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './playwright-tests',
  outputDir: './playwright-tests/results',
  timeout: 30 * 1000,
  expect: { timeout: 30000 },
  fullyParallel: true,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  projects: [
    { name: 'chromeDesktop', use: { ...devices['Desktop Chrome'] } },
  ],
};

export default config;
