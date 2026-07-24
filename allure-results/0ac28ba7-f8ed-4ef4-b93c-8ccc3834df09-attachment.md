# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.ts >> Login Test @master @sanity @regression @smoke 
- Location: tests\Login.spec.ts:32:5

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://tutorialsninja.com/demo/", waiting until "load"

```

# Test source

```ts
  1  | import { expect, test } from "@playwright/test";
  2  | import { HomePage } from "../pages/HomePage";
  3  | import { LoginPage } from "../pages/LoginPage";
  4  | import { TestConfig } from "../test.config";
  5  | import { MyAccountPage } from "../pages/MyAccountPage";
  6  | import { LogoutPage } from "../pages/LogoutPage";
  7  | 
  8  | 
  9  | let config: TestConfig;
  10 | let homepage: HomePage;
  11 | let loginPage: LoginPage;
  12 | let myaccount: MyAccountPage;
  13 | let logout: LogoutPage;
  14 | 
  15 | test.beforeEach(async ({ page }) => {
  16 |     config = new TestConfig();
> 17 |     await page.goto(config.appurl);
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  18 |     homepage = new HomePage(page);
  19 |     loginPage = new LoginPage(page);
  20 |     myaccount = new MyAccountPage(page);
  21 |     logout = new LogoutPage(page);
  22 | })
  23 | 
  24 | 
  25 | test.afterEach(async ({ page }) => {
  26 |     // await page.waitForTimeout(3000);
  27 |     // await page.close();
  28 | })
  29 | 
  30 | 
  31 | 
  32 | test("Login Test @master @sanity @regression @smoke ", async () => {
  33 | 
  34 | 
  35 |     await homepage.clickMyAccount();
  36 |     await homepage.clickLoginLink();
  37 | 
  38 |     await loginPage.fillEmailAddress(config.email);
  39 |     await loginPage.fillPassword(config.password);
  40 |     await loginPage.clickLogin();
  41 |    
  42 |     const isLoggedIn=await myaccount.isMyAccountPageExists();
  43 |     expect(isLoggedIn).toBeTruthy();
  44 | 
  45 | })
```