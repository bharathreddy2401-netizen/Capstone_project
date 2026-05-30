import {test,expect} from "@playwright/test";
import {Payment} from "../POM/payment";

test.describe('Testing the Payment Page',()=>{
    let payment;

    test.beforeEach(async ({page})=>{
        payment=new Payment(page);
        await payment.navigate();
    });

    test("Testing the Place Order Button in the checkout page",async({page})=>{
        await payment.navigate();
        await payment.login();
        await payment.add();
        await payment.continue();
        await payment.cart();
        await payment.checkoutbtn();
        await expect(payment.placeOrderBtn).toBeVisible();
    });

    test("Testing clicking on place order button redirect us to the payment page ",async({page})=>{
        await payment.placeOrder();
        await expect(page.getByRole("heading",{name:"Payment"})).toBeVisible();
    })

    test("Testing clicking of Pay and confirm Order Button without filling any details",async({page})=>{
        await payment.placeOrder();
        await page.getByRole("button",{name:"Pay and Confirm Order"}).click();
        expect(page).toHaveURL("https://automationexercise.com/payment");
    })

    test("Testing the payment page By providing all the details",async({page})=>{
        await payment.placeOrder();
        await payment.name_on_card.fill("user");
        await payment.card_Number.fill("12345");
        await payment.cvc.fill("311");
        await payment.expiration.fill("12");
        await payment.year.fill("2027");
        await page.getByRole("button",{name:"Pay and Confirm Order"}).click();
        await expect(page.getByRole("heading",{name:"Order Placed!"})).toBeVisible();
    })
    
    test("Testing the continue button clicking in the order placed page will redirect to the home page",async({page})=>{
        await payment.placeOrder();
        await payment.name_on_card.fill("user");
        await payment.card_Number.fill("12345");
        await payment.cvc.fill("311");
        await payment.expiration.fill("12");
        await payment.year.fill("2027");
        await page.getByRole("button",{name:"Pay and Confirm Order"}).click();
        await page.getByRole("link",{name:"Continue"}).click();
        await expect(page).toHaveURL("https://automationexercise.com/");
    });

    test("Testing the place order with missing card number",async({page})=>{
        await payment.placeOrder();
        await payment.name_on_card.fill("user");
        await payment.cvc.fill("311");
        await payment.expiration.fill("12");
        await payment.year.fill("2027");
        await page.getByRole("button",{name:"Pay and Confirm Order"}).click();
        expect(page).toHaveURL("https://automationexercise.com/payment");
    });

    test("Testing the place order with missing cvc input ",async({page})=>{
        await payment.placeOrder();
        await payment.name_on_card.fill("user");
        await payment.card_Number.fill("12345");
        await payment.expiration.fill("12");
        await payment.year.fill("2027");
        await page.getByRole("button",{name:"Pay and Confirm Order"}).click();
        expect(page).toHaveURL("https://automationexercise.com/payment");
    });

    test("Testing the place order with missing Expiration Month input ",async({page})=>{
        await payment.placeOrder();
        await payment.name_on_card.fill("user");
        await payment.card_Number.fill("12345");
        await payment.cvc.fill("311");
        await payment.year.fill("2027");
        await page.getByRole("button",{name:"Pay and Confirm Order"}).click();
        await expect(page).toHaveURL("https://automationexercise.com/payment");
    });

    test("Testing the place order with missing Expiration Year input ",async({page})=>{
        await payment.placeOrder();
        await payment.name_on_card.fill("user");
        await payment.card_Number.fill("12345");
        await payment.cvc.fill("311");
        await payment.expiration.fill("12");
        await page.getByRole("button",{name:"Pay and Confirm Order"}).click();
        await expect(page).toHaveURL("https://automationexercise.com/payment");
    });

    test("Testing the visibility of Download Invoice button in the order placed page",async({page})=>{
        await payment.placeOrder();
        await payment.name_on_card.fill("user");
        await payment.card_Number.fill("12345");
        await payment.cvc.fill("311");
        await payment.expiration.fill("12");
        await payment.year.fill("2027");
        await page.getByRole("button",{name:"Pay and Confirm Order"}).click();
        await expect(page.getByRole("link",{name:"Download Invoice"})).toBeVisible();

    });
    
    test("Testing the cart after the payment shows empty cart",async({page})=>{
        await payment.placeOrder();
        await payment.name_on_card.fill("user");
        await payment.card_Number.fill("12345");
        await payment.cvc.fill("311");
        await payment.expiration.fill("12");
        await payment.year.fill("2027");
        await page.getByRole("button",{name:"Pay and Confirm Order"}).click();
        await page.getByRole("link",{name: "Cart"}).click();
        await expect(page.getByText("Cart is empty!")).toBeVisible();
    });

    test("Testing back-navigation from payment page preserves checkout choices", async ({ page }) => {
        await payment.placeOrder();
        await expect(page.getByRole("heading", { name: "Payment" })).toBeVisible();
        await page.goBack();
        await expect(page.locator("#cart_info")).toBeVisible();
        await page.goForward();
        await expect(page.getByRole("heading", { name: "Payment" })).toBeVisible();
    });
});