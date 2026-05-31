# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Payment.spec.js >> Testing the Payment Page >> Testing the continue button clicking in the order placed page will redirect to the home page
- Location: tests/Payment.spec.js:44:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByText('Proceed To Checkout')

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
          - link " Logout" [ref=e23] [cursor=pointer]:
            - /url: /logout
            - generic [ref=e24]: 
            - text: Logout
        - listitem [ref=e25]:
          - link " Delete Account" [ref=e26] [cursor=pointer]:
            - /url: /delete_account
            - generic [ref=e27]: 
            - text: Delete Account
        - listitem [ref=e28]:
          - link " Test Cases" [ref=e29] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e30]: 
            - text: Test Cases
        - listitem [ref=e31]:
          - link " API Testing" [ref=e32] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e33]: 
            - text: API Testing
        - listitem [ref=e34]:
          - link " Video Tutorials" [ref=e35] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e36]: 
            - text: Video Tutorials
        - listitem [ref=e37]:
          - link " Contact us" [ref=e38] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e39]: 
            - text: Contact us
        - listitem [ref=e40]:
          - generic [ref=e41]:
            - generic [ref=e42]: 
            - text: Logged in as user12345
  - generic [ref=e44]:
    - list [ref=e46]:
      - listitem [ref=e47]:
        - link "Home" [ref=e48] [cursor=pointer]:
          - /url: /
      - listitem [ref=e49]: Shopping Cart
    - paragraph [ref=e52]:
      - text: Cart is empty! Click
      - link "here" [ref=e53] [cursor=pointer]:
        - /url: /products
      - text: to buy products.
  - contentinfo [ref=e54]:
    - generic [ref=e59]:
      - heading "Subscription" [level=2] [ref=e60]
      - generic [ref=e61]:
        - textbox "Your email address" [ref=e62]
        - button "" [ref=e63] [cursor=pointer]:
          - generic [ref=e64]: 
        - paragraph [ref=e65]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e69]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e70]:
    - iframe [ref=e73]:
      - iframe [ref=f69e1]:
        - generic [ref=f71e2]:
          - iframe [ref=f71e4]:
            - link [ref=f77e2] [cursor=pointer]:
              - /url: https://www.pathtosuccess.global
              - img [ref=f77e3]
          - generic [ref=f71e5]:
            - generic:
              - img [ref=f71e9] [cursor=pointer]
              - button [ref=f71e12] [cursor=pointer]:
                - img [ref=f71e13]
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
  23 |         await this.page.goto("https://automationexercise.com/login");
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
> 47 |         await this.checkout.click();
     |                             ^ Error: locator.click: Test timeout of 30000ms exceeded.
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