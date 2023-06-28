class LoginPage {
    
    get logoLogin() {
        return $("#root > div > div.login_logo");
    }

    get userInput() {
        return $("#user-name");
    }

    get passwordInput() {
        return $("#password");
    }

    get buttonLogin() {
        return $("#login-button");
    }

    get errorWrongMatch() {
        return $("#login_button_container > div > form > div.error-message-container.error")
    }

    get errorLocked() {
        return $("#login_button_container > div > form > div.error-message-container.error")
    }

    async buttonLoginClick() {
        await this.loginButton.click ();
    }

    async enterCredentials(username, password) {
        await this.userInput.setValue(username);
        await this.passwordInput.addValue(password);
    }
}

module.exports = new LoginPage();
