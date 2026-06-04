# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Cart.spec.js >> Testing the Cart Functionality without login >> Testing by adding product to the cart directly from the search results page
- Location: tests/Cart.spec.js:123:9

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('link', { name: 'View Product' }) resolved to 34 elements:
    1) <a href="/product_details/1">…</a> aka getByRole('link', { name: ' View Product' }).first()
    2) <a href="/product_details/2">…</a> aka getByRole('link', { name: ' View Product' }).nth(1)
    3) <a href="/product_details/3">…</a> aka getByRole('link', { name: ' View Product' }).nth(2)
    4) <a href="/product_details/4">…</a> aka getByRole('link', { name: ' View Product' }).nth(3)
    5) <a href="/product_details/5">…</a> aka getByRole('link', { name: ' View Product' }).nth(4)
    6) <a href="/product_details/6">…</a> aka getByRole('link', { name: ' View Product' }).nth(5)
    7) <a href="/product_details/7">…</a> aka locator('div:nth-child(9) > .product-image-wrapper > .choose > .nav > li > a')
    8) <a href="/product_details/8">…</a> aka locator('div:nth-child(10) > .product-image-wrapper > .choose > .nav > li > a')
    9) <a href="/product_details/11">…</a> aka locator('div:nth-child(11) > .product-image-wrapper > .choose > .nav > li > a')
    10) <a href="/product_details/12">…</a> aka locator('div:nth-child(12) > .product-image-wrapper > .choose > .nav > li > a')
    ...

Call log:
  - waiting for getByRole('link', { name: 'View Product' })

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
    - img "Website for practice" [ref=e39]
    - textbox "Search Product" [ref=e40]: Frozen Tops For Kids
    - button "" [ref=e41] [cursor=pointer]:
      - generic [ref=e42]: 
  - generic [ref=e45]:
    - generic [ref=e47]:
      - heading "Category" [level=2] [ref=e48]
      - generic [ref=e49]:
        - heading " Women" [level=4] [ref=e52]:
          - link " Women" [ref=e53]:
            - /url: "#Women"
            - generic [ref=e55]: 
            - text: Women
        - heading " Men" [level=4] [ref=e58]:
          - link " Men" [ref=e59]:
            - /url: "#Men"
            - generic [ref=e61]: 
            - text: Men
        - heading " Kids" [level=4] [ref=e64]:
          - link " Kids" [ref=e65]:
            - /url: "#Kids"
            - generic [ref=e67]: 
            - text: Kids
      - insertion [ref=e69]:
        - iframe [ref=e71]:
          
      - generic [ref=e72]:
        - heading "Brands" [level=2] [ref=e73]
        - list [ref=e75]:
          - listitem [ref=e76]:
            - link "(6) Polo" [ref=e77]:
              - /url: /brand_products/Polo
              - generic [ref=e78]: (6)
              - text: Polo
          - listitem [ref=e79]:
            - link "(5) H&M" [ref=e80]:
              - /url: /brand_products/H&M
              - generic [ref=e81]: (5)
              - text: H&M
          - listitem [ref=e82]:
            - link "(5) Madame" [ref=e83]:
              - /url: /brand_products/Madame
              - generic [ref=e84]: (5)
              - text: Madame
          - listitem [ref=e85]:
            - link "(3) Mast & Harbour" [ref=e86]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=e87]: (3)
              - text: Mast & Harbour
          - listitem [ref=e88]:
            - link "(4) Babyhug" [ref=e89]:
              - /url: /brand_products/Babyhug
              - generic [ref=e90]: (4)
              - text: Babyhug
          - listitem [ref=e91]:
            - link "(3) Allen Solly Junior" [ref=e92]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=e93]: (3)
              - text: Allen Solly Junior
          - listitem [ref=e94]:
            - link "(3) Kookie Kids" [ref=e95]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=e96]: (3)
              - text: Kookie Kids
          - listitem [ref=e97]:
            - link "(5) Biba" [ref=e98]:
              - /url: /brand_products/Biba
              - generic [ref=e99]: (5)
              - text: Biba
    - generic [ref=e101]:
      - heading "Searched Products" [level=2] [ref=e102]
      - generic [ref=e104]:
        - generic [ref=e105]:
          - generic [ref=e106]:
            - img "ecommerce website products" [ref=e107]
            - heading "Rs. 278" [level=2] [ref=e108]
            - paragraph [ref=e109]: Frozen Tops For Kids
            - generic [ref=e110] [cursor=pointer]:
              - generic [ref=e111]: 
              - text: Add to cart
          - generic [ref=e112]:
            - heading "Rs. 278" [level=2] [ref=e113]
            - paragraph [ref=e114]: Frozen Tops For Kids
            - generic [ref=e115] [cursor=pointer]:
              - generic [ref=e116]: 
              - text: Add to cart
        - list [ref=e118]:
          - listitem [ref=e119]:
            - link " View Product" [ref=e120]:
              - /url: /product_details/13
              - generic [ref=e121]: 
              - text: View Product
  - contentinfo [ref=e122]:
    - generic [ref=e127]:
      - heading "Subscription" [level=2] [ref=e128]
      - generic [ref=e129]:
        - textbox "Your email address" [ref=e130]
        - button "" [ref=e131] [cursor=pointer]:
          - generic [ref=e132]: 
        - paragraph [ref=e133]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e137]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e138]:
    - iframe [ref=e141]:
      - generic [active] [ref=f32e1]:
        - generic [ref=f32e6]:
          - link [ref=f32e7] [cursor=pointer]:
            - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=Cw9icEAchat-FC82p18cPjfq78AHZ77a5hwG43piY9BWhpvjz0B0QASD9tJ6VAWDJntiH6KOgFaABzfH6skLIAQmoAwHIA8sEqgSBAk_QiWzYE6mc9G3YQEh1mb2lGKMfLEh28UfvD3IxX0NxSFnYNNSCtMbXwFunyH2bZwWY8DJzs0AvYEUL6R60bvU6VC4neNX9VBANUfKIYZM44AeEMhPAACBXj2BpemTDjjnujGPbDK1dmSpDUcOg9j6vhpAvcpXUdLVqdGH7Wmt7kULiOmGyhsfWt3ZucURgn_tubX2UGFXJfGWSor72Rp-gF0WSD2PehBnZVGXPQlsilwMwp4YbKoM7NNkPt_mT1qfCtwnQl0tfUPogfLgOpSpRr_EksfZm1G6jUyAqjvBOcjM0PqjXDIO132akO842k94F8o2HMNgFIkLD9r8OlcYPwAS-2Z_W2AWIBc6gn55YoAYugAfNqcuSHagHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHANIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog5AQSL39wTpYkfaZsOfslANgAbEJAHO-uMUt1WWACgGYCwHICwGADAGiDAOQAQGqDQJVU8gNAeoNEwj51Zqw5-yUAxXN1PUCHQ39Dh6IDgmwDtOMsPcY2BMM0BUBmBYByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAUYLiIBANAYAegYAbIZATfCGQIIAQ&gclid=EAIaIQobChMI382asOfslAMVzdT1Ah0N_Q4eEAEYASAAEgJ2jfD_BwE&num=1&cid=CAQShwIAEQoqgQZy5teMf67KTiP-Xyx0Eqq0iWk0279IPMdOZb15kBmgmKHcCf3DPA3fEwBnUNwiHEC9zcQqpLUChlZD25l8ePi4jqCIitlg5LDi8I9ZB0XeO5nEdUp1G42tGRbmScMo_HKb1zWu1DeVYtoQC_K_3HH27TgDz1aU5nI590KSzIdIbIYETUprmYuNOma5iA50iTkDJYBQi_XeeLbvPpi_sjHQPPZdVGWj0nAbrMTRb-EU7YgBHkf6Lle7C4ba9G581tixZIyIziCGhkO5i1znTsp03LviuogY_9zg8HwobTaHJ7yelid4SYxAP2HyEq85ZWpKr-VSXZSwoHNfarDe6DkSGBgB&sig=AOD64_3KTzS9ZH0t-AGRiO4uRnNAdnlWgw&client=ca-pub-1677597403311019&rf=1&nb=9&adurl=https://www.health-time.com/en/article/108_1_gl_health_advert_medical_en_glp1-boost%3Fqz%3Dglgaht1%26gc_id%3D23695723882%26g_special_campaign%3Dtrue%26utm_source%3Dx%26utm_medium%3Dgoogle-ads%26campaign_id%3D23695723882%26adset_id%3D6692800083%26ad_id%3D6692800083%26placement%3D%26gad_source%3D5%26gad_campaignid%3D23685746766
            - img [ref=f32e8]
          - generic [ref=f32e12]:
            - link "GLP-1 Diet for Beginners" [ref=f32e15] [cursor=pointer]:
              - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=Cw9icEAchat-FC82p18cPjfq78AHZ77a5hwG43piY9BWhpvjz0B0QASD9tJ6VAWDJntiH6KOgFaABzfH6skLIAQmoAwHIA8sEqgSBAk_QiWzYE6mc9G3YQEh1mb2lGKMfLEh28UfvD3IxX0NxSFnYNNSCtMbXwFunyH2bZwWY8DJzs0AvYEUL6R60bvU6VC4neNX9VBANUfKIYZM44AeEMhPAACBXj2BpemTDjjnujGPbDK1dmSpDUcOg9j6vhpAvcpXUdLVqdGH7Wmt7kULiOmGyhsfWt3ZucURgn_tubX2UGFXJfGWSor72Rp-gF0WSD2PehBnZVGXPQlsilwMwp4YbKoM7NNkPt_mT1qfCtwnQl0tfUPogfLgOpSpRr_EksfZm1G6jUyAqjvBOcjM0PqjXDIO132akO842k94F8o2HMNgFIkLD9r8OlcYPwAS-2Z_W2AWIBc6gn55YoAYugAfNqcuSHagHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHANIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog5AQSL39wTpYkfaZsOfslANgAbEJAHO-uMUt1WWACgGYCwHICwGADAGiDAOQAQGqDQJVU8gNAeoNEwj51Zqw5-yUAxXN1PUCHQ39Dh6IDgmwDtOMsPcY2BMM0BUBmBYByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAUYLiIBANAYAegYAbIZATfCGQIIAQ&gclid=EAIaIQobChMI382asOfslAMVzdT1Ah0N_Q4eEAEYASAAEgJ2jfD_BwE&num=1&cid=CAQShwIAEQoqgQZy5teMf67KTiP-Xyx0Eqq0iWk0279IPMdOZb15kBmgmKHcCf3DPA3fEwBnUNwiHEC9zcQqpLUChlZD25l8ePi4jqCIitlg5LDi8I9ZB0XeO5nEdUp1G42tGRbmScMo_HKb1zWu1DeVYtoQC_K_3HH27TgDz1aU5nI590KSzIdIbIYETUprmYuNOma5iA50iTkDJYBQi_XeeLbvPpi_sjHQPPZdVGWj0nAbrMTRb-EU7YgBHkf6Lle7C4ba9G581tixZIyIziCGhkO5i1znTsp03LviuogY_9zg8HwobTaHJ7yelid4SYxAP2HyEq85ZWpKr-VSXZSwoHNfarDe6DkSGBgB&sig=AOD64_3KTzS9ZH0t-AGRiO4uRnNAdnlWgw&client=ca-pub-1677597403311019&rf=1&nb=0&adurl=https://www.health-time.com/en/article/108_1_gl_health_advert_medical_en_glp1-boost%3Fqz%3Dglgaht1%26gc_id%3D23695723882%26g_special_campaign%3Dtrue%26utm_source%3Dx%26utm_medium%3Dgoogle-ads%26campaign_id%3D23695723882%26adset_id%3D6692800083%26ad_id%3D6692800083%26placement%3D%26gad_source%3D5%26gad_campaignid%3D23685746766
            - link "This Personalized Weight Loss Diet Meal Plan Will Significantly Transform Your Body" [ref=f32e19] [cursor=pointer]:
              - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=Cw9icEAchat-FC82p18cPjfq78AHZ77a5hwG43piY9BWhpvjz0B0QASD9tJ6VAWDJntiH6KOgFaABzfH6skLIAQmoAwHIA8sEqgSBAk_QiWzYE6mc9G3YQEh1mb2lGKMfLEh28UfvD3IxX0NxSFnYNNSCtMbXwFunyH2bZwWY8DJzs0AvYEUL6R60bvU6VC4neNX9VBANUfKIYZM44AeEMhPAACBXj2BpemTDjjnujGPbDK1dmSpDUcOg9j6vhpAvcpXUdLVqdGH7Wmt7kULiOmGyhsfWt3ZucURgn_tubX2UGFXJfGWSor72Rp-gF0WSD2PehBnZVGXPQlsilwMwp4YbKoM7NNkPt_mT1qfCtwnQl0tfUPogfLgOpSpRr_EksfZm1G6jUyAqjvBOcjM0PqjXDIO132akO842k94F8o2HMNgFIkLD9r8OlcYPwAS-2Z_W2AWIBc6gn55YoAYugAfNqcuSHagHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHANIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog5AQSL39wTpYkfaZsOfslANgAbEJAHO-uMUt1WWACgGYCwHICwGADAGiDAOQAQGqDQJVU8gNAeoNEwj51Zqw5-yUAxXN1PUCHQ39Dh6IDgmwDtOMsPcY2BMM0BUBmBYByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAUYLiIBANAYAegYAbIZATfCGQIIAQ&gclid=EAIaIQobChMI382asOfslAMVzdT1Ah0N_Q4eEAEYASAAEgJ2jfD_BwE&num=1&cid=CAQShwIAEQoqgQZy5teMf67KTiP-Xyx0Eqq0iWk0279IPMdOZb15kBmgmKHcCf3DPA3fEwBnUNwiHEC9zcQqpLUChlZD25l8ePi4jqCIitlg5LDi8I9ZB0XeO5nEdUp1G42tGRbmScMo_HKb1zWu1DeVYtoQC_K_3HH27TgDz1aU5nI590KSzIdIbIYETUprmYuNOma5iA50iTkDJYBQi_XeeLbvPpi_sjHQPPZdVGWj0nAbrMTRb-EU7YgBHkf6Lle7C4ba9G581tixZIyIziCGhkO5i1znTsp03LviuogY_9zg8HwobTaHJ7yelid4SYxAP2HyEq85ZWpKr-VSXZSwoHNfarDe6DkSGBgB&sig=AOD64_3KTzS9ZH0t-AGRiO4uRnNAdnlWgw&client=ca-pub-1677597403311019&rf=1&nb=7&adurl=https://www.health-time.com/en/article/108_1_gl_health_advert_medical_en_glp1-boost%3Fqz%3Dglgaht1%26gc_id%3D23695723882%26g_special_campaign%3Dtrue%26utm_source%3Dx%26utm_medium%3Dgoogle-ads%26campaign_id%3D23695723882%26adset_id%3D6692800083%26ad_id%3D6692800083%26placement%3D%26gad_source%3D5%26gad_campaignid%3D23685746766
            - link "Health Time" [ref=f32e22] [cursor=pointer]:
              - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=Cw9icEAchat-FC82p18cPjfq78AHZ77a5hwG43piY9BWhpvjz0B0QASD9tJ6VAWDJntiH6KOgFaABzfH6skLIAQmoAwHIA8sEqgSBAk_QiWzYE6mc9G3YQEh1mb2lGKMfLEh28UfvD3IxX0NxSFnYNNSCtMbXwFunyH2bZwWY8DJzs0AvYEUL6R60bvU6VC4neNX9VBANUfKIYZM44AeEMhPAACBXj2BpemTDjjnujGPbDK1dmSpDUcOg9j6vhpAvcpXUdLVqdGH7Wmt7kULiOmGyhsfWt3ZucURgn_tubX2UGFXJfGWSor72Rp-gF0WSD2PehBnZVGXPQlsilwMwp4YbKoM7NNkPt_mT1qfCtwnQl0tfUPogfLgOpSpRr_EksfZm1G6jUyAqjvBOcjM0PqjXDIO132akO842k94F8o2HMNgFIkLD9r8OlcYPwAS-2Z_W2AWIBc6gn55YoAYugAfNqcuSHagHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHANIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog5AQSL39wTpYkfaZsOfslANgAbEJAHO-uMUt1WWACgGYCwHICwGADAGiDAOQAQGqDQJVU8gNAeoNEwj51Zqw5-yUAxXN1PUCHQ39Dh6IDgmwDtOMsPcY2BMM0BUBmBYByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAUYLiIBANAYAegYAbIZATfCGQIIAQ&gclid=EAIaIQobChMI382asOfslAMVzdT1Ah0N_Q4eEAEYASAAEgJ2jfD_BwE&num=1&cid=CAQShwIAEQoqgQZy5teMf67KTiP-Xyx0Eqq0iWk0279IPMdOZb15kBmgmKHcCf3DPA3fEwBnUNwiHEC9zcQqpLUChlZD25l8ePi4jqCIitlg5LDi8I9ZB0XeO5nEdUp1G42tGRbmScMo_HKb1zWu1DeVYtoQC_K_3HH27TgDz1aU5nI590KSzIdIbIYETUprmYuNOma5iA50iTkDJYBQi_XeeLbvPpi_sjHQPPZdVGWj0nAbrMTRb-EU7YgBHkf6Lle7C4ba9G581tixZIyIziCGhkO5i1znTsp03LviuogY_9zg8HwobTaHJ7yelid4SYxAP2HyEq85ZWpKr-VSXZSwoHNfarDe6DkSGBgB&sig=AOD64_3KTzS9ZH0t-AGRiO4uRnNAdnlWgw&client=ca-pub-1677597403311019&rf=1&nb=1&adurl=https://www.health-time.com/en/article/108_1_gl_health_advert_medical_en_glp1-boost%3Fqz%3Dglgaht1%26gc_id%3D23695723882%26g_special_campaign%3Dtrue%26utm_source%3Dx%26utm_medium%3Dgoogle-ads%26campaign_id%3D23695723882%26adset_id%3D6692800083%26ad_id%3D6692800083%26placement%3D%26gad_source%3D5%26gad_campaignid%3D23685746766
          - link "Learn More" [ref=f32e25] [cursor=pointer]:
            - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=Cw9icEAchat-FC82p18cPjfq78AHZ77a5hwG43piY9BWhpvjz0B0QASD9tJ6VAWDJntiH6KOgFaABzfH6skLIAQmoAwHIA8sEqgSBAk_QiWzYE6mc9G3YQEh1mb2lGKMfLEh28UfvD3IxX0NxSFnYNNSCtMbXwFunyH2bZwWY8DJzs0AvYEUL6R60bvU6VC4neNX9VBANUfKIYZM44AeEMhPAACBXj2BpemTDjjnujGPbDK1dmSpDUcOg9j6vhpAvcpXUdLVqdGH7Wmt7kULiOmGyhsfWt3ZucURgn_tubX2UGFXJfGWSor72Rp-gF0WSD2PehBnZVGXPQlsilwMwp4YbKoM7NNkPt_mT1qfCtwnQl0tfUPogfLgOpSpRr_EksfZm1G6jUyAqjvBOcjM0PqjXDIO132akO842k94F8o2HMNgFIkLD9r8OlcYPwAS-2Z_W2AWIBc6gn55YoAYugAfNqcuSHagHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHANIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog5AQSL39wTpYkfaZsOfslANgAbEJAHO-uMUt1WWACgGYCwHICwGADAGiDAOQAQGqDQJVU8gNAeoNEwj51Zqw5-yUAxXN1PUCHQ39Dh6IDgmwDtOMsPcY2BMM0BUBmBYByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAUYLiIBANAYAegYAbIZATfCGQIIAQ&gclid=EAIaIQobChMI382asOfslAMVzdT1Ah0N_Q4eEAEYASAAEgJ2jfD_BwE&num=1&cid=CAQShwIAEQoqgQZy5teMf67KTiP-Xyx0Eqq0iWk0279IPMdOZb15kBmgmKHcCf3DPA3fEwBnUNwiHEC9zcQqpLUChlZD25l8ePi4jqCIitlg5LDi8I9ZB0XeO5nEdUp1G42tGRbmScMo_HKb1zWu1DeVYtoQC_K_3HH27TgDz1aU5nI590KSzIdIbIYETUprmYuNOma5iA50iTkDJYBQi_XeeLbvPpi_sjHQPPZdVGWj0nAbrMTRb-EU7YgBHkf6Lle7C4ba9G581tixZIyIziCGhkO5i1znTsp03LviuogY_9zg8HwobTaHJ7yelid4SYxAP2HyEq85ZWpKr-VSXZSwoHNfarDe6DkSGBgB&sig=AOD64_3KTzS9ZH0t-AGRiO4uRnNAdnlWgw&client=ca-pub-1677597403311019&rf=1&nb=8&adurl=https://www.health-time.com/en/article/108_1_gl_health_advert_medical_en_glp1-boost%3Fqz%3Dglgaht1%26gc_id%3D23695723882%26g_special_campaign%3Dtrue%26utm_source%3Dx%26utm_medium%3Dgoogle-ads%26campaign_id%3D23695723882%26adset_id%3D6692800083%26ad_id%3D6692800083%26placement%3D%26gad_source%3D5%26gad_campaignid%3D23685746766
            - generic [ref=f32e26]:
              - generic [ref=f32e28]: Learn More
              - generic [ref=f32e30]:
                - img [ref=f32e31]
                - img [ref=f32e33]
        - img [ref=f32e41] [cursor=pointer]
        - button [ref=f32e44] [cursor=pointer]:
          - img [ref=f32e45]
```

# Test source

```ts
  27  |         await cart.cartbtn();
  28  |         await expect(page.locator("#cart_info_table tbody tr .disabled")).toHaveText("1");
  29  |         await cart.navigate();
  30  |         await cart.add();
  31  |         await cart.continue();
  32  |         await cart.cartbtn();
  33  |         await expect(page.locator("#cart_info_table tbody tr .disabled")).toHaveText("2");
  34  |         
  35  |     });
  36  | 
  37  |     test("Removing of products from the cart",async({page})=>{
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
> 127 |         await page.getByRole('link',{name:"View Product"}).click();
      |                                                            ^ Error: locator.click: Error: strict mode violation: getByRole('link', { name: 'View Product' }) resolved to 34 elements:
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
  175 |         await expect(page.getByRole("link",{name:"Blue Top"})).toBeVisible();
  176 | 
  177 |     })
  178 |    
  179 | });
```