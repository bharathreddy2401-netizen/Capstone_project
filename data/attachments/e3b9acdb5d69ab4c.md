# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ContactUs.spec.js >> Testing the Contact us Functionality >> Testing clicking on the Home button after submitting the form redirects to home
- Location: tests/ContactUs.spec.js:39:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Home' }).nth(1)

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
  - generic [ref=e37]:
    - heading "Contact Us" [level=2] [ref=e41]:
      - text: Contact
      - strong [ref=e42]: Us
    - generic [ref=e43]:
      - generic [ref=e45]:
        - generic [ref=e46]: "Note: Below contact form is for testing purpose."
        - heading "Get In Touch" [level=2] [ref=e47]
        - generic [ref=e49]:
          - textbox "Name" [ref=e51]
          - textbox "Email" [ref=e53]
          - textbox "Subject" [ref=e55]
          - textbox "Your Message Here" [ref=e57]
          - button "Choose File" [ref=e59]
          - button "Submit" [ref=e61] [cursor=pointer]
      - generic [ref=e63]:
        - heading "Feedback For Us" [level=2] [ref=e64]
        - generic [ref=e65]:
          - paragraph [ref=e66]: We really appreciate your response to our website.
          - paragraph [ref=e67]:
            - text: Kindly share your feedback with us at
            - link "feedback@automationexercise.com" [ref=e68] [cursor=pointer]:
              - /url: mailto:feedback@automationexercise.com
            - text: .
          - paragraph [ref=e69]: If you have any suggestion areas or improvements, do let us know. We will definitely work on it.
          - paragraph [ref=e70]: Thank you
  - insertion [ref=e72]:
    - iframe [ref=e74]:
      - generic [active] [ref=f19e1]:
        - generic [ref=f19e6]:
          - link [ref=f19e7] [cursor=pointer]:
            - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CLw8QZH4aasfPE9m0odAPk5KK0Q7ZyduwhwGBwdLcqRX7lOOejQ4QASD9tJ6VAWDJvsmGxKPIF6ABiMvZninIAQmpAvwwIEYb1oM-qAMByAPLBKoE7gFP0AJitSR3OsianYqFSHrvU6QZjXphl2m59Hz0ePBBtTIK5662J3N0nDHsJmp9hrVUgbiBbHwvhDbolkj5FB7-zAk_CniF9JTfMfIjyO2eGM65AUqHAweiK2o8-IvSm_3TqVM7R-gl0DBDsyWZ44FHs9W-V8JEHYOpapFcwtqgLVLcKXEYic_BeDAkv17DGorjv14WCN7SL1Tx9jecxWlWDXrTLu_sqjRd8WwVMkQzdExsD4oA36ZjWBwWJDxKeLBqiVC4LulGSyo8CSZtJlK5gXqdHKMkCd8wZ5x518KlpD1ewCKgpYBeiVu_-zRHwAS9noC01wWIBfXL8rRYoAYugAeIg6r-A6gHp8yxAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHANIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog5AQSL39wTpYivfYmKzglANgAbEJyXFhkzXY5zuACgGYCwHICwGADAGqDQJVU8gNAeoNEwiUltmYrOCUAxVZWggEHROJIurwDQKIDgmwDtWvh_oY2BMM0BUByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAkSAuhYGC4iAQDQGAHoGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMIx5HZmKzglAMVWVoIBB0TiSLqEAEYASAAEgJIv_D_BwE&num=1&cid=CAQS9AEABaugfUQrdbWzl__xngi20XA4_9pIH_iYkYV_1lNBxvadmm0RsMV6Kq5TLJyxNIh6q0XCTJbzI5IdhXHktB_euO_QmXiqI9J89BaZRUbK1vVcOTCmZlkPAOEnlBdZlV6LYG-L4kZXTcbh2jXbPpohw9WOFrtE2e7BDwr8ZjNABqVDrrGqPMFvGQAvi5njVM5gByKJXGNFFrDng9AQhl1DMbUscS129_7Z76tOjU8wtVxghehAwHczr_BrXJ9bOIJJJsIzBmfk1HxO3KZgjVBlnWOXfGieS0cjo_cF2c_wvLZX2UGHCAsc6LzX0Q6Tt1VAVa7KGAE&sig=AOD64_2Jqg7sTPkCalfxslVH8U2_XKL0gQ&client=ca-pub-1677597403311019&rf=1&nb=9&adurl=https://www.meshy.ai/%3Futm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3DPerformance-Max-ROW-Traffic%26utm_content%3DROW%26utm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3DPerformance-Max-ROW-Traffic%26utm_term%3D%26gad_source%3D5%26gad_campaignid%3D23733249525%26gclid%3DEAIaIQobChMIx5HZmKzglAMVWVoIBB0TiSLqEAEYASAAEgJIv_D_BwE
            - img [ref=f19e8]
          - generic [ref=f19e10]:
            - generic [ref=f19e13]:
              - link "Text and images in seconds" [ref=f19e17] [cursor=pointer]:
                - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CLw8QZH4aasfPE9m0odAPk5KK0Q7ZyduwhwGBwdLcqRX7lOOejQ4QASD9tJ6VAWDJvsmGxKPIF6ABiMvZninIAQmpAvwwIEYb1oM-qAMByAPLBKoE7gFP0AJitSR3OsianYqFSHrvU6QZjXphl2m59Hz0ePBBtTIK5662J3N0nDHsJmp9hrVUgbiBbHwvhDbolkj5FB7-zAk_CniF9JTfMfIjyO2eGM65AUqHAweiK2o8-IvSm_3TqVM7R-gl0DBDsyWZ44FHs9W-V8JEHYOpapFcwtqgLVLcKXEYic_BeDAkv17DGorjv14WCN7SL1Tx9jecxWlWDXrTLu_sqjRd8WwVMkQzdExsD4oA36ZjWBwWJDxKeLBqiVC4LulGSyo8CSZtJlK5gXqdHKMkCd8wZ5x518KlpD1ewCKgpYBeiVu_-zRHwAS9noC01wWIBfXL8rRYoAYugAeIg6r-A6gHp8yxAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHANIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog5AQSL39wTpYivfYmKzglANgAbEJyXFhkzXY5zuACgGYCwHICwGADAGqDQJVU8gNAeoNEwiUltmYrOCUAxVZWggEHROJIurwDQKIDgmwDtWvh_oY2BMM0BUByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAkSAuhYGC4iAQDQGAHoGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMIx5HZmKzglAMVWVoIBB0TiSLqEAEYASAAEgJIv_D_BwE&num=1&cid=CAQS9AEABaugfUQrdbWzl__xngi20XA4_9pIH_iYkYV_1lNBxvadmm0RsMV6Kq5TLJyxNIh6q0XCTJbzI5IdhXHktB_euO_QmXiqI9J89BaZRUbK1vVcOTCmZlkPAOEnlBdZlV6LYG-L4kZXTcbh2jXbPpohw9WOFrtE2e7BDwr8ZjNABqVDrrGqPMFvGQAvi5njVM5gByKJXGNFFrDng9AQhl1DMbUscS129_7Z76tOjU8wtVxghehAwHczr_BrXJ9bOIJJJsIzBmfk1HxO3KZgjVBlnWOXfGieS0cjo_cF2c_wvLZX2UGHCAsc6LzX0Q6Tt1VAVa7KGAE&sig=AOD64_2Jqg7sTPkCalfxslVH8U2_XKL0gQ&client=ca-pub-1677597403311019&rf=1&nb=0&adurl=https://www.meshy.ai/%3Futm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3DPerformance-Max-ROW-Traffic%26utm_content%3DROW%26utm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3DPerformance-Max-ROW-Traffic%26utm_term%3D%26gad_source%3D5%26gad_campaignid%3D23733249525%26gclid%3DEAIaIQobChMIx5HZmKzglAMVWVoIBB0TiSLqEAEYASAAEgJIv_D_BwE
              - link "Turn text and images into 3D models in minutes using AI. Fast, easy, and accurate results." [ref=f19e21] [cursor=pointer]:
                - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CLw8QZH4aasfPE9m0odAPk5KK0Q7ZyduwhwGBwdLcqRX7lOOejQ4QASD9tJ6VAWDJvsmGxKPIF6ABiMvZninIAQmpAvwwIEYb1oM-qAMByAPLBKoE7gFP0AJitSR3OsianYqFSHrvU6QZjXphl2m59Hz0ePBBtTIK5662J3N0nDHsJmp9hrVUgbiBbHwvhDbolkj5FB7-zAk_CniF9JTfMfIjyO2eGM65AUqHAweiK2o8-IvSm_3TqVM7R-gl0DBDsyWZ44FHs9W-V8JEHYOpapFcwtqgLVLcKXEYic_BeDAkv17DGorjv14WCN7SL1Tx9jecxWlWDXrTLu_sqjRd8WwVMkQzdExsD4oA36ZjWBwWJDxKeLBqiVC4LulGSyo8CSZtJlK5gXqdHKMkCd8wZ5x518KlpD1ewCKgpYBeiVu_-zRHwAS9noC01wWIBfXL8rRYoAYugAeIg6r-A6gHp8yxAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHANIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog5AQSL39wTpYivfYmKzglANgAbEJyXFhkzXY5zuACgGYCwHICwGADAGqDQJVU8gNAeoNEwiUltmYrOCUAxVZWggEHROJIurwDQKIDgmwDtWvh_oY2BMM0BUByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAkSAuhYGC4iAQDQGAHoGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMIx5HZmKzglAMVWVoIBB0TiSLqEAEYASAAEgJIv_D_BwE&num=1&cid=CAQS9AEABaugfUQrdbWzl__xngi20XA4_9pIH_iYkYV_1lNBxvadmm0RsMV6Kq5TLJyxNIh6q0XCTJbzI5IdhXHktB_euO_QmXiqI9J89BaZRUbK1vVcOTCmZlkPAOEnlBdZlV6LYG-L4kZXTcbh2jXbPpohw9WOFrtE2e7BDwr8ZjNABqVDrrGqPMFvGQAvi5njVM5gByKJXGNFFrDng9AQhl1DMbUscS129_7Z76tOjU8wtVxghehAwHczr_BrXJ9bOIJJJsIzBmfk1HxO3KZgjVBlnWOXfGieS0cjo_cF2c_wvLZX2UGHCAsc6LzX0Q6Tt1VAVa7KGAE&sig=AOD64_2Jqg7sTPkCalfxslVH8U2_XKL0gQ&client=ca-pub-1677597403311019&rf=1&nb=7&adurl=https://www.meshy.ai/%3Futm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3DPerformance-Max-ROW-Traffic%26utm_content%3DROW%26utm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3DPerformance-Max-ROW-Traffic%26utm_term%3D%26gad_source%3D5%26gad_campaignid%3D23733249525%26gclid%3DEAIaIQobChMIx5HZmKzglAMVWVoIBB0TiSLqEAEYASAAEgJIv_D_BwE
                - text: Turn text and images into 3D models in minutes using AI.
                - generic [ref=f19e22]:
                  - text: Fast, easy, and
                  - text: accurate
                - text: results.
            - generic [ref=f19e25]:
              - link:
                - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CLw8QZH4aasfPE9m0odAPk5KK0Q7ZyduwhwGBwdLcqRX7lOOejQ4QASD9tJ6VAWDJvsmGxKPIF6ABiMvZninIAQmpAvwwIEYb1oM-qAMByAPLBKoE7gFP0AJitSR3OsianYqFSHrvU6QZjXphl2m59Hz0ePBBtTIK5662J3N0nDHsJmp9hrVUgbiBbHwvhDbolkj5FB7-zAk_CniF9JTfMfIjyO2eGM65AUqHAweiK2o8-IvSm_3TqVM7R-gl0DBDsyWZ44FHs9W-V8JEHYOpapFcwtqgLVLcKXEYic_BeDAkv17DGorjv14WCN7SL1Tx9jecxWlWDXrTLu_sqjRd8WwVMkQzdExsD4oA36ZjWBwWJDxKeLBqiVC4LulGSyo8CSZtJlK5gXqdHKMkCd8wZ5x518KlpD1ewCKgpYBeiVu_-zRHwAS9noC01wWIBfXL8rRYoAYugAeIg6r-A6gHp8yxAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHANIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog5AQSL39wTpYivfYmKzglANgAbEJyXFhkzXY5zuACgGYCwHICwGADAGqDQJVU8gNAeoNEwiUltmYrOCUAxVZWggEHROJIurwDQKIDgmwDtWvh_oY2BMM0BUByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAkSAuhYGC4iAQDQGAHoGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMIx5HZmKzglAMVWVoIBB0TiSLqEAEYASAAEgJIv_D_BwE&num=1&cid=CAQS9AEABaugfUQrdbWzl__xngi20XA4_9pIH_iYkYV_1lNBxvadmm0RsMV6Kq5TLJyxNIh6q0XCTJbzI5IdhXHktB_euO_QmXiqI9J89BaZRUbK1vVcOTCmZlkPAOEnlBdZlV6LYG-L4kZXTcbh2jXbPpohw9WOFrtE2e7BDwr8ZjNABqVDrrGqPMFvGQAvi5njVM5gByKJXGNFFrDng9AQhl1DMbUscS129_7Z76tOjU8wtVxghehAwHczr_BrXJ9bOIJJJsIzBmfk1HxO3KZgjVBlnWOXfGieS0cjo_cF2c_wvLZX2UGHCAsc6LzX0Q6Tt1VAVa7KGAE&sig=AOD64_2Jqg7sTPkCalfxslVH8U2_XKL0gQ&client=ca-pub-1677597403311019&rf=1&nb=8&adurl=https://www.meshy.ai/%3Futm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3DPerformance-Max-ROW-Traffic%26utm_content%3DROW%26utm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3DPerformance-Max-ROW-Traffic%26utm_term%3D%26gad_source%3D5%26gad_campaignid%3D23733249525%26gclid%3DEAIaIQobChMIx5HZmKzglAMVWVoIBB0TiSLqEAEYASAAEgJIv_D_BwE
              - link "Meshy.AI" [ref=f19e27] [cursor=pointer]:
                - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CLw8QZH4aasfPE9m0odAPk5KK0Q7ZyduwhwGBwdLcqRX7lOOejQ4QASD9tJ6VAWDJvsmGxKPIF6ABiMvZninIAQmpAvwwIEYb1oM-qAMByAPLBKoE7gFP0AJitSR3OsianYqFSHrvU6QZjXphl2m59Hz0ePBBtTIK5662J3N0nDHsJmp9hrVUgbiBbHwvhDbolkj5FB7-zAk_CniF9JTfMfIjyO2eGM65AUqHAweiK2o8-IvSm_3TqVM7R-gl0DBDsyWZ44FHs9W-V8JEHYOpapFcwtqgLVLcKXEYic_BeDAkv17DGorjv14WCN7SL1Tx9jecxWlWDXrTLu_sqjRd8WwVMkQzdExsD4oA36ZjWBwWJDxKeLBqiVC4LulGSyo8CSZtJlK5gXqdHKMkCd8wZ5x518KlpD1ewCKgpYBeiVu_-zRHwAS9noC01wWIBfXL8rRYoAYugAeIg6r-A6gHp8yxAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHANIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog5AQSL39wTpYivfYmKzglANgAbEJyXFhkzXY5zuACgGYCwHICwGADAGqDQJVU8gNAeoNEwiUltmYrOCUAxVZWggEHROJIurwDQKIDgmwDtWvh_oY2BMM0BUByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAkSAuhYGC4iAQDQGAHoGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMIx5HZmKzglAMVWVoIBB0TiSLqEAEYASAAEgJIv_D_BwE&num=1&cid=CAQS9AEABaugfUQrdbWzl__xngi20XA4_9pIH_iYkYV_1lNBxvadmm0RsMV6Kq5TLJyxNIh6q0XCTJbzI5IdhXHktB_euO_QmXiqI9J89BaZRUbK1vVcOTCmZlkPAOEnlBdZlV6LYG-L4kZXTcbh2jXbPpohw9WOFrtE2e7BDwr8ZjNABqVDrrGqPMFvGQAvi5njVM5gByKJXGNFFrDng9AQhl1DMbUscS129_7Z76tOjU8wtVxghehAwHczr_BrXJ9bOIJJJsIzBmfk1HxO3KZgjVBlnWOXfGieS0cjo_cF2c_wvLZX2UGHCAsc6LzX0Q6Tt1VAVa7KGAE&sig=AOD64_2Jqg7sTPkCalfxslVH8U2_XKL0gQ&client=ca-pub-1677597403311019&rf=1&nb=1&adurl=https://www.meshy.ai/%3Futm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3DPerformance-Max-ROW-Traffic%26utm_content%3DROW%26utm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3DPerformance-Max-ROW-Traffic%26utm_term%3D%26gad_source%3D5%26gad_campaignid%3D23733249525%26gclid%3DEAIaIQobChMIx5HZmKzglAMVWVoIBB0TiSLqEAEYASAAEgJIv_D_BwE
              - link "Learn More" [ref=f19e29] [cursor=pointer]:
                - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CLw8QZH4aasfPE9m0odAPk5KK0Q7ZyduwhwGBwdLcqRX7lOOejQ4QASD9tJ6VAWDJvsmGxKPIF6ABiMvZninIAQmpAvwwIEYb1oM-qAMByAPLBKoE7gFP0AJitSR3OsianYqFSHrvU6QZjXphl2m59Hz0ePBBtTIK5662J3N0nDHsJmp9hrVUgbiBbHwvhDbolkj5FB7-zAk_CniF9JTfMfIjyO2eGM65AUqHAweiK2o8-IvSm_3TqVM7R-gl0DBDsyWZ44FHs9W-V8JEHYOpapFcwtqgLVLcKXEYic_BeDAkv17DGorjv14WCN7SL1Tx9jecxWlWDXrTLu_sqjRd8WwVMkQzdExsD4oA36ZjWBwWJDxKeLBqiVC4LulGSyo8CSZtJlK5gXqdHKMkCd8wZ5x518KlpD1ewCKgpYBeiVu_-zRHwAS9noC01wWIBfXL8rRYoAYugAeIg6r-A6gHp8yxAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHANIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog5AQSL39wTpYivfYmKzglANgAbEJyXFhkzXY5zuACgGYCwHICwGADAGqDQJVU8gNAeoNEwiUltmYrOCUAxVZWggEHROJIurwDQKIDgmwDtWvh_oY2BMM0BUByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAkSAuhYGC4iAQDQGAHoGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMIx5HZmKzglAMVWVoIBB0TiSLqEAEYASAAEgJIv_D_BwE&num=1&cid=CAQS9AEABaugfUQrdbWzl__xngi20XA4_9pIH_iYkYV_1lNBxvadmm0RsMV6Kq5TLJyxNIh6q0XCTJbzI5IdhXHktB_euO_QmXiqI9J89BaZRUbK1vVcOTCmZlkPAOEnlBdZlV6LYG-L4kZXTcbh2jXbPpohw9WOFrtE2e7BDwr8ZjNABqVDrrGqPMFvGQAvi5njVM5gByKJXGNFFrDng9AQhl1DMbUscS129_7Z76tOjU8wtVxghehAwHczr_BrXJ9bOIJJJsIzBmfk1HxO3KZgjVBlnWOXfGieS0cjo_cF2c_wvLZX2UGHCAsc6LzX0Q6Tt1VAVa7KGAE&sig=AOD64_2Jqg7sTPkCalfxslVH8U2_XKL0gQ&client=ca-pub-1677597403311019&rf=1&nb=8&adurl=https://www.meshy.ai/%3Futm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3DPerformance-Max-ROW-Traffic%26utm_content%3DROW%26utm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3DPerformance-Max-ROW-Traffic%26utm_term%3D%26gad_source%3D5%26gad_campaignid%3D23733249525%26gclid%3DEAIaIQobChMIx5HZmKzglAMVWVoIBB0TiSLqEAEYASAAEgJIv_D_BwE
              - link [ref=f19e30] [cursor=pointer]:
                - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CLw8QZH4aasfPE9m0odAPk5KK0Q7ZyduwhwGBwdLcqRX7lOOejQ4QASD9tJ6VAWDJvsmGxKPIF6ABiMvZninIAQmpAvwwIEYb1oM-qAMByAPLBKoE7gFP0AJitSR3OsianYqFSHrvU6QZjXphl2m59Hz0ePBBtTIK5662J3N0nDHsJmp9hrVUgbiBbHwvhDbolkj5FB7-zAk_CniF9JTfMfIjyO2eGM65AUqHAweiK2o8-IvSm_3TqVM7R-gl0DBDsyWZ44FHs9W-V8JEHYOpapFcwtqgLVLcKXEYic_BeDAkv17DGorjv14WCN7SL1Tx9jecxWlWDXrTLu_sqjRd8WwVMkQzdExsD4oA36ZjWBwWJDxKeLBqiVC4LulGSyo8CSZtJlK5gXqdHKMkCd8wZ5x518KlpD1ewCKgpYBeiVu_-zRHwAS9noC01wWIBfXL8rRYoAYugAeIg6r-A6gHp8yxAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHANIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog5AQSL39wTpYivfYmKzglANgAbEJyXFhkzXY5zuACgGYCwHICwGADAGqDQJVU8gNAeoNEwiUltmYrOCUAxVZWggEHROJIurwDQKIDgmwDtWvh_oY2BMM0BUByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAkSAuhYGC4iAQDQGAHoGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMIx5HZmKzglAMVWVoIBB0TiSLqEAEYASAAEgJIv_D_BwE&num=1&cid=CAQS9AEABaugfUQrdbWzl__xngi20XA4_9pIH_iYkYV_1lNBxvadmm0RsMV6Kq5TLJyxNIh6q0XCTJbzI5IdhXHktB_euO_QmXiqI9J89BaZRUbK1vVcOTCmZlkPAOEnlBdZlV6LYG-L4kZXTcbh2jXbPpohw9WOFrtE2e7BDwr8ZjNABqVDrrGqPMFvGQAvi5njVM5gByKJXGNFFrDng9AQhl1DMbUscS129_7Z76tOjU8wtVxghehAwHczr_BrXJ9bOIJJJsIzBmfk1HxO3KZgjVBlnWOXfGieS0cjo_cF2c_wvLZX2UGHCAsc6LzX0Q6Tt1VAVa7KGAE&sig=AOD64_2Jqg7sTPkCalfxslVH8U2_XKL0gQ&client=ca-pub-1677597403311019&rf=1&nb=8&adurl=https://www.meshy.ai/%3Futm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3DPerformance-Max-ROW-Traffic%26utm_content%3DROW%26utm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3DPerformance-Max-ROW-Traffic%26utm_term%3D%26gad_source%3D5%26gad_campaignid%3D23733249525%26gclid%3DEAIaIQobChMIx5HZmKzglAMVWVoIBB0TiSLqEAEYASAAEgJIv_D_BwE
                - generic [ref=f19e32]:
                  - img [ref=f19e33]
                  - img [ref=f19e35]
        - img [ref=f19e43] [cursor=pointer]
        - button [ref=f19e46] [cursor=pointer]:
          - img [ref=f19e47]
        - iframe
  - contentinfo [ref=e75]:
    - generic [ref=e80]:
      - heading "Subscription" [level=2] [ref=e81]
      - generic [ref=e82]:
        - textbox "Your email address" [ref=e83]
        - button "" [ref=e84] [cursor=pointer]:
          - generic [ref=e85]: 
        - paragraph [ref=e86]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e90]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e91]:
    - iframe [ref=e94]:
      - generic [ref=f21e3]:
        - button [ref=f21e4]:
          - img [ref=f21e5]
        - generic [ref=f21e7]:
          - button "Replay" [ref=f21e15]:
            - img [ref=f21e17] [cursor=pointer]
          - button "Learn more" [ref=f21e24] [cursor=pointer]
```

# Test source

```ts
  1  | import {test,expect} from "@playwright/test";
  2  | import {Contact} from "../POM/contactus";
  3  | 
  4  | test.describe("Testing the Contact us Functionality",()=>{
  5  |     let contact;
  6  |     test.beforeEach(async ({page})=>{
  7  |             contact=new Contact(page);
  8  |             await contact.navigate();
  9  |     });
  10 | 
  11 |     test("Testing the visibility of contact us button in the home page ",async({page})=>{
  12 |         await expect(page.getByRole("link",{name:"Contact us"})).toBeVisible();
  13 |     })
  14 | 
  15 |     test("Testing clicking the contact us button direct to contact us page",async({page})=>{
  16 |         await contact.contactus();
  17 |         await expect(page).toHaveURL("https://automationexercise.com/contact_us");
  18 |     })
  19 | 
  20 |     test("Testing the Visibility of Get in touch form after clicking the contact us button",async({page})=>{
  21 |         await contact.contactus();
  22 |         await expect(page.getByRole("heading",{name:"Get In Touch"})).toBeVisible();
  23 |     })
  24 | 
  25 |     test("Submitting the form by filling all the details",async({page})=>{
  26 |         await contact.contactus();
  27 |         await page.getByPlaceholder("Name").fill("User12345");
  28 |         await page.getByPlaceholder("Email").first().fill("User12345@gmail.com");
  29 |         await page.getByPlaceholder("Subject").fill("Greetings");
  30 |         await page.getByPlaceholder("Your Message Here").fill("Hello Good Morning");
  31 |         page.on('dialog',async dialog =>{
  32 |             await dialog.accept();
  33 |         })
  34 |         await page.locator('input[name="submit"]').click();
  35 |         await expect(page.locator(".status.alert.alert-success")).toHaveText("Success! Your details have been submitted successfully.");
  36 |        
  37 |     });
  38 | 
  39 |     test("Testing clicking on the Home button after submitting the form redirects to home",async({page})=>{
  40 |         await contact.contactus();
  41 |         await page.getByPlaceholder("Name").fill("User12345");
  42 |         await page.getByPlaceholder("Email").first().fill("User12345@gmail.com");
  43 |         await page.getByPlaceholder("Subject").fill("Greetings");
  44 |         await page.getByPlaceholder("Your Message Here").fill("Hello Good Morning");
  45 |         page.on('dialog',async dialog =>{
  46 |             await dialog.accept();
  47 |         })
  48 |         await page.locator('input[name="submit"]').click();
> 49 |         await page.getByRole("link",{name:"Home"}).nth(1).click();
     |                                                           ^ Error: locator.click: Test timeout of 30000ms exceeded.
  50 |         await expect(page).toHaveURL("https://automationexercise.com/");
  51 |     
  52 |     });
  53 | 
  54 |     test("missing the name field and submitting the form",async({page})=>{
  55 |         await contact.contactus();
  56 |         await page.getByPlaceholder("Email").first().fill("User12345@gmail.com");
  57 |         await page.getByPlaceholder("Subject").fill("Greetings");
  58 |         await page.getByPlaceholder("Your Message Here").fill("Hello Good Morning");
  59 |         page.on('dialog',async dialog =>{
  60 |             await dialog.accept();
  61 |         })
  62 |         await page.locator('input[name="submit"]').click();
  63 |         await expect(page.locator(".status.alert.alert-success")).toHaveText("Success! Your details have been submitted successfully.");
  64 |     });
  65 | 
  66 |     test("Testing By missing the email field and submitting the form",async({page})=>{
  67 |         await contact.contactus();
  68 |         await page.getByPlaceholder("Name").fill("User12345");
  69 |         await page.getByPlaceholder("Email").first().fill("User12345@gmail.com");
  70 |         await page.getByPlaceholder("Subject").fill("Greetings");
  71 |         await page.getByPlaceholder("Your Message Here").fill("Hello Good Morning");
  72 |         await page.locator('input[name="submit"]').click();
  73 |         await expect(page.locator('input[name="submit"]')).toBeVisible();
  74 |     });
  75 | 
  76 |     test("Testing by missing the subject field and submitting",async({page})=>{
  77 |         await contact.contactus();
  78 |         await page.getByPlaceholder("Name").fill("User12345");
  79 |         await page.getByPlaceholder("Email").first().fill("User12345@gmail.com");
  80 |         await page.getByPlaceholder("Your Message Here").fill("Hello Good Morning");
  81 |         page.on('dialog',async dialog =>{
  82 |             await dialog.accept();
  83 |         })
  84 |         await page.locator('input[name="submit"]').click();
  85 |         await expect(page.locator(".status.alert.alert-success")).toHaveText("Success! Your details have been submitted successfully.");
  86 |     })
  87 | });
```