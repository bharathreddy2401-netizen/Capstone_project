export class Login{
    constructor(page)
    {
        this.page=page;
        this.email = page.getByPlaceholder("Email Address").first();
        this.password = page.getByPlaceholder("Password");
        this.loginbtn = page.getByRole("button", {name:"Login"});
    }

    async navigate()
    {
        await this.page.goto("https://automationexercise.com/login");
    }

    async filllogin(email,pass)
    {
        await this.email.fill(email);
        await this.password.fill(pass);
    }

    async clickLogin()
    {
        await this.loginbtn.click();
    }
}