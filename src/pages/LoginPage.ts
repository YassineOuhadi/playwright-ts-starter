import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/login');
  }

  async fillUsername(username: string) {
    await this.page.fill("input[name='username']", username);
  }

  async fillPassword(password: string) {
    await this.page.fill("input[name='password']", password);
  }

  async submit() {
    await this.page.click("button[type='submit']");
  }

  async getFlashMessage() {
    return this.page.locator('#flash').textContent();
  }
}