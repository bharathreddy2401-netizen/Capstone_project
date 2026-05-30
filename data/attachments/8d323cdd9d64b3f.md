# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Cart.spec.js >> Testing the Cart Functionality >> Testing the price updation on adding same item into the cart
- Location: tests\Cart.spec.js:38:9

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('#cart_info table tbody tr .cart_price p')
Expected: "500"
Received: "Rs. 500"
Timeout:  5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('#cart_info table tbody tr .cart_price p')
    13 × locator resolved to <p>Rs. 500</p>
       - unexpected value "Rs. 500"

```

```yaml
- paragraph: Rs. 500
```

# Test source

```ts
  1  | import {test,expect} from "@playwright/test";
  2  | import {Cart} from "../POM/cart";
  3  | 
  4  | test.describe("Testing the Cart Functionality",()=>{
  5  |     let cart;
  6  |     test.beforeEach(async ({page})=>{
  7  |             cart=new Cart(page);
  8  |             await cart.navigate();
  9  |     });
  10 | 
  11 |     test.skip("Testing the click on add cart button pops the message added to cart",async ({page})=>{
  12 |         await cart.add();
  13 |         await expect(page.getByRole("button",{name:"Continue Shopping"})).toBeVisible();
  14 |     });
  15 | 
  16 |     test.skip("testing cart by adding the same product multiple times and checking the updation in quantity",async({page})=>{
  17 |         await cart.add();
  18 |         
  19 |         await page.getByRole("button",{name:"Continue Shopping"}).click();
  20 |         await cart.cartbtn();
  21 |         await expect(page.locator("#cart_info_table tbody tr .disabled")).toHaveText("1");
  22 |         await cart.navigate();
  23 |         await cart.add();
  24 |         await cart.cartbtn();
  25 |         await expect(page.locator("#cart_info_table tbody tr .disabled")).toHaveText("2");
  26 |         
  27 |     });
  28 | 
  29 |     test.skip("Removing of products from the cart",async({page})=>{
  30 |         await cart.add();
  31 |         await page.getByRole("button",{name:"Continue Shopping"}).click();
  32 |         await cart.cartbtn();
  33 |         await page.locator(".cart_delete a i.fa.fa-times").click();
  34 |         await expect(page.locator("#empty_cart .text-center")).toHaveText(/Cart is empty!/);
  35 | 
  36 |     })
  37 | 
  38 |     test("Testing the price updation on adding same item into the cart",async({page})=>{
  39 |         await cart.add();
  40 |         await page.getByRole("button",{name:"Continue Shopping"}).click();
  41 |         await cart.cartbtn();
  42 |         const firstPrice = page.locator("#cart_info table tbody tr .cart_price p");
> 43 |         await expect(firstPrice).toHaveText("500");
     |                                  ^ Error: expect(locator).toHaveText(expected) failed
  44 |     })
  45 | })
```