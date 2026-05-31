# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Cart.spec.js >> Testing the Cart Functionality >> Testing the Updation of products in product page will update the cart
- Location: tests\Cart.spec.js:84:9

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('#product-4 td button.dissabled')
Expected: "15"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('#product-4 td button.dissabled')

```

```yaml
- banner:
  - link "Website for automation practice":
    - /url: /
    - img "Website for automation practice"
  - list:
    - listitem:
      - link " Home":
        - /url: /
    - listitem:
      - link " Products":
        - /url: /products
    - listitem:
      - link " Cart":
        - /url: /view_cart
    - listitem:
      - link " Signup / Login":
        - /url: /login
    - listitem:
      - link " Test Cases":
        - /url: /test_cases
    - listitem:
      - link " API Testing":
        - /url: /api_list
    - listitem:
      - link " Video Tutorials":
        - /url: https://www.youtube.com/c/AutomationExercise
    - listitem:
      - link " Contact us":
        - /url: /contact_us
- list:
  - listitem:
    - link "Home":
      - /url: /
  - listitem: Shopping Cart
- paragraph:
  - text: Cart is empty! Click
  - link "here":
    - /url: /products
  - text: to buy products.
- contentinfo:
  - heading "Subscription" [level=2]
  - textbox "Your email address"
  - button ""
  - paragraph: Get the most recent updates from our site and be updated your self...
  - paragraph: Copyright © 2021 All rights reserved
- insertion:
  - iframe
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
  36 |     });
  37 | 
  38 |     test.skip("Testing the price updation on adding same item into the cart",async({page})=>{
  39 |         await cart.add();
  40 |         await cart.continue();
  41 |         //await page.getByRole("button",{name:"Continue Shopping"}).click();
  42 |         await cart.cartbtn();
  43 |         const firstPrice = page.locator("#cart_info table tbody tr .cart_price p");
  44 |         await expect(firstPrice).toHaveText(/500/);
  45 |     });
  46 | 
  47 |     test.skip("Testing the multiplied price of products in the cart is correct",async ({page})=>{
  48 |         await cart.add();
  49 |         await cart.continue();
  50 |         await cart.add();
  51 |         await cart.continue();
  52 |         await cart.cartbtn();
  53 |         await expect(page.locator("#cart_info_table tbody tr td p.cart_total_price")).toHaveText(/1000/);
  54 |     });
  55 | 
  56 |     test.skip("Testing By adding different products into the cart",async({page})=>{
  57 |         await cart.add();
  58 |         await cart.continue();
  59 |         await cart.addTshirt();
  60 |         await cart.continue();
  61 |         await cart.cartbtn();
  62 |         await expect(page.getByRole("link",{name:"Blue Top"})).toBeVisible();
  63 |         await expect(page.getByRole("link",{name: "Men Tshirt"})).toBeVisible();
  64 |     });
  65 | 
  66 |     test.skip("Testing the cart products to be visible in multiple browser tabs", async({context,page})=>{
  67 |         await cart.add();
  68 |         await cart.continue();
  69 |         const page2 = await context.newPage();
  70 |         const cartTab2 = new Cart(page2);
  71 |         await cartTab2.navigate();
  72 |         await cartTab2.cartbtn();
  73 |         await expect(page2.getByRole("link",{name:"Blue Top"})).toBeVisible();
  74 |     });
  75 |   
  76 |     test.skip("Testing the clicking of item in cart directs us to the product page of that item",async({page})=>{
  77 |         await cart.add();
  78 |         await cart.continue();
  79 |         await cart.cartbtn();
  80 |         await page.getByRole("link",{name:"Blue Top"}).click();
  81 |         await expect(page.getByRole("heading",{name:"Blue Top"})).toBeVisible(); 
  82 |     })
  83 | 
  84 |     test("Testing the Updation of products in product page will update the cart",async({page})=>{
  85 |         await page.getByRole("link",{name:"View Product"}).nth(3).click();
  86 |         await page.locator("#quantity").fill("5");
  87 |         await page.getByRole("button",{name:"Add to cart"}).click();
  88 |         await cart.cartbtn();
> 89 |         await expect(page.locator("#product-4 td button.dissabled")).toHaveText("15");
     |                                                                      ^ Error: expect(locator).toHaveText(expected) failed
  90 |     });
  91 |     
  92 | })
```