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

Locator: getByRole('heading', { name: 'Women - Dress Products' })
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for getByRole('heading', { name: 'Women - Dress Products' })

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link [ref=e8] [cursor=pointer]:
        - /url: /
        - img [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e41]:
    - list [ref=e42]:
      - listitem [ref=e43] [cursor=pointer]
      - listitem [ref=e44] [cursor=pointer]
      - listitem [ref=e45] [cursor=pointer]
    - generic [ref=e46]:
      - generic [ref=e47]:
        - heading [level=1] [ref=e48]: AutomationExercise
        - heading [level=2] [ref=e49]: Full-Fledged practice website for Automation Engineers
        - paragraph [ref=e50]: All QA engineers can use this website for automation practice and API testing either they are at beginner or advance level. This is for everybody to help them brush up their automation skills.
        - link [ref=e51] [cursor=pointer]:
          - /url: /test_cases
          - button [ref=e52]: Test Cases
        - link [ref=e53] [cursor=pointer]:
          - /url: /api_list
          - button [ref=e54]: APIs list for practice
      - img [ref=e56]
      - generic [ref=e57]:
        - generic [ref=e58]:
          - heading [level=1] [ref=e59]: AutomationExercise
          - heading [level=2] [ref=e60]: Full-Fledged practice website for Automation Engineers
          - paragraph [ref=e61]: All QA engineers can use this website for automation practice and API testing either they are at beginner or advance level. This is for everybody to help them brush up their automation skills.
          - link [ref=e62] [cursor=pointer]:
            - /url: /test_cases
            - button [ref=e63]: Test Cases
          - link [ref=e64] [cursor=pointer]:
            - /url: /api_list
            - button [ref=e65]: APIs list for practice
        - img [ref=e67]
    - link [ref=e68] [cursor=pointer]:
      - /url: "#slider-carousel"
      - generic [ref=e69]: 
    - link [ref=e70] [cursor=pointer]:
      - /url: "#slider-carousel"
      - generic [ref=e71]: 
  - generic [ref=e74]:
    - generic [ref=e76]:
      - heading [level=2] [ref=e77]: Category
      - generic [ref=e78]:
        - generic [ref=e79]:
          - heading [level=4] [ref=e81]:
            - link [ref=e82] [cursor=pointer]:
              - /url: "#Women"
              - generic [ref=e84]: 
              - text: Women
          - list [ref=e87]:
            - listitem [ref=e88]:
              - link [ref=e89] [cursor=pointer]:
                - /url: /category_products/1
                - text: Dress
            - listitem [ref=e90]:
              - link [ref=e91] [cursor=pointer]:
                - /url: /category_products/2
                - text: Tops
            - listitem [ref=e92]:
              - link [ref=e93] [cursor=pointer]:
                - /url: /category_products/7
                - text: Saree
        - heading [level=4] [ref=e96]:
          - link [ref=e97] [cursor=pointer]:
            - /url: "#Men"
            - generic [ref=e99]: 
            - text: Men
        - heading [level=4] [ref=e102]:
          - link [ref=e103] [cursor=pointer]:
            - /url: "#Kids"
            - generic [ref=e105]: 
            - text: Kids
      - insertion [ref=e107]:
        - iframe [ref=e109]:
          
      - generic [ref=e110]:
        - heading [level=2] [ref=e111]: Brands
        - list [ref=e113]:
          - listitem [ref=e114]:
            - link [ref=e115] [cursor=pointer]:
              - /url: /brand_products/Polo
              - generic [ref=e116]: (6)
              - text: Polo
          - listitem [ref=e117]:
            - link [ref=e118] [cursor=pointer]:
              - /url: /brand_products/H&M
              - generic [ref=e119]: (5)
              - text: H&M
          - listitem [ref=e120]:
            - link [ref=e121] [cursor=pointer]:
              - /url: /brand_products/Madame
              - generic [ref=e122]: (5)
              - text: Madame
          - listitem [ref=e123]:
            - link [ref=e124] [cursor=pointer]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=e125]: (3)
              - text: Mast & Harbour
          - listitem [ref=e126]:
            - link [ref=e127] [cursor=pointer]:
              - /url: /brand_products/Babyhug
              - generic [ref=e128]: (4)
              - text: Babyhug
          - listitem [ref=e129]:
            - link [ref=e130] [cursor=pointer]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=e131]: (3)
              - text: Allen Solly Junior
          - listitem [ref=e132]:
            - link [ref=e133] [cursor=pointer]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=e134]: (3)
              - text: Kookie Kids
          - listitem [ref=e135]:
            - link [ref=e136] [cursor=pointer]:
              - /url: /brand_products/Biba
              - generic [ref=e137]: (5)
              - text: Biba
    - generic [ref=e138]:
      - generic [ref=e139]:
        - heading [level=2] [ref=e140]: Features Items
        - generic [ref=e142]:
          - generic [ref=e143]:
            - generic [ref=e144]:
              - img [ref=e145]
              - heading [level=2] [ref=e146]: Rs. 500
              - paragraph [ref=e147]: Blue Top
              - generic [ref=e148] [cursor=pointer]:
                - generic [ref=e149]: 
                - text: Add to cart
            - generic [ref=e150]:
              - heading [level=2] [ref=e151]: Rs. 500
              - paragraph [ref=e152]: Blue Top
              - generic [ref=e153] [cursor=pointer]:
                - generic [ref=e154]: 
                - text: Add to cart
          - list [ref=e156]:
            - listitem [ref=e157]:
              - link [ref=e158] [cursor=pointer]:
                - /url: /product_details/1
                - generic [ref=e159]: 
                - text: View Product
        - generic [ref=e161]:
          - generic [ref=e162]:
            - generic [ref=e163]:
              - img [ref=e164]
              - heading [level=2] [ref=e165]: Rs. 400
              - paragraph [ref=e166]: Men Tshirt
              - generic [ref=e167] [cursor=pointer]:
                - generic [ref=e168]: 
                - text: Add to cart
            - generic [ref=e169]:
              - heading [level=2] [ref=e170]: Rs. 400
              - paragraph [ref=e171]: Men Tshirt
              - generic [ref=e172] [cursor=pointer]:
                - generic [ref=e173]: 
                - text: Add to cart
          - list [ref=e175]:
            - listitem [ref=e176]:
              - link [ref=e177] [cursor=pointer]:
                - /url: /product_details/2
                - generic [ref=e178]: 
                - text: View Product
        - generic [ref=e180]:
          - generic [ref=e181]:
            - generic [ref=e182]:
              - img [ref=e183]
              - heading [level=2] [ref=e184]: Rs. 1000
              - paragraph [ref=e185]: Sleeveless Dress
              - generic [ref=e186] [cursor=pointer]:
                - generic [ref=e187]: 
                - text: Add to cart
            - generic [ref=e188]:
              - heading [level=2] [ref=e189]: Rs. 1000
              - paragraph [ref=e190]: Sleeveless Dress
              - generic [ref=e191] [cursor=pointer]:
                - generic [ref=e192]: 
                - text: Add to cart
          - list [ref=e194]:
            - listitem [ref=e195]:
              - link [ref=e196] [cursor=pointer]:
                - /url: /product_details/3
                - generic [ref=e197]: 
                - text: View Product
        - generic [ref=e199]:
          - generic [ref=e200]:
            - generic [ref=e201]:
              - img [ref=e202]
              - heading [level=2] [ref=e203]: Rs. 1500
              - paragraph [ref=e204]: Stylish Dress
              - generic [ref=e205] [cursor=pointer]:
                - generic [ref=e206]: 
                - text: Add to cart
            - generic [ref=e207]:
              - heading [level=2] [ref=e208]: Rs. 1500
              - paragraph [ref=e209]: Stylish Dress
              - generic [ref=e210] [cursor=pointer]:
                - generic [ref=e211]: 
                - text: Add to cart
          - list [ref=e213]:
            - listitem [ref=e214]:
              - link [ref=e215] [cursor=pointer]:
                - /url: /product_details/4
                - generic [ref=e216]: 
                - text: View Product
        - generic [ref=e218]:
          - generic [ref=e219]:
            - generic [ref=e220]:
              - img [ref=e221]
              - heading [level=2] [ref=e222]: Rs. 600
              - paragraph [ref=e223]: Winter Top
              - generic [ref=e224] [cursor=pointer]:
                - generic [ref=e225]: 
                - text: Add to cart
            - generic [ref=e226]:
              - heading [level=2] [ref=e227]: Rs. 600
              - paragraph [ref=e228]: Winter Top
              - generic [ref=e229] [cursor=pointer]:
                - generic [ref=e230]: 
                - text: Add to cart
          - list [ref=e232]:
            - listitem [ref=e233]:
              - link [ref=e234] [cursor=pointer]:
                - /url: /product_details/5
                - generic [ref=e235]: 
                - text: View Product
        - generic [ref=e237]:
          - generic [ref=e238]:
            - generic [ref=e239]:
              - img [ref=e240]
              - heading [level=2] [ref=e241]: Rs. 400
              - paragraph [ref=e242]: Summer White Top
              - generic [ref=e243] [cursor=pointer]:
                - generic [ref=e244]: 
                - text: Add to cart
            - generic [ref=e245]:
              - heading [level=2] [ref=e246]: Rs. 400
              - paragraph [ref=e247]: Summer White Top
              - generic [ref=e248] [cursor=pointer]:
                - generic [ref=e249]: 
                - text: Add to cart
          - list [ref=e251]:
            - listitem [ref=e252]:
              - link [ref=e253] [cursor=pointer]:
                - /url: /product_details/6
                - generic [ref=e254]: 
                - text: View Product
        - generic [ref=e256]:
          - generic [ref=e257]:
            - generic [ref=e258]:
              - img [ref=e259]
              - heading [level=2] [ref=e260]: Rs. 1000
              - paragraph [ref=e261]: Madame Top For Women
              - generic [ref=e262] [cursor=pointer]:
                - generic [ref=e263]: 
                - text: Add to cart
            - generic [ref=e264]:
              - heading [level=2] [ref=e265]: Rs. 1000
              - paragraph [ref=e266]: Madame Top For Women
              - generic [ref=e267] [cursor=pointer]:
                - generic [ref=e268]: 
                - text: Add to cart
          - list [ref=e270]:
            - listitem [ref=e271]:
              - link [ref=e272] [cursor=pointer]:
                - /url: /product_details/7
                - generic [ref=e273]: 
                - text: View Product
        - generic [ref=e275]:
          - generic [ref=e276]:
            - generic [ref=e277]:
              - img [ref=e278]
              - heading [level=2] [ref=e279]: Rs. 700
              - paragraph [ref=e280]: Fancy Green Top
              - generic [ref=e281] [cursor=pointer]:
                - generic [ref=e282]: 
                - text: Add to cart
            - generic [ref=e283]:
              - heading [level=2] [ref=e284]: Rs. 700
              - paragraph [ref=e285]: Fancy Green Top
              - generic [ref=e286] [cursor=pointer]:
                - generic [ref=e287]: 
                - text: Add to cart
          - list [ref=e289]:
            - listitem [ref=e290]:
              - link [ref=e291] [cursor=pointer]:
                - /url: /product_details/8
                - generic [ref=e292]: 
                - text: View Product
        - generic [ref=e294]:
          - generic [ref=e295]:
            - generic [ref=e296]:
              - img [ref=e297]
              - heading [level=2] [ref=e298]: Rs. 499
              - paragraph [ref=e299]: Sleeves Printed Top - White
              - generic [ref=e300] [cursor=pointer]:
                - generic [ref=e301]: 
                - text: Add to cart
            - generic [ref=e302]:
              - heading [level=2] [ref=e303]: Rs. 499
              - paragraph [ref=e304]: Sleeves Printed Top - White
              - generic [ref=e305] [cursor=pointer]:
                - generic [ref=e306]: 
                - text: Add to cart
          - list [ref=e308]:
            - listitem [ref=e309]:
              - link [ref=e310] [cursor=pointer]:
                - /url: /product_details/11
                - generic [ref=e311]: 
                - text: View Product
        - generic [ref=e313]:
          - generic [ref=e314]:
            - generic [ref=e315]:
              - img [ref=e316]
              - heading [level=2] [ref=e317]: Rs. 359
              - paragraph [ref=e318]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=e319] [cursor=pointer]:
                - generic [ref=e320]: 
                - text: Add to cart
            - generic [ref=e321]:
              - heading [level=2] [ref=e322]: Rs. 359
              - paragraph [ref=e323]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=e324] [cursor=pointer]:
                - generic [ref=e325]: 
                - text: Add to cart
          - list [ref=e327]:
            - listitem [ref=e328]:
              - link [ref=e329] [cursor=pointer]:
                - /url: /product_details/12
                - generic [ref=e330]: 
                - text: View Product
        - generic [ref=e332]:
          - generic [ref=e333]:
            - generic [ref=e334]:
              - img [ref=e335]
              - heading [level=2] [ref=e336]: Rs. 278
              - paragraph [ref=e337]: Frozen Tops For Kids
              - generic [ref=e338] [cursor=pointer]:
                - generic [ref=e339]: 
                - text: Add to cart
            - generic [ref=e340]:
              - heading [level=2] [ref=e341]: Rs. 278
              - paragraph [ref=e342]: Frozen Tops For Kids
              - generic [ref=e343] [cursor=pointer]:
                - generic [ref=e344]: 
                - text: Add to cart
          - list [ref=e346]:
            - listitem [ref=e347]:
              - link [ref=e348] [cursor=pointer]:
                - /url: /product_details/13
                - generic [ref=e349]: 
                - text: View Product
        - generic [ref=e351]:
          - generic [ref=e352]:
            - generic [ref=e353]:
              - img [ref=e354]
              - heading [level=2] [ref=e355]: Rs. 679
              - paragraph [ref=e356]: Full Sleeves Top Cherry - Pink
              - generic [ref=e357] [cursor=pointer]:
                - generic [ref=e358]: 
                - text: Add to cart
            - generic [ref=e359]:
              - heading [level=2] [ref=e360]: Rs. 679
              - paragraph [ref=e361]: Full Sleeves Top Cherry - Pink
              - generic [ref=e362] [cursor=pointer]:
                - generic [ref=e363]: 
                - text: Add to cart
          - list [ref=e365]:
            - listitem [ref=e366]:
              - link [ref=e367] [cursor=pointer]:
                - /url: /product_details/14
                - generic [ref=e368]: 
                - text: View Product
        - generic [ref=e370]:
          - generic [ref=e371]:
            - generic [ref=e372]:
              - img [ref=e373]
              - heading [level=2] [ref=e374]: Rs. 315
              - paragraph [ref=e375]: Printed Off Shoulder Top - White
              - generic [ref=e376] [cursor=pointer]:
                - generic [ref=e377]: 
                - text: Add to cart
            - generic [ref=e378]:
              - heading [level=2] [ref=e379]: Rs. 315
              - paragraph [ref=e380]: Printed Off Shoulder Top - White
              - generic [ref=e381] [cursor=pointer]:
                - generic [ref=e382]: 
                - text: Add to cart
          - list [ref=e384]:
            - listitem [ref=e385]:
              - link [ref=e386] [cursor=pointer]:
                - /url: /product_details/15
                - generic [ref=e387]: 
                - text: View Product
        - generic [ref=e389]:
          - generic [ref=e390]:
            - generic [ref=e391]:
              - img [ref=e392]
              - heading [level=2] [ref=e393]: Rs. 478
              - paragraph [ref=e394]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e395] [cursor=pointer]:
                - generic [ref=e396]: 
                - text: Add to cart
            - generic [ref=e397]:
              - heading [level=2] [ref=e398]: Rs. 478
              - paragraph [ref=e399]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e400] [cursor=pointer]:
                - generic [ref=e401]: 
                - text: Add to cart
          - list [ref=e403]:
            - listitem [ref=e404]:
              - link [ref=e405] [cursor=pointer]:
                - /url: /product_details/16
                - generic [ref=e406]: 
                - text: View Product
        - generic [ref=e408]:
          - generic [ref=e409]:
            - generic [ref=e410]:
              - img [ref=e411]
              - heading [level=2] [ref=e412]: Rs. 1200
              - paragraph [ref=e413]: Little Girls Mr. Panda Shirt
              - generic [ref=e414] [cursor=pointer]:
                - generic [ref=e415]: 
                - text: Add to cart
            - generic [ref=e416]:
              - heading [level=2] [ref=e417]: Rs. 1200
              - paragraph [ref=e418]: Little Girls Mr. Panda Shirt
              - generic [ref=e419] [cursor=pointer]:
                - generic [ref=e420]: 
                - text: Add to cart
          - list [ref=e422]:
            - listitem [ref=e423]:
              - link [ref=e424] [cursor=pointer]:
                - /url: /product_details/18
                - generic [ref=e425]: 
                - text: View Product
        - generic [ref=e427]:
          - generic [ref=e428]:
            - generic [ref=e429]:
              - img [ref=e430]
              - heading [level=2] [ref=e431]: Rs. 1050
              - paragraph [ref=e432]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=e433] [cursor=pointer]:
                - generic [ref=e434]: 
                - text: Add to cart
            - generic [ref=e435]:
              - heading [level=2] [ref=e436]: Rs. 1050
              - paragraph [ref=e437]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=e438] [cursor=pointer]:
                - generic [ref=e439]: 
                - text: Add to cart
          - list [ref=e441]:
            - listitem [ref=e442]:
              - link [ref=e443] [cursor=pointer]:
                - /url: /product_details/19
                - generic [ref=e444]: 
                - text: View Product
        - generic [ref=e446]:
          - generic [ref=e447]:
            - generic [ref=e448]:
              - img [ref=e449]
              - heading [level=2] [ref=e450]: Rs. 1190
              - paragraph [ref=e451]: Cotton Mull Embroidered Dress
              - generic [ref=e452] [cursor=pointer]:
                - generic [ref=e453]: 
                - text: Add to cart
            - generic [ref=e454]:
              - heading [level=2] [ref=e455]: Rs. 1190
              - paragraph [ref=e456]: Cotton Mull Embroidered Dress
              - generic [ref=e457] [cursor=pointer]:
                - generic [ref=e458]: 
                - text: Add to cart
          - list [ref=e460]:
            - listitem [ref=e461]:
              - link [ref=e462] [cursor=pointer]:
                - /url: /product_details/20
                - generic [ref=e463]: 
                - text: View Product
        - generic [ref=e465]:
          - generic [ref=e466]:
            - generic [ref=e467]:
              - img [ref=e468]
              - heading [level=2] [ref=e469]: Rs. 1530
              - paragraph [ref=e470]: Blue Cotton Indie Mickey Dress
              - generic [ref=e471] [cursor=pointer]:
                - generic [ref=e472]: 
                - text: Add to cart
            - generic [ref=e473]:
              - heading [level=2] [ref=e474]: Rs. 1530
              - paragraph [ref=e475]: Blue Cotton Indie Mickey Dress
              - generic [ref=e476] [cursor=pointer]:
                - generic [ref=e477]: 
                - text: Add to cart
          - list [ref=e479]:
            - listitem [ref=e480]:
              - link [ref=e481] [cursor=pointer]:
                - /url: /product_details/21
                - generic [ref=e482]: 
                - text: View Product
        - generic [ref=e484]:
          - generic [ref=e485]:
            - generic [ref=e486]:
              - img [ref=e487]
              - heading [level=2] [ref=e488]: Rs. 1600
              - paragraph [ref=e489]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=e490] [cursor=pointer]:
                - generic [ref=e491]: 
                - text: Add to cart
            - generic [ref=e492]:
              - heading [level=2] [ref=e493]: Rs. 1600
              - paragraph [ref=e494]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=e495] [cursor=pointer]:
                - generic [ref=e496]: 
                - text: Add to cart
          - list [ref=e498]:
            - listitem [ref=e499]:
              - link [ref=e500] [cursor=pointer]:
                - /url: /product_details/22
                - generic [ref=e501]: 
                - text: View Product
        - generic [ref=e503]:
          - generic [ref=e504]:
            - generic [ref=e505]:
              - img [ref=e506]
              - heading [level=2] [ref=e507]: Rs. 1100
              - paragraph [ref=e508]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e509] [cursor=pointer]:
                - generic [ref=e510]: 
                - text: Add to cart
            - generic [ref=e511]:
              - heading [level=2] [ref=e512]: Rs. 1100
              - paragraph [ref=e513]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e514] [cursor=pointer]:
                - generic [ref=e515]: 
                - text: Add to cart
          - list [ref=e517]:
            - listitem [ref=e518]:
              - link [ref=e519] [cursor=pointer]:
                - /url: /product_details/23
                - generic [ref=e520]: 
                - text: View Product
        - generic [ref=e522]:
          - generic [ref=e523]:
            - generic [ref=e524]:
              - img [ref=e525]
              - heading [level=2] [ref=e526]: Rs. 849
              - paragraph [ref=e527]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e528] [cursor=pointer]:
                - generic [ref=e529]: 
                - text: Add to cart
            - generic [ref=e530]:
              - heading [level=2] [ref=e531]: Rs. 849
              - paragraph [ref=e532]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e533] [cursor=pointer]:
                - generic [ref=e534]: 
                - text: Add to cart
          - list [ref=e536]:
            - listitem [ref=e537]:
              - link [ref=e538] [cursor=pointer]:
                - /url: /product_details/24
                - generic [ref=e539]: 
                - text: View Product
        - generic [ref=e541]:
          - generic [ref=e542]:
            - generic [ref=e543]:
              - img [ref=e544]
              - heading [level=2] [ref=e545]: Rs. 1299
              - paragraph [ref=e546]: Pure Cotton V-Neck T-Shirt
              - generic [ref=e547] [cursor=pointer]:
                - generic [ref=e548]: 
                - text: Add to cart
            - generic [ref=e549]:
              - heading [level=2] [ref=e550]: Rs. 1299
              - paragraph [ref=e551]: Pure Cotton V-Neck T-Shirt
              - generic [ref=e552] [cursor=pointer]:
                - generic [ref=e553]: 
                - text: Add to cart
          - list [ref=e555]:
            - listitem [ref=e556]:
              - link [ref=e557] [cursor=pointer]:
                - /url: /product_details/28
                - generic [ref=e558]: 
                - text: View Product
        - generic [ref=e560]:
          - generic [ref=e561]:
            - generic [ref=e562]:
              - img [ref=e563]
              - heading [level=2] [ref=e564]: Rs. 1000
              - paragraph [ref=e565]: Green Side Placket Detail T-Shirt
              - generic [ref=e566] [cursor=pointer]:
                - generic [ref=e567]: 
                - text: Add to cart
            - generic [ref=e568]:
              - heading [level=2] [ref=e569]: Rs. 1000
              - paragraph [ref=e570]: Green Side Placket Detail T-Shirt
              - generic [ref=e571] [cursor=pointer]:
                - generic [ref=e572]: 
                - text: Add to cart
          - list [ref=e574]:
            - listitem [ref=e575]:
              - link [ref=e576] [cursor=pointer]:
                - /url: /product_details/29
                - generic [ref=e577]: 
                - text: View Product
        - generic [ref=e579]:
          - generic [ref=e580]:
            - generic [ref=e581]:
              - img [ref=e582]
              - heading [level=2] [ref=e583]: Rs. 1500
              - paragraph [ref=e584]: Premium Polo T-Shirts
              - generic [ref=e585] [cursor=pointer]:
                - generic [ref=e586]: 
                - text: Add to cart
            - generic [ref=e587]:
              - heading [level=2] [ref=e588]: Rs. 1500
              - paragraph [ref=e589]: Premium Polo T-Shirts
              - generic [ref=e590] [cursor=pointer]:
                - generic [ref=e591]: 
                - text: Add to cart
          - list [ref=e593]:
            - listitem [ref=e594]:
              - link [ref=e595] [cursor=pointer]:
                - /url: /product_details/30
                - generic [ref=e596]: 
                - text: View Product
        - generic [ref=e598]:
          - generic [ref=e599]:
            - generic [ref=e600]:
              - img [ref=e601]
              - heading [level=2] [ref=e602]: Rs. 850
              - paragraph [ref=e603]: Pure Cotton Neon Green Tshirt
              - generic [ref=e604] [cursor=pointer]:
                - generic [ref=e605]: 
                - text: Add to cart
            - generic [ref=e606]:
              - heading [level=2] [ref=e607]: Rs. 850
              - paragraph [ref=e608]: Pure Cotton Neon Green Tshirt
              - generic [ref=e609] [cursor=pointer]:
                - generic [ref=e610]: 
                - text: Add to cart
          - list [ref=e612]:
            - listitem [ref=e613]:
              - link [ref=e614] [cursor=pointer]:
                - /url: /product_details/31
                - generic [ref=e615]: 
                - text: View Product
        - generic [ref=e617]:
          - generic [ref=e618]:
            - generic [ref=e619]:
              - img [ref=e620]
              - heading [level=2] [ref=e621]: Rs. 799
              - paragraph [ref=e622]: Soft Stretch Jeans
              - generic [ref=e623] [cursor=pointer]:
                - generic [ref=e624]: 
                - text: Add to cart
            - generic [ref=e625]:
              - heading [level=2] [ref=e626]: Rs. 799
              - paragraph [ref=e627]: Soft Stretch Jeans
              - generic [ref=e628] [cursor=pointer]:
                - generic [ref=e629]: 
                - text: Add to cart
          - list [ref=e631]:
            - listitem [ref=e632]:
              - link [ref=e633] [cursor=pointer]:
                - /url: /product_details/33
                - generic [ref=e634]: 
                - text: View Product
        - generic [ref=e636]:
          - generic [ref=e637]:
            - generic [ref=e638]:
              - img [ref=e639]
              - heading [level=2] [ref=e640]: Rs. 1200
              - paragraph [ref=e641]: Regular Fit Straight Jeans
              - generic [ref=e642] [cursor=pointer]:
                - generic [ref=e643]: 
                - text: Add to cart
            - generic [ref=e644]:
              - heading [level=2] [ref=e645]: Rs. 1200
              - paragraph [ref=e646]: Regular Fit Straight Jeans
              - generic [ref=e647] [cursor=pointer]:
                - generic [ref=e648]: 
                - text: Add to cart
          - list [ref=e650]:
            - listitem [ref=e651]:
              - link [ref=e652] [cursor=pointer]:
                - /url: /product_details/35
                - generic [ref=e653]: 
                - text: View Product
        - generic [ref=e655]:
          - generic [ref=e656]:
            - generic [ref=e657]:
              - img [ref=e658]
              - heading [level=2] [ref=e659]: Rs. 1400
              - paragraph [ref=e660]: Grunt Blue Slim Fit Jeans
              - generic [ref=e661] [cursor=pointer]:
                - generic [ref=e662]: 
                - text: Add to cart
            - generic [ref=e663]:
              - heading [level=2] [ref=e664]: Rs. 1400
              - paragraph [ref=e665]: Grunt Blue Slim Fit Jeans
              - generic [ref=e666] [cursor=pointer]:
                - generic [ref=e667]: 
                - text: Add to cart
          - list [ref=e669]:
            - listitem [ref=e670]:
              - link [ref=e671] [cursor=pointer]:
                - /url: /product_details/37
                - generic [ref=e672]: 
                - text: View Product
        - generic [ref=e674]:
          - generic [ref=e675]:
            - generic [ref=e676]:
              - img [ref=e677]
              - heading [level=2] [ref=e678]: Rs. 2300
              - paragraph [ref=e679]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e680] [cursor=pointer]:
                - generic [ref=e681]: 
                - text: Add to cart
            - generic [ref=e682]:
              - heading [level=2] [ref=e683]: Rs. 2300
              - paragraph [ref=e684]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e685] [cursor=pointer]:
                - generic [ref=e686]: 
                - text: Add to cart
          - list [ref=e688]:
            - listitem [ref=e689]:
              - link [ref=e690] [cursor=pointer]:
                - /url: /product_details/38
                - generic [ref=e691]: 
                - text: View Product
        - generic [ref=e693]:
          - generic [ref=e694]:
            - generic [ref=e695]:
              - img [ref=e696]
              - heading [level=2] [ref=e697]: Rs. 3000
              - paragraph [ref=e698]: Cotton Silk Hand Block Print Saree
              - generic [ref=e699] [cursor=pointer]:
                - generic [ref=e700]: 
                - text: Add to cart
            - generic [ref=e701]:
              - heading [level=2] [ref=e702]: Rs. 3000
              - paragraph [ref=e703]: Cotton Silk Hand Block Print Saree
              - generic [ref=e704] [cursor=pointer]:
                - generic [ref=e705]: 
                - text: Add to cart
          - list [ref=e707]:
            - listitem [ref=e708]:
              - link [ref=e709] [cursor=pointer]:
                - /url: /product_details/39
                - generic [ref=e710]: 
                - text: View Product
        - generic [ref=e712]:
          - generic [ref=e713]:
            - generic [ref=e714]:
              - img [ref=e715]
              - heading [level=2] [ref=e716]: Rs. 3500
              - paragraph [ref=e717]: Rust Red Linen Saree
              - generic [ref=e718] [cursor=pointer]:
                - generic [ref=e719]: 
                - text: Add to cart
            - generic [ref=e720]:
              - heading [level=2] [ref=e721]: Rs. 3500
              - paragraph [ref=e722]: Rust Red Linen Saree
              - generic [ref=e723] [cursor=pointer]:
                - generic [ref=e724]: 
                - text: Add to cart
          - list [ref=e726]:
            - listitem [ref=e727]:
              - link [ref=e728] [cursor=pointer]:
                - /url: /product_details/40
                - generic [ref=e729]: 
                - text: View Product
        - generic [ref=e731]:
          - generic [ref=e732]:
            - generic [ref=e733]:
              - img [ref=e734]
              - heading [level=2] [ref=e735]: Rs. 5000
              - paragraph [ref=e736]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e737] [cursor=pointer]:
                - generic [ref=e738]: 
                - text: Add to cart
            - generic [ref=e739]:
              - heading [level=2] [ref=e740]: Rs. 5000
              - paragraph [ref=e741]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e742] [cursor=pointer]:
                - generic [ref=e743]: 
                - text: Add to cart
          - list [ref=e745]:
            - listitem [ref=e746]:
              - link [ref=e747] [cursor=pointer]:
                - /url: /product_details/41
                - generic [ref=e748]: 
                - text: View Product
        - generic [ref=e750]:
          - generic [ref=e751]:
            - generic [ref=e752]:
              - img [ref=e753]
              - heading [level=2] [ref=e754]: Rs. 1400
              - paragraph [ref=e755]: Lace Top For Women
              - generic [ref=e756] [cursor=pointer]:
                - generic [ref=e757]: 
                - text: Add to cart
            - generic [ref=e758]:
              - heading [level=2] [ref=e759]: Rs. 1400
              - paragraph [ref=e760]: Lace Top For Women
              - generic [ref=e761] [cursor=pointer]:
                - generic [ref=e762]: 
                - text: Add to cart
          - list [ref=e764]:
            - listitem [ref=e765]:
              - link [ref=e766] [cursor=pointer]:
                - /url: /product_details/42
                - generic [ref=e767]: 
                - text: View Product
        - generic [ref=e769]:
          - generic [ref=e770]:
            - generic [ref=e771]:
              - img [ref=e772]
              - heading [level=2] [ref=e773]: Rs. 1389
              - paragraph [ref=e774]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=e775] [cursor=pointer]:
                - generic [ref=e776]: 
                - text: Add to cart
            - generic [ref=e777]:
              - heading [level=2] [ref=e778]: Rs. 1389
              - paragraph [ref=e779]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=e780] [cursor=pointer]:
                - generic [ref=e781]: 
                - text: Add to cart
          - list [ref=e783]:
            - listitem [ref=e784]:
              - link [ref=e785] [cursor=pointer]:
                - /url: /product_details/43
                - generic [ref=e786]: 
                - text: View Product
      - generic [ref=e787]:
        - heading [level=2] [ref=e788]: recommended items
        - generic [ref=e789]:
          - generic [ref=e790]:
            - generic [ref=e794]:
              - img [ref=e795]
              - heading [level=2] [ref=e796]: Rs. 500
              - paragraph [ref=e797]: Blue Top
              - generic [ref=e798] [cursor=pointer]:
                - generic [ref=e799]: 
                - text: Add to cart
            - generic [ref=e803]:
              - img [ref=e804]
              - heading [level=2] [ref=e805]: Rs. 400
              - paragraph [ref=e806]: Men Tshirt
              - generic [ref=e807] [cursor=pointer]:
                - generic [ref=e808]: 
                - text: Add to cart
            - generic [ref=e812]:
              - img [ref=e813]
              - heading [level=2] [ref=e814]: Rs. 1000
              - paragraph [ref=e815]: Rs. 1000
              - generic [ref=e816] [cursor=pointer]:
                - generic [ref=e817]: 
                - text: Add to cart
            - generic [ref=e818]:
              - generic [ref=e822]:
                - img [ref=e823]
                - heading [level=2] [ref=e824]: Rs. 1500
                - paragraph [ref=e825]: Stylish Dress
                - generic [ref=e826] [cursor=pointer]:
                  - generic [ref=e827]: 
                  - text: Add to cart
              - generic [ref=e831]:
                - img [ref=e832]
                - heading [level=2] [ref=e833]: Rs. 600
                - paragraph [ref=e834]: Winter Top
                - generic [ref=e835] [cursor=pointer]:
                  - generic [ref=e836]: 
                  - text: Add to cart
              - generic [ref=e840]:
                - img [ref=e841]
                - heading [level=2] [ref=e842]: Rs. 400
                - paragraph [ref=e843]: Summer White Top
                - generic [ref=e844] [cursor=pointer]:
                  - generic [ref=e845]: 
                  - text: Add to cart
          - link [ref=e846] [cursor=pointer]:
            - /url: "#recommended-item-carousel"
            - generic [ref=e847]: 
          - link [ref=e848] [cursor=pointer]:
            - /url: "#recommended-item-carousel"
            - generic [ref=e849]: 
  - insertion [ref=e851]
  - contentinfo [ref=e853]:
    - generic [ref=e858]:
      - heading [level=2] [ref=e859]: Subscription
      - generic [ref=e860]:
        - textbox [ref=e861]:
          - /placeholder: Your email address
        - button [ref=e862] [cursor=pointer]:
          - generic [ref=e863]: 
        - paragraph [ref=e864]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=e868]: Copyright © 2021 All rights reserved
  - link [ref=e869] [cursor=pointer]:
    - /url: "#top"
    - generic [ref=e870]: 
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
> 21  |        await expect(page.getByRole("heading",{name:"Women - Dress Products"})).toBeVisible();
      |                                                                                ^ Error: expect(locator).toBeVisible() failed
  22  |        await expect(page.getByText("Sleeveless Dress")).toBeTruthy();
  23  |        await expect(page.getByText("Stylish Dress")).toBeTruthy();
  24  |        await expect(page.getByText("Rose Pink Embroidered Maxi Dress")).toBeTruthy();
  25  |     });
  26  | 
  27  |     test("Testing clicking on Men takes us to men dresses",async({page})=>{
  28  |       await page.getByRole("link",{name:"Men"}).nth(1).click();
  29  |       await page.getByRole("link",{name:"Tshirts"}).click();
  30  |       await expect(page.getByRole("heading",{name:"Men - Tshirts Products"})).toBeVisible();
  31  |       await expect(page.getByText("Men Tshirt")).toBeTruthy();
  32  |       await expect(page.getByText("Pure Cotton V-Neck T-Shirt")).toBeTruthy();
  33  |       await expect(page.getByText("Green Side Placket Detail T-Shirt")).toBeTruthy();
  34  |       await expect(page.getByText("Premium Polo T-Shirts")).toBeTruthy();
  35  |       await expect(page.getByText("Pure Cotton Neon Green Tshirt")).toBeTruthy();
  36  |       await expect(page.getByText("Graphic Design Men T Shirt-Blue")).toBeTruthy();
  37  |     });
  38  | 
  39  | 
  40  |     test("Testing the categories slidbar expands and collapses options dynamically",async({page})=>{
  41  |       const kidsCategory = page.locator('#accordian').getByRole("link", { name: "Kids" });
  42  |       await kidsCategory.first().click();
  43  |       const dressSubCategory = page.getByRole("link", { name: "Dress" });
  44  |       await expect(dressSubCategory).toBeVisible();
  45  |       await kidsCategory.first().click();
  46  |       await expect(dressSubCategory).not.toBeVisible();
  47  |     });
  48  | 
  49  |     test("Testing the brand filter navigates to that brand products page",async({page})=>{
  50  |       await page.getByRole("link", { name: "Products" }).click();
  51  |       await page.getByRole("link", { name: "Madame" }).click();
  52  |       await expect(page.getByRole("heading", { name: "Brand - Madame Products" })).toBeVisible();
  53  |       await expect(page).toHaveURL("https://automationexercise.com/brand_products/Madame");
  54  |     });
  55  | 
  56  |     test("Testing the image slider controls change home banner contexts",async({page})=>{
  57  |       const firstBanner = page.locator('.item.active img').first();
  58  |       await expect(firstBanner).toBeVisible();
  59  |       const firstImgSrc = await firstBanner.getAttribute('src');
  60  |       await page.locator('.fa-angle-right').first().click();
  61  |       await page.waitForTimeout(1000);
  62  |       const secondBanner = page.locator('.item.active img').first();
  63  |       const secondImgSrc = await secondBanner.getAttribute('src');
  64  |       expect(firstImgSrc).not.toBe(secondImgSrc);
  65  |     });
  66  | 
  67  |     test("Testing the buttom scroll up arrow button returns to the header",async({page})=>{
  68  |       await page.getByRole("link", { name: "Products" }).click();
  69  |       const subscriptionHeading = page.getByRole("heading", { name: "Subscription" });
  70  |       await subscriptionHeading.scrollIntoViewIfNeeded(); 
  71  |       await expect(subscriptionHeading).toBeVisible();
  72  |       const scrollUpArrow = page.locator("#scrollUp");
  73  |       await expect(scrollUpArrow).toBeVisible();
  74  |       await scrollUpArrow.click();
  75  |       await expect(page.getByRole("link", { name: "Home" })).toBeInViewport();
  76  |     });
  77  | 
  78  |     test("Testing the view product displays the product details without missing any data",async({page})=>{
  79  |       await page.getByRole("link", { name: "Products" }).click();
  80  |       await page.getByRole("link", { name: "View Product" }).nth(2).click();
  81  |       await expect(page.getByRole("heading",{name:"Sleeveless Dress"})).toBeVisible();
  82  |       await expect(page.getByText("Category: Women > Dress")).toBeVisible();
  83  |       await expect(page.getByText("Rs. 1000")).toBeVisible();
  84  |       await expect(page.getByText("Quantity")).toBeVisible();
  85  |       await expect(page.getByText("Availability: In Stock")).toBeVisible();
  86  |       await expect(page.getByText("Condition: New")).toBeVisible();
  87  |       await expect(page.getByText("Brand: Madame")).toBeVisible();
  88  |      
  89  |     })
  90  | 
  91  | 
  92  |     test("Testing the display of Special offer banner in product page",async({page})=>{
  93  |       await page.getByRole("link",{name:"Products"}).click();
  94  |       await expect(page.locator("#sale_image")).toBeVisible();
  95  |     });
  96  |     test("Testing clicking the product link in the header will redirect to product page",async({page})=>{
  97  |       await page.getByRole("link",{name:"Products"}).click();
  98  |       await expect(page.getByRole("heading",{name:"All Products"})).toBeVisible();
  99  |     });
  100 | 
  101 |     test("Testing the search bar Visibility in the product page",async({page})=>{
  102 |       await page.getByRole("link",{name:"Products"}).click();
  103 |       await expect(page.locator("#search_product")).toBeVisible();
  104 |     });
  105 | 
  106 |     test("Testing the Visibility of Subscription option in the buttom of the page",async({page})=>{
  107 |       await expect(page.getByRole("heading",{name:"Subscription"})).toBeVisible();
  108 |     });
  109 | 
  110 |     test("Testing the subscription block by subscribing with email",async({page})=>{
  111 |       await page.locator("#susbscribe_email").fill("Auser12345@gmail.com");
  112 |       await page.locator("#subscribe").click();
  113 |       await expect(page.locator("#success-subscribe")).toBeVisible();
  114 |     });
  115 | 
  116 |     test("Testing the subscription block with empty email field",async({page})=>{
  117 |       await page.locator("#susbscribe_email").fill("");
  118 |       await page.locator("#subscribe").click();
  119 |       await expect(page.locator("#success-subscribe")).not.toBeVisible();
  120 |     });
  121 | 
```