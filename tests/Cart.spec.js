import {test,expect} from "@playwright/test";
import {Cart} from "../POM/cart";

test.describe("Testing the Cart Functionality",()=>{
    let cart;
    test.beforeEach(async ({page})=>{
            cart=new Cart(page);
            await cart.navigate();
    });

    test.afterEach(async({page})=>{
        await page.goto('https://automationexercise.com/view_cart');
        const deleteButtons = page.locator('.cart_quantity_delete');
        const count = await deleteButtons.count();
        for (let i = 0; i < count; i++) {
            await deleteButtons.nth(0).click(); 
             
    }
    })

    test("Testing the click on add cart button pops the message added to cart",async ({page})=>{
        await cart.add();
        await expect(page.getByRole("button",{name:"Continue Shopping"})).toBeVisible();
    });

    test("Testing the empty cart by directly going to cart without addin products",async({page})=>{
        await cart.cartbtn();
        await expect(page.locator("#empty_cart p b")).toHaveText(/Cart is empty!/);
    });

    test("testing cart by adding the same product multiple times and checking the updation in quantity",async({page})=>{
        await cart.add();
        await cart.continue();
        //await page.getByRole("button",{name:"Continue Shopping"}).click();
        await cart.cartbtn();
        await expect(page.locator("#cart_info_table tbody tr .disabled")).toHaveText("1");
        await cart.navigate();
        await cart.add();
        await cart.continue();
        await cart.cartbtn();
        await expect(page.locator("#cart_info_table tbody tr .disabled")).toHaveText("2");
        
    });

    test("Removing of products from the cart",async({page})=>{
        await cart.add();
        await page.getByRole("button",{name:"Continue Shopping"}).click();
        await cart.cartbtn();
        await page.locator(".cart_delete a i.fa.fa-times").click();
        await expect(page.locator("#empty_cart .text-center")).toHaveText(/Cart is empty!/);

    });

    test("Testing the price updation on adding same item into the cart",async({page})=>{
        await cart.add();
        await cart.continue();
        //await page.getByRole("button",{name:"Continue Shopping"}).click();
        await cart.cartbtn();
        const firstPrice = page.locator("#cart_info table tbody tr .cart_price p");
        await expect(firstPrice).toHaveText(/500/);
    });

    test("Testing the multiplied price of products in the cart is correct",async ({page})=>{
        await cart.add();
        await cart.continue();
        await cart.add();
        await cart.continue();
        await cart.cartbtn();
        await expect(page.locator("#cart_info_table tbody tr td p.cart_total_price")).toHaveText(/1000/);
    });

    test("Testing By adding different products into the cart",async({page})=>{
        await cart.add();
        await cart.continue();
        await cart.addTshirt();
        await cart.continue();
        await cart.cartbtn();
        await expect(page.getByRole("link",{name:"Blue Top"})).toBeVisible();
        await expect(page.getByRole("link",{name: "Men Tshirt"})).toBeVisible();
    });

    test("Testing the cart products to be visible in multiple browser tabs", async({context,page})=>{
        await cart.add();
        await cart.continue();
        const page2 = await context.newPage();
        const cartTab2 = new Cart(page2);
        await cartTab2.navigate();
        await cartTab2.cartbtn();
        await expect(page2.getByRole("link",{name:"Blue Top"})).toBeVisible();
    });
  
    test("Testing the clicking of item in cart directs us to the product page of that item",async({page})=>{
        await cart.add();
        await cart.continue();
        await cart.cartbtn(); 
        await page.getByRole("link",{name:"Blue Top"}).click();
        await expect(page.getByRole("heading",{name:"Blue Top"})).toBeVisible(); 
    })

    test("Testing the Updation of products in product page will update the cart",async({page})=>{
        await page.getByRole("link",{name:"View Product"}).nth(3).click();
        await page.locator("#quantity").fill("5");
        await page.getByRole("button",{name:"Add to cart"}).click();
        await cart.continue();
        await cart.cartbtn();
        await expect(page.locator("#product-4 td button.disabled")).toHaveText("5");
    });
    
    test("Testing cart state when we reload the page",async({page})=>{
        await cart.add();
        await cart.continue();
        await cart.cartbtn();
        await expect(page.getByRole("link", { name: "Blue Top" })).toBeVisible();
        await page.reload();
        await expect(page.getByRole("link", { name: "Blue Top" })).toBeVisible();
        await page.waitForTimeout(5000);

    });

})