import {test,expect} from "@playwright/test";
import {Cart} from "../POM/cart";

test.describe("Testing the Cart Functionality without login",()=>{
    let cart;
    test.beforeEach(async ({page})=>{
            cart=new Cart(page);
            await cart.navigate();
    });

   

    test("Testing the click on add cart button pops the message added to cart",async ({page})=>{
        await cart.add();
        await expect(page.getByRole("button",{name:"Continue Shopping"})).toBeVisible();
    });

    test("Testing the empty cart by directly going to cart without adding products",async({page})=>{
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

    test("Testing by adding the item from going to category",async({page})=>{
        await page.getByRole("link",{name:"Products"}).click();
        await page.getByRole("link",{name:"Women"}).click();
        await page.getByRole("link",{name:"Saree"}).click();
        await page.locator(".productinfo").first();
        await page.getByRole("link",{name:"Add to cart"}).first().click();
        await cart.continue();
        await cart.cartbtn();
        await expect(page.getByRole("link",{name:"Cotton Silk Hand Block Print Saree"})).toBeVisible();
    });    

    test("Testing by adding product to the cart directly from the search results page",async({page})=>{
        await page.getByRole("link",{name:"Products"}).click();
        await page.getByPlaceholder("Search Product").fill("Frozen Tops For Kids");
        await page.locator("#submit_search").click();
        await page.getByRole('link',{name:"View Product"}).click();
        await page.getByRole("button",{name:"Add to cart"}).click();
        await cart.continue();
        await cart.cartbtn();
        await expect(page.getByRole("link",{name:"Frozen Tops For Kids"})).toBeVisible();
    })
    
});

test.describe("Testing the Cart Functionality with login",()=>{
    let cart1;
    test.beforeEach(async ({page})=>{
            cart1=new Cart(page);
            await cart1.navigate();
    });

    test.afterEach(async({page})=>{
        await page.goto('https://automationexercise.com/view_cart');
        const deleteButtons = page.locator('.cart_quantity_delete');
        const count = await deleteButtons.count();
        for (let i = 0; i < count; i++) {
            await deleteButtons.nth(0).click(); 
             
    }
    })

    test("Testing by adding an item as a guest and then log in then the cart synchronices to it",async({page})=>{
        await cart1.add();
        await cart1.continue();
        await page.getByRole("link",{name:"Signup / Login"}).click();
        await cart1.login();
        await page.getByRole("button",{name:"Login"}).click();
        await cart1.cartbtn();
        await expect(page.getByRole("link",{name:"Blue Top"})).toBeVisible();
    });

    test("Testing the cart first by login and adding the product then logout and then re login will display the product",async({page})=>{
        await page.getByRole("link",{name:"Signup / Login"}).click();
        await cart1.login();
        await page.getByRole("button",{name:"Login"}).click();
        await cart1.add();
        await cart1.continue();
        await cart1.cartbtn();
        await expect(page.getByRole("link",{name:"Blue Top"})).toBeVisible();
        await page.getByRole("link",{name:"Logout"}).click();
        await cart1.login();
        await page.getByRole("button",{name:"Login"}).click();
        await cart1.cartbtn();
        await expect(page.getByRole("link",{name:"Blue Top"})).toBeVisible();

    })
   
});