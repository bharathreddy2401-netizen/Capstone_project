export class SignUp {
    constructor(page)
    {
        this.page=page;
        // for initial sign up page
        this.name=page.getByPlaceholder("Name");
        this.email=page.getByPlaceholder("Email Address").nth(1);
        this.btn=page.getByRole('button',{name:"Signup"});

        //for account information page
        this.genderMale = page.locator("#id_gender1");
        this.genderFemale = page.locator("#id_gender2");
        this.name2 = page.locator("#name");
        this.email2= page.locator("#email");
        this.password = page.locator("#password");
        this.day = page.locator("#days");
        this.month = page.locator("#months");
        this.year = page.locator("#years");
        this.newsletter = page.locator("#newsletter");
        this.special_offers = page.locator("#option");
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
    }

    async navigate()
    {
        await this.page.goto("https://automationexercise.com/login");
    }

    async fillSignUp(name,email)
    {
        await this.name.fill(name);
        await this.email.fill(email);
    }

    async submit()
    {
        await this.btn.click();
    }

    //new methods for account inforamtion
    async gender(genders)
    {
        let gender=genders;
        if(gender=="Mr")
        {
            await this.genderMale.check();
        }
        else{
            await this.genderFemale.check();
        }
    }
    async fillPassword(pass)
    {
        await this.password.fill(pass);
    }
    async dateOfBirth(day,month,year)
    {
        await this.day.selectOption(day);
        await this.month.selectOption(month);
        await this.year.selectOption(year);
    }
    async optional(news=false,offer=false)
    {
        if(news==true)
        {
            await this.newsletter.check();
        }
        if(offer==true)
        {
            await this.special_offers.check();
        }
    }
    async personalDetails(firstName,lastName,company=null)
    {
        
        await this.first_name.fill(firstName);
        await this.last_name.fill(lastName);
        if(company) await this.company.fill(company);
    }
    async address(address1,address2=null,country,state,city,zipcode,mobile)
    {
        await this.address1.fill(address1);
        if(address2) await this.address2.fill(address2);
        if(country){
            await this.country.selectOption(country);
        }else{
            await this.country.selectOption("India");
        }
        await this.state.fill(state);
        await this.city.fill(city);
        await this.zipcode.fill(zipcode);
        await this.mobile.fill(mobile);
    }
    async createAccount()
    {
        await this.createAccountBtn.click();
    }
}