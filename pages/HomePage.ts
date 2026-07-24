import {Page, expect, Locator} from '@playwright/test';


export class HomePage
{
    //Locator
    private readonly page:Page; 
    private readonly lnkMyAccount:Locator;
    private readonly lnkMyRegister:Locator;
    private readonly linkLogin:Locator;
    private readonly txtSearchbox:Locator;
    private readonly btnSearch:Locator;

    
    //Constructor
    constructor (page:Page){
       this.page=page;
       this.lnkMyAccount=page.locator("//span[normalize-space()='My Account']");
       this.lnkMyRegister=page.locator("//a[normalize-space()='Register']");
       this.linkLogin=page.getByText('Login').nth(0);
       this.txtSearchbox=page.locator("//input[@placeholder='Search']");
       this.btnSearch=page.locator("//button[@class='btn btn-default btn-lg']");

    }

    //Action methods

    //check if HomePage exits or not 
    async isHomePageExists():Promise<boolean>
    {
       let title:string =await this.page.title();
        if(title)
        {
            return true;
        }
        return false;
    }

    //Click My Account link
    async clickMyAccount():Promise<void>
    {
        await this.lnkMyAccount.click();      
    }

    //Click on Register link
    async clickRegisterLink():Promise<void>
    {
        await this.lnkMyRegister.click();
        
    }

    async clickLoginLink():Promise<void>
    {
       await this.linkLogin.click();
    }

    async searchProduct(pName:string):Promise<void>
    {
       await this.txtSearchbox.fill(pName);
    }

    async clickSearchButton():Promise<void>
    {
            await this.btnSearch.click();

    }

}