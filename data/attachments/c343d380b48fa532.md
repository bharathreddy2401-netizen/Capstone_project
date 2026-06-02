# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Deletion.spec.js >> Testing the Account Delete Functionality >> Testing by attempting to log in with a newly deleted account
- Location: tests/Deletion.spec.js:65:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Signup / Login' })

```

# Page snapshot

```yaml
- generic [ref=e4]: Please wait while your request is being verified...
```

# Test source

```ts
  1  | export class Delete {
  2  |     constructor(page) {
  3  |         this.page = page;
  4  |         
  5  |         // Login Locators
  6  |         this.email1 = page.getByPlaceholder("Email Address").first();
  7  |         this.password1 = page.getByPlaceholder("Password");
  8  |         this.loginbtn = page.getByRole("button", { name: "Login" });
  9  | 
  10 |         // Signup Locators
  11 |         this.name = page.getByPlaceholder("Name");
  12 |         this.email = page.getByPlaceholder("Email Address").nth(1);
  13 |         this.btn = page.getByRole('button', { name: "Signup" });
  14 | 
  15 |         // Account Creation Form Locators
  16 |         this.password = page.locator("#password");
  17 |         this.first_name = page.locator("#first_name");
  18 |         this.last_name = page.locator("#last_name");
  19 |         this.company = page.locator("#company");
  20 |         this.address1 = page.locator("#address1");
  21 |         this.address2 = page.locator("#address2");
  22 |         this.country = page.locator("#country");
  23 |         this.state = page.locator("#state");
  24 |         this.city = page.locator("#city");
  25 |         this.zipcode = page.locator("#zipcode");
  26 |         this.mobile = page.locator("#mobile_number");
  27 |         this.createAccountBtn = page.getByRole('button', { name: "Create Account" });
  28 |         this.continue = page.getByRole("link",{name:"Continue"});
  29 |     }
  30 | 
  31 |     async navigate() {
  32 |         await this.page.goto("https://automationexercise.com/"); 
  33 |     }
  34 | 
  35 |     async login() {
  36 |         await this.email1.fill("bh1@1");
  37 |         await this.password1.fill("1");
  38 |         await this.loginbtn.click();
  39 |     }
  40 | 
  41 |     async signup() {
  42 |         const uniqueId = Date.now() + Math.floor(Math.random() * 1000);
  43 |         const uniqueEmail = `user_${uniqueId}@example.com`;
  44 |         await this.name.fill("bh");
  45 |         await this.email.fill(uniqueEmail);
  46 |         await this.btn.click();
  47 |     }
  48 | 
  49 |     async createAccount() {
> 50 |         await this.page.getByRole("link", { name: "Signup / Login" }).click();
     |                                                                       ^ Error: locator.click: Test timeout of 30000ms exceeded.
  51 |         await this.signup();
  52 |         
  53 |         await this.password.fill("1");
  54 |         await this.first_name.fill("bh");
  55 |         await this.last_name.fill("Re");
  56 |         await this.company.fill("abc");
  57 |         await this.address1.fill("12-11");
  58 |         await this.address2.fill("Delhi");
  59 |         await this.country.selectOption("India");
  60 |         await this.state.fill("Delhi");
  61 |         await this.city.fill("Delhi");
  62 |         await this.zipcode.fill("1234");
  63 |         await this.mobile.fill("789456123");
  64 |         await this.createAccountBtn.click();
  65 |         await this.continue.click();
  66 |     }
  67 | }
```