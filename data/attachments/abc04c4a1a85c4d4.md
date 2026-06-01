# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Cart.spec.js >> Testing the Cart Functionality with login >> Testing the cart first by login and adding the product then logout and then re login will display the product
- Location: tests/Cart.spec.js:163:9

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
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
  38  |         await cart.add();
  39  |         await page.getByRole("button",{name:"Continue Shopping"}).click();
  40  |         await cart.cartbtn();
  41  |         await page.locator(".cart_delete a i.fa.fa-times").click();
  42  |         await expect(page.locator("#empty_cart .text-center")).toHaveText(/Cart is empty!/);
  43  | 
  44  |     });
  45  | 
  46  |     test("Testing the price updation on adding same item into the cart",async({page})=>{
  47  |         await cart.add();
  48  |         await cart.continue();
  49  |         //await page.getByRole("button",{name:"Continue Shopping"}).click();
  50  |         await cart.cartbtn();
  51  |         const firstPrice = page.locator("#cart_info table tbody tr .cart_price p");
  52  |         await expect(firstPrice).toHaveText(/500/);
  53  |     });
  54  | 
  55  |     test("Testing the multiplied price of products in the cart is correct",async ({page})=>{
  56  |         await cart.add();
  57  |         await cart.continue();
  58  |         await cart.add();
  59  |         await cart.continue();
  60  |         await cart.cartbtn();
  61  |         await expect(page.locator("#cart_info_table tbody tr td p.cart_total_price")).toHaveText(/1000/);
  62  |     });
  63  | 
  64  |     test("Testing By adding different products into the cart",async({page})=>{
  65  |         await cart.add();
  66  |         await cart.continue();
  67  |         await cart.addTshirt();
  68  |         await cart.continue();
  69  |         await cart.cartbtn();
  70  |         await expect(page.getByRole("link",{name:"Blue Top"})).toBeVisible();
  71  |         await expect(page.getByRole("link",{name: "Men Tshirt"})).toBeVisible();
  72  |     });
  73  | 
  74  |     test("Testing the cart products to be visible in multiple browser tabs", async({context,page})=>{
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
> 138 |     test.beforeEach(async ({page})=>{
      |          ^ Test timeout of 30000ms exceeded while running "beforeEach" hook.
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
  175 |         await expect(page.getByRole("link",{name:"Blue Top"})).toBeVisible();
  176 | 
  177 |     })
  178 |    
  179 | });
```