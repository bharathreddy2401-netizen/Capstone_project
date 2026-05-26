export class Cart
{
    constructor(page)
    {
        this.page = page;
        this.addToCart = page.locator('.add-to-cart').first();
        this.Tshirt = page.getByRole("link",{ name: "View Product"}).nth(1); 
        this.TshirtBtn = page.getByRole("button",{name: "Add to cart"});       
        this.cart = page.getByRole("link",{name:"Cart"});
        this.continuebtn = page.getByRole("button", {name:"Continue Shopping"});
    }

    async navigate()
    {
        await this.page.goto("https://automationexercise.com");
    }

    async add()
    {
        await this.addToCart.click();
    }

    async addTshirt()
    {
        await this.Tshirt.click();
        await this.TshirtBtn.click();

    }

    async cartbtn()
    {
        await this.cart.click();
    }

    async continue()
    {
        await this.continuebtn.click();
    }
}