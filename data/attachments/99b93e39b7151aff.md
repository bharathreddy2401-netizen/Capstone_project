# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Deletion.spec.js >> Testing the Account Delete Functionality >> Testing the visibility of Delete Account button in the home page
- Location: tests/Deletion.spec.js:15:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText(/Logged in as/)
Expected: visible
Timeout: 7000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 7000ms
  - waiting for getByText(/Logged in as/)

```

```yaml
- banner:
  - link "Website for automation practice":
    - /url: /
    - img "Website for automation practice"
  - list:
    - listitem:
      - link " Home":
        - /url: /
    - listitem:
      - link " Products":
        - /url: /products
    - listitem:
      - link " Cart":
        - /url: /view_cart
    - listitem:
      - link " Signup / Login":
        - /url: /login
    - listitem:
      - link " Test Cases":
        - /url: /test_cases
    - listitem:
      - link " API Testing":
        - /url: /api_list
    - listitem:
      - link " Video Tutorials":
        - /url: https://www.youtube.com/c/AutomationExercise
    - listitem:
      - link " Contact us":
        - /url: /contact_us
- heading "Login to your account" [level=2]
- textbox "Email Address": bh1@1
- textbox "Password": "1"
- paragraph: Your email or password is incorrect!
- button "Login"
- heading "OR" [level=2]
- heading "New User Signup!" [level=2]
- textbox "Name"
- textbox "Email Address"
- button "Signup"
- contentinfo:
  - heading "Subscription" [level=2]
  - textbox "Your email address"
  - button ""
  - paragraph: Get the most recent updates from our site and be updated your self...
  - paragraph: Copyright © 2021 All rights reserved
- insertion:
  - iframe
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
  17 |         await delete1.login();
> 18 |         await expect(page.getByText(/Logged in as/)).toBeVisible({ timeout: 7000 });
     |                                                      ^ Error: expect(locator).toBeVisible() failed
  19 |         await expect(page.getByRole("link",{name:"Delete Account"})).toBeVisible();
  20 |     });
  21 | 
  22 |     test("Testing the clicking on account delete button deletes our account and displays account deleted",async({page})=>{
  23 |         await delete1.createAccount();
  24 |         await page.getByRole("link",{name:"Delete Account"}).click();
  25 |         await expect(page.getByRole("heading",{name:"Account Deleted"})).toBeVisible();
  26 |         //await delete1.createAccount();
  27 |     });
  28 | 
  29 |     test("testing the continue button click",async({page})=>{
  30 |         await delete1.createAccount();
  31 |         await page.getByRole("link",{name:"Delete Account"}).click();
  32 |         await page.getByRole("link",{name:"Continue"}).click();
  33 |         await expect(page.getByText("Category")).toBeVisible();
  34 |     });
  35 | 
  36 |     test("testing the UI header changes upon successful account deletion",async({page})=>{
  37 |         await delete1.createAccount();
  38 |         await expect(page.getByText("Logged in as bh")).toBeVisible();
  39 |         await page.getByRole("link", { name: "Delete Account" }).click();
  40 |         await expect(page.getByText("Logged in as bh")).not.toBeVisible();
  41 |         await expect(page.getByRole("link", { name: "Logout" })).not.toBeVisible();
  42 |     });
  43 | 
  44 |     test("testing the data clearing by immediate re registration of the deleted email address",async({page})=>{
  45 |         await delete1.createAccount();
  46 |         await page.getByRole("link", { name: "Delete Account" }).click();
  47 |         await page.getByRole("link", { name: "Continue" }).click();
  48 |         await page.getByRole("link", { name: "Signup / Login" }).click();
  49 |         await delete1.signup();
  50 |         await expect(page.getByText("Enter Account Information")).toBeVisible();
  51 |     });
  52 | 
  53 |     test("Testing the account to be re created with the same email after a successful account deletion",async({page})=>{
  54 |         await delete1.createAccount();
  55 |         await page.getByRole("link", { name: "Delete Account" }).click();
  56 |         await expect(page.getByRole("heading", { name: "Account Deleted" })).toBeVisible();
  57 |         await page.getByRole("link", { name: "Continue" }).click();
  58 |         await page.getByRole("link", { name: "Signup / Login" }).click();
  59 |         await delete1.signup();
  60 |         await expect(page.locator("#password")).toBeVisible();
  61 |     });
  62 | 
  63 |     test("Testing by attempting to log in with a newly deleted account",async({page})=>{
  64 |         await delete1.createAccount();
  65 |         
  66 |         await page.getByRole("link", { name: "Delete Account" }).click();
  67 |         await expect(page.getByRole("heading", { name: "Account Deleted!" })).toBeVisible();
  68 |         await page.getByRole("link", { name: "Continue" }).click();
  69 |         await page.getByRole("link", { name: "Signup / Login" }).click();
  70 |         await delete1.login();
  71 |         await expect(page.getByText(/Your email or password is incorrect/i)).toBeVisible();
  72 |     })
  73 | });
```