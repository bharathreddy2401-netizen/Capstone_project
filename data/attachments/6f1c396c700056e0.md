# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Cart.spec.js >> Testing the Cart Functionality >> Testing the Updation of products in product page will update the cart
- Location: tests\Cart.spec.js:84:9

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('link', { name: 'Cart' }) resolved to 2 elements:
    1) <a href="/view_cart">…</a> aka getByRole('link', { name: ' Cart' })
    2) <a href="/view_cart">…</a> aka getByRole('link', { name: 'View Cart' })

Call log:
  - waiting for getByRole('link', { name: 'Cart' })

```

# Page snapshot

```yaml
- generic [ref=e1]:
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
  - generic [ref=e39]:
    - generic [ref=e41]:
      - heading "Category" [level=2] [ref=e42]
      - generic [ref=e43]:
        - heading " Women" [level=4] [ref=e46]:
          - link " Women" [ref=e47] [cursor=pointer]:
            - /url: "#Women"
            - generic [ref=e49]: 
            - text: Women
        - heading " Men" [level=4] [ref=e52]:
          - link " Men" [ref=e53] [cursor=pointer]:
            - /url: "#Men"
            - generic [ref=e55]: 
            - text: Men
        - heading " Kids" [level=4] [ref=e58]:
          - link " Kids" [ref=e59] [cursor=pointer]:
            - /url: "#Kids"
            - generic [ref=e61]: 
            - text: Kids
      - generic [ref=e62]:
        - heading "Brands" [level=2] [ref=e63]
        - list [ref=e65]:
          - listitem [ref=e66]:
            - link "(6) Polo" [ref=e67] [cursor=pointer]:
              - /url: /brand_products/Polo
              - generic [ref=e68]: (6)
              - text: Polo
          - listitem [ref=e69]:
            - link "(5) H&M" [ref=e70] [cursor=pointer]:
              - /url: /brand_products/H&M
              - generic [ref=e71]: (5)
              - text: H&M
          - listitem [ref=e72]:
            - link "(5) Madame" [ref=e73] [cursor=pointer]:
              - /url: /brand_products/Madame
              - generic [ref=e74]: (5)
              - text: Madame
          - listitem [ref=e75]:
            - link "(3) Mast & Harbour" [ref=e76] [cursor=pointer]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=e77]: (3)
              - text: Mast & Harbour
          - listitem [ref=e78]:
            - link "(4) Babyhug" [ref=e79] [cursor=pointer]:
              - /url: /brand_products/Babyhug
              - generic [ref=e80]: (4)
              - text: Babyhug
          - listitem [ref=e81]:
            - link "(3) Allen Solly Junior" [ref=e82] [cursor=pointer]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=e83]: (3)
              - text: Allen Solly Junior
          - listitem [ref=e84]:
            - link "(3) Kookie Kids" [ref=e85] [cursor=pointer]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=e86]: (3)
              - text: Kookie Kids
          - listitem [ref=e87]:
            - link "(5) Biba" [ref=e88] [cursor=pointer]:
              - /url: /brand_products/Biba
              - generic [ref=e89]: (5)
              - text: Biba
    - generic [ref=e90]:
      - generic [ref=e93]:
        - generic [ref=e94]:
          - generic [ref=e96]: 
          - heading "Added!" [level=4] [ref=e97]
        - generic [ref=e98]:
          - paragraph [ref=e99]: Your product has been added to cart.
          - paragraph [ref=e100]:
            - link "View Cart" [ref=e101] [cursor=pointer]:
              - /url: /view_cart
        - button "Continue Shopping" [ref=e103] [cursor=pointer]
      - generic [ref=e104]:
        - img "ecommerce website products" [ref=e107]
        - generic [ref=e109]:
          - img "ecommerce website products" [ref=e110]
          - heading "Stylish Dress" [level=2] [ref=e111]
          - paragraph [ref=e112]: "Category: Women > Dress"
          - img "ecommerce website products" [ref=e113]
          - generic [ref=e114]:
            - generic [ref=e115]: Rs. 1500
            - generic [ref=e116]: "Quantity:"
            - spinbutton [ref=e117]: "5"
            - button " Add to cart" [active] [ref=e118] [cursor=pointer]:
              - generic [ref=e119]: 
              - text: Add to cart
          - paragraph [ref=e120]: "Availability: In Stock"
          - paragraph [ref=e121]: "Condition: New"
          - paragraph [ref=e122]: "Brand: Madame"
      - generic [ref=e123]:
        - list [ref=e125]:
          - listitem [ref=e126]:
            - link "Write Your Review" [ref=e127]:
              - /url: "#reviews"
        - generic [ref=e129]:
          - generic [ref=e130]:
            - textbox "Your Name" [ref=e131]
            - textbox "Email Address" [ref=e132]
          - textbox "Add Review Here!" [ref=e133]
          - button "Submit" [ref=e134] [cursor=pointer]
  - generic:
    - insertion:
      - generic:
        - iframe
  - contentinfo [ref=e135]:
    - generic [ref=e140]:
      - heading "Subscription" [level=2] [ref=e141]
      - generic [ref=e142]:
        - textbox "Your email address" [ref=e143]
        - button "" [ref=e144] [cursor=pointer]:
          - generic [ref=e145]: 
        - paragraph [ref=e146]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e150]: Copyright © 2021 All rights reserved
    - generic:
      - insertion:
        - generic:
          - iframe
  - text: 
  - insertion [ref=e151]:
    - iframe [ref=e154]:
      - iframe [ref=f32e1]:
        - generic [ref=f33e2]:
          - link "Advertisement" [ref=f33e4] [cursor=pointer]:
            - /url: https://ad.doubleclick.net/pcs/click?xai=AKAOjsvIVk_r5BvFh4nx4V2D4CNtCaBA1145IVPhTZS2qXeexUF9SUwmyH_-ErCKW3ArmkANZMG_r7cMPtjZ059dSPcGJrzGgKhXIiFO2psR72xRERVZNqHc0c3xckISF9em7_VWlZ7KLW7MyWzWrVpVGqk-6DxgPGcmE29ShQb1gEJpi-7M4AbjGrMA11HFRAKU3PK2YDuvik4QGGg_QqHZAueihHJkR6GF_aY_PCJSa2F2PJFUqGsTN1Ou122xXFufZrBfXDgBs85FSQI8KLU78z37BFqKKnbZLXqHD94L5enkcJgxUHktYUFtueRHp4e4PFZ-JvEc-9mzZb6iUfT98sZZYWUlJ0o5QWadgtLCRilbbCrFb9sKRKi3LJnQHEvXXBtQRcusW4Mp5iUkwZ07hWNDua9OGj_LwO_FKbIkx2Kf4aGmx1iBad8H2a-E4ciSm37H-8LhAtuj1wtKFP1Jg9X5BFhPMqc7CS6foNIXMF85-KwWmvex4TJYdxOHJP5dURxjFET9EBU7GV6R8IlMHuPTf50i7Xu0Z5Jb6666e6VfnCE5IjWpm8HC-M5o8kiTIGW1y--hh6ZOXL0iMY_Y3uMiD7VAmVyvj_KzozNd4FMW1h6HCpPb1Z3ORmezQkAZ3L6i_K0Pcflw8ajJfqTFdQUtOr8xseI1hdxtBN5plsntATSWINexCSfaqStSXGfsAofJcaNtcndbM1anQ80YU88ou4TgOySAP_-CoMymaoNzzJOTeZsEFWajOE5lqdnCil1VZIDzT8csA0AlJr-tl11O6JMEWSgB9g2dX_WShLWs4swrKNfEiXeuM9EYtfqz2rXzlQ45-_xUt2--Ezw3dMkdy_S4W7Ftspjxrzew91Lq6w7RS16Gerhks5xfJ3XOydnebKqJQ7qTsnZm8U-UISVoWSkafu2QTC_B_f3li-ttYzKtdobtizEnQ06xjlsrK4YNOGHPkCT6T5kuWYatAdtcYVIutVUlLxdugbZuW1unzTflAqu_ZfFu_FRSbRFyC3CwBULJZS1_VIRRtoJU8HAWkoWW-a0j0WBmfdjisuQCtPoCWOi3VEt2MsNF-IXSjWY316lstv3N9mnuH5vgeDFiMOs4DuI87jzfZqMsIkNH26fNlM75dMAqtU_COXkAnoQ60gWi2SyBbdMJRLq2Qx4msiwCbWIG7kHfcitzWk2nLQCXsmIyTqaFJCrLJEH-W6MVwQTrhZArzUCuMZQjRJzr5druUl8ieR9MFjkU7MFpkj9jeh2KxqGq4_tV1C0Ii-CkF2C4ZdLakPuUIoa52avxMK-qxuPguq-NXzGK57YlxMbPhba7uUcayFq7nDZ-39WWW8UQHkyC_XJXPSu3Rh04U37o98XuCze7GIn0TunNsdLgouq1Ge26Fln1nkoTZh1DTkxz6JMjyFQgx3zQ_sh19oZdn6Be1btlb0_jV0kPFo6e5ibcVI05h78LIznNIRiE1HDP3m5qT2WGmIL__zQMlpyJjIdOdZcX6fgP2cnntPAwydkK_4UObG9jfG6bNafYnt2aAWUtMaOaZ-avQOpIk7lsmobPSojJWRQ5ay8ocnXBiMnpdwlzShg3cnZpqFe7oBpshVNgNiv92NrrKn7AaaE2qkuhqQyaZAkQKLzSgZfo98Z2mjdIatLGx7yAFijStwYCnP4awIdwCJAK7gOZwd603S5X7lGr1_uBJuDAWWNavWsl6zUCU6p-ACeEWHPSfTprlGFiPIYwEWDRDIV119x_yVPoVn1GInHYSVsb7EnLpyk&sai=AMfl-YRh09uuc3brWwak9NnrNkOxcyXUpD0DyvoN5pwYzvnIzaKXAlWI-GuWaYI7BZiLBConhSJEohHb9gDk3qPT8XPnLq6Yug1Xowlap_qvhLEslWXVbl3arguJNAmasl20z1Q8WXaGEdAOHjKw4QJakuyzUAMV4sseqWTpImQBSxUEBLzEJMpid2_PSpANkkstdBWr-lrnxsPZeAuYsxyEEm4CglPkRYyX_RBSa1A8KqqDbTZJeVva5WMNLmLF8VTWG49MGnwZaO_AW5t29FOW_ULduL5PDFHewJRl8B6UHkihNhN0SksWK-3aANjMr6AMd4gyx5ohcTSBX26k2CfncrDncD7GtZoGLDu8ej993kpiYccAR7arKGX5HC0nhUpLQ-mzJEd46dJDpybjPjyXp1oiN0WBmnMbagYQaXeX3nDeexcqskZ1uOa_irrML9CKhJqqLuFKD_dorhoxGBrW_XAXEVsCsdHfG_J5bMSR6xPceXWVk3HO69gBCABhbkX5uUprz-pwsfulfAGV7wC0mU4MId9432fCmx4R6IcT_zrWlCsYMMQKwnIBmxj3jagnIfgmauZGdS6-CYeYq8_SrcsQp5-PFnilbTbkFLjXD6lop5TTzfnclNqTYpz9r7-3T29d4WiC6G7-PuFzKsF14IlvkBjb_gpjz6S5C3WieLwZXvmNwpi4LFt-B1ayACh7W_yhMuwhwGMuILYHs1j9IsFM6ule-YCM2WurJZXf0o3TKFoUacWPhEnyM_i-LGipAoiw-DA99fqUwCxnr5KJ2miMLUAaWtd3dzTqsZv4Sb9KpobOPuZ1q-w1WzDnGCq_ZhJ1nBjbArOzb11zEIVJzJPzS2Zd5qLNOpnSL6oQ6FtnGenTqVqaJrZnkg&sig=Cg0ArKJSzKeSYaip8VgX&fbs_aeid=%5Bgw_fbsaeid%5D&crd=aHR0cHM6Ly9ob25lcmhvbWVzLmNvbQ&urlfix=1&adurl=https://www.honerhomes.com/projects/richmont%3Futm_source%3Ddv360%26utm_medium%3Ddisplay%26utm_campaign%3Drichmont_prehike_may26%26utm_content%3D728x90
            - img "Advertisement" [ref=f33e5]
          - generic [ref=f33e6]:
            - generic:
              - img [ref=f33e10] [cursor=pointer]
              - button [ref=f33e12] [cursor=pointer]:
                - img [ref=f33e13]
```

# Test source

```ts
  1  | export class Cart
  2  | {
  3  |     constructor(page)
  4  |     {
  5  |         this.page = page;
  6  |         this.addToCart = page.locator('.add-to-cart').first();
  7  |         this.Tshirt = page.getByRole("link",{ name: "View Product"}).nth(1); 
  8  |         this.TshirtBtn = page.getByRole("button",{name: "Add to cart"});       
  9  |         this.cart = page.getByRole("link",{name:"Cart"});
  10 |         this.continuebtn = page.getByRole("button", {name:"Continue Shopping"});
  11 |     }
  12 | 
  13 |     async navigate()
  14 |     {
  15 |         await this.page.goto("https://automationexercise.com");
  16 |     }
  17 | 
  18 |     async add()
  19 |     {
  20 |         await this.addToCart.click();
  21 |     }
  22 | 
  23 |     async addTshirt()
  24 |     {
  25 |         await this.Tshirt.click();
  26 |         await this.TshirtBtn.click();
  27 | 
  28 |     }
  29 | 
  30 |     async cartbtn()
  31 |     {
> 32 |         await this.cart.click();
     |                         ^ Error: locator.click: Error: strict mode violation: getByRole('link', { name: 'Cart' }) resolved to 2 elements:
  33 |     }
  34 | 
  35 |     async continue()
  36 |     {
  37 |         await this.continuebtn.click();
  38 |     }
  39 | }
```