export class Delete {
    constructor(page) {
        this.page = page;
        
        // Login Locators
        this.email1 = page.getByPlaceholder("Email Address").first();
        this.password1 = page.getByPlaceholder("Password");
        this.loginbtn = page.getByRole("button", { name: "Login" });

        // Signup Locators
        this.name = page.getByPlaceholder("Name");
        this.email = page.getByPlaceholder("Email Address").nth(1);
        this.btn = page.getByRole('button', { name: "Signup" });

        // Account Creation Form Locators
        this.password = page.locator("#password");
        this.first_name = page.locator("#first_name");
        this.last_name = page.locator("#last_name");
        this.company = page.locator("#company");
        this.address1 = page.locator("#address1");
        this.address2 = page.locator("#address2");
        this.country = page.locator("#country");
        this.state = page.locator("#state");
        this.city = page.locator("#city");
        this.zipcode = page.locator("#zipcode");
        this.mobile = page.locator("#mobile_number");
        this.createAccountBtn = page.getByRole('button', { name: "Create Account" });
        this.continue = page.getByRole("link",{name:"Continue"});
    }

    async navigate() {
        await this.page.goto("https://automationexercise.com/"); 
    }

    async login() {
        await this.email1.fill("bh1@1");
        await this.password1.fill("1");
        await this.loginbtn.click();
    }

    async signup() {
        const uniqueId = Date.now() + Math.floor(Math.random() * 1000);
        const uniqueEmail = `user_${uniqueId}@example.com`;
        await this.name.fill("bh");
        await this.email.fill(uniqueEmail);
        await this.btn.click();
    }

    async createAccount() {
        await this.page.getByRole("link", { name: "Signup / Login" }).click();
        await this.signup();
        
        await this.password.fill("1");
        await this.first_name.fill("bh");
        await this.last_name.fill("Re");
        await this.company.fill("abc");
        await this.address1.fill("12-11");
        await this.address2.fill("Delhi");
        await this.country.selectOption("India");
        await this.state.fill("Delhi");
        await this.city.fill("Delhi");
        await this.zipcode.fill("1234");
        await this.mobile.fill("789456123");
        await this.createAccountBtn.click();
        await this.continue.click();
    }
}