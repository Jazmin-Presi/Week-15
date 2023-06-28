const checkoutPage= '../pageobjects/checkoutPage.js'
const loginPage= "../pageobjects/loginPage.js";
const inventoryPage= "../pageobjects/inventoryPage.js";

describe("Checkout with standard user", () => {
    beforeAll("Open browser", () => {
      browser.url("https://www.saucedemo.com");
    });

    it ('User successfull login', async() =>{
        await expect(loginPage.logoLogin).toBeDisplayed()
        await expect (loginPage.buttonLogin).toBeDisplayed();
        await expect (loginPage.passwordInput).toBeDisplayed();
        await expect (loginPage.userInput).toBeDisplayed();
        await loginPage.enterCredentials("standard_user", "secret_sauce");
        await loginPage.buttonLoginClick();
    });

    it ("Go to home page", async ()=>{
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        await expect (inventoryPage.inventory).toBeDisplayed();
        await expect (inventoryPage.shopCart).toBeDisplayed();
        await expect (inventoryPage.buttonAddCart).toBeDisplayed();
    });

    it("Add a product", async () => {
        await inventoryPage.addBag.click();
        await inventoryPage.shopCart.click();
    });

    it ("Go to Checkout page", async ()=>{
        await checkoutPage.buttonCheckout.click();
        await expect(browser).toHaveUrl("https://www.saucedemo.com/checkout-step-one.html");
    });
  
    it ("Fill Inputs", async ()=>{
         await expect (checkoutPage.formCheckout).toBeDisplayed();
         await checkoutPage.nameInputCheckout.setValue("pepito");
         await checkoutPage.lastNameInputCheckout.setValue("pepon");
         await checkoutPage.zipInputCheckout.setValue("2000");
         await checkoutPage.continueCheckout.click();
    });

    it("Finish checkout process", async ()=> {
        await checkoutPage.finishCheckout.click();
        await expect(browser).toHaveUrl("https://www.saucedemo.com/checkout-complete.html");
    });

});