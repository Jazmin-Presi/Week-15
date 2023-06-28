/* const LoginPage= "../pageobjects/loginPage.js";
const inventoryPage= "../pageobjects/inventoryPage.js";

describe ("Login user with valid credentials", () => {
    beforeAll("Open browser", () =>{
        browser.url("https://www.saucedemo.com");
    });
   
    it ('User successfull login with valid credentials', async() =>{
        await expect(LoginPage.logoLogin).toBeDisplayed()
        await expect (LoginPage.buttonLogin).toBeDisplayed();
        await expect (LoginPage.passwordInput).toBeDisplayed();
        await expect (LoginPage.userInput).toBeDisplayed();
        await LoginPage.enterCredentials("standard_user", "secret_sauce");
        await LoginPage.buttonLoginClick();
    });

    it ("Go to home page", async ()=>{
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        await expect (inventoryPage.inventory).toBeDisplayed();
        await expect (inventoryPage.shopCart).toBeDisplayed();
        await expect (inventoryPage.buttonAddCart).toBeDisplayed();
     });
})

describe ("Unsuccessfull login with invalid credentials", ()=> {
    beforeAll("Open browser", ()=> {
        browser.url("https://www.saucedemo.com/");
    });

    it ("Display error when entering wrong credentials", async ()=>{
        await expect (LoginPage.buttonLogin).toBeDisplayed();
        await expect (LoginPage.passwordInput).toBeDisplayed();
        await expect (LoginPage.userInput).toBeDisplayed();
        await LoginPage.enterCredentials("pepito", "pepon");
        await LoginPage.buttonLoginClick();
        await expect(LoginPage.errorWrongMatch).toBeDisplayed();
    });
})

describe ("Unsuccessfull login with locked out user", ()=> {
    beforeAll("Open browser", ()=> {
        browser.url("https://www.saucedemo.com/");
    });
   
    it ("Display error when you try to login with locked out user", async ()=>{
       await expect (LoginPage.buttonLogin).toBeDisplayed();
       await expect (LoginPage.passwordInput).toBeDisplayed();
       await expect (LoginPage.userInput).toBeDisplayed();
       await LoginPage.enterCredentials("locked_out_user", "secret_sauce");
       await LoginPage.buttonLoginClick();
       await expect(LoginPage.errorLocked).toBeDisplayed();
    });
})

describe ("Login with problem user", ()=> {
    beforeAll("Open browser", ()=> {
        browser.url("https://www.saucedemo.com/");
    });
   
    it ("Problem user login", async ()=>{
       await expect (LoginPage.buttonLogin).toBeDisplayed();
       await expect (LoginPage.passwordInput).toBeDisplayed();
       await expect (LoginPage.userInput).toBeDisplayed();
       await LoginPage.enterCredentials("problem_user", "secret_sauce");
       await LoginPage.buttonLoginClick();
    });
})

describe ("Login with glitched user", ()=> {
    beforeAll("Open browser", ()=> {
        browser.url("https://www.saucedemo.com/");
    });
   
    it ("Glitched user login", async ()=>{
        const startTime = Date.now();
        const finishTime = Date.now();
        const durationTime = finishTime - startTime;
        await expect (LoginPage.buttonLogin).toBeDisplayed();
        await expect (LoginPage.passwordInput).toBeDisplayed();
        await expect (LoginPage.userInput).toBeDisplayed();
        await LoginPage.enterCredentials("performance_glitch_user", "secret_sauce");
        await LoginPage.buttonLoginClick();
        await expect(durationTime).toBeLessThan(3000);
        console.log(`Login duration time: ${durationTime} ms`);
    });
    
}); */

        