# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: InterfaceFunctionality.spec.js >> Testing the Interface Functionality >> Testing clicking on Men takes us to men dresses
- Location: tests/InterfaceFunctionality.spec.js:27:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'Men - Tshirts Products' })
Expected: visible
Timeout: 30000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 30000ms
  - waiting for getByRole('heading', { name: 'Men - Tshirts Products' })

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
        - generic [ref=e48]:
          - heading [level=1] [ref=e49]: AutomationExercise
          - heading [level=2] [ref=e50]: Full-Fledged practice website for Automation Engineers
          - paragraph [ref=e51]: All QA engineers can use this website for automation practice and API testing either they are at beginner or advance level. This is for everybody to help them brush up their automation skills.
          - link [ref=e52] [cursor=pointer]:
            - /url: /test_cases
            - button [ref=e53]: Test Cases
          - link [ref=e54] [cursor=pointer]:
            - /url: /api_list
            - button [ref=e55]: APIs list for practice
        - img [ref=e57]
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
        - heading [level=4] [ref=e81]:
          - link [ref=e82] [cursor=pointer]:
            - /url: "#Women"
            - generic [ref=e84]: 
            - text: Women
        - generic [ref=e85]:
          - heading [level=4] [ref=e87]:
            - link [ref=e88] [cursor=pointer]:
              - /url: "#Men"
              - generic [ref=e90]: 
              - text: Men
          - list [ref=e93]:
            - listitem [ref=e94]:
              - link [ref=e95] [cursor=pointer]:
                - /url: /category_products/3
                - text: Tshirts
            - listitem [ref=e96]:
              - link [ref=e97] [cursor=pointer]:
                - /url: /category_products/6
                - text: Jeans
        - heading [level=4] [ref=e100]:
          - link [ref=e101] [cursor=pointer]:
            - /url: "#Kids"
            - generic [ref=e103]: 
            - text: Kids
      - insertion [ref=e105]:
        - iframe [ref=e107]:
          
      - generic [ref=e108]:
        - heading [level=2] [ref=e109]: Brands
        - list [ref=e111]:
          - listitem [ref=e112]:
            - link [ref=e113] [cursor=pointer]:
              - /url: /brand_products/Polo
              - generic [ref=e114]: (6)
              - text: Polo
          - listitem [ref=e115]:
            - link [ref=e116] [cursor=pointer]:
              - /url: /brand_products/H&M
              - generic [ref=e117]: (5)
              - text: H&M
          - listitem [ref=e118]:
            - link [ref=e119] [cursor=pointer]:
              - /url: /brand_products/Madame
              - generic [ref=e120]: (5)
              - text: Madame
          - listitem [ref=e121]:
            - link [ref=e122] [cursor=pointer]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=e123]: (3)
              - text: Mast & Harbour
          - listitem [ref=e124]:
            - link [ref=e125] [cursor=pointer]:
              - /url: /brand_products/Babyhug
              - generic [ref=e126]: (4)
              - text: Babyhug
          - listitem [ref=e127]:
            - link [ref=e128] [cursor=pointer]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=e129]: (3)
              - text: Allen Solly Junior
          - listitem [ref=e130]:
            - link [ref=e131] [cursor=pointer]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=e132]: (3)
              - text: Kookie Kids
          - listitem [ref=e133]:
            - link [ref=e134] [cursor=pointer]:
              - /url: /brand_products/Biba
              - generic [ref=e135]: (5)
              - text: Biba
    - generic [ref=e136]:
      - generic [ref=e137]:
        - heading [level=2] [ref=e138]: Features Items
        - generic [ref=e140]:
          - generic [ref=e141]:
            - generic [ref=e142]:
              - img [ref=e143]
              - heading [level=2] [ref=e144]: Rs. 500
              - paragraph [ref=e145]: Blue Top
              - generic [ref=e146] [cursor=pointer]:
                - generic [ref=e147]: 
                - text: Add to cart
            - generic [ref=e148]:
              - heading [level=2] [ref=e149]: Rs. 500
              - paragraph [ref=e150]: Blue Top
              - generic [ref=e151] [cursor=pointer]:
                - generic [ref=e152]: 
                - text: Add to cart
          - list [ref=e154]:
            - listitem [ref=e155]:
              - link [ref=e156] [cursor=pointer]:
                - /url: /product_details/1
                - generic [ref=e157]: 
                - text: View Product
        - generic [ref=e159]:
          - generic [ref=e160]:
            - generic [ref=e161]:
              - img [ref=e162]
              - heading [level=2] [ref=e163]: Rs. 400
              - paragraph [ref=e164]: Men Tshirt
              - generic [ref=e165] [cursor=pointer]:
                - generic [ref=e166]: 
                - text: Add to cart
            - generic [ref=e167]:
              - heading [level=2] [ref=e168]: Rs. 400
              - paragraph [ref=e169]: Men Tshirt
              - generic [ref=e170] [cursor=pointer]:
                - generic [ref=e171]: 
                - text: Add to cart
          - list [ref=e173]:
            - listitem [ref=e174]:
              - link [ref=e175] [cursor=pointer]:
                - /url: /product_details/2
                - generic [ref=e176]: 
                - text: View Product
        - generic [ref=e178]:
          - generic [ref=e179]:
            - generic [ref=e180]:
              - img [ref=e181]
              - heading [level=2] [ref=e182]: Rs. 1000
              - paragraph [ref=e183]: Sleeveless Dress
              - generic [ref=e184] [cursor=pointer]:
                - generic [ref=e185]: 
                - text: Add to cart
            - generic [ref=e186]:
              - heading [level=2] [ref=e187]: Rs. 1000
              - paragraph [ref=e188]: Sleeveless Dress
              - generic [ref=e189] [cursor=pointer]:
                - generic [ref=e190]: 
                - text: Add to cart
          - list [ref=e192]:
            - listitem [ref=e193]:
              - link [ref=e194] [cursor=pointer]:
                - /url: /product_details/3
                - generic [ref=e195]: 
                - text: View Product
        - generic [ref=e197]:
          - generic [ref=e198]:
            - generic [ref=e199]:
              - img [ref=e200]
              - heading [level=2] [ref=e201]: Rs. 1500
              - paragraph [ref=e202]: Stylish Dress
              - generic [ref=e203] [cursor=pointer]:
                - generic [ref=e204]: 
                - text: Add to cart
            - generic [ref=e205]:
              - heading [level=2] [ref=e206]: Rs. 1500
              - paragraph [ref=e207]: Stylish Dress
              - generic [ref=e208] [cursor=pointer]:
                - generic [ref=e209]: 
                - text: Add to cart
          - list [ref=e211]:
            - listitem [ref=e212]:
              - link [ref=e213] [cursor=pointer]:
                - /url: /product_details/4
                - generic [ref=e214]: 
                - text: View Product
        - generic [ref=e216]:
          - generic [ref=e217]:
            - generic [ref=e218]:
              - img [ref=e219]
              - heading [level=2] [ref=e220]: Rs. 600
              - paragraph [ref=e221]: Winter Top
              - generic [ref=e222] [cursor=pointer]:
                - generic [ref=e223]: 
                - text: Add to cart
            - generic [ref=e224]:
              - heading [level=2] [ref=e225]: Rs. 600
              - paragraph [ref=e226]: Winter Top
              - generic [ref=e227] [cursor=pointer]:
                - generic [ref=e228]: 
                - text: Add to cart
          - list [ref=e230]:
            - listitem [ref=e231]:
              - link [ref=e232] [cursor=pointer]:
                - /url: /product_details/5
                - generic [ref=e233]: 
                - text: View Product
        - generic [ref=e235]:
          - generic [ref=e236]:
            - generic [ref=e237]:
              - img [ref=e238]
              - heading [level=2] [ref=e239]: Rs. 400
              - paragraph [ref=e240]: Summer White Top
              - generic [ref=e241] [cursor=pointer]:
                - generic [ref=e242]: 
                - text: Add to cart
            - generic [ref=e243]:
              - heading [level=2] [ref=e244]: Rs. 400
              - paragraph [ref=e245]: Summer White Top
              - generic [ref=e246] [cursor=pointer]:
                - generic [ref=e247]: 
                - text: Add to cart
          - list [ref=e249]:
            - listitem [ref=e250]:
              - link [ref=e251] [cursor=pointer]:
                - /url: /product_details/6
                - generic [ref=e252]: 
                - text: View Product
        - generic [ref=e254]:
          - generic [ref=e255]:
            - generic [ref=e256]:
              - img [ref=e257]
              - heading [level=2] [ref=e258]: Rs. 1000
              - paragraph [ref=e259]: Madame Top For Women
              - generic [ref=e260] [cursor=pointer]:
                - generic [ref=e261]: 
                - text: Add to cart
            - generic [ref=e262]:
              - heading [level=2] [ref=e263]: Rs. 1000
              - paragraph [ref=e264]: Madame Top For Women
              - generic [ref=e265] [cursor=pointer]:
                - generic [ref=e266]: 
                - text: Add to cart
          - list [ref=e268]:
            - listitem [ref=e269]:
              - link [ref=e270] [cursor=pointer]:
                - /url: /product_details/7
                - generic [ref=e271]: 
                - text: View Product
        - generic [ref=e273]:
          - generic [ref=e274]:
            - generic [ref=e275]:
              - img [ref=e276]
              - heading [level=2] [ref=e277]: Rs. 700
              - paragraph [ref=e278]: Fancy Green Top
              - generic [ref=e279] [cursor=pointer]:
                - generic [ref=e280]: 
                - text: Add to cart
            - generic [ref=e281]:
              - heading [level=2] [ref=e282]: Rs. 700
              - paragraph [ref=e283]: Fancy Green Top
              - generic [ref=e284] [cursor=pointer]:
                - generic [ref=e285]: 
                - text: Add to cart
          - list [ref=e287]:
            - listitem [ref=e288]:
              - link [ref=e289] [cursor=pointer]:
                - /url: /product_details/8
                - generic [ref=e290]: 
                - text: View Product
        - generic [ref=e292]:
          - generic [ref=e293]:
            - generic [ref=e294]:
              - img [ref=e295]
              - heading [level=2] [ref=e296]: Rs. 499
              - paragraph [ref=e297]: Sleeves Printed Top - White
              - generic [ref=e298] [cursor=pointer]:
                - generic [ref=e299]: 
                - text: Add to cart
            - generic [ref=e300]:
              - heading [level=2] [ref=e301]: Rs. 499
              - paragraph [ref=e302]: Sleeves Printed Top - White
              - generic [ref=e303] [cursor=pointer]:
                - generic [ref=e304]: 
                - text: Add to cart
          - list [ref=e306]:
            - listitem [ref=e307]:
              - link [ref=e308] [cursor=pointer]:
                - /url: /product_details/11
                - generic [ref=e309]: 
                - text: View Product
        - generic [ref=e311]:
          - generic [ref=e312]:
            - generic [ref=e313]:
              - img [ref=e314]
              - heading [level=2] [ref=e315]: Rs. 359
              - paragraph [ref=e316]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=e317] [cursor=pointer]:
                - generic [ref=e318]: 
                - text: Add to cart
            - generic [ref=e319]:
              - heading [level=2] [ref=e320]: Rs. 359
              - paragraph [ref=e321]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=e322] [cursor=pointer]:
                - generic [ref=e323]: 
                - text: Add to cart
          - list [ref=e325]:
            - listitem [ref=e326]:
              - link [ref=e327] [cursor=pointer]:
                - /url: /product_details/12
                - generic [ref=e328]: 
                - text: View Product
        - generic [ref=e330]:
          - generic [ref=e331]:
            - generic [ref=e332]:
              - img [ref=e333]
              - heading [level=2] [ref=e334]: Rs. 278
              - paragraph [ref=e335]: Frozen Tops For Kids
              - generic [ref=e336] [cursor=pointer]:
                - generic [ref=e337]: 
                - text: Add to cart
            - generic [ref=e338]:
              - heading [level=2] [ref=e339]: Rs. 278
              - paragraph [ref=e340]: Frozen Tops For Kids
              - generic [ref=e341] [cursor=pointer]:
                - generic [ref=e342]: 
                - text: Add to cart
          - list [ref=e344]:
            - listitem [ref=e345]:
              - link [ref=e346] [cursor=pointer]:
                - /url: /product_details/13
                - generic [ref=e347]: 
                - text: View Product
        - generic [ref=e349]:
          - generic [ref=e350]:
            - generic [ref=e351]:
              - img [ref=e352]
              - heading [level=2] [ref=e353]: Rs. 679
              - paragraph [ref=e354]: Full Sleeves Top Cherry - Pink
              - generic [ref=e355] [cursor=pointer]:
                - generic [ref=e356]: 
                - text: Add to cart
            - generic [ref=e357]:
              - heading [level=2] [ref=e358]: Rs. 679
              - paragraph [ref=e359]: Full Sleeves Top Cherry - Pink
              - generic [ref=e360] [cursor=pointer]:
                - generic [ref=e361]: 
                - text: Add to cart
          - list [ref=e363]:
            - listitem [ref=e364]:
              - link [ref=e365] [cursor=pointer]:
                - /url: /product_details/14
                - generic [ref=e366]: 
                - text: View Product
        - generic [ref=e368]:
          - generic [ref=e369]:
            - generic [ref=e370]:
              - img [ref=e371]
              - heading [level=2] [ref=e372]: Rs. 315
              - paragraph [ref=e373]: Printed Off Shoulder Top - White
              - generic [ref=e374] [cursor=pointer]:
                - generic [ref=e375]: 
                - text: Add to cart
            - generic [ref=e376]:
              - heading [level=2] [ref=e377]: Rs. 315
              - paragraph [ref=e378]: Printed Off Shoulder Top - White
              - generic [ref=e379] [cursor=pointer]:
                - generic [ref=e380]: 
                - text: Add to cart
          - list [ref=e382]:
            - listitem [ref=e383]:
              - link [ref=e384] [cursor=pointer]:
                - /url: /product_details/15
                - generic [ref=e385]: 
                - text: View Product
        - generic [ref=e387]:
          - generic [ref=e388]:
            - generic [ref=e389]:
              - img [ref=e390]
              - heading [level=2] [ref=e391]: Rs. 478
              - paragraph [ref=e392]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e393] [cursor=pointer]:
                - generic [ref=e394]: 
                - text: Add to cart
            - generic [ref=e395]:
              - heading [level=2] [ref=e396]: Rs. 478
              - paragraph [ref=e397]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e398] [cursor=pointer]:
                - generic [ref=e399]: 
                - text: Add to cart
          - list [ref=e401]:
            - listitem [ref=e402]:
              - link [ref=e403] [cursor=pointer]:
                - /url: /product_details/16
                - generic [ref=e404]: 
                - text: View Product
        - generic [ref=e406]:
          - generic [ref=e407]:
            - generic [ref=e408]:
              - img [ref=e409]
              - heading [level=2] [ref=e410]: Rs. 1200
              - paragraph [ref=e411]: Little Girls Mr. Panda Shirt
              - generic [ref=e412] [cursor=pointer]:
                - generic [ref=e413]: 
                - text: Add to cart
            - generic [ref=e414]:
              - heading [level=2] [ref=e415]: Rs. 1200
              - paragraph [ref=e416]: Little Girls Mr. Panda Shirt
              - generic [ref=e417] [cursor=pointer]:
                - generic [ref=e418]: 
                - text: Add to cart
          - list [ref=e420]:
            - listitem [ref=e421]:
              - link [ref=e422] [cursor=pointer]:
                - /url: /product_details/18
                - generic [ref=e423]: 
                - text: View Product
        - generic [ref=e425]:
          - generic [ref=e426]:
            - generic [ref=e427]:
              - img [ref=e428]
              - heading [level=2] [ref=e429]: Rs. 1050
              - paragraph [ref=e430]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=e431] [cursor=pointer]:
                - generic [ref=e432]: 
                - text: Add to cart
            - generic [ref=e433]:
              - heading [level=2] [ref=e434]: Rs. 1050
              - paragraph [ref=e435]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=e436] [cursor=pointer]:
                - generic [ref=e437]: 
                - text: Add to cart
          - list [ref=e439]:
            - listitem [ref=e440]:
              - link [ref=e441] [cursor=pointer]:
                - /url: /product_details/19
                - generic [ref=e442]: 
                - text: View Product
        - generic [ref=e444]:
          - generic [ref=e445]:
            - generic [ref=e446]:
              - img [ref=e447]
              - heading [level=2] [ref=e448]: Rs. 1190
              - paragraph [ref=e449]: Cotton Mull Embroidered Dress
              - generic [ref=e450] [cursor=pointer]:
                - generic [ref=e451]: 
                - text: Add to cart
            - generic [ref=e452]:
              - heading [level=2] [ref=e453]: Rs. 1190
              - paragraph [ref=e454]: Cotton Mull Embroidered Dress
              - generic [ref=e455] [cursor=pointer]:
                - generic [ref=e456]: 
                - text: Add to cart
          - list [ref=e458]:
            - listitem [ref=e459]:
              - link [ref=e460] [cursor=pointer]:
                - /url: /product_details/20
                - generic [ref=e461]: 
                - text: View Product
        - generic [ref=e463]:
          - generic [ref=e464]:
            - generic [ref=e465]:
              - img [ref=e466]
              - heading [level=2] [ref=e467]: Rs. 1530
              - paragraph [ref=e468]: Blue Cotton Indie Mickey Dress
              - generic [ref=e469] [cursor=pointer]:
                - generic [ref=e470]: 
                - text: Add to cart
            - generic [ref=e471]:
              - heading [level=2] [ref=e472]: Rs. 1530
              - paragraph [ref=e473]: Blue Cotton Indie Mickey Dress
              - generic [ref=e474] [cursor=pointer]:
                - generic [ref=e475]: 
                - text: Add to cart
          - list [ref=e477]:
            - listitem [ref=e478]:
              - link [ref=e479] [cursor=pointer]:
                - /url: /product_details/21
                - generic [ref=e480]: 
                - text: View Product
        - generic [ref=e482]:
          - generic [ref=e483]:
            - generic [ref=e484]:
              - img [ref=e485]
              - heading [level=2] [ref=e486]: Rs. 1600
              - paragraph [ref=e487]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=e488] [cursor=pointer]:
                - generic [ref=e489]: 
                - text: Add to cart
            - generic [ref=e490]:
              - heading [level=2] [ref=e491]: Rs. 1600
              - paragraph [ref=e492]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=e493] [cursor=pointer]:
                - generic [ref=e494]: 
                - text: Add to cart
          - list [ref=e496]:
            - listitem [ref=e497]:
              - link [ref=e498] [cursor=pointer]:
                - /url: /product_details/22
                - generic [ref=e499]: 
                - text: View Product
        - generic [ref=e501]:
          - generic [ref=e502]:
            - generic [ref=e503]:
              - img [ref=e504]
              - heading [level=2] [ref=e505]: Rs. 1100
              - paragraph [ref=e506]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e507] [cursor=pointer]:
                - generic [ref=e508]: 
                - text: Add to cart
            - generic [ref=e509]:
              - heading [level=2] [ref=e510]: Rs. 1100
              - paragraph [ref=e511]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e512] [cursor=pointer]:
                - generic [ref=e513]: 
                - text: Add to cart
          - list [ref=e515]:
            - listitem [ref=e516]:
              - link [ref=e517] [cursor=pointer]:
                - /url: /product_details/23
                - generic [ref=e518]: 
                - text: View Product
        - generic [ref=e520]:
          - generic [ref=e521]:
            - generic [ref=e522]:
              - img [ref=e523]
              - heading [level=2] [ref=e524]: Rs. 849
              - paragraph [ref=e525]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e526] [cursor=pointer]:
                - generic [ref=e527]: 
                - text: Add to cart
            - generic [ref=e528]:
              - heading [level=2] [ref=e529]: Rs. 849
              - paragraph [ref=e530]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e531] [cursor=pointer]:
                - generic [ref=e532]: 
                - text: Add to cart
          - list [ref=e534]:
            - listitem [ref=e535]:
              - link [ref=e536] [cursor=pointer]:
                - /url: /product_details/24
                - generic [ref=e537]: 
                - text: View Product
        - generic [ref=e539]:
          - generic [ref=e540]:
            - generic [ref=e541]:
              - img [ref=e542]
              - heading [level=2] [ref=e543]: Rs. 1299
              - paragraph [ref=e544]: Pure Cotton V-Neck T-Shirt
              - generic [ref=e545] [cursor=pointer]:
                - generic [ref=e546]: 
                - text: Add to cart
            - generic [ref=e547]:
              - heading [level=2] [ref=e548]: Rs. 1299
              - paragraph [ref=e549]: Pure Cotton V-Neck T-Shirt
              - generic [ref=e550] [cursor=pointer]:
                - generic [ref=e551]: 
                - text: Add to cart
          - list [ref=e553]:
            - listitem [ref=e554]:
              - link [ref=e555] [cursor=pointer]:
                - /url: /product_details/28
                - generic [ref=e556]: 
                - text: View Product
        - generic [ref=e558]:
          - generic [ref=e559]:
            - generic [ref=e560]:
              - img [ref=e561]
              - heading [level=2] [ref=e562]: Rs. 1000
              - paragraph [ref=e563]: Green Side Placket Detail T-Shirt
              - generic [ref=e564] [cursor=pointer]:
                - generic [ref=e565]: 
                - text: Add to cart
            - generic [ref=e566]:
              - heading [level=2] [ref=e567]: Rs. 1000
              - paragraph [ref=e568]: Green Side Placket Detail T-Shirt
              - generic [ref=e569] [cursor=pointer]:
                - generic [ref=e570]: 
                - text: Add to cart
          - list [ref=e572]:
            - listitem [ref=e573]:
              - link [ref=e574] [cursor=pointer]:
                - /url: /product_details/29
                - generic [ref=e575]: 
                - text: View Product
        - generic [ref=e577]:
          - generic [ref=e578]:
            - generic [ref=e579]:
              - img [ref=e580]
              - heading [level=2] [ref=e581]: Rs. 1500
              - paragraph [ref=e582]: Premium Polo T-Shirts
              - generic [ref=e583] [cursor=pointer]:
                - generic [ref=e584]: 
                - text: Add to cart
            - generic [ref=e585]:
              - heading [level=2] [ref=e586]: Rs. 1500
              - paragraph [ref=e587]: Premium Polo T-Shirts
              - generic [ref=e588] [cursor=pointer]:
                - generic [ref=e589]: 
                - text: Add to cart
          - list [ref=e591]:
            - listitem [ref=e592]:
              - link [ref=e593] [cursor=pointer]:
                - /url: /product_details/30
                - generic [ref=e594]: 
                - text: View Product
        - generic [ref=e596]:
          - generic [ref=e597]:
            - generic [ref=e598]:
              - img [ref=e599]
              - heading [level=2] [ref=e600]: Rs. 850
              - paragraph [ref=e601]: Pure Cotton Neon Green Tshirt
              - generic [ref=e602] [cursor=pointer]:
                - generic [ref=e603]: 
                - text: Add to cart
            - generic [ref=e604]:
              - heading [level=2] [ref=e605]: Rs. 850
              - paragraph [ref=e606]: Pure Cotton Neon Green Tshirt
              - generic [ref=e607] [cursor=pointer]:
                - generic [ref=e608]: 
                - text: Add to cart
          - list [ref=e610]:
            - listitem [ref=e611]:
              - link [ref=e612] [cursor=pointer]:
                - /url: /product_details/31
                - generic [ref=e613]: 
                - text: View Product
        - generic [ref=e615]:
          - generic [ref=e616]:
            - generic [ref=e617]:
              - img [ref=e618]
              - heading [level=2] [ref=e619]: Rs. 799
              - paragraph [ref=e620]: Soft Stretch Jeans
              - generic [ref=e621] [cursor=pointer]:
                - generic [ref=e622]: 
                - text: Add to cart
            - generic [ref=e623]:
              - heading [level=2] [ref=e624]: Rs. 799
              - paragraph [ref=e625]: Soft Stretch Jeans
              - generic [ref=e626] [cursor=pointer]:
                - generic [ref=e627]: 
                - text: Add to cart
          - list [ref=e629]:
            - listitem [ref=e630]:
              - link [ref=e631] [cursor=pointer]:
                - /url: /product_details/33
                - generic [ref=e632]: 
                - text: View Product
        - generic [ref=e634]:
          - generic [ref=e635]:
            - generic [ref=e636]:
              - img [ref=e637]
              - heading [level=2] [ref=e638]: Rs. 1200
              - paragraph [ref=e639]: Regular Fit Straight Jeans
              - generic [ref=e640] [cursor=pointer]:
                - generic [ref=e641]: 
                - text: Add to cart
            - generic [ref=e642]:
              - heading [level=2] [ref=e643]: Rs. 1200
              - paragraph [ref=e644]: Regular Fit Straight Jeans
              - generic [ref=e645] [cursor=pointer]:
                - generic [ref=e646]: 
                - text: Add to cart
          - list [ref=e648]:
            - listitem [ref=e649]:
              - link [ref=e650] [cursor=pointer]:
                - /url: /product_details/35
                - generic [ref=e651]: 
                - text: View Product
        - generic [ref=e653]:
          - generic [ref=e654]:
            - generic [ref=e655]:
              - img [ref=e656]
              - heading [level=2] [ref=e657]: Rs. 1400
              - paragraph [ref=e658]: Grunt Blue Slim Fit Jeans
              - generic [ref=e659] [cursor=pointer]:
                - generic [ref=e660]: 
                - text: Add to cart
            - generic [ref=e661]:
              - heading [level=2] [ref=e662]: Rs. 1400
              - paragraph [ref=e663]: Grunt Blue Slim Fit Jeans
              - generic [ref=e664] [cursor=pointer]:
                - generic [ref=e665]: 
                - text: Add to cart
          - list [ref=e667]:
            - listitem [ref=e668]:
              - link [ref=e669] [cursor=pointer]:
                - /url: /product_details/37
                - generic [ref=e670]: 
                - text: View Product
        - generic [ref=e672]:
          - generic [ref=e673]:
            - generic [ref=e674]:
              - img [ref=e675]
              - heading [level=2] [ref=e676]: Rs. 2300
              - paragraph [ref=e677]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e678] [cursor=pointer]:
                - generic [ref=e679]: 
                - text: Add to cart
            - generic [ref=e680]:
              - heading [level=2] [ref=e681]: Rs. 2300
              - paragraph [ref=e682]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e683] [cursor=pointer]:
                - generic [ref=e684]: 
                - text: Add to cart
          - list [ref=e686]:
            - listitem [ref=e687]:
              - link [ref=e688] [cursor=pointer]:
                - /url: /product_details/38
                - generic [ref=e689]: 
                - text: View Product
        - generic [ref=e691]:
          - generic [ref=e692]:
            - generic [ref=e693]:
              - img [ref=e694]
              - heading [level=2] [ref=e695]: Rs. 3000
              - paragraph [ref=e696]: Cotton Silk Hand Block Print Saree
              - generic [ref=e697] [cursor=pointer]:
                - generic [ref=e698]: 
                - text: Add to cart
            - generic [ref=e699]:
              - heading [level=2] [ref=e700]: Rs. 3000
              - paragraph [ref=e701]: Cotton Silk Hand Block Print Saree
              - generic [ref=e702] [cursor=pointer]:
                - generic [ref=e703]: 
                - text: Add to cart
          - list [ref=e705]:
            - listitem [ref=e706]:
              - link [ref=e707] [cursor=pointer]:
                - /url: /product_details/39
                - generic [ref=e708]: 
                - text: View Product
        - generic [ref=e710]:
          - generic [ref=e711]:
            - generic [ref=e712]:
              - img [ref=e713]
              - heading [level=2] [ref=e714]: Rs. 3500
              - paragraph [ref=e715]: Rust Red Linen Saree
              - generic [ref=e716] [cursor=pointer]:
                - generic [ref=e717]: 
                - text: Add to cart
            - generic [ref=e718]:
              - heading [level=2] [ref=e719]: Rs. 3500
              - paragraph [ref=e720]: Rust Red Linen Saree
              - generic [ref=e721] [cursor=pointer]:
                - generic [ref=e722]: 
                - text: Add to cart
          - list [ref=e724]:
            - listitem [ref=e725]:
              - link [ref=e726] [cursor=pointer]:
                - /url: /product_details/40
                - generic [ref=e727]: 
                - text: View Product
        - generic [ref=e729]:
          - generic [ref=e730]:
            - generic [ref=e731]:
              - img [ref=e732]
              - heading [level=2] [ref=e733]: Rs. 5000
              - paragraph [ref=e734]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e735] [cursor=pointer]:
                - generic [ref=e736]: 
                - text: Add to cart
            - generic [ref=e737]:
              - heading [level=2] [ref=e738]: Rs. 5000
              - paragraph [ref=e739]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e740] [cursor=pointer]:
                - generic [ref=e741]: 
                - text: Add to cart
          - list [ref=e743]:
            - listitem [ref=e744]:
              - link [ref=e745] [cursor=pointer]:
                - /url: /product_details/41
                - generic [ref=e746]: 
                - text: View Product
        - generic [ref=e748]:
          - generic [ref=e749]:
            - generic [ref=e750]:
              - img [ref=e751]
              - heading [level=2] [ref=e752]: Rs. 1400
              - paragraph [ref=e753]: Lace Top For Women
              - generic [ref=e754] [cursor=pointer]:
                - generic [ref=e755]: 
                - text: Add to cart
            - generic [ref=e756]:
              - heading [level=2] [ref=e757]: Rs. 1400
              - paragraph [ref=e758]: Lace Top For Women
              - generic [ref=e759] [cursor=pointer]:
                - generic [ref=e760]: 
                - text: Add to cart
          - list [ref=e762]:
            - listitem [ref=e763]:
              - link [ref=e764] [cursor=pointer]:
                - /url: /product_details/42
                - generic [ref=e765]: 
                - text: View Product
        - generic [ref=e767]:
          - generic [ref=e768]:
            - generic [ref=e769]:
              - img [ref=e770]
              - heading [level=2] [ref=e771]: Rs. 1389
              - paragraph [ref=e772]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=e773] [cursor=pointer]:
                - generic [ref=e774]: 
                - text: Add to cart
            - generic [ref=e775]:
              - heading [level=2] [ref=e776]: Rs. 1389
              - paragraph [ref=e777]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=e778] [cursor=pointer]:
                - generic [ref=e779]: 
                - text: Add to cart
          - list [ref=e781]:
            - listitem [ref=e782]:
              - link [ref=e783] [cursor=pointer]:
                - /url: /product_details/43
                - generic [ref=e784]: 
                - text: View Product
      - generic [ref=e785]:
        - heading [level=2] [ref=e786]: recommended items
        - generic [ref=e787]:
          - generic [ref=e788]:
            - generic [ref=e792]:
              - img [ref=e793]
              - heading [level=2] [ref=e794]: Rs. 500
              - paragraph [ref=e795]: Blue Top
              - generic [ref=e796] [cursor=pointer]:
                - generic [ref=e797]: 
                - text: Add to cart
            - generic [ref=e801]:
              - img [ref=e802]
              - heading [level=2] [ref=e803]: Rs. 400
              - paragraph [ref=e804]: Men Tshirt
              - generic [ref=e805] [cursor=pointer]:
                - generic [ref=e806]: 
                - text: Add to cart
            - generic [ref=e810]:
              - img [ref=e811]
              - heading [level=2] [ref=e812]: Rs. 1000
              - paragraph [ref=e813]: Rs. 1000
              - generic [ref=e814] [cursor=pointer]:
                - generic [ref=e815]: 
                - text: Add to cart
            - generic [ref=e816]:
              - generic [ref=e820]:
                - img [ref=e821]
                - heading [level=2] [ref=e822]: Rs. 1500
                - paragraph [ref=e823]: Stylish Dress
                - generic [ref=e824] [cursor=pointer]:
                  - generic [ref=e825]: 
                  - text: Add to cart
              - generic [ref=e829]:
                - img [ref=e830]
                - heading [level=2] [ref=e831]: Rs. 600
                - paragraph [ref=e832]: Winter Top
                - generic [ref=e833] [cursor=pointer]:
                  - generic [ref=e834]: 
                  - text: Add to cart
              - generic [ref=e838]:
                - img [ref=e839]
                - heading [level=2] [ref=e840]: Rs. 400
                - paragraph [ref=e841]: Summer White Top
                - generic [ref=e842] [cursor=pointer]:
                  - generic [ref=e843]: 
                  - text: Add to cart
          - link [ref=e844] [cursor=pointer]:
            - /url: "#recommended-item-carousel"
            - generic [ref=e845]: 
          - link [ref=e846] [cursor=pointer]:
            - /url: "#recommended-item-carousel"
            - generic [ref=e847]: 
  - insertion [ref=e849]
  - contentinfo [ref=e851]:
    - generic [ref=e856]:
      - heading [level=2] [ref=e857]: Subscription
      - generic [ref=e858]:
        - textbox [ref=e859]:
          - /placeholder: Your email address
        - button [ref=e860] [cursor=pointer]:
          - generic [ref=e861]: 
        - paragraph [ref=e862]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=e866]: Copyright © 2021 All rights reserved
  - link [ref=e867] [cursor=pointer]:
    - /url: "#top"
    - generic [ref=e868]: 
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
  22  |        await expect(page.getByText("Sleeveless Dress")).toBeTruthy();
  23  |        await expect(page.getByText("Stylish Dress")).toBeTruthy();
  24  |        await expect(page.getByText("Rose Pink Embroidered Maxi Dress")).toBeTruthy();
  25  |     });
  26  | 
  27  |     test("Testing clicking on Men takes us to men dresses",async({page})=>{
  28  |       await page.getByRole("link",{name:"Men"}).nth(1).click();
  29  |       await page.getByRole("link",{name:"Tshirts"}).click();
> 30  |       await expect(page.getByRole("heading",{name:"Men - Tshirts Products"})).toBeVisible();
      |                                                                               ^ Error: expect(locator).toBeVisible() failed
  31  |       await expect(page.getByText("Men Tshirt")).toBeTruthy();
  32  |       await expect(page.getByText("Pure Cotton V-Neck T-Shirt")).toBeTruthy();
  33  |       await expect(page.getByText("Green Side Placket Detail T-Shirt")).toBeTruthy();
  34  |       await expect(page.getByText("Premium Polo T-Shirts")).toBeTruthy();
  35  |       await expect(page.getByText("Pure Cotton Neon Green Tshirt")).toBeTruthy();
  36  |       await expect(page.getByText("Graphic Design Men T Shirt-Blue")).toBeTruthy();
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
  60  |       await page.waitForTimeout(1000);
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
  123 |       await page.locator("#subscribe").click();
  124 |       await expect(page.locator("#success-subscribe")).not.toBeVisible();
  125 |     })
  126 | 
  127 |     test("Testing the visibility of products availability,condition and brand",async({page})=>{
  128 |       await page.getByRole("link",{name:"Products"}).click();
  129 |       await page.getByRole("link",{name:"View Product"}).first().click();
  130 |       await expect(page.getByText("Availability: In Stock")).toBeTruthy();
```