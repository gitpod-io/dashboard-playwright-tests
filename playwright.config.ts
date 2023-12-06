import { defineConfig, devices } from '@playwright/test';

// to generate auth npx playwright codegen hw-org-cls.preview.gitpod-dev.com/workspaces --save-storage=.auth/class_session.json
// process.env.GITPOD_HOST = 'at-user-geb0763b1589.preview.gitpod-dev.com';
// process.env.GITPOD_AUTH_SESSION = '.auth/preview_session.json';

// process.env.GITPOD_HOST = 'hw-papi-ws-related.preview.gitpod-dev.com';
// process.env.GITPOD_AUTH_SESSION = '.auth/workspace_session.json';

process.env.GITPOD_HOST = 'hw-org-cls.preview.gitpod-dev.com';
process.env.GITPOD_AUTH_SESSION = '.auth/class_session.json';


// process.env.GITPOD_HOST = 'gitpod.io';
// process.env.GITPOD_AUTH_SESSION = '.auth/session.json';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  timeout: 120000,
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        storageState: process.env.GITPOD_AUTH_SESSION,
      },
    }

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
    //],

    /* Run your local dev server before starting the tests */
    // webServer: {
    //   command: 'npm run start',
    //   url: 'http://127.0.0.1:3000',
    //   reuseExistingServer: !process.env.CI,
    // },
  ]
});