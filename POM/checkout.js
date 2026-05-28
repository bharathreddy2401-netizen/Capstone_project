export class CheckOut
{
    constructor(page)
    {
        this.page = page;
        this.blueTop = page.locator('.add-to-cart').first();
        this.cartbtn = page.getByRole("link",{name:"Cart"});
        this.checkout = page.getByText("Proceed To Checkout");
        //this.checkout = page.locator(".btn btn-default check_out");
        this.continuebtn = page.getByRole("button", {name:"Continue Shopping"});
        this.email = page.getByPlaceholder("Email Address").first();
        this.password =  page.getByPlaceholder("Password");
        this.loginbtn = page.getByRole("button",{ name: "Login"});
    }

    async navigate()
    {
        await this.page.goto("https://automationexercise.com");
    }

    async cart()
    {
        await this.cartbtn.click();
    }

    async add()
    {
        await this.blueTop.click();
    }

    async continue()
    {
        await this.continuebtn.click();
    }
    async checkoutbtn()
    {
        await this.checkout.click();
    }
    async login()
    {
        await this.email.fill("Auser12345@gmail.com");
        await this.password.fill("user12345");
        await this.loginbtn.click();
    }

}
