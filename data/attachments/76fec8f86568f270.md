# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Cart.spec.js >> Testing the Cart Functionality with login >> Testing the cart first by login and adding the product then logout and then re login will display the product
- Location: tests/Cart.spec.js:163:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('link', { name: 'Blue Top' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('link', { name: 'Blue Top' })

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
      - link " Logout":
        - /url: /logout
    - listitem:
      - link " Delete Account":
        - /url: /delete_account
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
    - listitem:  Logged in as user12345
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
```

# Test source

```ts
  75  |         await cart.add();
  76  |         await cart.continue();
  77  |         const page2 = await context.newPage();
  78  |         const cartTab2 = new Cart(page2);
  79  |         await cartTab2.navigate();
  80  |         await cartTab2.cartbtn();
  81  |         await expect(page2.getByRole("link",{name:"Blue Top"})).toBeVisible();
  82  |     });
  83  |   
  84  |     test("Testing the clicking of item in cart directs us to the product page of that item",async({page})=>{
  85  |         await cart.add();
  86  |         await cart.continue();
  87  |         await cart.cartbtn(); 
  88  |         await page.getByRole("link",{name:"Blue Top"}).click();
  89  |         await expect(page.getByRole("heading",{name:"Blue Top"})).toBeVisible(); 
  90  |     })
  91  | 
  92  |     test("Testing the Updation of products in product page will update the cart",async({page})=>{
  93  |         await page.getByRole("link",{name:"View Product"}).nth(3).click();
  94  |         await page.locator("#quantity").fill("5");
  95  |         await page.getByRole("button",{name:"Add to cart"}).click();
  96  |         await cart.continue();
  97  |         await cart.cartbtn();
  98  |         await expect(page.locator("#product-4 td button.disabled")).toHaveText("5");
  99  |     });
  100 |     
  101 |     test("Testing cart state when we reload the page",async({page})=>{
  102 |         await cart.add();
  103 |         await cart.continue();
  104 |         await cart.cartbtn();
  105 |         await expect(page.getByRole("link", { name: "Blue Top" })).toBeVisible();
  106 |         await page.reload();
  107 |         await expect(page.getByRole("link", { name: "Blue Top" })).toBeVisible();
  108 |         await page.waitForTimeout(5000);
  109 | 
  110 |     });
  111 | 
  112 |     test("Testing by adding the item from going to category",async({page})=>{
  113 |         await page.getByRole("link",{name:"Products"}).click();
  114 |         await page.getByRole("link",{name:"Women"}).click();
  115 |         await page.getByRole("link",{name:"Saree"}).click();
  116 |         await page.locator(".productinfo").first();
  117 |         await page.getByRole("link",{name:"Add to cart"}).first().click();
  118 |         await cart.continue();
  119 |         await cart.cartbtn();
  120 |         await expect(page.getByRole("link",{name:"Cotton Silk Hand Block Print Saree"})).toBeVisible();
  121 |     });    
  122 | 
  123 |     test("Testing by adding product to the cart directly from the search results page",async({page})=>{
  124 |         await page.getByRole("link",{name:"Products"}).click();
  125 |         await page.getByPlaceholder("Search Product").fill("Frozen Tops For Kids");
  126 |         await page.locator("#submit_search").click();
  127 |         await page.getByRole('link',{name:"View Product"}).click();
  128 |         await page.getByRole("button",{name:"Add to cart"}).click();
  129 |         await cart.continue();
  130 |         await cart.cartbtn();
  131 |         await expect(page.getByRole("link",{name:"Frozen Tops For Kids"})).toBeVisible();
  132 |     })
  133 |     
  134 | });
  135 | 
  136 | test.describe("Testing the Cart Functionality with login",()=>{
  137 |     let cart1;
  138 |     test.beforeEach(async ({page})=>{
  139 |             cart1=new Cart(page);
  140 |             await cart1.navigate();
  141 |     });
  142 | 
  143 |     test.afterEach(async({page})=>{
  144 |         await page.goto('https://automationexercise.com/view_cart');
  145 |         const deleteButtons = page.locator('.cart_quantity_delete');
  146 |         const count = await deleteButtons.count();
  147 |         for (let i = 0; i < count; i++) {
  148 |             await deleteButtons.nth(0).click(); 
  149 |              
  150 |     }
  151 |     })
  152 | 
  153 |     test("Testing by adding an item as a guest and then log in then the cart synchronices to it",async({page})=>{
  154 |         await cart1.add();
  155 |         await cart1.continue();
  156 |         await page.getByRole("link",{name:"Signup / Login"}).click();
  157 |         await cart1.login();
  158 |         await page.getByRole("button",{name:"Login"}).click();
  159 |         await cart1.cartbtn();
  160 |         await expect(page.getByRole("link",{name:"Blue Top"})).toBeVisible();
  161 |     });
  162 | 
  163 |     test("Testing the cart first by login and adding the product then logout and then re login will display the product",async({page})=>{
  164 |         await page.getByRole("link",{name:"Signup / Login"}).click();
  165 |         await cart1.login();
  166 |         await page.getByRole("button",{name:"Login"}).click();
  167 |         await cart1.add();
  168 |         await cart1.continue();
  169 |         await cart1.cartbtn();
  170 |         await expect(page.getByRole("link",{name:"Blue Top"})).toBeVisible();
  171 |         await page.getByRole("link",{name:"Logout"}).click();
  172 |         await cart1.login();
  173 |         await page.getByRole("button",{name:"Login"}).click();
  174 |         await cart1.cartbtn();
> 175 |         await expect(page.getByRole("link",{name:"Blue Top"})).toBeVisible();
      |                                                                ^ Error: expect(locator).toBeVisible() failed
  176 | 
  177 |     })
  178 |    
  179 | });
```