export class Interface
{
    constructor(page)
    {
        this.page = page;
        this.home_heading = page.locator('[alt="Website for automation practice"]');        this.home_category = page.getByRole("heading",{name:"Category"});
        this.home_brands = page.getByRole("heading",{name:"Brands"});
        this.home_feature = page.getByRole("heading",{name:"Features Items"});
    }

    async navigate()
    {
        await this.page.goto("https://automationexercise.com");
    }
}