# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Cart.spec.js >> Testing the Cart Functionality with login >> Testing the cart first by login and adding the product then logout and then re login will display the product
- Location: tests/Cart.spec.js:163:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Continue Shopping' })
    - waiting for" https://automationexercise.com/view_cart" navigation to finish...
    - navigated to "https://automationexercise.com/view_cart"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Logout" [ref=e23]:
            - /url: /logout
            - generic [ref=e24]: 
            - text: Logout
        - listitem [ref=e25]:
          - link " Delete Account" [ref=e26]:
            - /url: /delete_account
            - generic [ref=e27]: 
            - text: Delete Account
        - listitem [ref=e28]:
          - link " Test Cases" [ref=e29]:
            - /url: /test_cases
            - generic [ref=e30]: 
            - text: Test Cases
        - listitem [ref=e31]:
          - link " API Testing" [ref=e32]:
            - /url: /api_list
            - generic [ref=e33]: 
            - text: API Testing
        - listitem [ref=e34]:
          - link " Video Tutorials" [ref=e35]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e36]: 
            - text: Video Tutorials
        - listitem [ref=e37]:
          - link " Contact us" [ref=e38]:
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
        - link "Home" [ref=e48]:
          - /url: /
      - listitem [ref=e49]: Shopping Cart
    - generic [ref=e54] [cursor=pointer]: Proceed To Checkout
    - table [ref=e56]:
      - rowgroup [ref=e57]:
        - row "Item Description Price Quantity Total" [ref=e58]:
          - cell "Item" [ref=e59]
          - cell "Description" [ref=e60]
          - cell "Price" [ref=e61]
          - cell "Quantity" [ref=e62]
          - cell "Total" [ref=e63]
          - cell [ref=e64]
      - rowgroup [ref=e65]:
        - row "Product Image Blue Top Women > Tops Rs. 500 2 Rs. 1000 " [ref=e66]:
          - cell "Product Image" [ref=e67]:
            - link "Product Image" [ref=e68]:
              - /url: ""
              - img "Product Image" [ref=e69]
          - cell "Blue Top Women > Tops" [ref=e70]:
            - heading "Blue Top" [level=4] [ref=e71]:
              - link "Blue Top" [ref=e72]:
                - /url: /product_details/1
            - paragraph [ref=e73]: Women > Tops
          - cell "Rs. 500" [ref=e74]:
            - paragraph [ref=e75]: Rs. 500
          - cell "2" [ref=e76]:
            - button "2" [ref=e77] [cursor=pointer]
          - cell "Rs. 1000" [ref=e78]:
            - paragraph [ref=e79]: Rs. 1000
          - cell "" [ref=e80]:
            - generic [ref=e82] [cursor=pointer]: 
  - contentinfo [ref=e83]:
    - generic [ref=e88]:
      - heading "Subscription" [level=2] [ref=e89]
      - generic [ref=e90]:
        - textbox "Your email address" [ref=e91]
        - button "" [ref=e92] [cursor=pointer]:
          - generic [ref=e93]: 
        - paragraph [ref=e94]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e98]: Copyright © 2021 All rights reserved
    - generic:
      - insertion:
        - generic:
          - iframe
  - text: 
```

# Test source

```ts
  1  | export class Cart
  2  | {
  3  |     constructor(page)
  4  |     {
  5  |         this.page = page;
  6  |         this.addToCart = page.locator('.add-to-cart').first();
  7  |         this.Tshirt = page.getByRole("link",{ name: "View Product"}).nth(1); 
  8  |         this.TshirtBtn = page.getByRole("button",{name: "Add to cart"});       
  9  |         this.cart = page.getByRole("link",{name:"Cart"}).first();
  10 |         this.continuebtn = page.getByRole("button", {name:"Continue Shopping"});
  11 |         this.email = page.getByPlaceholder("Email Address").first();
  12 |         this.password = page.getByPlaceholder("Password");
  13 |     }
  14 | 
  15 |     async navigate()
  16 |     {
  17 |         await this.page.goto("https://automationexercise.com");
  18 |     }
  19 | 
  20 |     async add()
  21 |     {
  22 |         await this.addToCart.click();
  23 |     }
  24 | 
  25 |     async addTshirt()
  26 |     {
  27 |         await this.Tshirt.click();
  28 |         await this.TshirtBtn.click();
  29 | 
  30 |     }
  31 | 
  32 |     async cartbtn()
  33 |     {
  34 |         await this.cart.click();
  35 |     }
  36 | 
  37 |     async continue()
  38 |     {
> 39 |         await this.continuebtn.click();
     |                                ^ Error: locator.click: Test timeout of 30000ms exceeded.
  40 |     }
  41 | 
  42 |     async login()
  43 |     {
  44 |         await this.email.fill("Auser12345@gmail.com");
  45 |         await this.password.fill("user12345");
  46 |     }
  47 | }
```