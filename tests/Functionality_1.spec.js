// @ts-check
import { test, expect } from '@playwright/test';

test.skip('SignUp with unique name and email',async({page})=>
{
  await page.goto("https://automationexercise.com/login");
  const name=page.getByPlaceholder("Name");
  const email=page.getByPlaceholder("Email Address").nth(1);
  const btn=page.getByRole('button',{name:"Signup"});

  await name.fill("User15");
  await email.fill("user31@gmail.com");
  await btn.click();
  
  const title1=page.locator(".title.text-center").nth(0);
  await expect(title1).toBeVisible();
})

test('Success full signup', async({page})=>{
   await page.goto("https://automationexercise.com/login");
  const name=page.getByPlaceholder("Name");
  const email=page.getByPlaceholder("Email Address").nth(1);
  const btn=page.getByRole('button',{name:"Signup"});

  await name.fill("User152");
  await email.fill("user313@gmail.com");
  await btn.click();
  
  const title1=page.locator(".title.text-center").nth(0);
  await expect(title1).toBeVisible();
  await page.locator("#id_gender1").check();
  const name2 = page.locator("#name");
  const email2= page.locator("#email")
  await page.locator("#password").fill("12345");
  await page.locator("#days").selectOption("12");
  await page.locator("#months").selectOption("April");
  await page.locator("#years").selectOption("1999");


  await page.locator("#first_name").fill("Bharath");
  await page.locator("#last_name").fill("Reddy");
  await page.locator("#address1").fill("12,vidhyanagar");
  await page.locator("#country").selectOption("India");
  await page.locator("#state").fill("Telangana");
  await page.locator("#city").fill("Warangal");
  await page.locator("#zipcode").fill("506008");
  await page.locator("#mobile_number").fill("9876543210");
  await page.getByRole('button', { name: 'Create Account' }).click();

  const accountCreatedHeading = page.locator('[data-qa="account-created"]');
    await expect(accountCreatedHeading).toBeVisible();
    await expect(accountCreatedHeading).toContainText('Account Created!');

    // 10. Proceed to dashboard verification step
    await page.getByRole('link', { name: 'Continue' }).click();

});



