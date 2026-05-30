# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.js >> Testing the Login Page >> Testing mid-journey login does not discard existing guest user cart additions
- Location: tests\Login.spec.js:98:9

# Error details

```
Error: page.goto: Could not resolve hostname
Call log:
  - navigating to "https://automationexercise.com/login", waiting until "load"

```

# Test source

```ts
  1  | export class Login{
  2  |     constructor(page)
  3  |     {
  4  |         this.page=page;
  5  |         this.email = page.getByPlaceholder("Email Address").first();
  6  |         this.password = page.getByPlaceholder("Password");
  7  |         this.loginbtn = page.getByRole("button", {name:"Login"});
  8  |     }
  9  | 
  10 |     async navigate()
  11 |     {
> 12 |         await this.page.goto("https://automationexercise.com/login");
     |                         ^ Error: page.goto: Could not resolve hostname
  13 |     }
  14 | 
  15 |     async filllogin(email,pass)
  16 |     {
  17 |         await this.email.fill(email);
  18 |         await this.password.fill(pass);
  19 |     }
  20 | 
  21 |     async clickLogin()
  22 |     {
  23 |         await this.loginbtn.click();
  24 |     }
  25 | }
```