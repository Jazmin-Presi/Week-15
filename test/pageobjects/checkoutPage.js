class checkoutPage{
    
    get buttonCheckout() { 
        return $("#checkout");
    }

    get formCheckout() { 
        return $("#checkout_info_container > div > form > div.checkout_info");
    }

    get nameInputCheckout() { 
        return $("#first-name");
    }
    
    get lastNameInputCheckout() { 
        return $("#last-name"); 
    }
    
    get zipInputCheckout() { 
        return $("#postal-code");
    }
    get continueCheckout() { 
        return $("#continue");
    }

    get finishCheckout() { 
        return $("#finish");
    }
    
}

module.exports = new checkoutPage();