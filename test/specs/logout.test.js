/* const LoginPage= "../pageobjects/loginPage.js";
const inventoryPage= "../pageobjects/inventoryPage.js";
const LogoutPage= "../pageobjects/logout.page.js";

describe ("Login and Log out process", () => {
    beforeAll("Open browser", () =>{
        browser.url("https://www.saucedemo.com");
    });
   
    it ('User login to the page', async() =>{
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
     
    it('Log out from the page', async ()=> {
        await inventoryPage.buttonBurguer.click();
        await expect (logoutPage.navBar).toBeDisplayed();
        await MenuPage.buttonLogout.click();
        await expect(browser).toHaveUrl("https://www.saucedemo.com/");
    })    
}) */