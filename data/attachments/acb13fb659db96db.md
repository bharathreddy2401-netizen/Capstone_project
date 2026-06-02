# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Deletion.spec.js >> Testing the Account Delete Functionality >> Testing the clicking on account delete button deletes our account and displays account deleted
- Location: tests/Deletion.spec.js:24:9

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Delete Account' })

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link [ref=e8]:
        - /url: /
        - img [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link [ref=e14]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link [ref=e17]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link [ref=e20]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link [ref=e23]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link [ref=e26]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link [ref=e29]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link [ref=e32]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link [ref=e35]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e40]:
    - heading [level=2] [ref=e41]: Account Created!
    - paragraph [ref=e42]: Congratulations! Your new account has been successfully created!
    - paragraph [ref=e43]: You can now take advantage of member privileges to enhance your online shopping experience with us.
    - link [active] [ref=e45] [cursor=pointer]:
      - /url: /
      - text: Continue
  - contentinfo [ref=e46]:
    - generic [ref=e51]:
      - heading [level=2] [ref=e52]: Subscription
      - generic [ref=e53]:
        - textbox [ref=e54]:
          - /placeholder: Your email address
        - button [ref=e55] [cursor=pointer]:
          - generic [ref=e56]: 
        - paragraph [ref=e57]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=e61]: Copyright © 2021 All rights reserved
  - text: 
```

# Test source

```ts
  1  | import {test,expect} from "@playwright/test";
  2  | import {Delete} from "../POM/deletion";
  3  | 
  4  | test.describe("Testing the Account Delete Functionality",()=>{
  5  |     let delete1;
  6  |     test.beforeEach(async ({page})=>{
  7  |             delete1=new Delete(page);
  8  |             await delete1.navigate();
  9  |     });
  10 | 
  11 |     test("Testing the non visibilty of account delete button in guest mode",async({page})=>{
  12 |          await expect(page.getByText("Delete Account")).not.toBeVisible();
  13 |     });
  14 | 
  15 |     test("Testing the visibility of Delete Account button in the home page",async({page})=>{
  16 |         await page.getByRole("link",{name:"Signup / Login"}).click();
  17 |         await delete1.createAccount();
  18 |         await expect(page.getByText(/Logged in as/)).toBeVisible({ timeout: 7000 });
  19 |         await expect(page.getByRole("link",{name:"Delete Account"})).toBeVisible();
  20 |         await page.getByRole("link",{name:"Delete Account"}).click();
  21 |  
  22 |     });
  23 | 
  24 |     test("Testing the clicking on account delete button deletes our account and displays account deleted",async({page})=>{
  25 |         await delete1.createAccount();
> 26 |         await page.getByRole("link",{name:"Delete Account"}).click();
     |                                                              ^ Error: locator.click: Test timeout of 60000ms exceeded.
  27 |         await expect(page.getByRole("heading",{name:"Account Deleted"})).toBeVisible();
  28 |         //await delete1.createAccount();
  29 |     });
  30 | 
  31 |     test("testing the continue button click",async({page})=>{
  32 |         await delete1.createAccount();
  33 |         await page.getByRole("link",{name:"Delete Account"}).click();
  34 |         await page.getByRole("link",{name:"Continue"}).click();
  35 |         await expect(page.getByText("Category")).toBeVisible();
  36 |     });
  37 | 
  38 |     test("testing the UI header changes upon successful account deletion",async({page})=>{
  39 |         await delete1.createAccount();
  40 |         await expect(page.getByText("Logged in as bh")).toBeVisible();
  41 |         await page.getByRole("link", { name: "Delete Account" }).click();
  42 |         await expect(page.getByText("Logged in as bh")).not.toBeVisible();
  43 |         await expect(page.getByRole("link", { name: "Logout" })).not.toBeVisible();
  44 |     });
  45 | 
  46 |     test("testing the data clearing by immediate re registration of the deleted email address",async({page})=>{
  47 |         await delete1.createAccount();
  48 |         await page.getByRole("link", { name: "Delete Account" }).click();
  49 |         await page.getByRole("link", { name: "Continue" }).click();
  50 |         await page.getByRole("link", { name: "Signup / Login" }).click();
  51 |         await delete1.signup();
  52 |         await expect(page.getByText("Enter Account Information")).toBeVisible();
  53 |     });
  54 | 
  55 |     test("Testing the account to be re created with the same email after a successful account deletion",async({page})=>{
  56 |         await delete1.createAccount();
  57 |         await page.getByRole("link", { name: "Delete Account" }).click();
  58 |         await expect(page.getByRole("heading", { name: "Account Deleted" })).toBeVisible();
  59 |         await page.getByRole("link", { name: "Continue" }).click();
  60 |         await page.getByRole("link", { name: "Signup / Login" }).click();
  61 |         await delete1.signup();
  62 |         await expect(page.locator("#password")).toBeVisible();
  63 |     });
  64 | 
  65 |     test("Testing by attempting to log in with a newly deleted account",async({page})=>{
  66 |         await delete1.createAccount();
  67 |         
  68 |         await page.getByRole("link", { name: "Delete Account" }).click();
  69 |         await expect(page.getByRole("heading", { name: "Account Deleted!" })).toBeVisible();
  70 |         await page.getByRole("link", { name: "Continue" }).click();
  71 |         await page.getByRole("link", { name: "Signup / Login" }).click();
  72 |         await delete1.login();
  73 |         await expect(page.getByText(/Your email or password is incorrect/i)).toBeVisible();
  74 |     })
  75 | });
```