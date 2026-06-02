# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ContactUs.spec.js >> Testing the Contact us Functionality >> Testing the Page refresh completely empties the form when it is filled partially
- Location: tests/ContactUs.spec.js:107:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Contact us' })
    - waiting for navigation to finish...
    - navigated to "https://automationexercise.com/"

```

# Page snapshot

```yaml
- generic [ref=e4]: Please wait while your request is being verified...
```

# Test source

```ts
  1  | export class Contact
  2  | {
  3  |     constructor(page)
  4  |     {
  5  |         this.page = page;
  6  |         this.contactBtn = page.getByRole("link",{name:"Contact us"});
  7  |     }
  8  | 
  9  |     async navigate()
  10 |     {
  11 |         await this.page.goto("https://automationexercise.com/");
  12 |     }
  13 |     
  14 |     async contactus()
  15 |     {
> 16 |         await this.contactBtn.click();
     |                               ^ Error: locator.click: Test timeout of 30000ms exceeded.
  17 |     }
  18 | }
```