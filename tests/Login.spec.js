import {test,expect} from "@playwright/test";
import {Login} from "../POM/login";

test.describe('Testing the Login Page',()=>{
    let login;

    test.beforeEach(async ({page})=>{
        login=new Login(page);
        await login.navigate();
    });

    test('Testing the login page with valid email and password',async({page})=>{
        await login.filllogin("Auser12345@gmail.com","user12345");
        await login.clickLogin();
        await expect(page.getByText('Home')).toBeVisible();
    });

    test('Testing the Login page and checking our name in Logged in as',async ({page})=>{
        await login.filllogin("Auser12345@gmail.com","user12345");
        await login.clickLogin();
        await expect(page.getByText('Logged in as user12345')).toBeVisible();
    
    });

    test('the header Logout button logouts user instantly',async ({page})=>{
        await login.filllogin("Auser12345@gmail.com","user12345");
        await login.clickLogin();
        await expect(page.getByText('Logged in as user12345')).toBeVisible();
        await page.getByRole("link",{name:"Logout"}).click();
        await expect(page.getByRole("heading",{name:"Login to your account"})).toBeVisible();
    });

    test("Testing access rejection when attempting authentication with a non-registered email",async ({page})=>{
        await login.filllogin("qwert@123","1234");
        await login.clickLogin();
        await expect(page.getByRole("paragraph",{name:"Your email or password is incorrect!"}));
    });

    test("Testing access rejection when inputting a valid email with an invalid password",async ({page})=>{
        await login.filllogin("Auser12345@gmail.com","1234");
        await login.clickLogin();
        await expect(page.getByRole("paragraph",{name:"Your email or password is incorrect!"}));
    });

    test("Testing password By changing case-sensitivity",async ({page})=>{
        await login.filllogin("Auser12345@gmail.com","User12345");
        await login.clickLogin();
        await expect(page.getByRole("paragraph",{name:"Your email or password is incorrect!"}));
        //await page.waitForTimeout(5000);
    });

    test("Testing Login Page with empty email",async({page})=>{
        await login.filllogin("","User12345");
        await login.clickLogin();
        const email =  page.getByPlaceholder("Email Address").first();
        const isValid = await email.evaluate((e)=>e.validationMessage);
        await expect(isValid).toContain("Please fill out this field");
    });

    test("Testing the login page  with empty password",async({page})=>{
        await login.filllogin("Auser12345@gmail.com","");
        await login.clickLogin();
        const password = page.getByPlaceholder("password");
        const isvalid = await password.evaluate((e)=>e.validationMessage);
        await expect(isvalid).toContain("Please fill out this field");
    });

    test("Testing the login page with empty email and password",async({page})=>{
        await login.filllogin("","");
        await login.clickLogin();
        const email =  page.getByPlaceholder("Email Address").first();
        const password = page.getByPlaceholder("password");
        const isValid = await email.evaluate((e)=>e.validationMessage);
        await expect(isValid).toContain("Please fill out this field");
    });

    test("Testing Refresh with also preserve the login details",async ({page})=>{
        await login.filllogin("Auser12345@gmail.com","user12345");
        await login.clickLogin();
        await expect(page.getByText('Logged in as user12345')).toBeVisible();
        await page.reload();
        await expect(page.getByText('Logged in as user12345')).toBeVisible();
    });

    test("Testing opening a new tab will save our login info", async ({page})=>{
        await login.filllogin("Auser12345@gmail.com","user12345");
        await login.clickLogin();
        await expect(page.getByText('Logged in as user12345')).toBeVisible();

        const context = page.context();

        const newTab = await context.newPage();
        await newTab.goto("https://automationexercise.com");
        await expect(newTab.getByText('Logged in as user12345')).toBeVisible();
       // await page.waitForTimeout(5000);
    });

    test("Testing mid-journey login does not discard existing guest user cart additions",async({page})=>{
        await page.goto("https://automationexercise.com/");
        const firstProductAddToCart = page.locator('.add-to-cart').first();
        await firstProductAddToCart.click();
        await page.getByRole("link", {name: "View Cart"}).click();

        const guestCartItem = page.locator('#cart_info_table tbody tr').first();
        await expect(guestCartItem).toBeVisible(); 
    
         // Grab the name of the product to verify it survives the login journey
        const guestProductName = await guestCartItem.locator('.cart_description h4').innerText();
        await page.getByRole('link', { name: 'Signup / Login' }).click();
        await login.filllogin("Auser12345@gmail.com", "user12345");
        await login.clickLogin();
        await expect(page.getByText('Logged in as user12345')).toBeVisible();
        await page.getByRole('link', { name: ' Cart' }).first().click(); 

        const postLoginCartItem = page.locator('#cart_info_table tbody tr').first();
        await expect(postLoginCartItem).toBeVisible();
    
        const postLoginProductName = await postLoginCartItem.locator('.cart_description h4').innerText();
        await expect(postLoginProductName).toBe(guestProductName);
    });


})