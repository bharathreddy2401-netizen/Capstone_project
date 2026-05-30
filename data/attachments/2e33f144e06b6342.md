# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Cart.spec.js >> Testing the Cart Functionality >> Testing the multiplied price of products in the cart is correct
- Location: tests\Cart.spec.js:47:9

# Error details

```
TypeError: page.locator(...).second is not a function
```

# Test source

```ts
  1  | export class Cart
  2  | {
  3  |     constructor(page)
  4  |     {
  5  |         this.page = page;
  6  |         this.addToCart = page.locator('.add-to-cart').first();
> 7  |         this.Tshirt = page.locator('.add-to-cart').second();
     |                                                    ^ TypeError: page.locator(...).second is not a function
  8  |         this.cart = page.getByRole("link",{name:"Cart"});
  9  |         this.continuebtn = page.getByRole("button", {name:"Continue Shopping"});
  10 |     }
  11 | 
  12 |     async navigate()
  13 |     {
  14 |         await this.page.goto("https://automationexercise.com");
  15 |     }
  16 | 
  17 |     async add()
  18 |     {
  19 |         await this.addToCart.click();
  20 |     }
  21 | 
  22 |     async addTshirt()
  23 |     {
  24 |         await this.Tshirt.click();
  25 |     }
  26 | 
  27 |     async cartbtn()
  28 |     {
  29 |         await this.cart.click();
  30 |     }
  31 | 
  32 |     async continue()
  33 |     {
  34 |         await this.continuebtn.click();
  35 |     }
  36 | }
```