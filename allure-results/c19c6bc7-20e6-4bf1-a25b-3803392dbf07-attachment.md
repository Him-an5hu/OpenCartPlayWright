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
  - generic [ref=e67]:
    - generic [ref=e68]:
      - generic:
        - generic:
          - generic:
            - img "MacBookAir"
          - generic:
            - link "iPhone 6":
              - /url: index.php?route=product/product&path=57&product_id=49
              - img "iPhone 6"
          - generic:
            - img "MacBookAir"
          - generic:
            - link "iPhone 6":
              - /url: index.php?route=product/product&path=57&product_id=49
              - img "iPhone 6"
      - generic:
        - generic [ref=e72] [cursor=pointer]: 
        - generic [ref=e73] [cursor=pointer]: 
    - heading "Featured" [level=3] [ref=e74]
    - generic [ref=e75]:
      - generic [ref=e77]:
        - generic:
          - link "MacBook":
            - /url: https://tutorialsninja.com/demo/index.php?route=product/product&product_id=43
            - img "MacBook"
        - generic [ref=e78]:
          - heading "MacBook" [level=4] [ref=e79]:
            - link "MacBook" [ref=e80] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/index.php?route=product/product&product_id=43
          - paragraph [ref=e81]: Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.1..
          - paragraph [ref=e82]:
            - text: $602.00
            - generic [ref=e83]: Ex Tax:$500.00
        - generic [ref=e84]:
          - button " Add to Cart" [ref=e85] [cursor=pointer]:
            - generic [ref=e86]: 
            - text: Add to Cart
          - button "" [ref=e87] [cursor=pointer]:
            - generic [ref=e88]: 
          - button "" [ref=e89] [cursor=pointer]:
            - generic [ref=e90]: 
      - generic [ref=e92]:
        - generic:
          - link "iPhone":
            - /url: https://tutorialsninja.com/demo/index.php?route=product/product&product_id=40
            - img "iPhone"
        - generic [ref=e93]:
          - heading "iPhone" [level=4] [ref=e94]:
            - link "iPhone" [ref=e95] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/index.php?route=product/product&product_id=40
          - paragraph [ref=e96]: iPhone is a revolutionary new mobile phone that allows you to make a call by simply tapping a nam..
          - paragraph [ref=e97]:
            - text: $123.20
            - generic [ref=e98]: Ex Tax:$101.00
        - generic [ref=e99]:
          - button " Add to Cart" [ref=e100] [cursor=pointer]:
            - generic [ref=e101]: 
            - text: Add to Cart
          - button "" [ref=e102] [cursor=pointer]:
            - generic [ref=e103]: 
          - button "" [ref=e104] [cursor=pointer]:
            - generic [ref=e105]: 
      - generic [ref=e107]:
        - generic:
          - link "Apple Cinema 30\"":
            - /url: https://tutorialsninja.com/demo/index.php?route=product/product&product_id=42
            - img "Apple Cinema 30\""
        - generic [ref=e108]:
          - heading "Apple Cinema 30\"" [level=4] [ref=e109]:
            - link "Apple Cinema 30\"" [ref=e110] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/index.php?route=product/product&product_id=42
          - paragraph [ref=e111]: The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..
          - paragraph [ref=e112]:
            - text: $110.00 $122.00
            - generic [ref=e113]: Ex Tax:$90.00
        - generic [ref=e114]:
          - button " Add to Cart" [ref=e115] [cursor=pointer]:
            - generic [ref=e116]: 
            - text: Add to Cart
          - button "" [ref=e117] [cursor=pointer]:
            - generic [ref=e118]: 
          - button "" [ref=e119] [cursor=pointer]:
            - generic [ref=e120]: 
      - generic [ref=e122]:
        - generic:
          - link "Canon EOS 5D":
            - /url: https://tutorialsninja.com/demo/index.php?route=product/product&product_id=30
            - img "Canon EOS 5D"
        - generic [ref=e123]:
          - heading "Canon EOS 5D" [level=4] [ref=e124]:
            - link "Canon EOS 5D" [ref=e125] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/index.php?route=product/product&product_id=30
          - paragraph [ref=e126]: Canon's press material for the EOS 5D states that it 'defines (a) new D-SLR category', while we'r..
          - paragraph [ref=e127]:
            - text: $98.00 $122.00
            - generic [ref=e128]: Ex Tax:$80.00
        - generic [ref=e129]:
          - button " Add to Cart" [ref=e130] [cursor=pointer]:
            - generic [ref=e131]: 
            - text: Add to Cart
          - button "" [ref=e132] [cursor=pointer]:
            - generic [ref=e133]: 
          - button "" [ref=e134] [cursor=pointer]:
            - generic [ref=e135]: 
    - generic [ref=e136]:
      - generic [ref=e138]:
        - img "Harley Davidson" [ref=e140]
        - generic:
          - img "Dell"
        - generic:
          - img "Disney"
        - generic:
          - img "Starbucks"
        - generic:
          - img "Nintendo"
        - generic:
          - img "NFL"
        - generic:
          - img "RedBull"
        - generic:
          - img "Sony"
        - generic:
          - img "Coca Cola"
        - img "Burger King" [ref=e142]
        - img "Canon" [ref=e144]
        - img "Harley Davidson" [ref=e146]
        - generic:
          - img "Dell"
        - generic:
          - img "Disney"
        - generic:
          - img "Starbucks"
        - generic:
          - img "Nintendo"
        - generic:
          - img "NFL"
        - generic:
          - img "RedBull"
        - generic:
          - img "Sony"
        - generic:
          - img "Coca Cola"
        - img "Burger King" [ref=e148]
      - generic:
        - generic [ref=e161] [cursor=pointer]: 
        - generic [ref=e162] [cursor=pointer]: 
  - contentinfo [ref=e163]:
    - generic [ref=e164]:
      - generic [ref=e165]:
        - generic [ref=e166]:
          - heading "Information" [level=5] [ref=e167]
          - list [ref=e168]:
            - listitem [ref=e169]:
              - link "About Us" [ref=e170] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=4
            - listitem [ref=e171]:
              - link "Delivery Information" [ref=e172] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=6
            - listitem [ref=e173]:
              - link "Privacy Policy" [ref=e174] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=3
            - listitem [ref=e175]:
              - link "Terms & Conditions" [ref=e176] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=5
        - generic [ref=e177]:
          - heading "Customer Service" [level=5] [ref=e178]
          - list [ref=e179]:
            - listitem [ref=e180]:
              - link "Contact Us" [ref=e181] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/contact
            - listitem [ref=e182]:
              - link "Returns" [ref=e183] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/return/add
            - listitem [ref=e184]:
              - link "Site Map" [ref=e185] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/sitemap
        - generic [ref=e186]:
          - heading "Extras" [level=5] [ref=e187]
          - list [ref=e188]:
            - listitem [ref=e189]:
              - link "Brands" [ref=e190] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=product/manufacturer
            - listitem [ref=e191]:
              - link "Gift Certificates" [ref=e192] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/voucher
            - listitem [ref=e193]:
              - link "Affiliate" [ref=e194] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=affiliate/login
            - listitem [ref=e195]:
              - link "Specials" [ref=e196] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=product/special
        - generic [ref=e197]:
          - heading "My Account" [level=5] [ref=e198]
          - list [ref=e199]:
            - listitem [ref=e200]:
              - link "My Account" [ref=e201] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/account
            - listitem [ref=e202]:
              - link "Order History" [ref=e203] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/order
            - listitem [ref=e204]:
              - link "Wish List" [ref=e205] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
            - listitem [ref=e206]:
              - link "Newsletter" [ref=e207] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/newsletter
      - separator [ref=e208]
      - paragraph [ref=e209]:
        - text: Powered By
        - link "OpenCart" [ref=e210] [cursor=pointer]:
          - /url: http://www.opencart.com
        - text: Qafox.com © 2026
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