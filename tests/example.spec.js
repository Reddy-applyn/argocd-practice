import { test, expect } from '@playwright/test';

test('Nginx application should open successfully', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Welcome to nginx/);

  await expect(
    page.getByRole('heading', { name: 'Welcome to nginx!' })
  ).toBeVisible();
});