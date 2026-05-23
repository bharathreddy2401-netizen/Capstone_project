import {test,expect} from "@playwright/test";
import {SignUp} from "../POM/signup";
//import { sign } from "node:crypto";

test.describe('SignUp page tests',()=>{
    let signup;

    test.beforeEach(async ({page})=>{
        signup=new SignUp(page);
        await signup.navigate();
    });

  //  test.describe.configure({ mode: 'serial' })
    test('sign up with empty email and password',async ({page})=>{
        await signup.submit();
        const isValidationVisible = await signup.name.evaluate(e => e.checkValidity());
        await expect(isValidationVisible).toBe(false);
    });

    test('trying to signup only with name and no email',async ({page})=>{
        await signup.fillSignUp("user121","");
        await signup.submit();
        const isEmailValid = await signup.email.evaluate(e=>e.checkValidity());
        await expect(isEmailValid).toBe(false);
    });

    test('trying to signup without name but only with email',async ({page})=>{
        signup.fillSignUp("","user121@gmail");
        await signup.submit();
        await expect(page).not.toHaveURL(/signup/);
    });

    test('trying to signup without proper email format',async ({page})=>
    {
        await signup.fillSignUp("user123","user111@");
        await signup.submit();
        const isEmailValid = await signup.email.evaluate(e=>e.checkValidity());
        await expect(isEmailValid).toBe(false);
    });

    test('trying to signup with valid email format and with valid name',async ({page})=>{
        await signup.fillSignUp("user1234","user1454@gmail");
        await signup.submit();
        await expect(page).toHaveURL(/signup/);
    });

    test('trying to signup with already existing account',async ({page})=>{
        await signup.fillSignUp("Rahul","Rahul@gmail.com");
        await signup.submit();
        await expect(page.getByText("Email Address already exist!")).toBeVisible();
    })

});

test.describe('Enter account information page testing',()=>{

    let signup;

    test.beforeEach(async ({ page }) => {
        signup = new SignUp(page);
        await signup.navigate();
        
        // Automated Step 1: Get to the Account Information Page
        await signup.fillSignUp("Bharath", `user_${Date.now()}@example.com`);
        await signup.submit();
        
        // Verify we are on the Account Information page before the test starts
        await expect(page).toHaveURL(/signup/);
    });

    test('Testing with all mandetory fields with valid inputs',async({page})=>
    {
        await signup.fillPassword("12345@");
        await signup.personalDetails("Rahul","Kumar","abc");
        await signup.address("12-24/2,jawahar coloney","Hanumakonda","India","Telangana","Warangal","546989","9876543210");
        await signup.createAccount();
        await expect(page.getByRole("heading", {name:"Account Created!"})).toHaveText("Account Created!");
    });

    test('testing with all mandetory and non mandetory fields with inputs', async({page})=>
    {
        await signup.gender("Mr");
        
        await signup.fillPassword("12345@");
        await signup.dateOfBirth("25","May","1999");
        await signup.optional("true","true");
        await signup.personalDetails("Rahul","Kumar","abc");
        await signup.address("12-24/2,jawahar coloney","Hanumakonda","India","Telangana","Warangal","546989","9876543210");
        await signup.createAccount();
        await expect(page.getByRole("heading", {name:"Account Created!"})).toHaveText("Account Created!"); 
    });
    
    test('Missing the mandetory password field',async({page})=>{
        await signup.gender("Mr");
        await signup.personalDetails("Bharath","reddy");
        await signup.address("12,j -street",'k-city',"India","telangana","k-city",'123','1234567');
        await signup.createAccount();
        await expect(page.getByRole("heading", {name:"Account Created!"})).not.toBeVisible();

    });

    test('Missing the mandetory mobile number field',async({page})=>{
        await signup.gender("Mr");
        await signup.fillPassword("12345@");
        await signup.personalDetails("Bharath","reddy");
        await signup.address("12,j -street",'k-city',"India","telangana","k-city",'123',"");
        await signup.createAccount();
        const mobileInput = page.locator('#mobile_number');
        const validationMessage = await mobileInput.evaluate((el) => el.validationMessage);
        await expect(validationMessage).toBe('Please fill out this field.');
        await expect(page.getByRole("heading", {name:"Account Created!"})).not.toBeVisible();

    });
    
    test('Missing the Mandetory first name field',async ({page})=>{
        await signup.gender("Mr");
        await signup.fillPassword("12345@");
        await signup.personalDetails("","reddy");
        await signup.address("12,j -street",'k-city',"India","telangana","k-city",'123',"123456");
        await signup.createAccount();
        const firstNameInput = page.locator("#first_name");
        const validationMessage1=await firstNameInput.evaluate(e=>e.validationMessage);
        await expect(validationMessage1).toBe("Please fill out this field.")
      
    });

     test('Missing the Mandetory last name field',async ({page})=>{
        await signup.gender("Mr");
        await signup.fillPassword("12345@");
        await signup.personalDetails("Bharath","");
        await signup.address("12,j -street",'k-city',"India","telangana","k-city",'123',"123456");
        await signup.createAccount();
        const lastNameInput = page.locator("#last_name");
        const validationMessage1=await lastNameInput.evaluate(e=>e.validationMessage);
        await expect(validationMessage1).toBe("Please fill out this field.")
      
    });

     test('Missing the Mandetory address1 field',async ({page})=>{
        await signup.gender("Mr");
        await signup.fillPassword("12345@");
        await signup.personalDetails("Bharath","reddy");
        await signup.address("",'k-city',"India","telangana","k-city",'123',"123456");
        await signup.createAccount();
        const addressInput = page.locator("#address1");
        const validationMessage1=await addressInput.evaluate(e=>e.validationMessage);
        await expect(validationMessage1).toBe("Please fill out this field.");
      
    });

    test('Missing the optional address2 field',async ({page})=>{
        await signup.gender("Mr");
        await signup.fillPassword("12345@");
        await signup.personalDetails("Bharath","reddy");
        await signup.address("12,j -street",'',"India","telangana","k-city",'123',"123456");
        await signup.createAccount();
        await expect(page.getByRole("heading", {name:"Account Created!"})).toBeVisible();
        
    });

    test('Missing the Mandetory state field',async ({page})=>{
        await signup.gender("Mr");
        await signup.fillPassword("12345@");
        await signup.personalDetails("Bharath","reddy");
        await signup.address("12,j -street",'k-city',"India","","k-city",'123',"123456");
        await signup.createAccount();
        const stateInput = page.locator("#state");
        const validationMessage1=await stateInput.evaluate(e=>e.validationMessage);
        await expect(validationMessage1).toBe("Please fill out this field.");
                
    });

    test('Missing the Mandetory city field',async ({page})=>{
        await signup.gender("Mr");
        await signup.fillPassword("12345@");
        await signup.personalDetails("Bharath","reddy");
        await signup.address("12,j -street",'k-city',"India","Telangana","",'123',"123456");
        await signup.createAccount();
        const cityInput = page.locator("#city");
        const validationMessage1=await cityInput.evaluate(e=>e.validationMessage);
        await expect(validationMessage1).toBe("Please fill out this field.");
       // await page.waitForTimeout(5000);        
    });

    test('Missing the Mandetory zipcode field',async ({page})=>{
        await signup.gender("Mr");
        await signup.fillPassword("12345@");
        await signup.personalDetails("Bharath","reddy");
        await signup.address("12,j -street",'k-city',"India","Telangana","k-city",'',"123456");
        await signup.createAccount();
        const zipInput = page.locator("#zipcode");
        const validationMessage1=await zipInput.evaluate(e=>e.validationMessage);
        await expect(validationMessage1).toBe("Please fill out this field.");
       // await page.waitForTimeout(5000);        
    });

    test('Missing the Mandetory Country field',async ({page})=>{
        await signup.gender("Mr");
        await signup.fillPassword("12345@");
        await signup.personalDetails("Bharath","reddy");
        await signup.address("12,j -street",'k-city',"","Telangana","k-city",'123',"123456");
        await signup.createAccount();
        await expect(page.getByRole("heading", {name:"Account Created!"})).toBeVisible();
        
        //await page.waitForTimeout(5000);        
    });

})