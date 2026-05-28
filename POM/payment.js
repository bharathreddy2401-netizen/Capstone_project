export class Payment
{
    constructor(page)
    {
        this.page = page;
        this.placeOrderBtn = page.getByRole("link",{name:"Place Order"});
        this.email = page.getByPlaceholder("Email Address").first();
        this.password = page.getByPlaceholder("Password");
        this.loginbtn = page.getByRole("button",{name: "Login"});
        this.addToCart = page.locator('.add-to-cart').first();
        this.continuebtn = page.getByRole("button", {name:"Continue Shopping"});
        this.checkout = page.getByText("Proceed To Checkout");
        this.cartbtn = page.getByRole("link",{name:"Cart"});
        this.name_on_card = page.locator('[data-qa="name-on-card"]');
        this.card_Number = page.locator('[data-qa="card-number"]');
        this.cvc = page.locator('[data-qa="cvc"]');
        this.expiration = page.locator('[data-qa="expiry-month"]');
        this.year = page.locator('[data-qa="expiry-year"]');
    }
    
    async navigate()
    {
        await this.page.goto("https://automationexercise.com/login");
    }

    async login()
    {
        await this.email.fill("Auser12345@gmail.com");
        await this.password.fill("user12345");
        await this.loginbtn.click();
    }

    async add()
    {
        await this.addToCart.click();
    }
    async cart()
    {
        await this.cartbtn.click();
    }
    async continue()
    {
        await this.continuebtn.click();
    }
    async checkoutbtn()
    {
        await this.checkout.click();
    }
    
    async placeOrder()
    {
        await this.navigate();
        await this.login();
        await this.add();
        await this.continue();
        await this.cart();
        await this.checkoutbtn();
        await this.placeOrderBtn.click();
    }
}