# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Cart.spec.js >> Testing the Cart Functionality >> Testing the click on add cart button pops the message add to cart
- Location: tests\Cart.spec.js:11:9

# Error details

```
ReferenceError: Cart is not defined
```

# Test source

```ts
  1  | import {test,expect} from "@playwright/test";
  2  | import {cart} from "../POM/login";
  3  | 
  4  | test.describe("Testing the Cart Functionality",()=>{
  5  | 
  6  |     test.beforeEach(async ({page})=>{
> 7  |             cart=new Cart(page);
     |                      ^ ReferenceError: Cart is not defined
  8  |             await cart.navigate();
  9  |     });
  10 | 
  11 |     test("Testing the click on add cart button pops the message add to cart",async ({page})=>{
  12 |         await cart.add();
  13 |         await expect(page.getByRole("button",{name:"Continue Shopping"}));
  14 |     })
  15 | })
```