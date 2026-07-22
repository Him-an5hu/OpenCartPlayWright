import { expect, test } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { TestConfig } from "../test.config";
import { MyAccountPage } from "../pages/MyAccountPage";
import { LogoutPage } from "../pages/LogoutPage";


let config: TestConfig;
let homepage: HomePage;
let loginPage: LoginPage;
let myaccount: MyAccountPage;
let logout: LogoutPage;

test.beforeEach(async ({ page }) => {
    config = new TestConfig();
    await page.goto(config.appurl);
    homepage = new HomePage(page);
    loginPage = new LoginPage(page);
    myaccount = new MyAccountPage(page);
    logout = new LogoutPage(page);
})


test.afterEach(async ({ page }) => {
    await page.waitForTimeout(3000);
    await page.close();
})



test("Login Test @master @sanity @regression @smoke ", async () => {


    await homepage.clickMyAccount();
    await homepage.clickLoginLink();

    await loginPage.fillEmailAddress(config.email);
    await loginPage.fillPassword(config.password);
    await loginPage.clickLogin();
   
    const isLoggedIn=await myaccount.isMyAccountPageExists();
    expect(isLoggedIn).toBeTruthy();

})