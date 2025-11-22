import { test as base } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';

type MyFixtures = {
  loginPage: LoginPage;
};

export const test = base.extend<MyFixtures & { userSession: LoginPage }>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await use(loginPage);
  },

  userSession: async ({ loginPage }, use) => {
    await loginPage.login('tomsmith', 'SuperSecretPassword!');
    await use(loginPage);
    await loginPage.page.context().clearCookies();
  },
});

export const expect = test.expect;