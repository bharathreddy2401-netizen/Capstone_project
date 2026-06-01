# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: InterfaceFunctionality.spec.js >> Testing the Interface Functionality >> Testing the image slider controls change home banner contexts
- Location: tests/InterfaceFunctionality.spec.js:56:9

# Error details

```
TypeError: page.getAttribute(...).first is not a function
```

```
Error: page.getAttribute: name: expected string, got undefined
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
  21  |        await expect(page.getByRole("heading",{name:"Women - Dress Products"})).toBeVisible();
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
  41  |       const kidsCategory = page.getByRole("link", { name: "Kids" });
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
> 57  |       await expect(page.getAttribute("src").first()).toBeVisible();
      |                         ^ Error: page.getAttribute: name: expected string, got undefined
  58  |       await page.locator(".fa-angle-right").first().click();
  59  |     });
  60  | 
  61  |     test("Testing the buttom scroll up arrow button returns to the header",async({page})=>{
  62  |       await page.getByRole("link", { name: "Products" }).click();
  63  |       const subscriptionHeading = page.getByRole("heading", { name: "Subscription" });
  64  |       await subscriptionHeading.scrollIntoViewIfNeeded(); 
  65  |       await expect(subscriptionHeading).toBeVisible();
  66  |       const scrollUpArrow = page.locator("#scrollUp");
  67  |       await expect(scrollUpArrow).toBeVisible();
  68  |       await scrollUpArrow.click();
  69  |       await expect(page.getByRole("link", { name: "Home" })).toBeInViewport();
  70  |     });
  71  | 
  72  |     test("Testing the view product displays the product details without missing any data",async({page})=>{
  73  |       await page.getByRole("link", { name: "Products" }).click();
  74  |       await page.getByRole("link", { name: "View Product" }).nth(2).click();
  75  |       await expect(page.getByRole("heading",{name:"Sleeveless Dress"})).toBeVisible();
  76  |       await expect(page.getByText("Category: Women > Dress")).toBeVisible();
  77  |       await expect(page.getByText("Rs. 1000")).toBeVisible();
  78  |       await expect(page.getByText("Quantity")).toBeVisible();
  79  |       await expect(page.getByText("Availability: In Stock")).toBeVisible();
  80  |       await expect(page.getByText("Condition: New")).toBeVisible();
  81  |       await expect(page.getByText("Brand: Madame")).toBeVisible();
  82  |      
  83  |     })
  84  | 
  85  | 
  86  |     test("Testing the display of Special offer banner in product page",async({page})=>{
  87  |       await page.getByRole("link",{name:"Products"}).click();
  88  |       await expect(page.locator("#sale_image")).toBeVisible();
  89  |     });
  90  |     test("Testing clicking the product link in the header will redirect to product page",async({page})=>{
  91  |       await page.getByRole("link",{name:"Products"}).click();
  92  |       await expect(page.getByRole("heading",{name:"All Products"})).toBeVisible();
  93  |     });
  94  | 
  95  |     test("Testing the search bar Visibility in the product page",async({page})=>{
  96  |       await page.getByRole("link",{name:"Products"}).click();
  97  |       await expect(page.locator("#search_product")).toBeVisible();
  98  |     });
  99  | 
  100 |     test("Testing the Visibility of Subscription option in the buttom of the page",async({page})=>{
  101 |       await expect(page.getByRole("heading",{name:"Subscription"})).toBeVisible();
  102 |     });
  103 | 
  104 |     test("Testing the subscription block by subscribing with email",async({page})=>{
  105 |       await page.locator("#susbscribe_email").fill("Auser12345@gmail.com");
  106 |       await page.locator("#subscribe").click();
  107 |       await expect(page.locator("#success-subscribe")).toBeVisible();
  108 |     });
  109 | 
  110 |     test("Testing the subscription block with empty email field",async({page})=>{
  111 |       await page.locator("#susbscribe_email").fill("");
  112 |       await page.locator("#subscribe").click();
  113 |       await expect(page.locator("#success-subscribe")).not.toBeVisible();
  114 |     });
  115 | 
  116 |     test("Testing the Subscription block validation with wrong email format",async({page})=>{
  117 |       await page.locator("#susbscribe_email").fill("testuser@invaliddomain");
  118 |       await page.locator("#subscribe").click();
  119 |       await expect(page.locator("#success-subscribe")).not.toBeVisible();
  120 |     })
  121 | 
  122 |     test("Testing the visibility of products availability,condition and brand",async({page})=>{
  123 |       await page.getByRole("link",{name:"Products"}).click();
  124 |       await page.getByRole("link",{name:"View Product"}).first().click();
  125 |       await expect(page.getByText("Availability: In Stock")).toBeTruthy();
  126 |       await expect(page.getByText("Condition: New")).toBeTruthy();
  127 |       await expect(page.getByText("Brand: Polo")).toBeTruthy();
  128 |     });
  129 | 
  130 |     test("Testing the search functionality",async({page})=>{
  131 |       await page.getByRole("link",{name:"Products"}).click();
  132 |       await page.locator("#search_product").fill("Blue Top");
  133 |       await page.locator("#submit_search").click();
  134 |       await expect(page.getByText("Blue Top").first()).toBeVisible();
  135 |     });
  136 | 
  137 |     test("Testing Write your review block in products page for a product",async({page})=>{
  138 |       await page.getByRole("link",{name:"Products"}).click();
  139 |       await page.getByRole("link",{name:"View Product"}).first().click();
  140 |       await expect(page.getByText("Write Your Review")).toBeVisible();
  141 |       await page.getByPlaceholder("Your Name").fill("user12345");
  142 |       await page.getByPlaceholder("Email Address").first().fill("Auser1235@gmail.com");
  143 |       await page.getByPlaceholder("Add Review Here!").fill("Good product");
  144 |       await page.getByRole("button",{name:"Submit"}).click();
  145 |       await expect(page.locator(".alert-success.alert").first()).toBeVisible();
  146 |     });
  147 | 
  148 |     test("Testing the product review block by missing the Name",async({page})=>{
  149 |       await page.getByRole("link",{name:"Products"}).click();
  150 |       await page.getByRole("link",{name:"View Product"}).first().click();
  151 |       await page.getByPlaceholder("Email Address").first().fill("Auser1235@gmail.com");
  152 |       await page.getByPlaceholder("Add Review Here!").fill("Good product");
  153 |       await page.getByRole("button",{name:"Submit"}).click();
  154 |       await expect(page.locator(".alert-success.alert").first()).not.toBeVisible();
  155 |     
  156 |     });
  157 | 
```