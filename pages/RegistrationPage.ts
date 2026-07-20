import {Page,expect,Locator} from '@playwright/test';

export class RegistrationPage
{
    //lOcators
    private readonly page:Page;
    private readonly txtFirstName:Locator;
    private readonly txtLastName:Locator;
    private readonly txtEmail:Locator;
    private readonly txtTelephone:Locator;
    private readonly txtPassword:Locator;
    private readonly txtConfirmPassword:Locator;
    private readonly chkPrivacyPolicy:Locator;
    private readonly btnContinue:Locator;
    private readonly msgAccountCreated:Locator;

    //Constructor
    constructor(page:Page)
    {
        this.page=page;
        this.txtFirstName=page.locator("//input[@id='input-firstname']");
        this.txtLastName=page.locator("//input[@id='input-lastname']");
        this.txtEmail=page.locator("//input[@id='input-email']");
        this.txtTelephone=page.locator("//input[@id='input-telephone']");
        this.txtPassword=page.locator("//input[@id='input-password']");
        this.txtConfirmPassword=page.locator("//input[@id='input-confirm']");
        this.chkPrivacyPolicy=page.locator("//input[@name='agree']");
        this.btnContinue=page.locator("//input[@value='Continue']")
        this.msgAccountCreated=page.getByRole('heading', { name: /Your Account Has Been Created!/i });
    }


    //Action methods

    /**
     * Sets the first name in the registration form.
     * @param fName - The first name to be entered.  // can you 
     */
    async setFirstName(fName:string):Promise<void>
    {
        await this.txtFirstName.fill(fName);
    }
     /**
      * Sets the last name in the registration form.
      * @param lName - The last name to be entered.
      */
    async setLastName(lName:string):Promise<void>
    {
        await this.txtLastName.fill(lName);
    }

    /**
     * Sets the email address in the registration form.
     * @param email - The email address to be entered.
     */
    async setEmail(email:string):Promise<void>
    {
        await this.txtEmail.fill(email);
    }
    
    /**
     * Sets the telephone number in the registration form.
     * @param telephone - The telephone number to be entered.
     */
    async setTelephone(telephone:string):Promise<void>
    {
        await this.txtTelephone.fill(telephone);
    }
     
    /**
     * Sets the password in the registration form.
     * @param password - The password to be entered. 
        */
    async setPassword(password:string):Promise<void>
    {
        await this.txtPassword.fill(password);
    }

    /**
     * Sets the confirm password in the registration form.
     * @param confirmPassword - The confirm password to be entered.
     */
    async setConfirmPassword(confirmPassword:string):Promise<void>
    {
        await this.txtConfirmPassword.fill(confirmPassword);
    }

    /**
     * Checks the privacy policy checkbox in the registration form.
     */
    async checkPrivacyPolicy():Promise<void>
    {
        await this.chkPrivacyPolicy.check();
    }

    /**
     * Clicks the continue button to submit the registration form.
     */
    async clickContinue():Promise<void>
    {
        await this.btnContinue.click();
    }
     
    /**
     * CONFIRMATION MESSAGE: Verifies if the account creation confirmation message is displayed.
     * @returns A promise that resolves to true if the confirmation message is visible, otherwise false.
     */
    async getConfirmationMessage():Promise<string>
    {
        return await this.msgAccountCreated.textContent() ?? ''; // what ?? '' mean?     
    }

    /**
     * Completes the registration process by filling out the form and submitting it.
     * @param userdata - An object containing the user data for registration.
     */
    async register(userdata:{fName:string,lName:string,email:string,telephone:string,password:string,confirmPassword:string}):Promise<void>
    {
        await this.setFirstName(userdata.fName);
        await this.setLastName(userdata.lName);
        await this.setEmail(userdata.email);
        await this.setTelephone(userdata.telephone);
        await this.setPassword(userdata.password);
        await this.setConfirmPassword(userdata.confirmPassword);
        await this.checkPrivacyPolicy();
        await this.clickContinue();
        await expect(this.msgAccountCreated).toBeVisible();

   }

}
