# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Payment.spec.js >> Testing the Payment Page >> Testing the place order with missing card number
- Location: tests/Payment.spec.js:56:9

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://automationexercise.com/login", waiting until "load"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e39]:
    - generic [ref=e41]:
      - heading "Login to your account" [level=2] [ref=e42]
      - generic [ref=e43]:
        - textbox "Email Address" [ref=e44]
        - textbox "Password" [ref=e45]
        - button "Login" [ref=e46] [cursor=pointer]
    - heading "OR" [level=2] [ref=e48]
    - generic [ref=e50]:
      - heading "New User Signup!" [level=2] [ref=e51]
      - generic [ref=e52]:
        - textbox "Name" [ref=e53]
        - textbox "Email Address" [ref=e54]
        - button "Signup" [ref=e55] [cursor=pointer]
  - contentinfo [ref=e56]:
    - generic [ref=e61]:
      - heading "Subscription" [level=2] [ref=e62]
      - generic [ref=e63]:
        - textbox "Your email address" [ref=e64]
        - button "" [ref=e65] [cursor=pointer]:
          - generic [ref=e66]: 
        - paragraph [ref=e67]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - generic [ref=e68]:
      - generic:
        - insertion:
          - generic:
            - iframe
      - paragraph [ref=e71]: Copyright © 2021 All rights reserved
```

# Test source

```ts
  1  | export class Payment
  2  | {
  3  |     constructor(page)
  4  |     {
  5  |         this.page = page;
  6  |         this.placeOrderBtn = page.getByRole("link",{name:"Place Order"});
  7  |         this.email = page.getByPlaceholder("Email Address").first();
  8  |         this.password = page.getByPlaceholder("Password");
  9  |         this.loginbtn = page.getByRole("button",{name: "Login"});
  10 |         this.addToCart = page.locator('.add-to-cart').first();
  11 |         this.continuebtn = page.getByRole("button", {name:"Continue Shopping"});
  12 |         this.checkout = page.getByText("Proceed To Checkout");
  13 |         this.cartbtn = page.getByRole("link",{name:"Cart"});
  14 |         this.name_on_card = page.locator('[data-qa="name-on-card"]');
  15 |         this.card_Number = page.locator('[data-qa="card-number"]');
  16 |         this.cvc = page.locator('[data-qa="cvc"]');
  17 |         this.expiration = page.locator('[data-qa="expiry-month"]');
  18 |         this.year = page.locator('[data-qa="expiry-year"]');
  19 |     }
  20 |     
  21 |     async navigate()
  22 |     {
> 23 |         await this.page.goto("https://automationexercise.com/login");
     |                         ^ Error: page.goto: Test timeout of 30000ms exceeded.
  24 |     }
  25 | 
  26 |     async login()
  27 |     {
  28 |         await this.email.fill("Auser12345@gmail.com");
  29 |         await this.password.fill("user12345");
  30 |         await this.loginbtn.click();
  31 |     }
  32 | 
  33 |     async add()
  34 |     {
  35 |         await this.addToCart.click();
  36 |     }
  37 |     async cart()
  38 |     {
  39 |         await this.cartbtn.click();
  40 |     }
  41 |     async continue()
  42 |     {
  43 |         await this.continuebtn.click();
  44 |     }
  45 |     async checkoutbtn()
  46 |     {
  47 |         await this.checkout.click();
  48 |     }
  49 |     
  50 |     async placeOrder()
  51 |     {
  52 |         await this.navigate();
  53 |         await this.login();
  54 |         await this.add();
  55 |         await this.continue();
  56 |         await this.cart();
  57 |         await this.checkoutbtn();
  58 |         await this.placeOrderBtn.click();
  59 |     }
  60 | }
```