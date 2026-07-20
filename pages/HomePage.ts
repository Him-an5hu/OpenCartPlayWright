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
        try{
        await this.lnkMyAccount.click();
        }
        catch(error)
        {
            console.log(`Error occured while clicking My Account: ${error}`)
        }
    }

    //Click on Register link
    async clickRegisterLink():Promise<void>
    {
        try
        {
            await this.lnkMyRegister.click();
        }
        catch(error)
        {
            console.log(`Error while clicking on Register link: ${error}`)
        }
        
    }

    async clickLoginLink():Promise<void>
    {
        try
        {
            await this.linkLogin.click();
        }
        catch(error)
        {
            console.log(`Error occured while clicking on Login button: ${error}`)
        }
    }

    async searchProduct(pName:string):Promise<void>
    {
        try{
            await this.txtSearchbox.fill(pName);
        }
        catch(error)
        {
            console.log(`Error occured while entering product name ${error}`)
        }
    }

    async clickSearchButton():Promise<void>
    {
        try
        {
        await this.btnSearch.click();
        }
        catch(error)
        {
            console.log(`Error occured on clicking Search Button ${error}`);
        }
    }

}