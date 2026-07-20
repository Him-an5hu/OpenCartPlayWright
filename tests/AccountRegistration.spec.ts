/**
 * Test Case: Account Registration
 * 
 * Tags: @master @sanity @regression
 * 
 * Steps:
 * 1) Navigate to application URL 
 * 2) Go to 'My Account' and click 'Register'
 * 3) Fill in registration details with random data
 * 4) Agree to Privacy Policy and submit the form
 * 5) Validate the confirmation message
 */

import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { dataProvider } from '../utils/dataProvider';
import { RandomDataUtils } from '../utils/randomDataGenerator';
import { TestConfig } from '../test.config';

let homePage: HomePage;
let registrationPage: RegistrationPage;

test.beforeEach(async ({ page }) => {

    // * 1) Navigate to application URL 
    const config = new TestConfig();
    await page.goto(config.appurl);
    homePage = new HomePage(page); // when ever you create any object class for page object class you have to pass page
    registrationPage = new RegistrationPage(page);

})


test.afterEach(async ({ page }) => {
    await page.waitForTimeout(3000);
    await page.close();
})

test('User Registration Test @master @sanity @regression', async ({ }) => {


    //* 2) Go to 'My Account' and click 'Register'

    await homePage.clickMyAccount();
    await homePage.clickRegisterLink();

    //* 3) Fill in registration details with random data

    await registrationPage.setFirstName(RandomDataUtils.getFirstName());
    await registrationPage.setLastName(RandomDataUtils.getLastName());
    await registrationPage.setEmail(RandomDataUtils.getEmail());
    await registrationPage.setTelephone(RandomDataUtils.getPhoneNumber());

    const password = RandomDataUtils.getPassword();
    await registrationPage.setPassword(password);
    await registrationPage.setConfirmPassword(password);

    await registrationPage.checkPrivacyPolicy();
    await registrationPage.clickContinue();

    const confirationMSG = await registrationPage.getConfirmationMessage();
    expect(confirationMSG).toContain('Your Account Has Been Created!')














})

