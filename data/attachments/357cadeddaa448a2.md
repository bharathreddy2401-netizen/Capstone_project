# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: InterfaceFunctionality.spec.js >> Testing the Interface Functionality >> Testing clicking on Women-Dress redirect to Women dresses
- Location: tests/InterfaceFunctionality.spec.js:18:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Sleeveless Dress')
Expected: visible
Error: strict mode violation: getByText('Sleeveless Dress') resolved to 2 elements:
    1) <p>Sleeveless Dress</p> aka getByText('Sleeveless Dress').first()
    2) <p>Sleeveless Dress</p> aka getByText('Sleeveless Dress').nth(1)

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Sleeveless Dress')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e38]:
    - list [ref=e40]:
      - listitem [ref=e41]:
        - link "Products" [ref=e42]:
          - /url: /products
      - listitem [ref=e43]: Women > Dress
    - generic [ref=e44]:
      - generic [ref=e46]:
        - heading "Category" [level=2] [ref=e47]
        - generic [ref=e48]:
          - heading " Women" [level=4] [ref=e51]:
            - link " Women" [ref=e52]:
              - /url: "#Women"
              - generic [ref=e54]: 
              - text: Women
          - heading " Men" [level=4] [ref=e57]:
            - link " Men" [ref=e58]:
              - /url: "#Men"
              - generic [ref=e60]: 
              - text: Men
          - heading " Kids" [level=4] [ref=e63]:
            - link " Kids" [ref=e64]:
              - /url: "#Kids"
              - generic [ref=e66]: 
              - text: Kids
        - generic [ref=e67]:
          - heading "Brands" [level=2] [ref=e68]
          - list [ref=e70]:
            - listitem [ref=e71]:
              - link "(6) Polo" [ref=e72]:
                - /url: /brand_products/Polo
                - generic [ref=e73]: (6)
                - text: Polo
            - listitem [ref=e74]:
              - link "(5) H&M" [ref=e75]:
                - /url: /brand_products/H&M
                - generic [ref=e76]: (5)
                - text: H&M
            - listitem [ref=e77]:
              - link "(5) Madame" [ref=e78]:
                - /url: /brand_products/Madame
                - generic [ref=e79]: (5)
                - text: Madame
            - listitem [ref=e80]:
              - link "(3) Mast & Harbour" [ref=e81]:
                - /url: /brand_products/Mast & Harbour
                - generic [ref=e82]: (3)
                - text: Mast & Harbour
            - listitem [ref=e83]:
              - link "(4) Babyhug" [ref=e84]:
                - /url: /brand_products/Babyhug
                - generic [ref=e85]: (4)
                - text: Babyhug
            - listitem [ref=e86]:
              - link "(3) Allen Solly Junior" [ref=e87]:
                - /url: /brand_products/Allen Solly Junior
                - generic [ref=e88]: (3)
                - text: Allen Solly Junior
            - listitem [ref=e89]:
              - link "(3) Kookie Kids" [ref=e90]:
                - /url: /brand_products/Kookie Kids
                - generic [ref=e91]: (3)
                - text: Kookie Kids
            - listitem [ref=e92]:
              - link "(5) Biba" [ref=e93]:
                - /url: /brand_products/Biba
                - generic [ref=e94]: (5)
                - text: Biba
      - generic [ref=e96]:
        - heading "Women - Dress Products" [level=2] [ref=e97]
        - generic [ref=e99]:
          - generic [ref=e100]:
            - generic [ref=e101]:
              - img "ecommerce website products" [ref=e102]
              - heading "Rs. 1000" [level=2] [ref=e103]
              - paragraph [ref=e104]: Sleeveless Dress
              - link " Add to cart" [ref=e105] [cursor=pointer]:
                - /url: javascript:void();
                - generic [ref=e106]: 
                - text: Add to cart
            - generic [ref=e107]:
              - heading "Rs. 1000" [level=2] [ref=e108]
              - paragraph [ref=e109]: Sleeveless Dress
              - link " Add to cart" [ref=e110] [cursor=pointer]:
                - /url: javascript:void();
                - generic [ref=e111]: 
                - text: Add to cart
          - list [ref=e113]:
            - listitem [ref=e114]:
              - link " View Product" [ref=e115]:
                - /url: /product_details/3
                - generic [ref=e116]: 
                - text: View Product
        - generic [ref=e118]:
          - generic [ref=e119]:
            - generic [ref=e120]:
              - img "ecommerce website products" [ref=e121]
              - heading "Rs. 1500" [level=2] [ref=e122]
              - paragraph [ref=e123]: Stylish Dress
              - link " Add to cart" [ref=e124] [cursor=pointer]:
                - /url: javascript:void();
                - generic [ref=e125]: 
                - text: Add to cart
            - generic [ref=e126]:
              - heading "Rs. 1500" [level=2] [ref=e127]
              - paragraph [ref=e128]: Stylish Dress
              - link " Add to cart" [ref=e129] [cursor=pointer]:
                - /url: javascript:void();
                - generic [ref=e130]: 
                - text: Add to cart
          - list [ref=e132]:
            - listitem [ref=e133]:
              - link " View Product" [ref=e134]:
                - /url: /product_details/4
                - generic [ref=e135]: 
                - text: View Product
        - generic [ref=e137]:
          - generic [ref=e138]:
            - generic [ref=e139]:
              - img "ecommerce website products" [ref=e140]
              - heading "Rs. 2300" [level=2] [ref=e141]
              - paragraph [ref=e142]: Rose Pink Embroidered Maxi Dress
              - link " Add to cart" [ref=e143] [cursor=pointer]:
                - /url: javascript:void();
                - generic [ref=e144]: 
                - text: Add to cart
            - generic [ref=e145]:
              - heading "Rs. 2300" [level=2] [ref=e146]
              - paragraph [ref=e147]: Rose Pink Embroidered Maxi Dress
              - link " Add to cart" [ref=e148] [cursor=pointer]:
                - /url: javascript:void();
                - generic [ref=e149]: 
                - text: Add to cart
          - list [ref=e151]:
            - listitem [ref=e152]:
              - link " View Product" [ref=e153]:
                - /url: /product_details/38
                - generic [ref=e154]: 
                - text: View Product
  - contentinfo [ref=e155]:
    - generic [ref=e160]:
      - heading "Subscription" [level=2] [ref=e161]
      - generic [ref=e162]:
        - textbox "Your email address" [ref=e163]
        - button "" [ref=e164] [cursor=pointer]:
          - generic [ref=e165]: 
        - paragraph [ref=e166]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e170]: Copyright © 2021 All rights reserved
  - text: 
```

# Test source

```ts
  1   | import {test,expect} from "@playwright/test";
  2   | import {Interface} from "../POM/interface";
  3   | 
  4   | test.describe("Testing the Interface Functionality",()=>{
  5   |     let display;
  6   |     test.beforeEach(async ({page})=>{
  7   |             display=new Interface(page);
  8   |             await display.navigate();
  9   |     });
  10  | 
  11  |     test("Testing interface display of home page",async({page})=>{
  12  |        await expect(display.home_heading).toBeVisible();
  13  |        await expect(display.home_category).toBeVisible();
  14  |        await expect(display.home_brands).toBeVisible();
  15  |        await expect(display.home_feature).toBeVisible();
  16  |     });
  17  | 
  18  |     test("Testing clicking on Women-Dress redirect to Women dresses",async({page})=>{
  19  |        await page.getByRole("link",{name:"Women"}).click();
  20  |        await page.getByRole("link",{name:"Dress"}).click();
  21  |       // await expect(page.getByRole("heading",{name:"Women - Dress Products"})).toBeVisible();
> 22  |        await expect(page.getByText("Sleeveless Dress")).toBeVisible();
      |                                                         ^ Error: expect(locator).toBeVisible() failed
  23  |        await expect(page.getByText("Stylish Dress")).toBeVisible();
  24  |        await expect(page.getByText("Rose Pink Embroidered Maxi Dress")).toBeVisible();
  25  |     });
  26  | 
  27  |     test("Testing clicking on Men takes us to men dresses",async({page})=>{
  28  |       await page.getByRole("link",{name:"Men"}).nth(1).click();
  29  |       await page.getByRole("link",{name:"Tshirts"}).click();
  30  |       await expect(page.getByRole("heading",{name:"Men - Tshirts Products"})).toBeVisible();
  31  |       await expect(page.getByText("Men Tshirt")).toBeVisible();
  32  |       await expect(page.getByText("Pure Cotton V-Neck T-Shirt")).toBeVisible();
  33  |       await expect(page.getByText("Green Side Placket Detail T-Shirt")).toBeVisible();
  34  |       await expect(page.getByText("Premium Polo T-Shirts")).toBeVisible();
  35  |       await expect(page.getByText("Pure Cotton Neon Green Tshirt")).toBeVisible();
  36  |       await expect(page.getByText("Graphic Design Men T Shirt-Blue")).toBeVisible();
  37  |     });
  38  | 
  39  |     test("Testing clicking on Kids takes us to kids dresses", async ({ page }) => {
  40  |       await page.locator('#accordian').getByRole("link", { name: "Kids" }).first().click();
  41  |       await page.locator("#Kids").getByRole("link", { name: "Dress" }).click();
  42  |       await expect(page.getByRole("heading", { name: /Kids - Dress Products/i })).toBeVisible();
  43  |       await expect(page.getByText("Fancy Green Dress")).toBeVisible();
  44  |       await expect(page.getByText("Full Sleeves Top Red Butterfly Design")).toBeVisible();
  45  |       await expect(page.getByText("Rose Pink Silk Dress")).toBeVisible();
  46  |     });
  47  | 
  48  |     test("Testing the brand filter navigates to that brand products page",async({page})=>{
  49  |       await page.getByRole("link", { name: "Products" }).click();
  50  |       await page.getByRole("link", { name: "Madame" }).click();
  51  |       await expect(page.getByRole("heading", { name: "Brand - Madame Products" })).toBeVisible();
  52  |       await expect(page).toHaveURL("https://automationexercise.com/brand_products/Madame");
  53  |     });
  54  | 
  55  |     test("Testing the image slider controls change home banner contexts",async({page})=>{
  56  |       const firstBanner = page.locator('.item.active img').first();
  57  |       await expect(firstBanner).toBeVisible();
  58  |       const firstImgSrc = await firstBanner.getAttribute('src');
  59  |       await page.locator('.fa-angle-right').first().click();
  60  |       //await page.waitForTimeout(1000);
  61  |       const secondBanner = page.locator('.item.active img').first();
  62  |       const secondImgSrc = await secondBanner.getAttribute('src');
  63  |       expect(firstImgSrc).not.toBe(secondImgSrc);
  64  |     });
  65  | 
  66  |     test("Testing the buttom scroll up arrow button returns to the header",async({page})=>{
  67  |       await page.getByRole("link", { name: "Products" }).click();
  68  |       const subscriptionHeading = page.getByRole("heading", { name: "Subscription" });
  69  |       await subscriptionHeading.scrollIntoViewIfNeeded(); 
  70  |       await expect(subscriptionHeading).toBeVisible();
  71  |       const scrollUpArrow = page.locator("#scrollUp");
  72  |       await expect(scrollUpArrow).toBeVisible();
  73  |       await scrollUpArrow.click();
  74  |       await expect(page.getByRole("link", { name: "Home" })).toBeInViewport();
  75  |     });
  76  | 
  77  |     test("Testing the view product displays the product details without missing any data",async({page})=>{
  78  |       await page.getByRole("link", { name: "Products" }).click();
  79  |       await page.getByRole("link", { name: "View Product" }).nth(2).click();
  80  |       await expect(page.getByRole("heading",{name:"Sleeveless Dress"})).toBeVisible();
  81  |       await expect(page.getByText("Category: Women > Dress")).toBeVisible();
  82  |       await expect(page.getByText("Rs. 1000")).toBeVisible();
  83  |       await expect(page.getByText("Quantity")).toBeVisible();
  84  |       await expect(page.getByText("Availability: In Stock")).toBeVisible();
  85  |       await expect(page.getByText("Condition: New")).toBeVisible();
  86  |       await expect(page.getByText("Brand: Madame")).toBeVisible();
  87  |      
  88  |     })
  89  | 
  90  | 
  91  |     test("Testing the display of Special offer banner in product page",async({page})=>{
  92  |       await page.getByRole("link",{name:"Products"}).click();
  93  |       await expect(page.locator("#sale_image")).toBeVisible();
  94  |     });
  95  |     test("Testing clicking the product link in the header will redirect to product page",async({page})=>{
  96  |       await page.getByRole("link",{name:"Products"}).click();
  97  |       await expect(page.getByRole("heading",{name:"All Products"})).toBeVisible();
  98  |     });
  99  | 
  100 |     test("Testing the search bar Visibility in the product page",async({page})=>{
  101 |       await page.getByRole("link",{name:"Products"}).click();
  102 |       await expect(page.locator("#search_product")).toBeVisible();
  103 |     });
  104 | 
  105 |     test("Testing the Visibility of Subscription option in the buttom of the page",async({page})=>{
  106 |       await expect(page.getByRole("heading",{name:"Subscription"})).toBeVisible();
  107 |     });
  108 | 
  109 |     test("Testing the subscription block by subscribing with email",async({page})=>{
  110 |       await page.locator("#susbscribe_email").fill("Auser12345@gmail.com");
  111 |       await page.locator("#subscribe").click();
  112 |       await expect(page.locator("#success-subscribe")).toBeVisible();
  113 |     });
  114 | 
  115 |     test("Testing the subscription block with empty email field",async({page})=>{
  116 |       await page.locator("#susbscribe_email").fill("");
  117 |       await page.locator("#subscribe").click();
  118 |       await expect(page.locator("#success-subscribe")).not.toBeVisible();
  119 |     });
  120 | 
  121 |     test("Testing the Subscription block validation with wrong email format",async({page})=>{
  122 |       await page.locator("#susbscribe_email").fill("testuser@invaliddomain");
```