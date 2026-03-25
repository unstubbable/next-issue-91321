import { defineConfig, devices } from "@playwright/test";

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  /* When a test runs longer than 5 seconds consider it failed */
  timeout: 5000,
  // Our tests are located in the src folder next to the code
  testDir: "./app",
  // Match all files ending in e2e.ts
  testMatch: /.*\.e2e\.ts/,
  /* Run the tests one at a time, so the back-end database reset works */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  retries: 5,
  /* Opt out of parallel tests */
  workers: 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [["list"], ["html", { open: "never" }]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: "http://localhost:3000/",

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: {
      mode: "retain-on-failure",
    },
    launchOptions: {
      // slowMo: 500, // Slow the clicks down so videos are easier to view
    },
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
});
