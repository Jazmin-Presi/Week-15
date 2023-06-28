const loginPage= "../pageobjects/loginPage.js";
const inventoryPage= "../pageobjects/inventoryPage.js";

describe("Standard user add/remove product", () => {
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

    it("Filter by name A to Z", async () => {
      await inventoryPage.sortMenu.click();
      await inventoryPage.sortAZ.click();
    });

    it("Filter by name Z to A", async () => {
      await inventoryPage.sortMenu.click();
      await inventoryPage.sortZA.click();
    });

    it("Filter by price low to high", async () => {
      await inventoryPage.sortMenu.click();
      await inventoryPage.sortLowHigh.click();
    });

    it("Filter by price high to low", async () => {
      await inventoryPage.sortMenu.click();
      await inventoryPage.sortHighLow.click();
    });

    it("From home page add and remove a product", async () => {
      await inventoryPage.addBag.click();
      await inventoryPage.shopCart.click();
      await inventoryPage.removeBag.click();
      await inventoryPage.continueShop.click();
    });

    it("From product's description page add and remove product", async () => {
      await inventoryPage.addBag.click();
      await inventoryPage.shopCart.click();
      await inventoryPage.bagDescription.toExist();
      await inventoryPage.removeBag.click();
      await inventoryPage.continueShop.click();
    });
});