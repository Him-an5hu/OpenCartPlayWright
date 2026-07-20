/**
 * Test Case: Login with Valid Credentials
 * 
 * Tags: @master @sanity @regression
 * 
 * Steps:
 * 1) Navigate to the application URL
 * 2) Navigate to Login page via Home page
 * 3) Enter valid credentials and log in
 * 4) Verify successful login by checking 'My Account' page presence
 */

import {Page, expect, Locator} from '@playwright/test';

export class LoginPage
{
    private readonly page:Page;
    private readonly emailAddress:Locator;
    private readonly password:Locator;
    private readonly LoginBtn:Locator;
    private readonly WarningMessage:Locator;

    constructor(page:Page)
    {   this.page=page;
        
        this.emailAddress=page.getByLabel('E-Mail Address');
        this.password=page.getByLabel('Password');
        this.LoginBtn=page.locator('input[type="submit"]');
        this.WarningMessage=page.locator(".alert.alert-danger.alert-dismissible");

    }

    //action methods 

/**
     * Sets the email address in the email field
     * @param emailAddress - Email address to enter
     */

    async fillEmailAddress(LoginEmail:string) 
    {
        await this.emailAddress.fill(LoginEmail);
    }

    
    /**
     * Sets the password in the password field
     * @param password - Password to enter
     */


    async fillPassword(LoginPass:string)
    {
        await this.password.fill(LoginPass);
    }

/**
     * Clicks the login button
     */


    async clickLogin()
    {
        await this.LoginBtn.click();
    }

/**
     * Performs complete login action
     * @param email - Email address to enter
     * @param password - Password to enter
     */

    async login(LoginEmail: string, LoginPass: string)
    {
        await this.fillEmailAddress(LoginEmail);
        await this.fillPassword(LoginPass);
        await this.clickLogin();
    }

    async getloginErrorMessage():Promise<string | null>
    {
        return (this.WarningMessage.textContent()); 
    }





    

}