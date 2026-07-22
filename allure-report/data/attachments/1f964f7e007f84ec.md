# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.ts >> Login Test
- Location: tests\Login.spec.ts:9:5

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for getByLabel('E-Mail Address')

```

# Test source

```ts
  1  | /**
  2  |  * Test Case: Login with Valid Credentials
  3  |  * 
  4  |  * Tags: @master @sanity @regression
  5  |  * 
  6  |  * Steps:
  7  |  * 1) Navigate to the application URL
  8  |  * 2) Navigate to Login page via Home page
  9  |  * 3) Enter valid credentials and log in
  10 |  * 4) Verify successful login by checking 'My Account' page presence
  11 |  */
  12 | 
  13 | import {Page, expect, Locator} from '@playwright/test';
  14 | import { promises } from 'node:dns';
  15 | 
  16 | export class LoginPage
  17 | {
  18 |     private readonly page:Page;
  19 |     private readonly emailAddress:Locator;
  20 |     private readonly password:Locator;
  21 |     private readonly LoginBtn:Locator;
  22 |     private readonly WarningMessage:Locator;
  23 | 
  24 |     constructor(page:Page)
  25 |     {   this.page=page;
  26 |         
  27 |         this.emailAddress=page.getByLabel('E-Mail Address');
  28 |         this.password=page.getByLabel('Password');
  29 |         this.LoginBtn=page.locator('input[type="submit"]');
  30 |         this.WarningMessage=page.locator(".alert.alert-danger.alert-dismissible");
  31 |     }
  32 | 
  33 |     //action methods 
  34 | 
  35 | /**
  36 |      * Sets the email address in the email field
  37 |      * @param emailAddress - Email address to enter
  38 |      */
  39 | 
  40 |     async fillEmailAddress(LoginEmail:string)
  41 |     {
> 42 |         await this.emailAddress.fill(LoginEmail);
     |                                 ^ Error: locator.fill: Target page, context or browser has been closed
  43 |     }
  44 | 
  45 |     
  46 |     /**
  47 |      * Sets the password in the password field
  48 |      * @param password - Password to enter
  49 |      */
  50 | 
  51 | 
  52 |     async fillPassword(LoginPass:string)
  53 |     {
  54 |         await this.password.fill(LoginPass);
  55 |     }
  56 | 
  57 | /**
  58 |      * Clicks the login button
  59 |      */
  60 | 
  61 | 
  62 |     async clickLogin()
  63 |     {
  64 |         await this.LoginBtn.click();
  65 |     }
  66 | 
  67 | /**
  68 |      * Performs complete login action
  69 |      * @param email - Email address to enter
  70 |      * @param password - Password to enter
  71 |      */
  72 | 
  73 |     async login(LoginEmail: string, LoginPass: string)
  74 |     {
  75 |         await this.fillEmailAddress(LoginEmail);
  76 |         await this.fillPassword(LoginPass);
  77 |         await this.clickLogin();
  78 |     }
  79 | 
  80 |     async getloginErrorMessage():Promise<string | null>
  81 |     {
  82 |         return (this.WarningMessage.textContent());
  83 |     }
  84 | 
  85 | 
  86 | 
  87 |     
  88 | 
  89 | }
```