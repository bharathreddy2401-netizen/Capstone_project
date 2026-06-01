import {test,expect} from "@playwright/test";
import {Delete} from "../POM/deletion";

test.describe("Testing the Account Delete Functionality",()=>{
    let delete1;
    test.beforeEach(async ({page})=>{
            delete1=new Delete(page);
            await delete1.navigate();
    });

    test("Testing the non visibilty of account delete button in guest mode",async({page})=>{
         await expect(page.getByText("Delete Account")).not.toBeVisible();
    });

    test("Testing the visibility of Delete Account button in the home page",async({page})=>{
        await page.getByRole("link",{name:"Signup / Login"}).click();
        await delete1.login();
        await expect(page.getByRole("link",{name:"Delete Account"})).toBeVisible();
    });

    test("Testing the clicking on account delete button deletes our account and displays account deleted",async({page})=>{
        await delete1.createAccount();
        await page.getByRole("link",{name:"Delete Account"}).click();
        await expect(page.getByRole("heading",{name:"Account Deleted"})).toBeVisible();
        //await delete1.createAccount();
    });

    test("testing the continue button click",async({page})=>{
        await delete1.createAccount();
        await page.getByRole("link",{name:"Delete Account"}).click();
        await page.getByRole("link",{name:"Continue"}).click();
        await expect(page.getByText("Category")).toBeVisible();
    });

    test("testing the UI header changes upon successful account deletion",async({page})=>{
        await delete1.createAccount();
        await expect(page.getByText("Logged in as bh")).toBeVisible();
        await page.getByRole("link", { name: "Delete Account" }).click();
        await expect(page.getByText("Logged in as bh")).not.toBeVisible();
        await expect(page.getByRole("link", { name: "Logout" })).not.toBeVisible();
    });

    test("testing the data clearing by immediate re registration of the deleted email address",async({page})=>{
        await delete1.createAccount();
        await page.getByRole("link", { name: "Delete Account" }).click();
        await page.getByRole("link", { name: "Continue" }).click();
        await page.getByRole("link", { name: "Signup / Login" }).click();
        await delete1.signup();
        await expect(page.getByText("Enter Account Information")).toBeVisible();
    });

    test("Testing the account to be re created with the same email after a successful account deletion",async({page})=>{
        await delete1.createAccount();
        await page.getByRole("link", { name: "Delete Account" }).click();
        await expect(page.getByRole("heading", { name: "Account Deleted" })).toBeVisible();
        await page.getByRole("link", { name: "Continue" }).click();
        await page.getByRole("link", { name: "Signup / Login" }).click();
        await delete1.signup();
        await expect(page.locator("#password")).toBeVisible();
    });
});