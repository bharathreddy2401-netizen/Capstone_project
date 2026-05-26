# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Cart.spec.js >> Testing the Cart Functionality >> Testing the price updation on adding same item into the cart
- Location: tests\Cart.spec.js:38:9

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://automationexercise.com/
Call log:
  - navigating to "https://automationexercise.com/", waiting until "load"

```

# Test source

```ts
  1  | export class Cart
  2  | {
  3  |     constructor(page)
  4  |     {
  5  |         this.page = page;
  6  |         this.addToCart = page.locator('.add-to-cart').first();
  7  |         this.Tshirt = page.locator('.single-products', { hasText: 'Tshirt' })
  8  |                            .getByRole('link', { name: 'Add to cart' })
  9  |                            .first();        
  10 |         this.cart = page.getByRole("link",{name:"Cart"});
  11 |         this.continuebtn = page.getByRole("button", {name:"Continue Shopping"});
  12 |     }
  13 | 
  14 |     async navigate()
  15 |     {
> 16 |         await this.page.goto("https://automationexercise.com");
     |                         ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://automationexercise.com/
  17 |     }
  18 | 
  19 |     async add()
  20 |     {
  21 |         await this.addToCart.click();
  22 |     }
  23 | 
  24 |     async addTshirt()
  25 |     {
  26 |         await this.Tshirt.click();
  27 |     }
  28 | 
  29 |     async cartbtn()
  30 |     {
  31 |         await this.cart.click();
  32 |     }
  33 | 
  34 |     async continue()
  35 |     {
  36 |         await this.continuebtn.click();
  37 |     }
  38 | }
```