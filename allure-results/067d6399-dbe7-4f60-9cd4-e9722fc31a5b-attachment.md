# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: SignUp.spec.js >> Enter account information page testing >> Missing the Mandetory state field
- Location: tests\SignUp.spec.js:161:9

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
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
      - heading "Login to your account" [level=2] [ref=e42]
      - generic [ref=e43]:
        - textbox "Email Address" [ref=e44]
        - textbox "Password" [ref=e45]
        - button "Login" [ref=e46] [cursor=pointer]
    - heading "OR" [level=2] [ref=e48]
    - generic [ref=e50]:
      - heading "New User Signup!" [level=2] [ref=e51]
      - generic [ref=e52]:
        - textbox "Name" [ref=e53]: Bharath
        - textbox "Email Address" [ref=e54]: user_1779768111215@example.com
        - button "Signup" [active] [ref=e55] [cursor=pointer]
  - contentinfo [ref=e56]:
    - generic [ref=e61]:
      - heading "Subscription" [level=2] [ref=e62]
      - generic [ref=e63]:
        - textbox "Your email address" [ref=e64]
        - button "" [ref=e65] [cursor=pointer]:
          - generic [ref=e66]: 
        - paragraph [ref=e67]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e71]: Copyright © 2021 All rights reserved
  - text: 
  - generic:
    - insertion:
      - generic:
        - iframe
  - insertion [ref=e72]:
    - iframe [ref=e75]:
      - generic [ref=f8e3]:
        - button [ref=f8e4]:
          - img [ref=f8e5]
        - generic [ref=f8e7]:
          - generic [ref=f8e9]:
            - generic [ref=f8e13]:
              - button "Play video" [ref=f8e17] [cursor=pointer]:
                - img [ref=f8e18]
              - button "Unmute video" [ref=f8e23] [cursor=pointer]
            - button "Replay" [ref=f8e30]:
              - img [ref=f8e32] [cursor=pointer]
            - img [ref=f8e37]
          - button "Learn more" [ref=f8e44] [cursor=pointer]
```

# Test source

```ts
  1   | import {test,expect} from "@playwright/test";
  2   | import {SignUp} from "../POM/signup";
  3   | //import { sign } from "node:crypto";
  4   | 
  5   | test.describe('SignUp page tests',()=>{
  6   |     let signup;
  7   | 
  8   |     test.beforeEach(async ({page})=>{
  9   |         signup=new SignUp(page);
  10  |         await signup.navigate();
  11  |     });
  12  | 
  13  |   //  test.describe.configure({ mode: 'serial' })
  14  |     test('sign up with empty email and password',async ({page})=>{
  15  |         await signup.submit();
  16  |         const isValidationVisible = await signup.name.evaluate(e => e.checkValidity());
  17  |         await expect(isValidationVisible).toBe(false);
  18  |     });
  19  | 
  20  |     test('trying to signup only with name and no email',async ({page})=>{
  21  |         await signup.fillSignUp("user121","");
  22  |         await signup.submit();
  23  |         const isEmailValid = await signup.email.evaluate(e=>e.checkValidity());
  24  |         await expect(isEmailValid).toBe(false);
  25  |     });
  26  | 
  27  |     test('trying to signup without name but only with email',async ({page})=>{
  28  |         signup.fillSignUp("","user121@gmail");
  29  |         await signup.submit();
  30  |         await expect(page).not.toHaveURL(/signup/);
  31  |     });
  32  | 
  33  |     test('trying to signup without proper email format',async ({page})=>
  34  |     {
  35  |         await signup.fillSignUp("user123","user111@");
  36  |         await signup.submit();
  37  |         const isEmailValid = await signup.email.evaluate(e=>e.checkValidity());
  38  |         await expect(isEmailValid).toBe(false);
  39  |     });
  40  | 
  41  |     test('trying to signup with valid email format and with valid name',async ({page})=>{
  42  |         await signup.fillSignUp("user1234","user1454@gmail");
  43  |         await signup.submit();
  44  |         await expect(page).toHaveURL(/signup/);
  45  |     });
  46  | 
  47  |     test('trying to signup with already existing account',async ({page})=>{
  48  |         await signup.fillSignUp("Rahul","Rahul@gmail.com");
  49  |         await signup.submit();
  50  |         await expect(page.getByText("Email Address already exist!")).toBeVisible();
  51  |     })
  52  | 
  53  | });
  54  | 
  55  | test.describe('Enter account information page testing',()=>{
  56  | 
  57  |     let signup;
  58  | 
> 59  |     test.beforeEach(async ({ page }) => {
      |          ^ Test timeout of 30000ms exceeded while running "beforeEach" hook.
  60  |         signup = new SignUp(page);
  61  |         await signup.navigate();
  62  |         
  63  |         // Automated Step 1: Get to the Account Information Page
  64  |         await signup.fillSignUp("Bharath", `user_${Date.now()}@example.com`);
  65  |         await signup.submit();
  66  |         
  67  |         // Verify we are on the Account Information page before the test starts
  68  |         await expect(page).toHaveURL(/signup/);
  69  |     });
  70  | 
  71  |     test('Testing with all mandetory fields with valid inputs',async({page})=>
  72  |     {
  73  |         await signup.fillPassword("12345@");
  74  |         await signup.personalDetails("Rahul","Kumar","abc");
  75  |         await signup.address("12-24/2,jawahar coloney","Hanumakonda","India","Telangana","Warangal","546989","9876543210");
  76  |         await signup.createAccount();
  77  |         await expect(page.getByRole("heading", {name:"Account Created!"})).toHaveText("Account Created!");
  78  |     });
  79  | 
  80  |     test('testing with all mandetory and non mandetory fields with inputs', async({page})=>
  81  |     {
  82  |         await signup.gender("Mr");
  83  |         
  84  |         await signup.fillPassword("12345@");
  85  |         await signup.dateOfBirth("25","May","1999");
  86  |         await signup.optional("true","true");
  87  |         await signup.personalDetails("Rahul","Kumar","abc");
  88  |         await signup.address("12-24/2,jawahar coloney","Hanumakonda","India","Telangana","Warangal","546989","9876543210");
  89  |         await signup.createAccount();
  90  |         await expect(page.getByRole("heading", {name:"Account Created!"})).toHaveText("Account Created!"); 
  91  |     });
  92  |     
  93  |     test('Missing the mandetory password field',async({page})=>{
  94  |         await signup.gender("Mr");
  95  |         await signup.personalDetails("Bharath","reddy");
  96  |         await signup.address("12,j -street",'k-city',"India","telangana","k-city",'123','1234567');
  97  |         await signup.createAccount();
  98  |         await expect(page.getByRole("heading", {name:"Account Created!"})).not.toBeVisible();
  99  | 
  100 |     });
  101 | 
  102 |     test('Missing the mandetory mobile number field',async({page})=>{
  103 |         await signup.gender("Mr");
  104 |         await signup.fillPassword("12345@");
  105 |         await signup.personalDetails("Bharath","reddy");
  106 |         await signup.address("12,j -street",'k-city',"India","telangana","k-city",'123',"");
  107 |         await signup.createAccount();
  108 |         const mobileInput = page.locator('#mobile_number');
  109 |         const validationMessage = await mobileInput.evaluate((el) => el.validationMessage);
  110 |         await expect(validationMessage).toBe('Please fill out this field.');
  111 |         await expect(page.getByRole("heading", {name:"Account Created!"})).not.toBeVisible();
  112 | 
  113 |     });
  114 |     
  115 |     test('Missing the Mandetory first name field',async ({page})=>{
  116 |         await signup.gender("Mr");
  117 |         await signup.fillPassword("12345@");
  118 |         await signup.personalDetails("","reddy");
  119 |         await signup.address("12,j -street",'k-city',"India","telangana","k-city",'123',"123456");
  120 |         await signup.createAccount();
  121 |         const firstNameInput = page.locator("#first_name");
  122 |         const validationMessage1=await firstNameInput.evaluate(e=>e.validationMessage);
  123 |         await expect(validationMessage1).toBe("Please fill out this field.")
  124 |       
  125 |     });
  126 | 
  127 |      test('Missing the Mandetory last name field',async ({page})=>{
  128 |         await signup.gender("Mr");
  129 |         await signup.fillPassword("12345@");
  130 |         await signup.personalDetails("Bharath","");
  131 |         await signup.address("12,j -street",'k-city',"India","telangana","k-city",'123',"123456");
  132 |         await signup.createAccount();
  133 |         const lastNameInput = page.locator("#last_name");
  134 |         const validationMessage1=await lastNameInput.evaluate(e=>e.validationMessage);
  135 |         await expect(validationMessage1).toBe("Please fill out this field.")
  136 |       
  137 |     });
  138 | 
  139 |      test('Missing the Mandetory address1 field',async ({page})=>{
  140 |         await signup.gender("Mr");
  141 |         await signup.fillPassword("12345@");
  142 |         await signup.personalDetails("Bharath","reddy");
  143 |         await signup.address("",'k-city',"India","telangana","k-city",'123',"123456");
  144 |         await signup.createAccount();
  145 |         const addressInput = page.locator("#address1");
  146 |         const validationMessage1=await addressInput.evaluate(e=>e.validationMessage);
  147 |         await expect(validationMessage1).toBe("Please fill out this field.");
  148 |       
  149 |     });
  150 | 
  151 |     test('Missing the optional address2 field',async ({page})=>{
  152 |         await signup.gender("Mr");
  153 |         await signup.fillPassword("12345@");
  154 |         await signup.personalDetails("Bharath","reddy");
  155 |         await signup.address("12,j -street",'',"India","telangana","k-city",'123',"123456");
  156 |         await signup.createAccount();
  157 |         await expect(page.getByRole("heading", {name:"Account Created!"})).toBeVisible();
  158 |         
  159 |     });
```