class inventoryPage {

    get buttonAddCart (){
        return $('#add-to-cart-sauce-labs-backpack');
    }

    get inventory(){
        return $('#inventory_container')
    }

    get addBag() {
        return $("#add-to-cart-sauce-labs-backpack");
    }

    get removeBag() {
        return $("#remove-sauce-labs-backpack");
    }

    get shopCart() {
        return $("#shopping_cart_container > a");
    }
   
    get continueShop() {
        return $("#continue-shopping");
    }
   
    get bagDescription() {
        return $("#inventory_item_container > div > div > div.inventory_details_desc_container > div.inventory_details_desc.large_size");
    }

    get sortMenu() {
        return $("#header_container > div.header_secondary_container > div > span");
    }

    get sortAZ() {
        return $("#header_container > div.header_secondary_container > div > span > select > option:nth-child(1)");
    }

    get sortZA() {
        return $("#header_container > div.header_secondary_container > div > span > select > option:nth-child(2)");
    }

    get sortLowHigh() {
        return $("#header_container > div.header_secondary_container > div > span > select > option:nth-child(3)");
    }

    get sortHighLow() {
        return $("#header_container > div.header_secondary_container > div > span > select > option:nth-child(4)");
    }

    get buttonBurguer() {
        return $("#react-burger-menu-btn")
    }
}
    
module.exports = new inventoryPage();