import {test,expect} from "@playwright/test";
import {Interface} from "../POM/interface";

test.describe("Testing the Contact us Functionality",()=>{
    let display;
    test.beforeEach(async ({page})=>{
            display=new Interface(page);
            await display.navigate();
    });

    test("Testing interface dispaly of home page",async({page})=>{
       await expect(display.home_heading).toBeVisible();
       await expect(display.home_category).toBeVisible();
       await expect(display.home_brands).toBeVisible();
       await expect(display.home_feature).toBeVisible();
    });

    test("Testing clicking on Women-Dress redirect to Women dresses",async({page})=>{
       await page.getByRole("link",{name:"Women"}).click();
       await page.getByRole("link",{name:"Dress"}).click();
       await expect(page.getByRole("heading",{name:"Women - Dress Products"})).toBeVisible();
       await expect(page.getByText("Sleeveless Dress")).toBeTruthy();
       await expect(page.getByText("Stylish Dress")).toBeTruthy();
       await expect(page.getByText("Rose Pink Embroidered Maxi Dress")).toBeTruthy();
    });

    test("Testing clicking on Men takes us to men dresses",async({page})=>{
      await page.getByRole("link",{name:"Men"}).nth(1).click();
      await page.getByRole("link",{name:"Tshirts"}).click();
      await expect(page.getByRole("heading",{name:"Men - Tshirts Products"})).toBeVisible();
      await expect(page.getByText("Men Tshirt")).toBeTruthy();
      await expect(page.getByText("Pure Cotton V-Neck T-Shirt")).toBeTruthy();
      await expect(page.getByText("Green Side Placket Detail T-Shirt")).toBeTruthy();
      await expect(page.getByText("Premium Polo T-Shirts")).toBeTruthy();
      await expect(page.getByText("Pure Cotton Neon Green Tshirt")).toBeTruthy();
      await expect(page.getByText("Graphic Design Men T Shirt-Blue")).toBeTruthy();
    });

    test("Testing clicking the product link in the header will redirect to product page",async({page})=>{
      await page.getByRole("link",{name:"Products"}).click();
      await expect(page.getByRole("heading",{name:"All Products"})).toBeVisible();
    });

    test("Testing the search bar Visibility in the product page",async({page})=>{
      await page.getByRole("link",{name:"Products"}).click();
      await expect(page.locator("#search_product")).toBeVisible();
    });

    test("Testing the Visibility of Subscription option in the buttom of the page",async({page})=>{
      await expect(page.getByRole("heading",{name:"Subscription"})).toBeVisible();
    });

    test("Testing the subscription block by subscribing with email",async({page})=>{
      await page.locator("#susbscribe_email").fill("Auser12345@gmail.com");
      await page.locator("#subscribe").click();
      await expect(page.locator("#success-subscribe")).toBeVisible();
    });

    test("Testing the visibility of products availability,condition and brand",async({page})=>{
      await page.getByRole("link",{name:"Products"}).click();
      await page.getByRole("link",{name:"View Product"}).first().click();
      await expect(page.getByText("Availability: In Stock")).toBeTruthy();
      await expect(page.getByText("Condition: New")).toBeTruthy();
      await expect(page.getByText("Brand: Polo")).toBeTruthy();
    });

    test("Testing the search functionality",async({page})=>{
      await page.getByRole("link",{name:"Products"}).click();
      await page.locator("#search_product").fill("Blue Top");
      await page.locator("#submit_search").click();
      await expect(page.getByText("Blue Top").first()).toBeVisible();
    });

    test("Testing Write your review block in products page for a product",async({page})=>{
      await page.getByRole("link",{name:"Products"}).click();
      await page.getByRole("link",{name:"View Product"}).first().click();
      await expect(page.getByText("Write Your Review")).toBeVisible();
      await page.getByPlaceholder("Your Name").fill("user12345");
      await page.getByPlaceholder("Email Address").first().fill("Auser1235@gmail.com");
      await page.getByPlaceholder("Add Review Here!").fill("Good product");
      await page.getByRole("button",{name:"Submit"}).click();
      await expect(page.locator(".alert-success.alert").first()).toBeVisible();
    });
});