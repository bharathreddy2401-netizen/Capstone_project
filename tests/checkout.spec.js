import {test,expect} from "@playwright/test";
import {CheckOut} from "../POM/checkout";


test.describe("Testing the checkout functionality of the automation exercise",()=>{
    let checkout;
    test.beforeEach(async ({page})=>{
        checkout=new CheckOut(page);
        await checkout.navigate();
            
     });
     

     test("Testing the Checkout button on the cart page when cart has products", async({page})=>{
        await checkout.add();
        await checkout.continue();
        await checkout.cart();
        await expect(page.getByText('Proceed To Checkout')).toBeVisible();
     });

     test("Testing the missing checkout button on the cart page when cart is empty", async({page})=>{
        await checkout.cart();
        await expect(page.getByText("Proceed To Checkout")).not.toBeVisible();
        await expect(page.getByText("Cart is empty!")).toBeVisible();

     });

     test("Testing the Login before checkout",async({page})=>{
         await checkout.add();
         await checkout.continue();
         await checkout.cart();
         await checkout.checkoutbtn();
         await expect(page.getByRole("link",{name:"Register / Login"})).toBeVisible();
     });

     test("Testing the Register/login button if we checkout without login",async({page})=>{
         await checkout.add();
         await checkout.continue();
         await checkout.cart();
         await checkout.checkoutbtn();
         await page.getByRole("link",{name:"Register / Login"}).click();
         await expect(page.getByRole("heading",{name:'Login to your account'})).toBeVisible();
     });
    
     test("Testing the display of Delivery Address",async({page})=>{
        await page.getByRole("link",{name:"Login"}).click();
        await checkout.login();
        await checkout.add();
        await checkout.continue();
        await checkout.cart();
        await checkout.checkoutbtn();
        await expect(page.getByRole("heading",{name: "Your delivery address"})).toBeVisible();

     });

     test("Testing the display of your billing address",async({page})=>{
        await page.getByRole("link",{name:"Login"}).click();
        await checkout.login();
        await checkout.add();
        await checkout.continue();
        await checkout.cart();
        await checkout.checkoutbtn();
        await expect(page.getByRole("heading",{name:"Your billing address"})).toBeVisible();
     });

     test("Testing the Delivery address details contents are visible",async({page})=>{
        await page.getByRole("link",{name:"Login"}).click();
        await checkout.login();
        await checkout.cart();
        await checkout.checkoutbtn();
        await expect(page.locator(".address_firstname.address_lastname").first()).toBeVisible();
        await expect(page.locator(".address_address1.address_address2").first()).toBeVisible();
        await expect(page.locator(".address_address1.address_address2").nth(1)).toBeVisible();
        await expect(page.locator(".address_city.address_state_name.address_postcode").first()).toBeVisible();
        await expect(page.locator(".address_country_name").first()).toBeVisible();
        await expect(page.locator(".address_phone").first()).toBeVisible();

     });

     test("Testing the Diaplay of Total amount",async({page})=>{
        await page.getByRole("link",{name:"Login"}).click();
        await checkout.login();
        await checkout.cart();
        await checkout.checkoutbtn();
        await expect(page.locator(".cart_total_price").nth(1)).toBeVisible();
     });

     test("Testing the Place Order Button redirect to payment page",async({page})=>{
        await page.getByRole("link",{name:"Login"}).click();
        await checkout.login();
        await checkout.cart();
        await checkout.checkoutbtn();
        await page.getByRole("link",{name:"Place Order"}).click();
        await expect(page.getByRole("heading",{name:"Payment"})).toBeVisible();
     });

     test("Testing the Your Billing address to be same as your billing address",async({page})=>{
        await page.getByRole("link",{name:"Login"}).click();
        await checkout.login();
        await checkout.cart();
        await checkout.checkoutbtn();
        await expect(page.locator(".address_firstname.address_lastname").nth(1)).toHaveText("Mr. user 12345");
        await expect(page.locator(".address_address1.address_address2").first()).toHaveText("abc"); 
        await expect(page.locator(".address_address1.address_address2").nth(1)).toHaveText("12-34/5");
        await expect(page.locator(".address_city.address_state_name.address_postcode").nth(1)).toHaveText("Delhi Telangana 12345");
        await expect(page.locator(".address_country_name").nth(1)).toHaveText("India");
        await expect(page.locator(".address_phone").nth(1)).toHaveText("9876543210");
     });

     test("Testing the Review your order after checkout button",async ({page})=>{
        await page.getByRole("link",{name:"Login"}).click();
        await checkout.login();
        await checkout.cart();
        await checkout.checkoutbtn();
        await expect(page.getByRole("heading",{name: "Review Your Order"})).toBeVisible();
     })

     test("Testing clicking on the order in checkout page redirects to the products page",async({page})=>{
        await page.getByRole("link",{name:"Login"}).click();
        await checkout.login();
        await checkout.cart();
        await checkout.checkoutbtn();
        await page.getByRole("link",{name:"Blue Top"}).click();
        await expect(page.getByRole("heading",{name:"Blue Top"})).toBeVisible();
     })

     test("Testing checking the total amount in case of multiple items in cart at checkout",async({page})=>{
        await page.getByRole("link",{name:"Login"}).click();
        await checkout.login();
        await page.getByRole("link",{name: "View Product"}).nth(6).click();
        await page.getByRole("button",{name:"Add to cart"}).click();
        await checkout.continue();
        await checkout.cart();
        await checkout.checkoutbtn();
        await expect(page.locator(".cart_total_price").nth(2)).toBeVisible();//toHaveText(/1500/);
     })
});