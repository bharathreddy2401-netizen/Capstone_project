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

Locator: locator('.text-center')
Expected pattern: /cart is empty!/
Error: strict mode violation: locator('.text-center') resolved to 3 elements:
    1) <p class="text-center">Register / Login account to proceed on checkout.</p> aka getByText('Register / Login account to')
    2) <p class="text-center">…</p> aka locator('p').filter({ hasText: /^Register \/ Login$/ })
    3) <p class="text-center">…</p> aka getByText('Cart is empty! Click here to')

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('.text-center')

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
    - generic [ref=e48] [cursor=pointer]: Proceed To Checkout
    - table [ref=e50]:
      - rowgroup [ref=e51]:
        - row "Item Description Price Quantity Total" [ref=e52]:
          - cell "Item" [ref=e53]
          - cell "Description" [ref=e54]
          - cell "Price" [ref=e55]
          - cell "Quantity" [ref=e56]
          - cell "Total" [ref=e57]
          - cell [ref=e58]
      - rowgroup [ref=e59]:
        - row "Product Image Blue Top Women > Tops Rs. 500 1 Rs. 500 " [ref=e60]:
          - cell "Product Image" [ref=e61]:
            - link "Product Image" [ref=e62] [cursor=pointer]:
              - /url: ""
              - img "Product Image" [ref=e63]
          - cell "Blue Top Women > Tops" [ref=e64]:
            - heading "Blue Top" [level=4] [ref=e65]:
              - link "Blue Top" [ref=e66] [cursor=pointer]:
                - /url: /product_details/1
            - paragraph [ref=e67]: Women > Tops
          - cell "Rs. 500" [ref=e68]:
            - paragraph [ref=e69]: Rs. 500
          - cell "1" [ref=e70]:
            - button "1" [ref=e71] [cursor=pointer]
          - cell "Rs. 500" [ref=e72]:
            - paragraph [ref=e73]: Rs. 500
          - cell "" [ref=e74]:
            - generic [ref=e76] [cursor=pointer]: 
  - contentinfo [ref=e77]:
    - generic [ref=e82]:
      - heading "Subscription" [level=2] [ref=e83]
      - generic [ref=e84]:
        - textbox "Your email address" [ref=e85]
        - button "" [ref=e86] [cursor=pointer]:
          - generic [ref=e87]: 
        - paragraph [ref=e88]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e92]: Copyright © 2021 All rights reserved
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
> 34 |         await expect(page.locator(".text-center")).toHaveText(/cart is empty!/);
     |                                                    ^ Error: expect(locator).toHaveText(expected) failed
  35 | 
  36 |     })
  37 | })
```