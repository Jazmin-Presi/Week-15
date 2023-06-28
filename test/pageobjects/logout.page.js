class logoutPage {

    get buttonLogout () {
        return $("#logout_sidebar_link");
    }

    get navBar () {
        return $("#menu_button_container > div > div.bm-menu-wrap > div.bm-menu");
    }
}

module.exports = new logoutPage();