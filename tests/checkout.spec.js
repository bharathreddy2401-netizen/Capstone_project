import {test,expect} from "@playwright/test";
import {checkout} from "../POM/checkout";

test.describe("Testing the checkout functionality of the automation exercise",()=>{
    let checkout;
    test.beforeEach(async ({page})=>{
        checkout=new CheckOut(page);
        await checkout.navigate();
     });

     test("Testing the missing checkout button on the cart page when cart is empty", async({page})=>{
        
     })
    
})