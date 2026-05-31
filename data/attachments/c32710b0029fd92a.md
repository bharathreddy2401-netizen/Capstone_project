# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Cart.spec.js >> Testing the Cart Functionality >> Removing of products from the cart
- Location: tests\Cart.spec.js:29:9

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('#empty_cart .text-center')
Expected pattern: /cart is empty!/
Received string:  "Cart is empty! Click here to buy products."
Timeout: 5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('#empty_cart .text-center')
    13 × locator resolved to <p class="text-center">…</p>
       - unexpected value "Cart is empty! Click here to buy products."

```

```yaml
- paragraph:
  - text: Cart is empty! Click
  - link "here":
    - /url: /products
  - text: to buy products.
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
  29 |     test("Removing of products from the cart",async({page})=>{
  30 |         await cart.add();
  31 |         await page.getByRole("button",{name:"Continue Shopping"}).click();
  32 |         await cart.cartbtn();
  33 |         await page.locator(".cart_delete a i.fa.fa-times").click();
> 34 |         await expect(page.locator("#empty_cart .text-center")).toHaveText(/cart is empty!/);
     |                                                                ^ Error: expect(locator).toHaveText(expected) failed
  35 | 
  36 |     })
  37 | })
```