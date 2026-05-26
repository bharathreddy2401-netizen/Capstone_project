# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Cart.spec.js >> Testing the Cart Functionality >> testing cart by adding the same product multiple times and checking the updation in quantity
- Location: tests\Cart.spec.js:16:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.col-sm-8 div ul li a i .fa.fa-home')

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
  - generic:
    - insertion:
      - generic:
        - iframe
  - insertion [ref=e93]:
    - iframe [ref=e96]:
      - iframe [ref=f31e1]:
        - generic [active]:
          - generic [ref=f32e1]:
            - generic [ref=f32e2]:
              - generic:
                - img [ref=f32e6] [cursor=pointer]
                - button [ref=f32e8] [cursor=pointer]:
                  - img [ref=f32e9]
            - insertion [ref=f32e16]:
              - generic [ref=f32e17]:
                - link "Click Here" [ref=f32e18] [cursor=pointer]:
                  - /url: https://googleads.g.doubleclick.net/dbm/clk?sa=L&ai=CN-4JFCUUaubJNdeb4dkPtcet2Abd_cvuhQHqrpDioxWv5Z25wEYQASD9tJ6VAWDl6uMDoAGL4oqgAcgBCagDAcgDmwSqBIYCT9BKa2BVq-SaG0spoRO-nsCfDz7jMGC90v5dvDPyQeSSqzWxsS5qxNRKs5PTZq5lHBEqhn00sQCknJrxvIoO8Qez4zKTrVxIuwRxz_ys-V0Xlix3AQlG04MOcqyegazCWP_SZmaLOHTJgNNl0hm1_DUM2tvyE1jeDhwjy70qHbCujNckjf3zs6X84wexMozzi5fwzYWDqNQj5BacAvD5PXa97pLVvdse_6cpThMsXEOjBubZx-CQv35Xq63T94rROfTbVa6JoQcGWVzXbjDF-yl_wSJRQHG3PcGmQ13sGrlcWDimjJI8Hy98UVqcCPFEAwNLNr-kIYwUu_W0DMOlaQCkruCqKMAE89yM7rQF4AQDiAWPnpWjVJAGAaAGTYAH3Z313wKoB6fMsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQKoB-fXsQLYBwDSCDEIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WIbpxZae1JQDgAoBmAsByAsBgAwBogwIKgYKBJbisQKqDQJJTuoNEwjJqMeWntSUAxXXTTgFHbVjC2vwDQGIDgmwE_uPoCLQEwDYEw2IFAHYFAHQFQHKFgIKAPgWAYAXAbIXBBgCUAayGAkSAp1jGE0iAQDQGQHYGQE&ae=1&num=1&cid=CAQS9QEABaugfe2zqg7sbL1JaY8o4jB2G_vVP_2SrFWNNzVpjsBJcvFqzWGqpZXOgjGA_Mroz9P6FL3Dus3ySFPDzTTmG_imayQ4fDzmZhqzaEjJ_TBRY6jECUC9IbWuHXDQ8LJyPNnneCO7Jsa2gnHZSWLn59qECYKBx0lbu40QWZOtsdlxNITjscU2nE-HaFSD2Mi5CjbjtQ7L78ovG-IoFyV9VhuxjzlPgxmJInJ1hxaiZBkE9nzyHE8XxA8oszzsLBPfAWf9r1a8TzlVzKdT7Tit63FZUfZDexAPSc-a7SUOT17Q6y_Lt30aeBxNGNumhoHgSiSNSxgB&sig=AOD64_338tQP3XHIxCO9tAMv4V-ggouahA&client=ca-pub-1677597403311019&dbm_c=AKAmf-BaIplmKi2JhML4oZSyyTAcPCTL5EIBvmju6EYk0vYmy9F8WnjSNem9vuQL8G0-EcC6Ty2AighK0YT_yKLkokjREegLO47zkI4ljz0sRQoWQZP7vxOOTKgpOw1B5uJZYc5Axyblc3-Hgh7jdwX1UVCaJkcl65xWeKMzmF3OdcEjSgBdkipdHpLE3BqW4vj_O7YxMTTB3RBDLYrFiCYViYoB_Qwkn0u7uRsvZY_XsypbtEACXVQt5SYJkYgWjt6DTaI7jORbfTKkAvXhhoGDwImW2AzGwA&cry=1&dbm_d=AKAmf-COHjNVNjXxbn5fnf655OrY6kCQr0iD44YwknnW0OUmUtj1quPwx12Yb-uo4qanasiFz7bJaTtjhuasE85a81XRexxsyVYaCBe-Cb4Ts3JFhIV7cSQ5ycPmzj39WbzGWj87t1y9VoWhkQQrVtqCexAzLd6WPQaiZoONAxbEfWhqyF6xNvKyyuUUPttCrzAGGw-OvsbFg4A4sHA5zNVdHR27_dADkgzXYbf_tuAKVdNtM8ibH5M-6SnGbS49ncg17sP2lOegY8prSCKujQkz550_ZfZ08nuJ1p3bwkKE34cJgn0xuAl3ZgB38-aI56Pp1_WWcrngdobkiwBhhBfJf3-YefUrt3pY4D6OY7wmOXkB5qU_ssVBn2HpSi_lLrSHo58mbzLoXP8uEVgZRwhq8bbOz9TYcgK6WYJQbjTBCGFeBJAY0ouOS3o_bdFiULwjOfVafJPd9P7AlHLhMgFomlFS4aHVFwz1Fxpfp9aLClEP3EVuI_CyPYeppUCVBn9-N8RRjCW9v_xwGHyOR7iIxr4upM2XKC0nFQMjbD90Olkha_kbogLQrkUYrK4qE4aaT2Mzola5gDjjDudoTg08eWa76qB5mT5vvMrjjwnnmTiGf297JBpdtox3dl2vd2GxqyiJIbgClnuwHYbLhiKDM2jU0TejDYU-Rj721uzO17b_zwXXdwwzDuYIHafOQvd81d88oS7hwHxLqM-W-5klGgqMAG7zqQ&adurl=https://servedby.flashtalking.com/click/7/296653;10338317;6146776;210;0/?us_privacy=!!US_PRIVACY!&ft_partnerimpid=ABAjH0hBvGaH_SrCpLoeAIdQKzys&ft_impID=66BF549C-B615-4EDF-BE66-24A28C742F2B&ft_section=22622326543&g=6719ABCC855F73&random=232524.95188104518&ft_width=728&ft_height=90&url=https://www.adobe.com/in/creativecloud/buy/students.html?sdid=5F1G85RW&mv=display
                  - img "Click Here" [ref=f32e19]
                - link "AdChoices arrow" [ref=f32e21] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img "AdChoices arrow" [ref=f32e22]
                - link "Privacy Notification" [ref=f32e24] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f32e25]
                - link "Privacy Notification" [ref=f32e27] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f32e28]
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
  16 |     test("testing cart by adding the same product multiple times and checking the updation in quantity",async({page})=>{
  17 |         await cart.add();
  18 |         
  19 |         await page.getByRole("button",{name:"Continue Shopping"}).click();
  20 |         await cart.cartbtn();
  21 |         await expect(page.locator("#cart_info_table tbody tr .disabled")).toHaveText("1");
> 22 |         await page.locator(".col-sm-8 div ul li a i .fa.fa-home").click();
     |                                                                   ^ Error: locator.click: Test timeout of 30000ms exceeded.
  23 |         //await cart.add();
  24 |         //await cart.add();
  25 |     })
  26 | })
```