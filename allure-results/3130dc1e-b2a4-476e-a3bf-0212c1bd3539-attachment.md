# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AccountRegistration.spec.ts >> User Registration Test @master @sanity @regression
- Location: tests\AccountRegistration.spec.ts:40:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://tutorialsninja.com/demo/", waiting until "load"

```

```
Error: page.waitForTimeout: Target page, context or browser has been closed
```

# Test source

```ts
  1  | /**
  2  |  * Test Case: Account Registration
  3  |  * 
  4  |  * Tags: @master @sanity @regression
  5  |  * 
  6  |  * Steps:
  7  |  * 1) Navigate to application URL 
  8  |  * 2) Go to 'My Account' and click 'Register'
  9  |  * 3) Fill in registration details with random data
  10 |  * 4) Agree to Privacy Policy and submit the form
  11 |  * 5) Validate the confirmation message
  12 |  */
  13 | 
  14 | import { test, expect } from '@playwright/test';
  15 | import { HomePage } from '../pages/HomePage';
  16 | import { RegistrationPage } from '../pages/RegistrationPage';
  17 | import { dataProvider } from '../utils/dataProvider';
  18 | import { RandomDataUtils } from '../utils/randomDataGenerator';
  19 | import { TestConfig } from '../test.config';
  20 | 
  21 | let homePage: HomePage;
  22 | let registrationPage: RegistrationPage;
  23 | 
  24 | test.beforeEach(async ({ page }) => {
  25 | 
  26 |     // * 1) Navigate to application URL 
  27 |     const config = new TestConfig();
  28 |     await page.goto(config.appurl);
  29 |     homePage = new HomePage(page); // when ever you create any object class for page object class you have to pass page
  30 |     registrationPage = new RegistrationPage(page);
  31 | 
  32 | })
  33 | 
  34 | 
  35 | test.afterEach(async ({ page }) => {
> 36 |     await page.waitForTimeout(3000);
     |                ^ Error: page.waitForTimeout: Target page, context or browser has been closed
  37 |     await page.close();
  38 | })
  39 | 
  40 | test('User Registration Test @master @sanity @regression', async ({ }) => {
  41 | 
  42 | 
  43 |     //* 2) Go to 'My Account' and click 'Register'
  44 | 
  45 |     await homePage.clickMyAccount();
  46 |     await homePage.clickRegisterLink();
  47 | 
  48 |     //* 3) Fill in registration details with random data
  49 | 
  50 |     await registrationPage.setFirstName(RandomDataUtils.getFirstName());
  51 |     await registrationPage.setLastName(RandomDataUtils.getLastName());
  52 |     await registrationPage.setEmail(RandomDataUtils.getEmail());
  53 |     await registrationPage.setTelephone(RandomDataUtils.getPhoneNumber());
  54 | 
  55 |     const password = RandomDataUtils.getPassword();
  56 |     await registrationPage.setPassword(password);
  57 |     await registrationPage.setConfirmPassword(password);
  58 | 
  59 |     await registrationPage.checkPrivacyPolicy();
  60 |     await registrationPage.clickContinue();
  61 | 
  62 |     const confirationMSG = await registrationPage.getConfirmationMessage();
  63 |     expect(confirationMSG).toContain('Your Account Has Been Created!')
  64 | 
  65 | 
  66 | 
  67 | 
  68 | 
  69 | 
  70 | 
  71 | 
  72 | 
  73 | 
  74 | 
  75 | 
  76 | 
  77 | 
  78 | })
  79 | 
  80 | 
```