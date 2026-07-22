# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AccountRegistration.spec.ts >> User Registration Test
- Location: tests\AccountRegistration.spec.ts:21:5

# Error details

```
TypeError: received is not iterable
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - button "$ Currency " [ref=e7] [cursor=pointer]:
        - strong [ref=e8]: $
        - text: Currency
        - generic [ref=e9]: 
      - list [ref=e11]:
        - listitem [ref=e12]:
          - link "" [ref=e13] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=information/contact
            - generic [ref=e14]: 
          - text: "123456789"
        - listitem [ref=e15]:
          - link " My Account" [ref=e16] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/account
            - generic [ref=e17]: 
            - text: My Account
        - listitem [ref=e19]:
          - link " Wish List (0)" [ref=e20] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
            - generic [ref=e21]: 
            - text: Wish List (0)
        - listitem [ref=e22]:
          - link " Shopping Cart" [ref=e23] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=checkout/cart
            - generic [ref=e24]: 
            - text: Shopping Cart
        - listitem [ref=e25]:
          - link " Checkout" [ref=e26] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=checkout/checkout
            - generic [ref=e27]: 
            - text: Checkout
  - banner [ref=e28]:
    - generic [ref=e30]:
      - heading "Qafox.com" [level=1] [ref=e33]:
        - link "Qafox.com" [ref=e34] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=common/home
      - generic [ref=e36]:
        - textbox "Search" [ref=e37]
        - button "" [ref=e39] [cursor=pointer]:
          - generic [ref=e40]: 
      - button " 0 item(s) - $0.00" [ref=e43] [cursor=pointer]:
        - generic [ref=e44]: 
        - text: 0 item(s) - $0.00
  - navigation [ref=e46]:
    - generic: 
    - list [ref=e48]:
      - listitem [ref=e49]:
        - link "Desktops" [ref=e50] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=20
      - listitem [ref=e51]:
        - link "Laptops & Notebooks" [ref=e52] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=18
      - listitem [ref=e53]:
        - link "Components" [ref=e54] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=25
      - listitem [ref=e55]:
        - link "Tablets" [ref=e56] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=57
      - listitem [ref=e57]:
        - link "Software" [ref=e58] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=17
      - listitem [ref=e59]:
        - link "Phones & PDAs" [ref=e60] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=24
      - listitem [ref=e61]:
        - link "Cameras" [ref=e62] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=33
      - listitem [ref=e63]:
        - link "MP3 Players" [ref=e64] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=34
  - generic [ref=e65]:
    - list [ref=e66]:
      - listitem [ref=e67]:
        - link "" [ref=e68] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=common/home
          - generic [ref=e69]: 
      - listitem [ref=e70]:
        - link "Account" [ref=e71] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=account/account
      - listitem [ref=e72]:
        - link "Register" [ref=e73] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=account/register
    - generic [ref=e74]:
      - generic [ref=e75]:
        - heading "Register Account" [level=1] [ref=e76]
        - paragraph [ref=e77]:
          - text: If you already have an account with us, please login at the
          - link "login page" [ref=e78] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/login
          - text: .
        - generic [ref=e79]:
          - group "Your Personal Details" [ref=e80]:
            - generic [ref=e81]: Your Personal Details
            - text: "*"
            - generic [ref=e82]:
              - generic [ref=e83]: "* First Name"
              - textbox "* First Name" [ref=e85]:
                - /placeholder: First Name
                - text: Rose
            - generic [ref=e86]:
              - generic [ref=e87]: "* Last Name"
              - textbox "* Last Name" [ref=e89]:
                - /placeholder: Last Name
                - text: Johnpaul.Keeling@hotmail.com
            - generic [ref=e90]:
              - generic [ref=e91]: "* E-Mail"
              - generic [ref=e92]:
                - textbox "* E-Mail" [ref=e93]:
                  - /placeholder: E-Mail
                - generic [ref=e94]: E-Mail Address does not appear to be valid!
            - generic [ref=e95]:
              - generic [ref=e96]: "* Telephone"
              - textbox "* Telephone" [ref=e98]:
                - /placeholder: Telephone
                - text: 799.718.5726
          - group "Your Password" [ref=e99]:
            - generic [ref=e100]: Your Password
            - generic [ref=e101]:
              - generic [ref=e102]: "* Password"
              - textbox "* Password" [ref=e104]:
                - /placeholder: Password
                - text: cKOgccG6Xjjvz8v
            - generic [ref=e105]:
              - generic [ref=e106]: "* Password Confirm"
              - textbox "* Password Confirm" [ref=e108]:
                - /placeholder: Password Confirm
                - text: cKOgccG6Xjjvz8v
          - group "Newsletter" [ref=e109]:
            - generic [ref=e110]: Newsletter
            - generic [ref=e111]:
              - generic [ref=e112]: Subscribe
              - generic [ref=e113]:
                - generic [ref=e114] [cursor=pointer]:
                  - radio "Yes" [ref=e115]
                  - text: "Yes"
                - generic [ref=e116] [cursor=pointer]:
                  - radio "No" [checked] [ref=e117]
                  - text: "No"
          - generic [ref=e118]:
            - text: I have read and agree to the
            - link "Privacy Policy" [ref=e119] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/index.php?route=information/information/agree&information_id=3
            - checkbox [checked] [ref=e120]
            - button "Continue" [ref=e121] [cursor=pointer]
      - complementary [ref=e122]:
        - generic [ref=e123]:
          - link "Login" [ref=e124] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/login
          - link "Register" [ref=e125] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/register
          - link "Forgotten Password" [ref=e126] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/forgotten
          - link "My Account" [ref=e127] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/account
          - link "Address Book" [ref=e128] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/address
          - link "Wish List" [ref=e129] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
          - link "Order History" [ref=e130] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/order
          - link "Downloads" [ref=e131] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/download
          - link "Recurring payments" [ref=e132] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/recurring
          - link "Reward Points" [ref=e133] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/reward
          - link "Returns" [ref=e134] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/return
          - link "Transactions" [ref=e135] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/transaction
          - link "Newsletter" [ref=e136] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/newsletter
  - contentinfo [ref=e137]:
    - generic [ref=e138]:
      - generic [ref=e139]:
        - generic [ref=e140]:
          - heading "Information" [level=5] [ref=e141]
          - list [ref=e142]:
            - listitem [ref=e143]:
              - link "About Us" [ref=e144] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=4
            - listitem [ref=e145]:
              - link "Delivery Information" [ref=e146] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=6
            - listitem [ref=e147]:
              - link "Privacy Policy" [ref=e148] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=3
            - listitem [ref=e149]:
              - link "Terms & Conditions" [ref=e150] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=5
        - generic [ref=e151]:
          - heading "Customer Service" [level=5] [ref=e152]
          - list [ref=e153]:
            - listitem [ref=e154]:
              - link "Contact Us" [ref=e155] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/contact
            - listitem [ref=e156]:
              - link "Returns" [ref=e157] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/return/add
            - listitem [ref=e158]:
              - link "Site Map" [ref=e159] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/sitemap
        - generic [ref=e160]:
          - heading "Extras" [level=5] [ref=e161]
          - list [ref=e162]:
            - listitem [ref=e163]:
              - link "Brands" [ref=e164] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=product/manufacturer
            - listitem [ref=e165]:
              - link "Gift Certificates" [ref=e166] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/voucher
            - listitem [ref=e167]:
              - link "Affiliate" [ref=e168] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=affiliate/login
            - listitem [ref=e169]:
              - link "Specials" [ref=e170] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=product/special
        - generic [ref=e171]:
          - heading "My Account" [level=5] [ref=e172]
          - list [ref=e173]:
            - listitem [ref=e174]:
              - link "My Account" [ref=e175] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/account
            - listitem [ref=e176]:
              - link "Order History" [ref=e177] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/order
            - listitem [ref=e178]:
              - link "Wish List" [ref=e179] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
            - listitem [ref=e180]:
              - link "Newsletter" [ref=e181] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/newsletter
      - separator [ref=e182]
      - paragraph [ref=e183]:
        - text: Powered By
        - link "OpenCart" [ref=e184] [cursor=pointer]:
          - /url: http://www.opencart.com
        - text: Qafox.com © 2026
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
  14 | import {test,expect} from '@playwright/test';
  15 | import {HomePage} from '../pages/HomePage';
  16 | import {RegistrationPage} from '../pages/RegistrationPage';
  17 | import {dataProvider} from '../utils/dataProvider';
  18 | import {RandomDataUtils} from '../utils/randomDataGenerator';
  19 | import {TestConfig} from '../test.config';
  20 | 
  21 | test('User Registration Test',async({page})=>
  22 | {
  23 | // * 1) Navigate to application URL 
  24 | const config=new TestConfig();
  25 | await page.goto(config.appurl);
  26 | 
  27 | //* 2) Go to 'My Account' and click 'Register'
  28 | const homePage=new HomePage(page); // when ever you create any object class for page object class you have to pass page
  29 | await homePage.clickMyAccount();
  30 | await homePage.clickRegisterLink();
  31 | 
  32 | //* 3) Fill in registration details with random data
  33 | const registrationPage=new RegistrationPage(page);
  34 | 
  35 | await registrationPage.setFirstName(RandomDataUtils.getFirstName());
  36 | await registrationPage.setLastName(RandomDataUtils.getLastName());
  37 | await registrationPage.setLastName(RandomDataUtils.getEmail());
  38 | await registrationPage.setTelephone(RandomDataUtils.getPhoneNumber());
  39 | 
  40 | const password= RandomDataUtils.getPassword();
  41 | await registrationPage.setPassword(password);
  42 | await registrationPage.setConfirmPassword(password);
  43 | 
  44 | await registrationPage.checkPrivacyPolicy();
  45 | await registrationPage.clickContinue();
  46 | 
  47 | const confirationMSG=registrationPage.getConfirmationMessage();
> 48 | expect(confirationMSG).toContain('Your Account Has Been Created!')
     |                        ^ TypeError: received is not iterable
  49 | 
  50 | await page.waitForTimeout(3000);
  51 | 
  52 | 
  53 | 
  54 | 
  55 | 
  56 | 
  57 | 
  58 | 
  59 | 
  60 | 
  61 | 
  62 | 
  63 | })
  64 | 
  65 | 
```