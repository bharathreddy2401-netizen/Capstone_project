export class Contact
{
    constructor(page)
    {
        this.page = page;
        this.contactBtn = page.getByRole("link",{name:"Contact us"});
    }

    async navigate()
    {
        await this.page.goto("https://automationexercise.com/");
    }
    
    async contactus()
    {
        await this.contactBtn.click();
    }
}