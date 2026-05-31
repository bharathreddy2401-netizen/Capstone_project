# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Cart.spec.js >> Testing the Cart Functionality >> testing cart by adding the same product multiple times and checking the updation in quantity
- Location: tests\Cart.spec.js:16:9

# Error details

```
TypeError: (0 , _test.expect)(...).click is not a function
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
  - generic [ref=e38]:
    - list [ref=e40]:
      - listitem [ref=e41]:
        - link "Home" [ref=e42] [cursor=pointer]:
          - /url: /
      - listitem [ref=e43]: Shopping Cart
    - paragraph [ref=e46]:
      - text: Cart is empty! Click
      - link "here" [ref=e47] [cursor=pointer]:
        - /url: /products
      - text: to buy products.
  - contentinfo [ref=e48]:
    - generic [ref=e53]:
      - heading "Subscription" [level=2] [ref=e54]
      - generic [ref=e55]:
        - textbox "Your email address" [ref=e56]
        - button "" [ref=e57] [cursor=pointer]:
          - generic [ref=e58]: 
        - paragraph [ref=e59]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e63]: Copyright © 2021 All rights reserved
  - text: 
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
  16 |     test("testing cart by adding the same product multiple times and checking the updation in quantity",async({page})=>{
  17 |         await cart.add();
  18 |         await cart.cartbtn();
> 19 |         await expect(page.getByRole("button",{name:"Continue Shopping"})).click();
     |                                                                           ^ TypeError: (0 , _test.expect)(...).click is not a function
  20 |         await expect(page.locator(".cart_quantity")).toHaveText("1");
  21 |        // await cart.add();
  22 |         //await cart.add();
  23 |     })
  24 | })
```