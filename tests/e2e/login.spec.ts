import { test, expect } from '../../fixtures/authFixture';

test('login with correct credentials', async ({ loginPage }) => {
  await loginPage.fillUsername('tomsmith');
  await loginPage.fillPassword('SuperSecretPassword!');
  await loginPage.submit();

  const message = await loginPage.getFlashMessage();
  expect(message).toContain('You logged into a secure area!');
});

test('login with wrong credentials', async ({ loginPage }) => {
  await loginPage.fillUsername('wronguser');
  await loginPage.fillPassword('wrongpass');
  await loginPage.submit();

  const message = await loginPage.getFlashMessage();
  expect(message).toContain('Your username is invalid!');
});

test('login with empty username/password', async ({ loginPage }) => {
  await loginPage.login('', '');

  const message = await loginPage.getFlashMessage();
  expect(message).toContain('Your username is invalid!');
});

test('login with long username (expected to fail)', async ({ loginPage }) => {
  await loginPage.login('a'.repeat(100), 'SuperSecretPassword!');

  const message = await loginPage.getFlashMessage();

  expect(message).toContain('THIS WILL FAIL');
});