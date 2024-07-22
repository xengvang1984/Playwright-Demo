import { expect, type Locator, type Page } from '@playwright/test';

export class SearchPage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly searchResultsDictionaryText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.locator('#APjFqb');
    this.searchResultsDictionaryText = page.locator('span[data-dobid="hdw"]');
  }

  // Go to the search url
  async goto() {
    await this.page.goto('/');
  }

  // Fill in the search text into the input field
  async fillInSearchText(searchText: string) {
    await this.searchInput.fill(searchText);
  }

  // Validate that the search word is showing as a Dictionary word on the results page
  async validateSearchDictionaryResult(searchText: string) {
    await expect(this.searchResultsDictionaryText).toHaveText(searchText);
  }
}