import {test,expect} from "@playwright/test";
import {Contact} from "../POM/contactus";

test.describe("Testing the Contact us Functionality",()=>{
    let contact;
    test.beforeEach(async ({page})=>{
            contact=new Contact(page);
            await contact.navigate();
    });

    test.skip("Testing the visibility of contact us button in the home page ",async({page})=>{
        await expect(page.getByRole("link",{name:"Contact us"})).toBeVisible();
    })

    test.skip("Testing clicking the contact us button direct to contact us page",async({page})=>{
        await contact.contactus();
        await expect(page).toHaveURL("https://automationexercise.com/contact_us");
    })

    test.skip("Testing the Visibility of Get in touch form after clicking the contact us button",async({page})=>{
        await contact.contactus();
        await expect(page.getByRole("heading",{name:"Get In Touch"})).toBeVisible();
    })

    test("Submitting the form by filling all the details",async({page})=>{
        await contact.contactus();
        await page.getByPlaceholder("Name").fill("User12345");
        await page.getByPlaceholder("Email").first().fill("User12345@gmail.com");
        await page.getByPlaceholder("Subject").fill("Greetings");
        await page.getByPlaceholder("Your Message Here").fill("Hello Good Morning");
        page.on('dialog',async dialog =>{
            await dialog.accept();
        })
        await page.locator('input[name="submit"]').click();
        await expect(page.locator(".status.alert.alert-success")).toHaveText("Success! Your details have been submitted successfully.");
       
    });

    

});