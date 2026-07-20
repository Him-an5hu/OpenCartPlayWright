# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Logout.spec.ts >> verify the logout functionality
- Location: tests\Logout.spec.ts:13:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://tutorialsninja.com/demo/", waiting until "load"

```

# Test source

```ts
  1  | import {test,expect } from "@playwright/test";
  2  | import { HomePage } from "../pages/HomePage";
  3  | import { LoginPage } from "../pages/LoginPage";
  4  | import { MyAccountPage } from "../pages/MyAccountPage";
  5  | import { LogoutPage } from "../pages/LogoutPage";
  6  | 
  7  | import { TestConfig } from "../test.config";
  8  | 
  9  | 
  10 | 
  11 | 
  12 | 
  13 | test("verify the logout functionality",async({page})=>{
  14 | 
  15 |     let config= new TestConfig();
> 16 |     await page.goto(config.appurl);
     |                ^ Error: page.goto: Target page, context or browser has been closed
  17 | 
  18 |     let homepage = new HomePage(page)
  19 |     homepage.clickMyAccount();
  20 |     homepage.clickLoginLink();
  21 | 
  22 |     let loginpage = new LoginPage(page);
  23 |     loginpage.login(config.email,config.password);
  24 | 
  25 |     let myaccount=new MyAccountPage(page);
  26 | 
  27 |      expect(await myaccount.isMyAccountPageExists()).toBeTruthy();
  28 | 
  29 |      myaccount.clickLogout();
  30 | 
  31 |      let logoutPage =new  LogoutPage(page);
  32 |     // Step 6: Verify "Continue" button is visible before clicking
  33 |   expect(await logoutPage.isContinueButtonVisible()).toBe(true);
  34 | 
  35 |   // Step 7: Click Continue and verify redirection to HomePage
  36 |   homepage = await logoutPage.clickContinue();
  37 |   expect(await homepage.isHomePageExists()).toBe(true);
  38 | 
  39 | 
  40 | 
  41 | 
  42 | })
```