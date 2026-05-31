# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: SignUp.spec.js >> Enter account information page testing >> Missing the mandetory password field
- Location: tests\SignUp.spec.js:93:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#city')
    - locator resolved to <input value="" id="city" type="text" required="" name="city" data-qa="city" class="form-control"/>
    - fill("k-city")
  - attempting fill action
    - waiting for element to be visible, enabled and editable

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for practice automation" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for practice automation" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e40]:
    - generic [ref=e41]:
      - heading "Enter Account Information" [level=2] [ref=e42]
      - generic [ref=e43]:
        - generic [ref=e44]:
          - generic [ref=e45]: Title
          - generic [ref=e47]:
            - radio "Mr." [checked] [ref=e49]
            - text: Mr.
          - generic [ref=e51]:
            - radio "Mrs." [ref=e53]
            - text: Mrs.
        - generic [ref=e54]:
          - generic [ref=e55]:
            - text: Name
            - superscript [ref=e56]: "*"
          - textbox "Name *" [ref=e57]: Bharath
        - generic [ref=e58]:
          - generic [ref=e59]:
            - text: Email
            - superscript [ref=e60]: "*"
          - textbox "Email *" [disabled] [ref=e61]: user_1779767911986@example.com
        - generic [ref=e62]:
          - generic [ref=e63]:
            - text: Password
            - superscript [ref=e64]: "*"
          - textbox "Password *" [ref=e65]
        - generic [ref=e66]:
          - generic [ref=e67]: Date of Birth
          - generic [ref=e68]:
            - combobox [ref=e71]:
              - option "Day" [selected]
              - option "1"
              - option "2"
              - option "3"
              - option "4"
              - option "5"
              - option "6"
              - option "7"
              - option "8"
              - option "9"
              - option "10"
              - option "11"
              - option "12"
              - option "13"
              - option "14"
              - option "15"
              - option "16"
              - option "17"
              - option "18"
              - option "19"
              - option "20"
              - option "21"
              - option "22"
              - option "23"
              - option "24"
              - option "25"
              - option "26"
              - option "27"
              - option "28"
              - option "29"
              - option "30"
              - option "31"
            - combobox [ref=e74]:
              - option "Month" [selected]
              - option "January"
              - option "February"
              - option "March"
              - option "April"
              - option "May"
              - option "June"
              - option "July"
              - option "August"
              - option "September"
              - option "October"
              - option "November"
              - option "December"
            - combobox [ref=e77]:
              - option "Year" [selected]
              - option "2021"
              - option "2020"
              - option "2019"
              - option "2018"
              - option "2017"
              - option "2016"
              - option "2015"
              - option "2014"
              - option "2013"
              - option "2012"
              - option "2011"
              - option "2010"
              - option "2009"
              - option "2008"
              - option "2007"
              - option "2006"
              - option "2005"
              - option "2004"
              - option "2003"
              - option "2002"
              - option "2001"
              - option "2000"
              - option "1999"
              - option "1998"
              - option "1997"
              - option "1996"
              - option "1995"
              - option "1994"
              - option "1993"
              - option "1992"
              - option "1991"
              - option "1990"
              - option "1989"
              - option "1988"
              - option "1987"
              - option "1986"
              - option "1985"
              - option "1984"
              - option "1983"
              - option "1982"
              - option "1981"
              - option "1980"
              - option "1979"
              - option "1978"
              - option "1977"
              - option "1976"
              - option "1975"
              - option "1974"
              - option "1973"
              - option "1972"
              - option "1971"
              - option "1970"
              - option "1969"
              - option "1968"
              - option "1967"
              - option "1966"
              - option "1965"
              - option "1964"
              - option "1963"
              - option "1962"
              - option "1961"
              - option "1960"
              - option "1959"
              - option "1958"
              - option "1957"
              - option "1956"
              - option "1955"
              - option "1954"
              - option "1953"
              - option "1952"
              - option "1951"
              - option "1950"
              - option "1949"
              - option "1948"
              - option "1947"
              - option "1946"
              - option "1945"
              - option "1944"
              - option "1943"
              - option "1942"
              - option "1941"
              - option "1940"
              - option "1939"
              - option "1938"
              - option "1937"
              - option "1936"
              - option "1935"
              - option "1934"
              - option "1933"
              - option "1932"
              - option "1931"
              - option "1930"
              - option "1929"
              - option "1928"
              - option "1927"
              - option "1926"
              - option "1925"
              - option "1924"
              - option "1923"
              - option "1922"
              - option "1921"
              - option "1920"
              - option "1919"
              - option "1918"
              - option "1917"
              - option "1916"
              - option "1915"
              - option "1914"
              - option "1913"
              - option "1912"
              - option "1911"
              - option "1910"
              - option "1909"
              - option "1908"
              - option "1907"
              - option "1906"
              - option "1905"
              - option "1904"
              - option "1903"
              - option "1902"
              - option "1901"
              - option "1900"
        - generic [ref=e78]:
          - checkbox "Sign up for our newsletter!" [ref=e79]
          - text: Sign up for our newsletter!
        - generic [ref=e80]:
          - checkbox "Receive special offers from our partners!" [ref=e81]
          - text: Receive special offers from our partners!
        - heading "Address Information" [level=2] [ref=e82]
        - paragraph [ref=e83]:
          - generic [ref=e84]:
            - text: First name
            - superscript [ref=e85]: "*"
          - textbox "First name *" [ref=e86]: Bharath
        - paragraph [ref=e87]:
          - generic [ref=e88]:
            - text: Last name
            - superscript [ref=e89]: "*"
          - textbox "Last name *" [ref=e90]: reddy
        - paragraph [ref=e91]:
          - generic [ref=e92]: Company
          - textbox "Company" [ref=e93]
        - paragraph [ref=e94]:
          - generic [ref=e95]:
            - text: Address
            - superscript [ref=e96]: "*"
            - text: (Street address, P.O. Box, Company name, etc.)
          - textbox "Address * (Street address, P.O. Box, Company name, etc.)" [ref=e97]: 12,j -street
        - paragraph [ref=e98]:
          - generic [ref=e99]: Address 2
          - textbox "Address 2" [ref=e100]: k-city
        - paragraph [ref=e101]:
          - generic [ref=e102]:
            - text: Country
            - superscript [ref=e103]: "*"
          - combobox "Country *" [ref=e104]:
            - option "India" [selected]
            - option "United States"
            - option "Canada"
            - option "Australia"
            - option "Israel"
            - option "New Zealand"
            - option "Singapore"
        - paragraph [ref=e105]:
          - generic [ref=e106]:
            - text: State
            - superscript [ref=e107]: "*"
          - textbox "State *" [active] [ref=e108]: telangana
        - paragraph [ref=e109]:
          - generic [ref=e110]:
            - text: City
            - superscript [ref=e111]: "*"
          - textbox "City * Zipcode *" [ref=e112]
        - paragraph [ref=e113]:
          - generic [ref=e114]:
            - text: Zipcode
            - superscript [ref=e115]: "*"
          - textbox [ref=e116]
        - paragraph [ref=e117]:
          - generic [ref=e118]:
            - text: Mobile Number
            - superscript [ref=e119]: "*"
          - textbox "Mobile Number *" [ref=e120]
        - button "Create Account" [ref=e121] [cursor=pointer]
    - insertion [ref=e123]
  - contentinfo [ref=e125]:
    - generic [ref=e130]:
      - heading "Subscription" [level=2] [ref=e131]
      - generic [ref=e132]:
        - textbox "Your email address" [ref=e133]
        - button "" [ref=e134] [cursor=pointer]:
          - generic [ref=e135]: 
        - paragraph [ref=e136]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e140]: Copyright © 2021 All rights reserved
  - link "" [ref=e141] [cursor=pointer]:
    - /url: "#top"
    - generic [ref=e142]: 
  - insertion [ref=e144]
  - insertion [ref=e146]
```

# Test source

```ts
  1   | export class SignUp {
  2   |     constructor(page)
  3   |     {
  4   |         this.page=page;
  5   |         // for initial sign up page
  6   |         this.name=page.getByPlaceholder("Name");
  7   |         this.email=page.getByPlaceholder("Email Address").nth(1);
  8   |         this.btn=page.getByRole('button',{name:"Signup"});
  9   | 
  10  |         //for account information page
  11  |         this.genderMale = page.locator("#id_gender1");
  12  |         this.genderFemale = page.locator("#id_gender2");
  13  |         this.name2 = page.locator("#name");
  14  |         this.email2= page.locator("#email");
  15  |         this.password = page.locator("#password");
  16  |         this.day = page.locator("#days");
  17  |         this.month = page.locator("#months");
  18  |         this.year = page.locator("#years");
  19  |         this.newsletter = page.locator("#newsletter");
  20  |         this.special_offers = page.locator("#option");
  21  |         this.first_name = page.locator("#first_name");
  22  |         this.last_name = page.locator("#last_name");
  23  |         this.company = page.locator("#company");
  24  |         this.address1 = page.locator("#address1");
  25  |         this.address2 = page.locator("#address2");
  26  |         this.country = page.locator("#country");
  27  |         this.state = page.locator("#state");
  28  |         this.city = page.locator("#city");
  29  |         this.zipcode = page.locator("#zipcode");
  30  |         this.mobile = page.locator("#mobile_number");
  31  |         this.createAccountBtn = page.getByRole('button', { name: "Create Account" });
  32  |     }
  33  | 
  34  |     async navigate()
  35  |     {
  36  |         await this.page.goto("https://automationexercise.com/login");
  37  |     }
  38  | 
  39  |     async fillSignUp(name,email)
  40  |     {
  41  |         await this.name.fill(name);
  42  |         await this.email.fill(email);
  43  |     }
  44  | 
  45  |     async submit()
  46  |     {
  47  |         await this.btn.click();
  48  |     }
  49  | 
  50  |     //new methods for account inforamtion
  51  |     async gender(genders)
  52  |     {
  53  |         let gender=genders;
  54  |         if(gender=="Mr")
  55  |         {
  56  |             await this.genderMale.check();
  57  |         }
  58  |         else{
  59  |             await this.genderFemale.check();
  60  |         }
  61  |     }
  62  |     async fillPassword(pass)
  63  |     {
  64  |         await this.password.fill(pass);
  65  |     }
  66  |     async dateOfBirth(day,month,year)
  67  |     {
  68  |         await this.day.selectOption(day);
  69  |         await this.month.selectOption(month);
  70  |         await this.year.selectOption(year);
  71  |     }
  72  |     async optional(news=false,offer=false)
  73  |     {
  74  |         if(news==true)
  75  |         {
  76  |             await this.newsletter.check();
  77  |         }
  78  |         if(offer==true)
  79  |         {
  80  |             await this.special_offers.check();
  81  |         }
  82  |     }
  83  |     async personalDetails(firstName,lastName,company=null)
  84  |     {
  85  |         
  86  |         await this.first_name.fill(firstName);
  87  |         await this.last_name.fill(lastName);
  88  |         if(company) await this.company.fill(company);
  89  |     }
  90  |     async address(address1,address2=null,country,state,city,zipcode,mobile)
  91  |     {
  92  |         await this.address1.fill(address1);
  93  |         if(address2) await this.address2.fill(address2);
  94  |         if(country){
  95  |             await this.country.selectOption(country);
  96  |         }else{
  97  |             await this.country.selectOption("India");
  98  |         }
  99  |         await this.state.fill(state);
> 100 |         await this.city.fill(city);
      |                         ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  101 |         await this.zipcode.fill(zipcode);
  102 |         await this.mobile.fill(mobile);
  103 |     }
  104 |     async createAccount()
  105 |     {
  106 |         await this.createAccountBtn.click();
  107 |     }
  108 | }
```