# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.js >> Testing the Login Page >> Testing mid-journey login does not discard existing guest user cart additions
- Location: tests\Login.spec.js:98:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Blue Top"
Received: "Sleeveless Dress"
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
          - link " Logout" [ref=e23] [cursor=pointer]:
            - /url: /logout
            - generic [ref=e24]: 
            - text: Logout
        - listitem [ref=e25]:
          - link " Delete Account" [ref=e26] [cursor=pointer]:
            - /url: /delete_account
            - generic [ref=e27]: 
            - text: Delete Account
        - listitem [ref=e28]:
          - link " Test Cases" [ref=e29] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e30]: 
            - text: Test Cases
        - listitem [ref=e31]:
          - link " API Testing" [ref=e32] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e33]: 
            - text: API Testing
        - listitem [ref=e34]:
          - link " Video Tutorials" [ref=e35] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e36]: 
            - text: Video Tutorials
        - listitem [ref=e37]:
          - link " Contact us" [ref=e38] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e39]: 
            - text: Contact us
        - listitem [ref=e40]:
          - generic [ref=e41]:
            - generic [ref=e42]: 
            - text: Logged in as user12345
  - generic [ref=e44]:
    - list [ref=e46]:
      - listitem [ref=e47]:
        - link "Home" [ref=e48] [cursor=pointer]:
          - /url: /
      - listitem [ref=e49]: Shopping Cart
    - generic [ref=e54] [cursor=pointer]: Proceed To Checkout
    - table [ref=e56]:
      - rowgroup [ref=e57]:
        - row "Item Description Price Quantity Total" [ref=e58]:
          - cell "Item" [ref=e59]
          - cell "Description" [ref=e60]
          - cell "Price" [ref=e61]
          - cell "Quantity" [ref=e62]
          - cell "Total" [ref=e63]
          - cell [ref=e64]
      - rowgroup [ref=e65]:
        - row "Product Image Sleeveless Dress Women > Dress Rs. 1000 1 Rs. 1000 " [ref=e66]:
          - cell "Product Image" [ref=e67]:
            - link "Product Image" [ref=e68] [cursor=pointer]:
              - /url: ""
              - img "Product Image" [ref=e69]
          - cell "Sleeveless Dress Women > Dress" [ref=e70]:
            - heading "Sleeveless Dress" [level=4] [ref=e71]:
              - link "Sleeveless Dress" [ref=e72] [cursor=pointer]:
                - /url: /product_details/3
            - paragraph [ref=e73]: Women > Dress
          - cell "Rs. 1000" [ref=e74]:
            - paragraph [ref=e75]: Rs. 1000
          - cell "1" [ref=e76]:
            - button "1" [ref=e77] [cursor=pointer]
          - cell "Rs. 1000" [ref=e78]:
            - paragraph [ref=e79]: Rs. 1000
          - cell "" [ref=e80]:
            - generic [ref=e82] [cursor=pointer]: 
        - row "Product Image Men Tshirt Men > Tshirts Rs. 400 2 Rs. 800 " [ref=e83]:
          - cell "Product Image" [ref=e84]:
            - link "Product Image" [ref=e85] [cursor=pointer]:
              - /url: ""
              - img "Product Image" [ref=e86]
          - cell "Men Tshirt Men > Tshirts" [ref=e87]:
            - heading "Men Tshirt" [level=4] [ref=e88]:
              - link "Men Tshirt" [ref=e89] [cursor=pointer]:
                - /url: /product_details/2
            - paragraph [ref=e90]: Men > Tshirts
          - cell "Rs. 400" [ref=e91]:
            - paragraph [ref=e92]: Rs. 400
          - cell "2" [ref=e93]:
            - button "2" [ref=e94] [cursor=pointer]
          - cell "Rs. 800" [ref=e95]:
            - paragraph [ref=e96]: Rs. 800
          - cell "" [ref=e97]:
            - generic [ref=e99] [cursor=pointer]: 
        - row "Product Image Blue Top Women > Tops Rs. 500 1 Rs. 500 " [ref=e100]:
          - cell "Product Image" [ref=e101]:
            - link "Product Image" [ref=e102] [cursor=pointer]:
              - /url: ""
              - img "Product Image" [ref=e103]
          - cell "Blue Top Women > Tops" [ref=e104]:
            - heading "Blue Top" [level=4] [ref=e105]:
              - link "Blue Top" [ref=e106] [cursor=pointer]:
                - /url: /product_details/1
            - paragraph [ref=e107]: Women > Tops
          - cell "Rs. 500" [ref=e108]:
            - paragraph [ref=e109]: Rs. 500
          - cell "1" [ref=e110]:
            - button "1" [ref=e111] [cursor=pointer]
          - cell "Rs. 500" [ref=e112]:
            - paragraph [ref=e113]: Rs. 500
          - cell "" [ref=e114]:
            - generic [ref=e116] [cursor=pointer]: 
  - contentinfo [ref=e117]:
    - generic [ref=e122]:
      - heading "Subscription" [level=2] [ref=e123]
      - generic [ref=e124]:
        - textbox "Your email address" [ref=e125]
        - button "" [ref=e126] [cursor=pointer]:
          - generic [ref=e127]: 
        - paragraph [ref=e128]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e132]: Copyright © 2021 All rights reserved
  - text: 
```

# Test source

```ts
  19  |         await login.filllogin("Auser12345@gmail.com","user12345");
  20  |         await login.clickLogin();
  21  |         await expect(page.getByText('Logged in as user12345')).toBeVisible();
  22  |     
  23  |     });
  24  | 
  25  |     test('the header Logout button logouts user instantly',async ({page})=>{
  26  |         await login.filllogin("Auser12345@gmail.com","user12345");
  27  |         await login.clickLogin();
  28  |         await expect(page.getByText('Logged in as user12345')).toBeVisible();
  29  |         await page.getByRole("link",{name:"Logout"}).click();
  30  |         await expect(page.getByRole("heading",{name:"Login to your account"})).toBeVisible();
  31  |     });
  32  | 
  33  |     test("Testing access rejection when attempting authentication with a non-registered email",async ({page})=>{
  34  |         await login.filllogin("qwert@123","1234");
  35  |         await login.clickLogin();
  36  |         await expect(page.getByRole("paragraph",{name:"Your email or password is incorrect!"}));
  37  |     });
  38  | 
  39  |     test("Testing access rejection when inputting a valid email with an invalid password",async ({page})=>{
  40  |         await login.filllogin("Auser12345@gmail.com","1234");
  41  |         await login.clickLogin();
  42  |         await expect(page.getByRole("paragraph",{name:"Your email or password is incorrect!"}));
  43  |     });
  44  | 
  45  |     test("Testing password By changing case-sensitivity",async ({page})=>{
  46  |         await login.filllogin("Auser12345@gmail.com","User12345");
  47  |         await login.clickLogin();
  48  |         await expect(page.getByRole("paragraph",{name:"Your email or password is incorrect!"}));
  49  |         //await page.waitForTimeout(5000);
  50  |     });
  51  | 
  52  |     test("Testing Login Page with empty email",async({page})=>{
  53  |         await login.filllogin("","User12345");
  54  |         await login.clickLogin();
  55  |         const email =  page.getByPlaceholder("Email Address").first();
  56  |         const isValid = await email.evaluate((e)=>e.validationMessage);
  57  |         await expect(isValid).toContain("Please fill out this field");
  58  |     });
  59  | 
  60  |     test("Testing the login page  with empty password",async({page})=>{
  61  |         await login.filllogin("Auser12345@gmail.com","");
  62  |         await login.clickLogin();
  63  |         const password = page.getByPlaceholder("password");
  64  |         const isvalid = await password.evaluate((e)=>e.validationMessage);
  65  |         await expect(isvalid).toContain("Please fill out this field");
  66  |     });
  67  | 
  68  |     test("Testing the login page with empty email and password",async({page})=>{
  69  |         await login.filllogin("","");
  70  |         await login.clickLogin();
  71  |         const email =  page.getByPlaceholder("Email Address").first();
  72  |         const password = page.getByPlaceholder("password");
  73  |         const isValid = await email.evaluate((e)=>e.validationMessage);
  74  |         await expect(isValid).toContain("Please fill out this field");
  75  |     });
  76  | 
  77  |     test("Testing Refresh with also preserve the login details",async ({page})=>{
  78  |         await login.filllogin("Auser12345@gmail.com","user12345");
  79  |         await login.clickLogin();
  80  |         await expect(page.getByText('Logged in as user12345')).toBeVisible();
  81  |         await page.reload();
  82  |         await expect(page.getByText('Logged in as user12345')).toBeVisible();
  83  |     });
  84  | 
  85  |     test("Testing opening a new tab will save our login info", async ({page})=>{
  86  |         await login.filllogin("Auser12345@gmail.com","user12345");
  87  |         await login.clickLogin();
  88  |         await expect(page.getByText('Logged in as user12345')).toBeVisible();
  89  | 
  90  |         const context = page.context();
  91  | 
  92  |         const newTab = await context.newPage();
  93  |         await newTab.goto("https://automationexercise.com");
  94  |         await expect(page.getByText('Logged in as user12345')).toBeVisible();
  95  |         await page.waitForTimeout(5000);
  96  |     });
  97  | 
  98  |     test("Testing mid-journey login does not discard existing guest user cart additions",async({page})=>{
  99  |         await page.goto("https://automationexercise.com/");
  100 |         const firstProductAddToCart = page.locator('.add-to-cart').first();
  101 |         await firstProductAddToCart.click();
  102 |         await page.getByRole("link", {name: "View Cart"}).click();
  103 | 
  104 |         const guestCartItem = page.locator('#cart_info_table tbody tr').first();
  105 |         await expect(guestCartItem).toBeVisible(); 
  106 |     
  107 |          // Grab the name of the product to verify it survives the login journey
  108 |         const guestProductName = await guestCartItem.locator('.cart_description h4').innerText();
  109 |         await page.getByRole('link', { name: 'Signup / Login' }).click();
  110 |         await login.filllogin("Auser12345@gmail.com", "user12345");
  111 |         await login.clickLogin();
  112 |         await expect(page.getByText('Logged in as user12345')).toBeVisible();
  113 |         await page.getByRole('link', { name: ' Cart' }).first().click(); 
  114 | 
  115 |         const postLoginCartItem = page.locator('#cart_info_table tbody tr').first();
  116 |         await expect(postLoginCartItem).toBeVisible();
  117 |     
  118 |         const postLoginProductName = await postLoginCartItem.locator('.cart_description h4').innerText();
> 119 |         await expect(postLoginProductName).toBe(guestProductName);
      |                                            ^ Error: expect(received).toBe(expected) // Object.is equality
  120 |     });
  121 | 
  122 | 
  123 | })
```