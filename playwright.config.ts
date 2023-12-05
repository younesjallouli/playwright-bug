import { defineConfig, devices } from '@playwright/test'

let baseUrl = 'https://app.hightouch.com/'

export default defineConfig({
  testDir: 'src/tests',
  maxFailures: 1,
  retries: 0,
  outputDir: 'playwright-results',
  reporter: [['html']],
  use: {
    baseURL: baseUrl,
    ...devices['Desktop Chromium'],
    viewport: { width: 1600, height: 900 },
    launchOptions: {
      args: ['--start-fullscreen'],
    },
  },

  projects: [
    {
      name: 'All',
      testMatch: /.spec\.ts/,
    },
  ],
})
