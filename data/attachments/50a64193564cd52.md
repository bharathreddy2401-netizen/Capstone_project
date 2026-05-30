# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Payment.spec.js >> Testing the Payment Page >> Testing the place order with missing card number
- Location: tests/Payment.spec.js:56:9

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://automationexercise.com/payment"
Received: ""

Call log:
  - Expect "toHaveURL" with timeout 5000ms

```

# Test source

```ts
  1   | import {test,expect} from "@playwright/test";
  2   | import {Payment} from "../POM/payment";
  3   | 
  4   | test.describe('Testing the Payment Page',()=>{
  5   |     let payment;
  6   | 
  7   |     test.beforeEach(async ({page})=>{
  8   |         payment=new Payment(page);
  9   |         await payment.navigate();
  10  |     });
  11  | 
  12  |     test("Testing the Place Order Button in the checkout page",async({page})=>{
  13  |         await payment.navigate();
  14  |         await payment.login();
  15  |         await payment.add();
  16  |         await payment.continue();
  17  |         await payment.cart();
  18  |         await payment.checkoutbtn();
  19  |         await expect(payment.placeOrderBtn).toBeVisible();
  20  |     });
  21  | 
  22  |     test("Testing clicking on place order button redirect us to the payment page ",async({page})=>{
  23  |         await payment.placeOrder();
  24  |         await expect(page.getByRole("heading",{name:"Payment"})).toBeVisible();
  25  |     })
  26  | 
  27  |     test("Testing clicking of Pay and confirm Order Button without filling any details",async({page})=>{
  28  |         await payment.placeOrder();
  29  |         await page.getByRole("button",{name:"Pay and Confirm Order"}).click();
  30  |         expect(page).toHaveURL("https://automationexercise.com/payment");
  31  |     })
  32  | 
  33  |     test("Testing the payment page By providing all the details",async({page})=>{
  34  |         await payment.placeOrder();
  35  |         await payment.name_on_card.fill("user");
  36  |         await payment.card_Number.fill("12345");
  37  |         await payment.cvc.fill("311");
  38  |         await payment.expiration.fill("12");
  39  |         await payment.year.fill("2027");
  40  |         await page.getByRole("button",{name:"Pay and Confirm Order"}).click();
  41  |         await expect(page.getByRole("heading",{name:"Order Placed!"})).toBeVisible();
  42  |     })
  43  |     
  44  |     test("Testing the continue button clicking in the order placed page will redirect to the home page",async({page})=>{
  45  |         await payment.placeOrder();
  46  |         await payment.name_on_card.fill("user");
  47  |         await payment.card_Number.fill("12345");
  48  |         await payment.cvc.fill("311");
  49  |         await payment.expiration.fill("12");
  50  |         await payment.year.fill("2027");
  51  |         await page.getByRole("button",{name:"Pay and Confirm Order"}).click();
  52  |         await page.getByRole("link",{name:"Continue"}).click();
  53  |         await expect(page).toHaveURL("https://automationexercise.com/");
  54  |     });
  55  | 
  56  |     test("Testing the place order with missing card number",async({page})=>{
  57  |         await payment.placeOrder();
  58  |         await payment.name_on_card.fill("user");
  59  |         await payment.cvc.fill("311");
  60  |         await payment.expiration.fill("12");
  61  |         await payment.year.fill("2027");
  62  |         await page.getByRole("button",{name:"Pay and Confirm Order"}).click();
> 63  |         expect(page).toHaveURL("https://automationexercise.com/payment");
      |                      ^ Error: expect(page).toHaveURL(expected) failed
  64  |     });
  65  | 
  66  |     test("Testing the place order with missing cvc input ",async({page})=>{
  67  |         await payment.placeOrder();
  68  |         await payment.name_on_card.fill("user");
  69  |         await payment.card_Number.fill("12345");
  70  |         await payment.expiration.fill("12");
  71  |         await payment.year.fill("2027");
  72  |         await page.getByRole("button",{name:"Pay and Confirm Order"}).click();
  73  |         expect(page).toHaveURL("https://automationexercise.com/payment");
  74  |     });
  75  | 
  76  |     test("Testing the place order with missing Expiration Month input ",async({page})=>{
  77  |         await payment.placeOrder();
  78  |         await payment.name_on_card.fill("user");
  79  |         await payment.card_Number.fill("12345");
  80  |         await payment.cvc.fill("311");
  81  |         await payment.year.fill("2027");
  82  |         await page.getByRole("button",{name:"Pay and Confirm Order"}).click();
  83  |         await expect(page).toHaveURL("https://automationexercise.com/payment");
  84  |     });
  85  | 
  86  |     test("Testing the place order with missing Expiration Year input ",async({page})=>{
  87  |         await payment.placeOrder();
  88  |         await payment.name_on_card.fill("user");
  89  |         await payment.card_Number.fill("12345");
  90  |         await payment.cvc.fill("311");
  91  |         await payment.expiration.fill("12");
  92  |         await page.getByRole("button",{name:"Pay and Confirm Order"}).click();
  93  |         await expect(page).toHaveURL("https://automationexercise.com/payment");
  94  |     });
  95  | 
  96  |     test("Testing the visibility of Download Invoice button in the order placed page",async({page})=>{
  97  |         await payment.placeOrder();
  98  |         await payment.name_on_card.fill("user");
  99  |         await payment.card_Number.fill("12345");
  100 |         await payment.cvc.fill("311");
  101 |         await payment.expiration.fill("12");
  102 |         await payment.year.fill("2027");
  103 |         await page.getByRole("button",{name:"Pay and Confirm Order"}).click();
  104 |         await expect(page.getByRole("link",{name:"Download Invoice"})).toBeVisible();
  105 | 
  106 |     });
  107 |     
  108 |     test("Testing the cart after the payment shows empty cart",async({page})=>{
  109 |         await payment.placeOrder();
  110 |         await payment.name_on_card.fill("user");
  111 |         await payment.card_Number.fill("12345");
  112 |         await payment.cvc.fill("311");
  113 |         await payment.expiration.fill("12");
  114 |         await payment.year.fill("2027");
  115 |         await page.getByRole("button",{name:"Pay and Confirm Order"}).click();
  116 |         await page.getByRole("link",{name: "Cart"}).click();
  117 |         await expect(page.getByText("Cart is empty!")).toBeVisible();
  118 |     });
  119 | 
  120 |     test("Testing back-navigation from payment page preserves checkout choices", async ({ page }) => {
  121 |         await payment.placeOrder();
  122 |         await expect(page.getByRole("heading", { name: "Payment" })).toBeVisible();
  123 |         await page.goBack();
  124 |         await expect(page.locator("#cart_info")).toBeVisible();
  125 |         await page.goForward();
  126 |         await expect(page.getByRole("heading", { name: "Payment" })).toBeVisible();
  127 |     });
  128 | });
```