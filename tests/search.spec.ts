import { test, expect } from '@playwright/test';
import { SearchPage } from '../pages/search-page';

test('Search test on Google', async ({ page }) => {
  const searchPage = new SearchPage(page);
  const searchText = 'test';

  // Go to sea
  await searchPage.goto();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Google/);

  // Text input
  await searchPage.fillInSearchText(searchText);

  // Press enter key to perform search
  await page.keyboard.press('Enter');

  // Validate google result has test
  await searchPage.validateSearchDictionaryResult(searchText);
});