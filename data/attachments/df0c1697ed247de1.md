# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout.spec.js >> Testing the checkout functionality of the automation exercise >> Testing checking the total amount in case of multiple items in cart at checkout
- Location: tests/checkout.spec.js:127:10

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Add to cart' })

```

# Page snapshot

```yaml
- generic [ref=e1]:
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
          - link " Logout" [ref=e23]:
            - /url: /logout
            - generic [ref=e24]: 
            - text: Logout
        - listitem [ref=e25]:
          - link " Delete Account" [ref=e26]:
            - /url: /delete_account
            - generic [ref=e27]: 
            - text: Delete Account
        - listitem [ref=e28]:
          - link " Test Cases" [ref=e29]:
            - /url: /test_cases
            - generic [ref=e30]: 
            - text: Test Cases
        - listitem [ref=e31]:
          - link " API Testing" [ref=e32]:
            - /url: /api_list
            - generic [ref=e33]: 
            - text: API Testing
        - listitem [ref=e34]:
          - link " Video Tutorials" [ref=e35]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e36]: 
            - text: Video Tutorials
        - listitem [ref=e37]:
          - link " Contact us" [ref=e38]:
            - /url: /contact_us
            - generic [ref=e39]: 
            - text: Contact us
        - listitem [ref=e40]:
          - generic [ref=e41]:
            - generic [ref=e42]: 
            - text: Logged in as user12345
  - generic [ref=e47]:
    - list [ref=e48]:
      - listitem [ref=e49] [cursor=pointer]
      - listitem [ref=e50] [cursor=pointer]
      - listitem [ref=e51] [cursor=pointer]
    - generic [ref=e52]:
      - generic:
        - generic [ref=e53]:
          - heading "AutomationExercise" [level=1] [ref=e54]
          - heading "Full-Fledged practice website for Automation Engineers" [level=2] [ref=e55]
          - paragraph [ref=e56]: All QA engineers can use this website for automation practice and API testing either they are at beginner or advance level. This is for everybody to help them brush up their automation skills.
          - link "Test Cases" [ref=e57]:
            - /url: /test_cases
            - button "Test Cases" [ref=e58] [cursor=pointer]
          - link "APIs list for practice" [ref=e59]:
            - /url: /api_list
            - button "APIs list for practice" [ref=e60] [cursor=pointer]
        - img "demo website for practice" [ref=e62]
      - generic [ref=e63]:
        - generic [ref=e64]:
          - heading "AutomationExercise" [level=1] [ref=e65]
          - heading "Full-Fledged practice website for Automation Engineers" [level=2] [ref=e66]
          - paragraph [ref=e67]: All QA engineers can use this website for automation practice and API testing either they are at beginner or advance level. This is for everybody to help them brush up their automation skills.
          - link "Test Cases" [ref=e68]:
            - /url: /test_cases
            - button "Test Cases" [ref=e69] [cursor=pointer]
          - link "APIs list for practice" [ref=e70]:
            - /url: /api_list
            - button "APIs list for practice" [ref=e71] [cursor=pointer]
        - img "demo website for practice" [ref=e73]
    - link "" [ref=e74]:
      - /url: "#slider-carousel"
      - generic [ref=e75]: 
    - link "" [ref=e76]:
      - /url: "#slider-carousel"
      - generic [ref=e77]: 
  - generic [ref=e80]:
    - generic [ref=e82]:
      - heading "Category" [level=2] [ref=e83]
      - generic [ref=e84]:
        - heading " Women" [level=4] [ref=e87]:
          - link " Women" [ref=e88]:
            - /url: "#Women"
            - generic [ref=e90]: 
            - text: Women
        - heading " Men" [level=4] [ref=e93]:
          - link " Men" [ref=e94]:
            - /url: "#Men"
            - generic [ref=e96]: 
            - text: Men
        - heading " Kids" [level=4] [ref=e99]:
          - link " Kids" [ref=e100]:
            - /url: "#Kids"
            - generic [ref=e102]: 
            - text: Kids
      - generic [ref=e103]:
        - heading "Brands" [level=2] [ref=e104]
        - list [ref=e106]:
          - listitem [ref=e107]:
            - link "(6) Polo" [ref=e108]:
              - /url: /brand_products/Polo
              - generic [ref=e109]: (6)
              - text: Polo
          - listitem [ref=e110]:
            - link "(5) H&M" [ref=e111]:
              - /url: /brand_products/H&M
              - generic [ref=e112]: (5)
              - text: H&M
          - listitem [ref=e113]:
            - link "(5) Madame" [ref=e114]:
              - /url: /brand_products/Madame
              - generic [ref=e115]: (5)
              - text: Madame
          - listitem [ref=e116]:
            - link "(3) Mast & Harbour" [ref=e117]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=e118]: (3)
              - text: Mast & Harbour
          - listitem [ref=e119]:
            - link "(4) Babyhug" [ref=e120]:
              - /url: /brand_products/Babyhug
              - generic [ref=e121]: (4)
              - text: Babyhug
          - listitem [ref=e122]:
            - link "(3) Allen Solly Junior" [ref=e123]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=e124]: (3)
              - text: Allen Solly Junior
          - listitem [ref=e125]:
            - link "(3) Kookie Kids" [ref=e126]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=e127]: (3)
              - text: Kookie Kids
          - listitem [ref=e128]:
            - link "(5) Biba" [ref=e129]:
              - /url: /brand_products/Biba
              - generic [ref=e130]: (5)
              - text: Biba
    - generic [ref=e131]:
      - generic [ref=e132]:
        - heading "Features Items" [level=2] [ref=e133]
        - generic [ref=e135]:
          - generic [ref=e136]:
            - generic [ref=e137]:
              - img "ecommerce website products" [ref=e138]
              - heading "Rs. 500" [level=2] [ref=e139]
              - paragraph [ref=e140]: Blue Top
              - generic [ref=e141] [cursor=pointer]:
                - generic [ref=e142]: 
                - text: Add to cart
            - generic [ref=e143]:
              - heading "Rs. 500" [level=2] [ref=e144]
              - paragraph [ref=e145]: Blue Top
              - generic [ref=e146] [cursor=pointer]:
                - generic [ref=e147]: 
                - text: Add to cart
          - list [ref=e149]:
            - listitem [ref=e150]:
              - link " View Product" [ref=e151]:
                - /url: /product_details/1
                - generic [ref=e152]: 
                - text: View Product
        - generic [ref=e154]:
          - generic [ref=e155]:
            - generic [ref=e156]:
              - img "ecommerce website products" [ref=e157]
              - heading "Rs. 400" [level=2] [ref=e158]
              - paragraph [ref=e159]: Men Tshirt
              - generic [ref=e160] [cursor=pointer]:
                - generic [ref=e161]: 
                - text: Add to cart
            - generic [ref=e162]:
              - heading "Rs. 400" [level=2] [ref=e163]
              - paragraph [ref=e164]: Men Tshirt
              - generic [ref=e165] [cursor=pointer]:
                - generic [ref=e166]: 
                - text: Add to cart
          - list [ref=e168]:
            - listitem [ref=e169]:
              - link " View Product" [ref=e170]:
                - /url: /product_details/2
                - generic [ref=e171]: 
                - text: View Product
        - generic [ref=e173]:
          - generic [ref=e174]:
            - generic [ref=e175]:
              - img "ecommerce website products" [ref=e176]
              - heading "Rs. 1000" [level=2] [ref=e177]
              - paragraph [ref=e178]: Sleeveless Dress
              - generic [ref=e179] [cursor=pointer]:
                - generic [ref=e180]: 
                - text: Add to cart
            - generic [ref=e181]:
              - heading "Rs. 1000" [level=2] [ref=e182]
              - paragraph [ref=e183]: Sleeveless Dress
              - generic [ref=e184] [cursor=pointer]:
                - generic [ref=e185]: 
                - text: Add to cart
          - list [ref=e187]:
            - listitem [ref=e188]:
              - link " View Product" [ref=e189]:
                - /url: /product_details/3
                - generic [ref=e190]: 
                - text: View Product
        - generic [ref=e192]:
          - generic [ref=e193]:
            - generic [ref=e194]:
              - img "ecommerce website products" [ref=e195]
              - heading "Rs. 1500" [level=2] [ref=e196]
              - paragraph [ref=e197]: Stylish Dress
              - generic [ref=e198] [cursor=pointer]:
                - generic [ref=e199]: 
                - text: Add to cart
            - generic [ref=e200]:
              - heading "Rs. 1500" [level=2] [ref=e201]
              - paragraph [ref=e202]: Stylish Dress
              - generic [ref=e203] [cursor=pointer]:
                - generic [ref=e204]: 
                - text: Add to cart
          - list [ref=e206]:
            - listitem [ref=e207]:
              - link " View Product" [ref=e208]:
                - /url: /product_details/4
                - generic [ref=e209]: 
                - text: View Product
        - generic [ref=e211]:
          - generic [ref=e212]:
            - generic [ref=e213]:
              - img "ecommerce website products" [ref=e214]
              - heading "Rs. 600" [level=2] [ref=e215]
              - paragraph [ref=e216]: Winter Top
              - generic [ref=e217] [cursor=pointer]:
                - generic [ref=e218]: 
                - text: Add to cart
            - generic [ref=e219]:
              - heading "Rs. 600" [level=2] [ref=e220]
              - paragraph [ref=e221]: Winter Top
              - generic [ref=e222] [cursor=pointer]:
                - generic [ref=e223]: 
                - text: Add to cart
          - list [ref=e225]:
            - listitem [ref=e226]:
              - link " View Product" [ref=e227]:
                - /url: /product_details/5
                - generic [ref=e228]: 
                - text: View Product
        - generic [ref=e230]:
          - generic [ref=e231]:
            - generic [ref=e232]:
              - img "ecommerce website products" [ref=e233]
              - heading "Rs. 400" [level=2] [ref=e234]
              - paragraph [ref=e235]: Summer White Top
              - generic [ref=e236] [cursor=pointer]:
                - generic [ref=e237]: 
                - text: Add to cart
            - generic [ref=e239]:
              - heading "Rs. 400" [level=2] [ref=e240]
              - paragraph [ref=e241]: Summer White Top
              - generic [ref=e242] [cursor=pointer]:
                - generic [ref=e243]: 
                - text: Add to cart
          - list [ref=e245]:
            - listitem [ref=e246]:
              - link " View Product" [ref=e247]:
                - /url: /product_details/6
                - generic [ref=e248]: 
                - text: View Product
        - generic [ref=e250]:
          - generic [ref=e251]:
            - generic [ref=e252]:
              - img "ecommerce website products" [ref=e253]
              - heading "Rs. 1000" [level=2] [ref=e254]
              - paragraph [ref=e255]: Madame Top For Women
              - generic [ref=e256] [cursor=pointer]:
                - generic [ref=e257]: 
                - text: Add to cart
            - generic [ref=e258]:
              - heading "Rs. 1000" [level=2] [ref=e259]
              - paragraph [ref=e260]: Madame Top For Women
              - generic [ref=e261] [cursor=pointer]:
                - generic [ref=e262]: 
                - text: Add to cart
          - list [ref=e264]:
            - listitem [ref=e265]:
              - link " View Product" [active] [ref=e266]:
                - /url: /product_details/7
                - generic [ref=e267]: 
                - text: View Product
        - generic [ref=e269]:
          - generic [ref=e270]:
            - generic [ref=e271]:
              - img "ecommerce website products" [ref=e272]
              - heading "Rs. 700" [level=2] [ref=e273]
              - paragraph [ref=e274]: Fancy Green Top
              - generic [ref=e275] [cursor=pointer]:
                - generic [ref=e276]: 
                - text: Add to cart
            - generic [ref=e277]:
              - heading "Rs. 700" [level=2] [ref=e278]
              - paragraph [ref=e279]: Fancy Green Top
              - generic [ref=e280] [cursor=pointer]:
                - generic [ref=e281]: 
                - text: Add to cart
          - list [ref=e283]:
            - listitem [ref=e284]:
              - link " View Product" [ref=e285]:
                - /url: /product_details/8
                - generic [ref=e286]: 
                - text: View Product
        - generic [ref=e288]:
          - generic [ref=e289]:
            - generic [ref=e290]:
              - img "ecommerce website products" [ref=e291]
              - heading "Rs. 499" [level=2] [ref=e292]
              - paragraph [ref=e293]: Sleeves Printed Top - White
              - generic [ref=e294] [cursor=pointer]:
                - generic [ref=e295]: 
                - text: Add to cart
            - generic [ref=e296]:
              - heading "Rs. 499" [level=2] [ref=e297]
              - paragraph [ref=e298]: Sleeves Printed Top - White
              - generic [ref=e299] [cursor=pointer]:
                - generic [ref=e300]: 
                - text: Add to cart
          - list [ref=e302]:
            - listitem [ref=e303]:
              - link " View Product" [ref=e304]:
                - /url: /product_details/11
                - generic [ref=e305]: 
                - text: View Product
        - generic [ref=e307]:
          - generic [ref=e308]:
            - generic [ref=e309]:
              - img "ecommerce website products" [ref=e310]
              - heading "Rs. 359" [level=2] [ref=e311]
              - paragraph [ref=e312]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=e313] [cursor=pointer]:
                - generic [ref=e314]: 
                - text: Add to cart
            - generic [ref=e315]:
              - heading "Rs. 359" [level=2] [ref=e316]
              - paragraph [ref=e317]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=e318] [cursor=pointer]:
                - generic [ref=e319]: 
                - text: Add to cart
          - list [ref=e321]:
            - listitem [ref=e322]:
              - link " View Product" [ref=e323]:
                - /url: /product_details/12
                - generic [ref=e324]: 
                - text: View Product
        - generic [ref=e326]:
          - generic [ref=e327]:
            - generic [ref=e328]:
              - img "ecommerce website products" [ref=e329]
              - heading "Rs. 278" [level=2] [ref=e330]
              - paragraph [ref=e331]: Frozen Tops For Kids
              - generic [ref=e332] [cursor=pointer]:
                - generic [ref=e333]: 
                - text: Add to cart
            - generic [ref=e334]:
              - heading "Rs. 278" [level=2] [ref=e335]
              - paragraph [ref=e336]: Frozen Tops For Kids
              - generic [ref=e337] [cursor=pointer]:
                - generic [ref=e338]: 
                - text: Add to cart
          - list [ref=e340]:
            - listitem [ref=e341]:
              - link " View Product" [ref=e342]:
                - /url: /product_details/13
                - generic [ref=e343]: 
                - text: View Product
        - generic [ref=e345]:
          - generic [ref=e346]:
            - generic [ref=e347]:
              - img "ecommerce website products" [ref=e348]
              - heading "Rs. 679" [level=2] [ref=e349]
              - paragraph [ref=e350]: Full Sleeves Top Cherry - Pink
              - generic [ref=e351] [cursor=pointer]:
                - generic [ref=e352]: 
                - text: Add to cart
            - generic [ref=e353]:
              - heading "Rs. 679" [level=2] [ref=e354]
              - paragraph [ref=e355]: Full Sleeves Top Cherry - Pink
              - generic [ref=e356] [cursor=pointer]:
                - generic [ref=e357]: 
                - text: Add to cart
          - list [ref=e359]:
            - listitem [ref=e360]:
              - link " View Product" [ref=e361]:
                - /url: /product_details/14
                - generic [ref=e362]: 
                - text: View Product
        - generic [ref=e364]:
          - generic [ref=e365]:
            - generic [ref=e366]:
              - img "ecommerce website products" [ref=e367]
              - heading "Rs. 315" [level=2] [ref=e368]
              - paragraph [ref=e369]: Printed Off Shoulder Top - White
              - generic [ref=e370] [cursor=pointer]:
                - generic [ref=e371]: 
                - text: Add to cart
            - generic [ref=e372]:
              - heading "Rs. 315" [level=2] [ref=e373]
              - paragraph [ref=e374]: Printed Off Shoulder Top - White
              - generic [ref=e375] [cursor=pointer]:
                - generic [ref=e376]: 
                - text: Add to cart
          - list [ref=e378]:
            - listitem [ref=e379]:
              - link " View Product" [ref=e380]:
                - /url: /product_details/15
                - generic [ref=e381]: 
                - text: View Product
        - generic [ref=e383]:
          - generic [ref=e384]:
            - generic [ref=e385]:
              - img "ecommerce website products" [ref=e386]
              - heading "Rs. 478" [level=2] [ref=e387]
              - paragraph [ref=e388]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e389] [cursor=pointer]:
                - generic [ref=e390]: 
                - text: Add to cart
            - generic [ref=e391]:
              - heading "Rs. 478" [level=2] [ref=e392]
              - paragraph [ref=e393]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e394] [cursor=pointer]:
                - generic [ref=e395]: 
                - text: Add to cart
          - list [ref=e397]:
            - listitem [ref=e398]:
              - link " View Product" [ref=e399]:
                - /url: /product_details/16
                - generic [ref=e400]: 
                - text: View Product
        - generic [ref=e402]:
          - generic [ref=e403]:
            - generic [ref=e404]:
              - img "ecommerce website products" [ref=e405]
              - heading "Rs. 1200" [level=2] [ref=e406]
              - paragraph [ref=e407]: Little Girls Mr. Panda Shirt
              - generic [ref=e408] [cursor=pointer]:
                - generic [ref=e409]: 
                - text: Add to cart
            - generic [ref=e410]:
              - heading "Rs. 1200" [level=2] [ref=e411]
              - paragraph [ref=e412]: Little Girls Mr. Panda Shirt
              - generic [ref=e413] [cursor=pointer]:
                - generic [ref=e414]: 
                - text: Add to cart
          - list [ref=e416]:
            - listitem [ref=e417]:
              - link " View Product" [ref=e418]:
                - /url: /product_details/18
                - generic [ref=e419]: 
                - text: View Product
        - generic [ref=e421]:
          - generic [ref=e422]:
            - generic [ref=e423]:
              - img "ecommerce website products" [ref=e424]
              - heading "Rs. 1050" [level=2] [ref=e425]
              - paragraph [ref=e426]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=e427] [cursor=pointer]:
                - generic [ref=e428]: 
                - text: Add to cart
            - generic [ref=e429]:
              - heading "Rs. 1050" [level=2] [ref=e430]
              - paragraph [ref=e431]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=e432] [cursor=pointer]:
                - generic [ref=e433]: 
                - text: Add to cart
          - list [ref=e435]:
            - listitem [ref=e436]:
              - link " View Product" [ref=e437]:
                - /url: /product_details/19
                - generic [ref=e438]: 
                - text: View Product
        - generic [ref=e440]:
          - generic [ref=e441]:
            - generic [ref=e442]:
              - img "ecommerce website products" [ref=e443]
              - heading "Rs. 1190" [level=2] [ref=e444]
              - paragraph [ref=e445]: Cotton Mull Embroidered Dress
              - generic [ref=e446] [cursor=pointer]:
                - generic [ref=e447]: 
                - text: Add to cart
            - generic [ref=e448]:
              - heading "Rs. 1190" [level=2] [ref=e449]
              - paragraph [ref=e450]: Cotton Mull Embroidered Dress
              - generic [ref=e451] [cursor=pointer]:
                - generic [ref=e452]: 
                - text: Add to cart
          - list [ref=e454]:
            - listitem [ref=e455]:
              - link " View Product" [ref=e456]:
                - /url: /product_details/20
                - generic [ref=e457]: 
                - text: View Product
        - generic [ref=e459]:
          - generic [ref=e460]:
            - generic [ref=e461]:
              - img "ecommerce website products" [ref=e462]
              - heading "Rs. 1530" [level=2] [ref=e463]
              - paragraph [ref=e464]: Blue Cotton Indie Mickey Dress
              - generic [ref=e465] [cursor=pointer]:
                - generic [ref=e466]: 
                - text: Add to cart
            - generic [ref=e467]:
              - heading "Rs. 1530" [level=2] [ref=e468]
              - paragraph [ref=e469]: Blue Cotton Indie Mickey Dress
              - generic [ref=e470] [cursor=pointer]:
                - generic [ref=e471]: 
                - text: Add to cart
          - list [ref=e473]:
            - listitem [ref=e474]:
              - link " View Product" [ref=e475]:
                - /url: /product_details/21
                - generic [ref=e476]: 
                - text: View Product
        - generic [ref=e478]:
          - generic [ref=e479]:
            - generic [ref=e480]:
              - img "ecommerce website products" [ref=e481]
              - heading "Rs. 1600" [level=2] [ref=e482]
              - paragraph [ref=e483]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=e484] [cursor=pointer]:
                - generic [ref=e485]: 
                - text: Add to cart
            - generic [ref=e486]:
              - heading "Rs. 1600" [level=2] [ref=e487]
              - paragraph [ref=e488]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=e489] [cursor=pointer]:
                - generic [ref=e490]: 
                - text: Add to cart
          - list [ref=e492]:
            - listitem [ref=e493]:
              - link " View Product" [ref=e494]:
                - /url: /product_details/22
                - generic [ref=e495]: 
                - text: View Product
        - generic [ref=e497]:
          - generic [ref=e498]:
            - generic [ref=e499]:
              - img "ecommerce website products" [ref=e500]
              - heading "Rs. 1100" [level=2] [ref=e501]
              - paragraph [ref=e502]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e503] [cursor=pointer]:
                - generic [ref=e504]: 
                - text: Add to cart
            - generic [ref=e505]:
              - heading "Rs. 1100" [level=2] [ref=e506]
              - paragraph [ref=e507]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e508] [cursor=pointer]:
                - generic [ref=e509]: 
                - text: Add to cart
          - list [ref=e511]:
            - listitem [ref=e512]:
              - link " View Product" [ref=e513]:
                - /url: /product_details/23
                - generic [ref=e514]: 
                - text: View Product
        - generic [ref=e516]:
          - generic [ref=e517]:
            - generic [ref=e518]:
              - img "ecommerce website products" [ref=e519]
              - heading "Rs. 849" [level=2] [ref=e520]
              - paragraph [ref=e521]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e522] [cursor=pointer]:
                - generic [ref=e523]: 
                - text: Add to cart
            - generic [ref=e524]:
              - heading "Rs. 849" [level=2] [ref=e525]
              - paragraph [ref=e526]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e527] [cursor=pointer]:
                - generic [ref=e528]: 
                - text: Add to cart
          - list [ref=e530]:
            - listitem [ref=e531]:
              - link " View Product" [ref=e532]:
                - /url: /product_details/24
                - generic [ref=e533]: 
                - text: View Product
        - generic [ref=e535]:
          - generic [ref=e536]:
            - generic [ref=e537]:
              - img "ecommerce website products" [ref=e538]
              - heading "Rs. 1299" [level=2] [ref=e539]
              - paragraph [ref=e540]: Pure Cotton V-Neck T-Shirt
              - generic [ref=e541] [cursor=pointer]:
                - generic [ref=e542]: 
                - text: Add to cart
            - generic [ref=e543]:
              - heading "Rs. 1299" [level=2] [ref=e544]
              - paragraph [ref=e545]: Pure Cotton V-Neck T-Shirt
              - generic [ref=e546] [cursor=pointer]:
                - generic [ref=e547]: 
                - text: Add to cart
          - list [ref=e549]:
            - listitem [ref=e550]:
              - link " View Product" [ref=e551]:
                - /url: /product_details/28
                - generic [ref=e552]: 
                - text: View Product
        - generic [ref=e554]:
          - generic [ref=e555]:
            - generic [ref=e556]:
              - img "ecommerce website products" [ref=e557]
              - heading "Rs. 1000" [level=2] [ref=e558]
              - paragraph [ref=e559]: Green Side Placket Detail T-Shirt
              - generic [ref=e560] [cursor=pointer]:
                - generic [ref=e561]: 
                - text: Add to cart
            - generic [ref=e562]:
              - heading "Rs. 1000" [level=2] [ref=e563]
              - paragraph [ref=e564]: Green Side Placket Detail T-Shirt
              - generic [ref=e565] [cursor=pointer]:
                - generic [ref=e566]: 
                - text: Add to cart
          - list [ref=e568]:
            - listitem [ref=e569]:
              - link " View Product" [ref=e570]:
                - /url: /product_details/29
                - generic [ref=e571]: 
                - text: View Product
        - generic [ref=e573]:
          - generic [ref=e574]:
            - generic [ref=e575]:
              - img "ecommerce website products" [ref=e576]
              - heading "Rs. 1500" [level=2] [ref=e577]
              - paragraph [ref=e578]: Premium Polo T-Shirts
              - generic [ref=e579] [cursor=pointer]:
                - generic [ref=e580]: 
                - text: Add to cart
            - generic [ref=e581]:
              - heading "Rs. 1500" [level=2] [ref=e582]
              - paragraph [ref=e583]: Premium Polo T-Shirts
              - generic [ref=e584] [cursor=pointer]:
                - generic [ref=e585]: 
                - text: Add to cart
          - list [ref=e587]:
            - listitem [ref=e588]:
              - link " View Product" [ref=e589]:
                - /url: /product_details/30
                - generic [ref=e590]: 
                - text: View Product
        - generic [ref=e592]:
          - generic [ref=e593]:
            - generic [ref=e594]:
              - img "ecommerce website products" [ref=e595]
              - heading "Rs. 850" [level=2] [ref=e596]
              - paragraph [ref=e597]: Pure Cotton Neon Green Tshirt
              - generic [ref=e598] [cursor=pointer]:
                - generic [ref=e599]: 
                - text: Add to cart
            - generic [ref=e600]:
              - heading "Rs. 850" [level=2] [ref=e601]
              - paragraph [ref=e602]: Pure Cotton Neon Green Tshirt
              - generic [ref=e603] [cursor=pointer]:
                - generic [ref=e604]: 
                - text: Add to cart
          - list [ref=e606]:
            - listitem [ref=e607]:
              - link " View Product" [ref=e608]:
                - /url: /product_details/31
                - generic [ref=e609]: 
                - text: View Product
        - generic [ref=e611]:
          - generic [ref=e612]:
            - generic [ref=e613]:
              - img "ecommerce website products" [ref=e614]
              - heading "Rs. 799" [level=2] [ref=e615]
              - paragraph [ref=e616]: Soft Stretch Jeans
              - generic [ref=e617] [cursor=pointer]:
                - generic [ref=e618]: 
                - text: Add to cart
            - generic [ref=e619]:
              - heading "Rs. 799" [level=2] [ref=e620]
              - paragraph [ref=e621]: Soft Stretch Jeans
              - generic [ref=e622] [cursor=pointer]:
                - generic [ref=e623]: 
                - text: Add to cart
          - list [ref=e625]:
            - listitem [ref=e626]:
              - link " View Product" [ref=e627]:
                - /url: /product_details/33
                - generic [ref=e628]: 
                - text: View Product
        - generic [ref=e630]:
          - generic [ref=e631]:
            - generic [ref=e632]:
              - img "ecommerce website products" [ref=e633]
              - heading "Rs. 1200" [level=2] [ref=e634]
              - paragraph [ref=e635]: Regular Fit Straight Jeans
              - generic [ref=e636] [cursor=pointer]:
                - generic [ref=e637]: 
                - text: Add to cart
            - generic [ref=e638]:
              - heading "Rs. 1200" [level=2] [ref=e639]
              - paragraph [ref=e640]: Regular Fit Straight Jeans
              - generic [ref=e641] [cursor=pointer]:
                - generic [ref=e642]: 
                - text: Add to cart
          - list [ref=e644]:
            - listitem [ref=e645]:
              - link " View Product" [ref=e646]:
                - /url: /product_details/35
                - generic [ref=e647]: 
                - text: View Product
        - generic [ref=e649]:
          - generic [ref=e650]:
            - generic [ref=e651]:
              - img "ecommerce website products" [ref=e652]
              - heading "Rs. 1400" [level=2] [ref=e653]
              - paragraph [ref=e654]: Grunt Blue Slim Fit Jeans
              - generic [ref=e655] [cursor=pointer]:
                - generic [ref=e656]: 
                - text: Add to cart
            - generic [ref=e657]:
              - heading "Rs. 1400" [level=2] [ref=e658]
              - paragraph [ref=e659]: Grunt Blue Slim Fit Jeans
              - generic [ref=e660] [cursor=pointer]:
                - generic [ref=e661]: 
                - text: Add to cart
          - list [ref=e663]:
            - listitem [ref=e664]:
              - link " View Product" [ref=e665]:
                - /url: /product_details/37
                - generic [ref=e666]: 
                - text: View Product
        - generic [ref=e668]:
          - generic [ref=e669]:
            - generic [ref=e670]:
              - img "ecommerce website products" [ref=e671]
              - heading "Rs. 2300" [level=2] [ref=e672]
              - paragraph [ref=e673]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e674] [cursor=pointer]:
                - generic [ref=e675]: 
                - text: Add to cart
            - generic [ref=e676]:
              - heading "Rs. 2300" [level=2] [ref=e677]
              - paragraph [ref=e678]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e679] [cursor=pointer]:
                - generic [ref=e680]: 
                - text: Add to cart
          - list [ref=e682]:
            - listitem [ref=e683]:
              - link " View Product" [ref=e684]:
                - /url: /product_details/38
                - generic [ref=e685]: 
                - text: View Product
        - generic [ref=e687]:
          - generic [ref=e688]:
            - generic [ref=e689]:
              - img "ecommerce website products" [ref=e690]
              - heading "Rs. 3000" [level=2] [ref=e691]
              - paragraph [ref=e692]: Cotton Silk Hand Block Print Saree
              - generic [ref=e693] [cursor=pointer]:
                - generic [ref=e694]: 
                - text: Add to cart
            - generic [ref=e695]:
              - heading "Rs. 3000" [level=2] [ref=e696]
              - paragraph [ref=e697]: Cotton Silk Hand Block Print Saree
              - generic [ref=e698] [cursor=pointer]:
                - generic [ref=e699]: 
                - text: Add to cart
          - list [ref=e701]:
            - listitem [ref=e702]:
              - link " View Product" [ref=e703]:
                - /url: /product_details/39
                - generic [ref=e704]: 
                - text: View Product
        - generic [ref=e706]:
          - generic [ref=e707]:
            - generic [ref=e708]:
              - img "ecommerce website products" [ref=e709]
              - heading "Rs. 3500" [level=2] [ref=e710]
              - paragraph [ref=e711]: Rust Red Linen Saree
              - generic [ref=e712] [cursor=pointer]:
                - generic [ref=e713]: 
                - text: Add to cart
            - generic [ref=e714]:
              - heading "Rs. 3500" [level=2] [ref=e715]
              - paragraph [ref=e716]: Rust Red Linen Saree
              - generic [ref=e717] [cursor=pointer]:
                - generic [ref=e718]: 
                - text: Add to cart
          - list [ref=e720]:
            - listitem [ref=e721]:
              - link " View Product" [ref=e722]:
                - /url: /product_details/40
                - generic [ref=e723]: 
                - text: View Product
        - generic [ref=e725]:
          - generic [ref=e726]:
            - generic [ref=e727]:
              - img "ecommerce website products" [ref=e728]
              - heading "Rs. 5000" [level=2] [ref=e729]
              - paragraph [ref=e730]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e731] [cursor=pointer]:
                - generic [ref=e732]: 
                - text: Add to cart
            - generic [ref=e733]:
              - heading "Rs. 5000" [level=2] [ref=e734]
              - paragraph [ref=e735]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e736] [cursor=pointer]:
                - generic [ref=e737]: 
                - text: Add to cart
          - list [ref=e739]:
            - listitem [ref=e740]:
              - link " View Product" [ref=e741]:
                - /url: /product_details/41
                - generic [ref=e742]: 
                - text: View Product
        - generic [ref=e744]:
          - generic [ref=e745]:
            - generic [ref=e746]:
              - img "ecommerce website products" [ref=e747]
              - heading "Rs. 1400" [level=2] [ref=e748]
              - paragraph [ref=e749]: Lace Top For Women
              - generic [ref=e750] [cursor=pointer]:
                - generic [ref=e751]: 
                - text: Add to cart
            - generic [ref=e752]:
              - heading "Rs. 1400" [level=2] [ref=e753]
              - paragraph [ref=e754]: Lace Top For Women
              - generic [ref=e755] [cursor=pointer]:
                - generic [ref=e756]: 
                - text: Add to cart
          - list [ref=e758]:
            - listitem [ref=e759]:
              - link " View Product" [ref=e760]:
                - /url: /product_details/42
                - generic [ref=e761]: 
                - text: View Product
        - generic [ref=e763]:
          - generic [ref=e764]:
            - generic [ref=e765]:
              - img "ecommerce website products" [ref=e766]
              - heading "Rs. 1389" [level=2] [ref=e767]
              - paragraph [ref=e768]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=e769] [cursor=pointer]:
                - generic [ref=e770]: 
                - text: Add to cart
            - generic [ref=e771]:
              - heading "Rs. 1389" [level=2] [ref=e772]
              - paragraph [ref=e773]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=e774] [cursor=pointer]:
                - generic [ref=e775]: 
                - text: Add to cart
          - list [ref=e777]:
            - listitem [ref=e778]:
              - link " View Product" [ref=e779]:
                - /url: /product_details/43
                - generic [ref=e780]: 
                - text: View Product
      - generic [ref=e781]:
        - heading "recommended items" [level=2] [ref=e782]
        - generic [ref=e783]:
          - generic [ref=e784]:
            - generic [ref=e785]:
              - generic [ref=e789]:
                - img "ecommerce website products" [ref=e790]
                - heading "Rs. 500" [level=2] [ref=e791]
                - paragraph [ref=e792]: Blue Top
                - generic [ref=e793] [cursor=pointer]:
                  - generic [ref=e794]: 
                  - text: Add to cart
              - generic [ref=e798]:
                - img "ecommerce website products" [ref=e799]
                - heading "Rs. 400" [level=2] [ref=e800]
                - paragraph [ref=e801]: Men Tshirt
                - generic [ref=e802] [cursor=pointer]:
                  - generic [ref=e803]: 
                  - text: Add to cart
              - generic [ref=e807]:
                - img "ecommerce website products" [ref=e808]
                - heading "Rs. 1000" [level=2] [ref=e809]
                - paragraph [ref=e810]: Rs. 1000
                - generic [ref=e811] [cursor=pointer]:
                  - generic [ref=e812]: 
                  - text: Add to cart
            - generic:
              - generic [ref=e816]:
                - img "ecommerce website products" [ref=e817]
                - heading "Rs. 1500" [level=2] [ref=e818]
                - paragraph [ref=e819]: Stylish Dress
                - generic [ref=e820] [cursor=pointer]:
                  - generic [ref=e821]: 
                  - text: Add to cart
              - generic [ref=e825]:
                - img "ecommerce website products" [ref=e826]
                - heading "Rs. 600" [level=2] [ref=e827]
                - paragraph [ref=e828]: Winter Top
                - generic [ref=e829] [cursor=pointer]:
                  - generic [ref=e830]: 
                  - text: Add to cart
              - generic [ref=e834]:
                - img "ecommerce website products" [ref=e835]
                - heading "Rs. 400" [level=2] [ref=e836]
                - paragraph [ref=e837]: Summer White Top
                - generic [ref=e838] [cursor=pointer]:
                  - generic [ref=e839]: 
                  - text: Add to cart
          - link "" [ref=e840]:
            - /url: "#recommended-item-carousel"
            - generic [ref=e841]: 
          - link "" [ref=e842]:
            - /url: "#recommended-item-carousel"
            - generic [ref=e843]: 
  - insertion [ref=e845]
  - contentinfo [ref=e847]:
    - generic [ref=e852]:
      - heading "Subscription" [level=2] [ref=e853]
      - generic [ref=e854]:
        - textbox "Your email address" [ref=e855]
        - button "" [ref=e856] [cursor=pointer]:
          - generic [ref=e857]: 
        - paragraph [ref=e858]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e862]: Copyright © 2021 All rights reserved
  - link "" [ref=e863]:
    - /url: "#top"
    - generic [ref=e864]: 
```

# Test source

```ts
  31  |          await checkout.cart();
  32  |          await checkout.checkoutbtn();
  33  |          await expect(page.getByRole("link",{name:"Register / Login"})).toBeVisible();
  34  |      });
  35  | 
  36  |      test("Testing the Register/login button if we checkout without login",async({page})=>{
  37  |          await checkout.add();
  38  |          await checkout.continue();
  39  |          await checkout.cart();
  40  |          await checkout.checkoutbtn();
  41  |          await page.getByRole("link",{name:"Register / Login"}).click();
  42  |          await expect(page.getByRole("heading",{name:'Login to your account'})).toBeVisible();
  43  |      });
  44  |     
  45  |      test("Testing the display of Delivery Address",async({page})=>{
  46  |         await page.getByRole("link",{name:"Login"}).click();
  47  |         await checkout.login();
  48  |         await checkout.add();
  49  |         await checkout.continue();
  50  |         await checkout.cart();
  51  |         await checkout.checkoutbtn();
  52  |         await expect(page.getByRole("heading",{name: "Your delivery address"})).toBeVisible();
  53  | 
  54  |      });
  55  | 
  56  |      test("Testing the display of your billing address",async({page})=>{
  57  |         await page.getByRole("link",{name:"Login"}).click();
  58  |         await checkout.login();
  59  |         await checkout.add();
  60  |         await checkout.continue();
  61  |         await checkout.cart();
  62  |         await checkout.checkoutbtn();
  63  |         await expect(page.getByRole("heading",{name:"Your billing address"})).toBeVisible();
  64  |      });
  65  | 
  66  |      test("Testing the Delivery address details contents are visible",async({page})=>{
  67  |         await page.getByRole("link",{name:"Login"}).click();
  68  |         await checkout.login();
  69  |         await checkout.cart();
  70  |         await checkout.checkoutbtn();
  71  |         await expect(page.locator(".address_firstname.address_lastname").first()).toBeVisible();
  72  |         await expect(page.locator(".address_address1.address_address2").first()).toBeVisible();
  73  |         await expect(page.locator(".address_address1.address_address2").nth(1)).toBeVisible();
  74  |         await expect(page.locator(".address_city.address_state_name.address_postcode").first()).toBeVisible();
  75  |         await expect(page.locator(".address_country_name").first()).toBeVisible();
  76  |         await expect(page.locator(".address_phone").first()).toBeVisible();
  77  | 
  78  |      });
  79  | 
  80  |      test("Testing the Diaplay of Total amount",async({page})=>{
  81  |         await page.getByRole("link",{name:"Login"}).click();
  82  |         await checkout.login();
  83  |         await checkout.cart();
  84  |         await checkout.checkoutbtn();
  85  |         await expect(page.locator(".cart_total_price").nth(1)).toBeVisible();
  86  |      });
  87  | 
  88  |      test("Testing the Place Order Button redirect to payment page",async({page})=>{
  89  |         await page.getByRole("link",{name:"Login"}).click();
  90  |         await checkout.login();
  91  |         await checkout.cart();
  92  |         await checkout.checkoutbtn();
  93  |         await page.getByRole("link",{name:"Place Order"}).click();
  94  |         await expect(page.getByRole("heading",{name:"Payment"})).toBeVisible();
  95  |      });
  96  | 
  97  |      test("Testing the Your Billing address to be same as your billing address",async({page})=>{
  98  |         await page.getByRole("link",{name:"Login"}).click();
  99  |         await checkout.login();
  100 |         await checkout.cart();
  101 |         await checkout.checkoutbtn();
  102 |         await expect(page.locator(".address_firstname.address_lastname").nth(1)).toHaveText("Mr. user 12345");
  103 |         await expect(page.locator(".address_address1.address_address2").first()).toHaveText("abc"); 
  104 |         await expect(page.locator(".address_address1.address_address2").nth(1)).toHaveText("12-34/5");
  105 |         await expect(page.locator(".address_city.address_state_name.address_postcode").nth(1)).toHaveText("Delhi Telangana 12345");
  106 |         await expect(page.locator(".address_country_name").nth(1)).toHaveText("India");
  107 |         await expect(page.locator(".address_phone").nth(1)).toHaveText("9876543210");
  108 |      });
  109 | 
  110 |      test("Testing the Review your order after checkout button",async ({page})=>{
  111 |         await page.getByRole("link",{name:"Login"}).click();
  112 |         await checkout.login();
  113 |         await checkout.cart();
  114 |         await checkout.checkoutbtn();
  115 |         await expect(page.getByRole("heading",{name: "Review Your Order"})).toBeVisible();
  116 |      })
  117 | 
  118 |      test("Testing clicking on the order in checkout page redirects to the products page",async({page})=>{
  119 |         await page.getByRole("link",{name:"Login"}).click();
  120 |         await checkout.login();
  121 |         await checkout.cart();
  122 |         await checkout.checkoutbtn();
  123 |         await page.getByRole("link",{name:"Blue Top"}).click();
  124 |         await expect(page.getByRole("heading",{name:"Blue Top"})).toBeVisible();
  125 |      })
  126 | 
  127 |      test("Testing checking the total amount in case of multiple items in cart at checkout",async({page})=>{
  128 |         await page.getByRole("link",{name:"Login"}).click();
  129 |         await checkout.login();
  130 |         await page.getByRole("link",{name: "View Product"}).nth(6).click();
> 131 |         await page.getByRole("button",{name:"Add to cart"}).click();
      |                                                             ^ Error: locator.click: Test timeout of 30000ms exceeded.
  132 |         await checkout.continue();
  133 |         await checkout.cart();
  134 |         await checkout.checkoutbtn();
  135 |         await expect(page.locator(".cart_total_price").nth(2)).toBeVisible();//toHaveText(/1500/);
  136 |      });
  137 | 
  138 |      test("Testing the comment textarea input data before placing order",async({page})=>{
  139 |         await page.getByRole("link", { name: "Login" }).click();
  140 |         await checkout.login();
  141 |         await checkout.cart();
  142 |         await checkout.checkoutbtn();
  143 |         const textarea = page.locator("textarea[name='message']");
  144 |         await textarea.fill("Handle with care");
  145 |         await expect(textarea).toHaveValue("Handle with care");
  146 |      })
  147 | 
  148 | });
```