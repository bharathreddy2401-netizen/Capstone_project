export class CheckOut
{
    constructor(page)
    {
        this.page = page;
        this.cartbtn = page.getbyRole("link",{name:"Cart"});
    }

    async navigate()
    {
        await this.page.goto("https://automationexercise.com");
    }

    async cart()
    {
        await this.cartbtn.click();
    }

}
