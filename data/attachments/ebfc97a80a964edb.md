# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Deletion.spec.js >> Testing the Account Delete Functionality >> Testing by attempting to log in with a newly deleted account
- Location: tests/Deletion.spec.js:65:9

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.fill: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('#password')

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
  - generic [ref=e39]:
    - generic [ref=e41]:
      - heading "Login to your account" [level=2] [ref=e42]
      - generic [ref=e43]:
        - textbox "Email Address" [ref=e44]
        - textbox "Password" [ref=e45]
        - button "Login" [ref=e46] [cursor=pointer]
    - heading "OR" [level=2] [ref=e48]
    - generic [ref=e50]:
      - heading "New User Signup!" [level=2] [ref=e51]
      - generic [ref=e52]:
        - textbox "Name" [ref=e53]: bh
        - textbox "Email Address" [ref=e54]: bh1@1
        - paragraph [ref=e55]: Email Address already exist!
        - button "Signup" [ref=e56] [cursor=pointer]
  - contentinfo [ref=e57]:
    - generic [ref=e62]:
      - heading "Subscription" [level=2] [ref=e63]
      - generic [ref=e64]:
        - textbox "Your email address" [ref=e65]
        - button "" [ref=e66] [cursor=pointer]:
          - generic [ref=e67]: 
        - paragraph [ref=e68]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e72]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e73]:
    - iframe [ref=e76]:
      - generic [active] [ref=f22e1]:
        - generic [ref=f22e6]:
          - link [ref=f22e7] [cursor=pointer]:
            - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CtSovkJMearv8Bv3omtUPmvDiiA6LkPuwhwHT2I_t8hWx3fDEywEQASD9tJ6VAWChAqAB9oHCtSjIAQmoAwHIA8sEqgTqAU_QZ0Elh5Uh0JHTWFPjv2c-T8ssh80r5KAxO79fq_zgvdpv-Eo5GvubF1VKNudBXgWbfvqI_zvYg5eG6vf-_HWfgJ6qjgk15-1UL-wu_-QAwmDK9BUMp48DLrq8_WHGc7Cuk7kIfTdKwXmC5IabNwsLQeUznsNu2z4IIao10O2EWuGY09ggiCCOaFRzlkcPfMWeRPmeqzb6a6n3D8dFyDgy5fi5kYbMzyZpTVg4AJUjQkwkv9ZkOwORHASN3mUQhFRccEfNz21I_VoFTdniGr4ef617OPbs1NM3NMKr30bCvgurmwrBJicwosAE1-KpptIFiAXsz7mWV6AGLoAH9rmSlQOoB6fMsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwDSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WJPmhvmQ6JQDYAGxCXwgaq2TCcKLgAoBmAsByAsBgAwBogwMKgoKCI7fsQKV4rECqg0CR0jIDQHqDRMIooiH-ZDolAMVfbSmBB0auBjh8A0CiA4JsA6vq_b5GNgTC9AVAcoWAgoA-BYBgBcBshcEGAFQBroXAjgBshgJEgLvThguIgEA0BgB6BgBwhkCCAE&ae=1&gclid=EAIaIQobChMIu4SH-ZDolAMVfbSmBB0auBjhEAEYASAAEgIUz_D_BwE&num=1&cid=CAQS9AEAEQoqgXICwmRVuG7TOozm0R-QEX65RihZv5VHjk_8yvEhOvciC44fbCWSYn6teTn4imMr83zlHom8U8jYQfl4jEP_zW8JIfi1Ot8BUQF0d7becSKZVMPwlGy0D0qTNDzEKd2PoCPKBffdgH8C1nSpaVOURqYQbRNx8PduOVpFYKEZmMixz0A3HTYcjy-d3Y5X8s6eLKgaesa2rPy2-RekVrU-m8Rzk0r-xRwaXO9hKeYnCII1RzM5VgpgldxE6BrcsV892f8oxFELOjYotvl6lB3zLh3P_f-HXpgEEt-RrQsrSxqbTWejJvw6ouLBLLv3iyweGAE&sig=AOD64_3yUIG52hg8A28sMHMQoH84Qsj-mw&client=ca-pub-1677597403311019&rf=1&nb=9&adurl=https://try.takeprofittrader.com/funded-trader-mff-nf30r2-0526%3Fgc_id%3D23396595761%26h_ad_id%3D%26gad_source%3D5%26gad_campaignid%3D23400966124%26gclid%3DEAIaIQobChMIu4SH-ZDolAMVfbSmBB0auBjhEAEYASAAEgIUz_D_BwE
            - img [ref=f22e8]
          - generic [ref=f22e12]:
            - 'link "The #1 Prop Firm Payout Policy" [ref=f22e15] [cursor=pointer]':
              - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CtSovkJMearv8Bv3omtUPmvDiiA6LkPuwhwHT2I_t8hWx3fDEywEQASD9tJ6VAWChAqAB9oHCtSjIAQmoAwHIA8sEqgTqAU_QZ0Elh5Uh0JHTWFPjv2c-T8ssh80r5KAxO79fq_zgvdpv-Eo5GvubF1VKNudBXgWbfvqI_zvYg5eG6vf-_HWfgJ6qjgk15-1UL-wu_-QAwmDK9BUMp48DLrq8_WHGc7Cuk7kIfTdKwXmC5IabNwsLQeUznsNu2z4IIao10O2EWuGY09ggiCCOaFRzlkcPfMWeRPmeqzb6a6n3D8dFyDgy5fi5kYbMzyZpTVg4AJUjQkwkv9ZkOwORHASN3mUQhFRccEfNz21I_VoFTdniGr4ef617OPbs1NM3NMKr30bCvgurmwrBJicwosAE1-KpptIFiAXsz7mWV6AGLoAH9rmSlQOoB6fMsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwDSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WJPmhvmQ6JQDYAGxCXwgaq2TCcKLgAoBmAsByAsBgAwBogwMKgoKCI7fsQKV4rECqg0CR0jIDQHqDRMIooiH-ZDolAMVfbSmBB0auBjh8A0CiA4JsA6vq_b5GNgTC9AVAcoWAgoA-BYBgBcBshcEGAFQBroXAjgBshgJEgLvThguIgEA0BgB6BgBwhkCCAE&ae=1&gclid=EAIaIQobChMIu4SH-ZDolAMVfbSmBB0auBjhEAEYASAAEgIUz_D_BwE&num=1&cid=CAQS9AEAEQoqgXICwmRVuG7TOozm0R-QEX65RihZv5VHjk_8yvEhOvciC44fbCWSYn6teTn4imMr83zlHom8U8jYQfl4jEP_zW8JIfi1Ot8BUQF0d7becSKZVMPwlGy0D0qTNDzEKd2PoCPKBffdgH8C1nSpaVOURqYQbRNx8PduOVpFYKEZmMixz0A3HTYcjy-d3Y5X8s6eLKgaesa2rPy2-RekVrU-m8Rzk0r-xRwaXO9hKeYnCII1RzM5VgpgldxE6BrcsV892f8oxFELOjYotvl6lB3zLh3P_f-HXpgEEt-RrQsrSxqbTWejJvw6ouLBLLv3iyweGAE&sig=AOD64_3yUIG52hg8A28sMHMQoH84Qsj-mw&client=ca-pub-1677597403311019&rf=1&nb=0&adurl=https://try.takeprofittrader.com/funded-trader-mff-nf30r2-0526%3Fgc_id%3D23396595761%26h_ad_id%3D%26gad_source%3D5%26gad_campaignid%3D23400966124%26gclid%3DEAIaIQobChMIu4SH-ZDolAMVfbSmBB0auBjhEAEYASAAEgIUz_D_BwE
            - link "No waiting 5+ days to withdraw. No scaling plan. No delayed support. Paid day-1 in PRO." [ref=f22e19] [cursor=pointer]:
              - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CtSovkJMearv8Bv3omtUPmvDiiA6LkPuwhwHT2I_t8hWx3fDEywEQASD9tJ6VAWChAqAB9oHCtSjIAQmoAwHIA8sEqgTqAU_QZ0Elh5Uh0JHTWFPjv2c-T8ssh80r5KAxO79fq_zgvdpv-Eo5GvubF1VKNudBXgWbfvqI_zvYg5eG6vf-_HWfgJ6qjgk15-1UL-wu_-QAwmDK9BUMp48DLrq8_WHGc7Cuk7kIfTdKwXmC5IabNwsLQeUznsNu2z4IIao10O2EWuGY09ggiCCOaFRzlkcPfMWeRPmeqzb6a6n3D8dFyDgy5fi5kYbMzyZpTVg4AJUjQkwkv9ZkOwORHASN3mUQhFRccEfNz21I_VoFTdniGr4ef617OPbs1NM3NMKr30bCvgurmwrBJicwosAE1-KpptIFiAXsz7mWV6AGLoAH9rmSlQOoB6fMsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwDSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WJPmhvmQ6JQDYAGxCXwgaq2TCcKLgAoBmAsByAsBgAwBogwMKgoKCI7fsQKV4rECqg0CR0jIDQHqDRMIooiH-ZDolAMVfbSmBB0auBjh8A0CiA4JsA6vq_b5GNgTC9AVAcoWAgoA-BYBgBcBshcEGAFQBroXAjgBshgJEgLvThguIgEA0BgB6BgBwhkCCAE&ae=1&gclid=EAIaIQobChMIu4SH-ZDolAMVfbSmBB0auBjhEAEYASAAEgIUz_D_BwE&num=1&cid=CAQS9AEAEQoqgXICwmRVuG7TOozm0R-QEX65RihZv5VHjk_8yvEhOvciC44fbCWSYn6teTn4imMr83zlHom8U8jYQfl4jEP_zW8JIfi1Ot8BUQF0d7becSKZVMPwlGy0D0qTNDzEKd2PoCPKBffdgH8C1nSpaVOURqYQbRNx8PduOVpFYKEZmMixz0A3HTYcjy-d3Y5X8s6eLKgaesa2rPy2-RekVrU-m8Rzk0r-xRwaXO9hKeYnCII1RzM5VgpgldxE6BrcsV892f8oxFELOjYotvl6lB3zLh3P_f-HXpgEEt-RrQsrSxqbTWejJvw6ouLBLLv3iyweGAE&sig=AOD64_3yUIG52hg8A28sMHMQoH84Qsj-mw&client=ca-pub-1677597403311019&rf=1&nb=7&adurl=https://try.takeprofittrader.com/funded-trader-mff-nf30r2-0526%3Fgc_id%3D23396595761%26h_ad_id%3D%26gad_source%3D5%26gad_campaignid%3D23400966124%26gclid%3DEAIaIQobChMIu4SH-ZDolAMVfbSmBB0auBjhEAEYASAAEgIUz_D_BwE
              - text: No waiting 5+ days to withdraw. No scaling plan. No delayed support. Paid day-1 in
              - text: PRO.
            - link "Take Profit Trader" [ref=f22e22] [cursor=pointer]:
              - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CtSovkJMearv8Bv3omtUPmvDiiA6LkPuwhwHT2I_t8hWx3fDEywEQASD9tJ6VAWChAqAB9oHCtSjIAQmoAwHIA8sEqgTqAU_QZ0Elh5Uh0JHTWFPjv2c-T8ssh80r5KAxO79fq_zgvdpv-Eo5GvubF1VKNudBXgWbfvqI_zvYg5eG6vf-_HWfgJ6qjgk15-1UL-wu_-QAwmDK9BUMp48DLrq8_WHGc7Cuk7kIfTdKwXmC5IabNwsLQeUznsNu2z4IIao10O2EWuGY09ggiCCOaFRzlkcPfMWeRPmeqzb6a6n3D8dFyDgy5fi5kYbMzyZpTVg4AJUjQkwkv9ZkOwORHASN3mUQhFRccEfNz21I_VoFTdniGr4ef617OPbs1NM3NMKr30bCvgurmwrBJicwosAE1-KpptIFiAXsz7mWV6AGLoAH9rmSlQOoB6fMsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwDSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WJPmhvmQ6JQDYAGxCXwgaq2TCcKLgAoBmAsByAsBgAwBogwMKgoKCI7fsQKV4rECqg0CR0jIDQHqDRMIooiH-ZDolAMVfbSmBB0auBjh8A0CiA4JsA6vq_b5GNgTC9AVAcoWAgoA-BYBgBcBshcEGAFQBroXAjgBshgJEgLvThguIgEA0BgB6BgBwhkCCAE&ae=1&gclid=EAIaIQobChMIu4SH-ZDolAMVfbSmBB0auBjhEAEYASAAEgIUz_D_BwE&num=1&cid=CAQS9AEAEQoqgXICwmRVuG7TOozm0R-QEX65RihZv5VHjk_8yvEhOvciC44fbCWSYn6teTn4imMr83zlHom8U8jYQfl4jEP_zW8JIfi1Ot8BUQF0d7becSKZVMPwlGy0D0qTNDzEKd2PoCPKBffdgH8C1nSpaVOURqYQbRNx8PduOVpFYKEZmMixz0A3HTYcjy-d3Y5X8s6eLKgaesa2rPy2-RekVrU-m8Rzk0r-xRwaXO9hKeYnCII1RzM5VgpgldxE6BrcsV892f8oxFELOjYotvl6lB3zLh3P_f-HXpgEEt-RrQsrSxqbTWejJvw6ouLBLLv3iyweGAE&sig=AOD64_3yUIG52hg8A28sMHMQoH84Qsj-mw&client=ca-pub-1677597403311019&rf=1&nb=1&adurl=https://try.takeprofittrader.com/funded-trader-mff-nf30r2-0526%3Fgc_id%3D23396595761%26h_ad_id%3D%26gad_source%3D5%26gad_campaignid%3D23400966124%26gclid%3DEAIaIQobChMIu4SH-ZDolAMVfbSmBB0auBjhEAEYASAAEgIUz_D_BwE
          - link "Open" [ref=f22e25] [cursor=pointer]:
            - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CtSovkJMearv8Bv3omtUPmvDiiA6LkPuwhwHT2I_t8hWx3fDEywEQASD9tJ6VAWChAqAB9oHCtSjIAQmoAwHIA8sEqgTqAU_QZ0Elh5Uh0JHTWFPjv2c-T8ssh80r5KAxO79fq_zgvdpv-Eo5GvubF1VKNudBXgWbfvqI_zvYg5eG6vf-_HWfgJ6qjgk15-1UL-wu_-QAwmDK9BUMp48DLrq8_WHGc7Cuk7kIfTdKwXmC5IabNwsLQeUznsNu2z4IIao10O2EWuGY09ggiCCOaFRzlkcPfMWeRPmeqzb6a6n3D8dFyDgy5fi5kYbMzyZpTVg4AJUjQkwkv9ZkOwORHASN3mUQhFRccEfNz21I_VoFTdniGr4ef617OPbs1NM3NMKr30bCvgurmwrBJicwosAE1-KpptIFiAXsz7mWV6AGLoAH9rmSlQOoB6fMsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwDSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WJPmhvmQ6JQDYAGxCXwgaq2TCcKLgAoBmAsByAsBgAwBogwMKgoKCI7fsQKV4rECqg0CR0jIDQHqDRMIooiH-ZDolAMVfbSmBB0auBjh8A0CiA4JsA6vq_b5GNgTC9AVAcoWAgoA-BYBgBcBshcEGAFQBroXAjgBshgJEgLvThguIgEA0BgB6BgBwhkCCAE&ae=1&gclid=EAIaIQobChMIu4SH-ZDolAMVfbSmBB0auBjhEAEYASAAEgIUz_D_BwE&num=1&cid=CAQS9AEAEQoqgXICwmRVuG7TOozm0R-QEX65RihZv5VHjk_8yvEhOvciC44fbCWSYn6teTn4imMr83zlHom8U8jYQfl4jEP_zW8JIfi1Ot8BUQF0d7becSKZVMPwlGy0D0qTNDzEKd2PoCPKBffdgH8C1nSpaVOURqYQbRNx8PduOVpFYKEZmMixz0A3HTYcjy-d3Y5X8s6eLKgaesa2rPy2-RekVrU-m8Rzk0r-xRwaXO9hKeYnCII1RzM5VgpgldxE6BrcsV892f8oxFELOjYotvl6lB3zLh3P_f-HXpgEEt-RrQsrSxqbTWejJvw6ouLBLLv3iyweGAE&sig=AOD64_3yUIG52hg8A28sMHMQoH84Qsj-mw&client=ca-pub-1677597403311019&rf=1&nb=8&adurl=https://try.takeprofittrader.com/funded-trader-mff-nf30r2-0526%3Fgc_id%3D23396595761%26h_ad_id%3D%26gad_source%3D5%26gad_campaignid%3D23400966124%26gclid%3DEAIaIQobChMIu4SH-ZDolAMVfbSmBB0auBjhEAEYASAAEgIUz_D_BwE
            - generic [ref=f22e26]:
              - generic [ref=f22e28]: Open
              - generic [ref=f22e30]:
                - img [ref=f22e31]
                - img [ref=f22e33]
        - img [ref=f22e41] [cursor=pointer]
        - button [ref=f22e43] [cursor=pointer]:
          - img [ref=f22e44]
        - iframe
```

# Test source

```ts
  1  | export class Delete {
  2  |     constructor(page) {
  3  |         this.page = page;
  4  |         
  5  |         // Login Locators
  6  |         this.email1 = page.getByPlaceholder("Email Address").first();
  7  |         this.password1 = page.getByPlaceholder("Password");
  8  |         this.loginbtn = page.getByRole("button", { name: "Login" });
  9  | 
  10 |         // Signup Locators
  11 |         this.name = page.getByPlaceholder("Name");
  12 |         this.email = page.getByPlaceholder("Email Address").nth(1);
  13 |         this.btn = page.getByRole('button', { name: "Signup" });
  14 | 
  15 |         // Account Creation Form Locators
  16 |         this.password = page.locator("#password");
  17 |         this.first_name = page.locator("#first_name");
  18 |         this.last_name = page.locator("#last_name");
  19 |         this.company = page.locator("#company");
  20 |         this.address1 = page.locator("#address1");
  21 |         this.address2 = page.locator("#address2");
  22 |         this.country = page.locator("#country");
  23 |         this.state = page.locator("#state");
  24 |         this.city = page.locator("#city");
  25 |         this.zipcode = page.locator("#zipcode");
  26 |         this.mobile = page.locator("#mobile_number");
  27 |         this.createAccountBtn = page.getByRole('button', { name: "Create Account" });
  28 |         this.continue = page.getByRole("link",{name:"Continue"});
  29 |     }
  30 | 
  31 |     async navigate() {
  32 |         await this.page.goto("https://automationexercise.com/"); 
  33 |     }
  34 | 
  35 |     async login() {
  36 |         await this.email1.fill("bh1@1");
  37 |         await this.password1.fill("1");
  38 |         await this.loginbtn.click();
  39 |     }
  40 | 
  41 |     async signup() {
  42 |         await this.name.fill("bh");
  43 |         await this.email.fill("bh1@1");
  44 |         await this.btn.click();
  45 |     }
  46 | 
  47 |     async createAccount() {
  48 |         await this.page.getByRole("link", { name: "Signup / Login" }).click();
  49 |         await this.signup();
  50 |         
> 51 |         await this.password.fill("1");
     |                             ^ Error: locator.fill: Test timeout of 60000ms exceeded.
  52 |         await this.first_name.fill("bh");
  53 |         await this.last_name.fill("Re");
  54 |         await this.company.fill("abc");
  55 |         await this.address1.fill("12-11");
  56 |         await this.address2.fill("Delhi");
  57 |         await this.country.selectOption("India");
  58 |         await this.state.fill("Delhi");
  59 |         await this.city.fill("Delhi");
  60 |         await this.zipcode.fill("1234");
  61 |         await this.mobile.fill("789456123");
  62 |         await this.createAccountBtn.click();
  63 |         await this.continue.click();
  64 |     }
  65 | }
```