import test from '@playwright/test'

test('1', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Log in with Google' }).click()
  await page.waitForLoadState('networkidle')
})

test('2', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Log in with Google' }).click()
  await page.waitForLoadState('networkidle')
})
