# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Cart.spec.js >> Testing the Cart Functionality >> Testing cart state when we reload the page
- Location: tests\Cart.spec.js:93:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.reload: Test timeout of 30000ms exceeded.
Call log:
  - waiting for navigation until "load"
    - navigated to "https://automationexercise.com/view_cart"

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
  - insertion [ref=e93]:
    - iframe [ref=e96]:
      - iframe [ref=f22e1]:
        - generic [ref=f23e2]:
          - link "Advertisement" [ref=f23e4] [cursor=pointer]:
            - /url: https://ad.doubleclick.net/pcs/click?xai=AKAOjsuil4ZZg5Vto_j03evf2D0YqBhGdurbtLWKnKalH1n26FW8RtBYoISlATqMWVj6mPqfQs9a45AWy-NY97C60x75nBHaKDynmSUyY31RbCjfqEiGrcTBWa5u3Srtb3ZalClH3zgxQmckZipsl2Rc-uvmRGSSKcWTepD_Bm4q31qXBhhfTx0TFOhNk-fSHM0_SMLIPGG93FpZLj7z1lBkDpbBMvm_MN2zC_Ye8KSFFvVWuiln7hpKnmx2LvtUHtCxOky8eg1uHKDcj6R85v-VBgbrmaUPxhU_FwqAD9v_r0k0PfLh5HQtRGCyP4XBn4xEMf9hInoMYc46zYrVKe8QmMAjPNseue3JwJW7169BZW3rxJAyaHNzYdiY1V2g5raop5LuBFF0DgPb7KWAEFu-2ARdr2cSm8s4oN1x3CFohpvdxOECQiHim8Y_hNE9cI9eZ3fJLH9RnFqRAZNQTMasf0n6hHCZqro4gtkH0Tfa8VQHSRs6sYIRs4DtDSG_FZy3NU22ShdRUGVcH7sdZOIYpsK9XHXuZySTOCVXg6LoHs4xDq9fXVMJ3GQI1UDyhtD-ehjDLrQDa7_HjNJ8m7FgxxlyP_B5NfU8a6L8XTXLVp1Z5Cz0P1CU4fup4XyKYVAdjkTjRUihXza2QUy4Tzc63rKDEjXoZbwvrxBNi11INNI_GTwQrPg1L7n8EvPTS-CVoUynzTbb68pEB2R3X-Fcy0Bo8d7ZPEhLZmE6Xw6eYIJqgJXOw6johjjoPOF2yk7b1BMWDd4HnCD92RBuNrRkacXCR6BxiP-tZK8Zjoj-ZH-dJKYeiBYQvnyZEQaDPvvSsP-_OcYqGqhQOfmTZUGm6fXqnrNqJgGWM20_rCAOQ-YNHpD89YyWCo5etfS1U0GU9G60nzT5EDOHvxRENNu52AScSITgzsT35y8CLkYGPI4XhVV293il-3ItUhArz1enN5Zt67WwXw4AY5gMFbaF8w2B-eK92iRInLWVgASlZPv2LGCy1LEeOOcDvrMPIvmw-FVdxtCRjnE_KpvQByR_1syhy2kK3kG1StYtIqcZBMuh371Iss66hWQLnFaFNK5dvMcuG1ymTBvrpBHHEowKzVd9H69m__WV9SdXkb4anZi7vbCaOCpImlUBXlxxhSJt6Q_VEr-VXQiZ8IahG0nQGc_P6Rg-XQd3z3Knp2bhzdu9o1vgnRDXkZOzbWbtoAjqASPqNVRS5q3Z3kHazGS9j-vW_5AD_CPWb21jK497xXA1X0RKhFZZ3Mi6tg_s3yTY13LC_uhV6LEj9dEw39X0I_7HjaXdJNNdJrHFIflcDNOMuyfJH2uD7KKtQTnUzQdhmwrMEbzDKqXD8zukwTyaqdy6kuT2Jl5FI7FeD0EZVBJ6D2xYtpC5EWEI507-ktazGiCj1ESLDYBSZEY-2cBIMqJdWt4_bCMxSdtZX9QfEhecFf1M9fHe97eCSJ5YaHsHN1-wFuO4c80onb4rFTuX2NHEwstLyK59z6ncvAk1I2BguvWK7SehrJK32xiSIFfruFUmZekCmLa4TTV8ubt2IJsQZGB8smda5fd-qMM_Y1ZQo0HhLraE2aZsQZXVwd8gdzKVrME2wKage17Xeddu0J0ZGoEV2Crt2hzODNLtuwujcWFOgGgoGt0WpIM3YmdlcxVeOCSRbBa8VAY3qoF0MaABRu0tHCNvsTtwE-HhVcRDgugudiWHvEeiHlG011W-LhM-bhuRbG4ciIhgaKxoU1OLxdqvzmQhzDc4vzsfyCZstXyUNQ&sai=AMfl-YTaHMwA5QDljZ3C_iTDUEPVioiR2AyxPnQz2ixxeUNHtASzcH4htGGOp6Jz55eIU6vwChIwCsU461RvlJKcvkaQJm9cSBON9uiRtQ7JErexFgHTmTrTk1j3KDXrQdh3fzQ3c5ZOToJMQkS7enFu9c6XMBMGj14jMWCGjr5yw-jfrwsHD8ifxsqxwaZ3-tJRBlGAwmlREfQAC-5YCE22n0o0SmGA5kT8VHixnSLnf8rCODXpehF99e8GcO60faW51V8O1Y4I72Ku3ZUHsP_-GvX2e_GZ5SrS8A8MztlNB_eBkIuINTOHs2Apza8Po6q-y-5IbEhRAt3ciZWNn4hOevXTabuZpGr7_SSwlSYRpYdVo79UmMI_-Z5gzjmCjMi4m5SwJxsGC8xJLNBakwMI7LsWtTv5lmmva2CefriZZ62rP3uQtLOY_0Xr9dy6AGYwBoZuyelvSduP5v9vhYJPbSyuTbVTjJOt39avb6vgaFKHYtVN4UCJROfl9xFFj8oDAXWfcSTeFEbcHWLO5p2zI3HlASq7-Q_6t011ZPWCzvj09EJK2npnyVpJNmfzHC3XaB14HCjIVek3rcWDy5ZVclSz4cn5SyKWPqWjT-fZIXXZ9NFixSkiPk9AnQFkD8PQHBx2gx0k23hymKn7IZDU7pXbby9j53XTl33iNBmGAUmbPbKOIk5Ce6pxzOpJg4kg-J8kuzeSlVx3wgId0tGtB26Y5oER2WphPDee-MRMFzmxUtMyHgib1Qj8SzSCPIQSOZFs-hzNHoHxgTXSOJvGe0OllJc6cA30SSkRiYtQ6WwFA_NFEtLAycoZ7XiHKG5v6ocF-KJoakS_AriDjWN8yIwA0YWQ_Awei0DvlBIRzC68KFVdQdC2x5zyEw&sig=Cg0ArKJSzInYN3QNOl0T&fbs_aeid=%5Bgw_fbsaeid%5D&crd=aHR0cHM6Ly9ob25lcmhvbWVzLmNvbQ&urlfix=1&adurl=https://www.honerhomes.com/projects/richmont%3Futm_source%3Ddv360%26utm_medium%3Ddisplay%26utm_campaign%3Drichmont_prehike_may26%26utm_content%3D728x90
            - img "Advertisement" [ref=f23e5]
          - generic [ref=f23e6]:
            - generic:
              - img [ref=f23e10] [cursor=pointer]
              - button [ref=f23e12] [cursor=pointer]:
                - img [ref=f23e13]
```

# Test source

```ts
  1   | import {test,expect} from "@playwright/test";
  2   | import {Cart} from "../POM/cart";
  3   | 
  4   | test.describe("Testing the Cart Functionality",()=>{
  5   |     let cart;
  6   |     test.beforeEach(async ({page})=>{
  7   |             cart=new Cart(page);
  8   |             await cart.navigate();
  9   |     });
  10  | 
  11  |     test.skip("Testing the click on add cart button pops the message added to cart",async ({page})=>{
  12  |         await cart.add();
  13  |         await expect(page.getByRole("button",{name:"Continue Shopping"})).toBeVisible();
  14  |     });
  15  | 
  16  |     test.skip("testing cart by adding the same product multiple times and checking the updation in quantity",async({page})=>{
  17  |         await cart.add();
  18  |         
  19  |         await page.getByRole("button",{name:"Continue Shopping"}).click();
  20  |         await cart.cartbtn();
  21  |         await expect(page.locator("#cart_info_table tbody tr .disabled")).toHaveText("1");
  22  |         await cart.navigate();
  23  |         await cart.add();
  24  |         await cart.cartbtn();
  25  |         await expect(page.locator("#cart_info_table tbody tr .disabled")).toHaveText("2");
  26  |         
  27  |     });
  28  | 
  29  |     test.skip("Removing of products from the cart",async({page})=>{
  30  |         await cart.add();
  31  |         await page.getByRole("button",{name:"Continue Shopping"}).click();
  32  |         await cart.cartbtn();
  33  |         await page.locator(".cart_delete a i.fa.fa-times").click();
  34  |         await expect(page.locator("#empty_cart .text-center")).toHaveText(/Cart is empty!/);
  35  | 
  36  |     });
  37  | 
  38  |     test.skip("Testing the price updation on adding same item into the cart",async({page})=>{
  39  |         await cart.add();
  40  |         await cart.continue();
  41  |         //await page.getByRole("button",{name:"Continue Shopping"}).click();
  42  |         await cart.cartbtn();
  43  |         const firstPrice = page.locator("#cart_info table tbody tr .cart_price p");
  44  |         await expect(firstPrice).toHaveText(/500/);
  45  |     });
  46  | 
  47  |     test.skip("Testing the multiplied price of products in the cart is correct",async ({page})=>{
  48  |         await cart.add();
  49  |         await cart.continue();
  50  |         await cart.add();
  51  |         await cart.continue();
  52  |         await cart.cartbtn();
  53  |         await expect(page.locator("#cart_info_table tbody tr td p.cart_total_price")).toHaveText(/1000/);
  54  |     });
  55  | 
  56  |     test.skip("Testing By adding different products into the cart",async({page})=>{
  57  |         await cart.add();
  58  |         await cart.continue();
  59  |         await cart.addTshirt();
  60  |         await cart.continue();
  61  |         await cart.cartbtn();
  62  |         await expect(page.getByRole("link",{name:"Blue Top"})).toBeVisible();
  63  |         await expect(page.getByRole("link",{name: "Men Tshirt"})).toBeVisible();
  64  |     });
  65  | 
  66  |     test.skip("Testing the cart products to be visible in multiple browser tabs", async({context,page})=>{
  67  |         await cart.add();
  68  |         await cart.continue();
  69  |         const page2 = await context.newPage();
  70  |         const cartTab2 = new Cart(page2);
  71  |         await cartTab2.navigate();
  72  |         await cartTab2.cartbtn();
  73  |         await expect(page2.getByRole("link",{name:"Blue Top"})).toBeVisible();
  74  |     });
  75  |   
  76  |     test.skip("Testing the clicking of item in cart directs us to the product page of that item",async({page})=>{
  77  |         await cart.add();
  78  |         await cart.continue();
  79  |         await cart.cartbtn();
  80  |         await page.getByRole("link",{name:"Blue Top"}).click();
  81  |         await expect(page.getByRole("heading",{name:"Blue Top"})).toBeVisible(); 
  82  |     })
  83  | 
  84  |     test("Testing the Updation of products in product page will update the cart",async({page})=>{
  85  |         await page.getByRole("link",{name:"View Product"}).nth(3).click();
  86  |         await page.locator("#quantity").fill("5");
  87  |         await page.getByRole("button",{name:"Add to cart"}).click();
  88  |         await cart.continue();
  89  |         await cart.cartbtn();
  90  |         await expect(page.locator("#product-4 td button.disabled")).toHaveText("5");
  91  |     });
  92  |     
  93  |     test("Testing cart state when we reload the page",async({page})=>{
  94  |         await cart.add();
  95  |         await cart.continue();
  96  |         await cart.cartbtn();
  97  |         await expect(page.getByRole("link", { name: "Blue Top" })).toBeVisible();
> 98  |         await page.reload();
      |                    ^ Error: page.reload: Test timeout of 30000ms exceeded.
  99  |         await expect(page.getByRole("link", { name: "Blue Top" })).toBeVisible();
  100 |         await page.waitForTimeout(5000);
  101 | 
  102 |     })
  103 | 
  104 | })
```