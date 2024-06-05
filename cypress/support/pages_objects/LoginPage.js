import credentials from '../../fixtures/fixtures-demo/sauceCredentials.json';

class LoginPage {
    static visit() {
        cy.visit('https://www.saucedemo.com/');
    }

    static fillUsername(username) {
        cy.get('[data-test="username"]').type(username);
    }

    static fillPassword(password) {
        cy.get('[data-test="password"]').type(password);
    }

    static clickLoginButton() {
        cy.get('[data-test="login-button"]').click();
    }

    static getErrorMessage() {
        return cy.get('[data-test="error"]');
    }

    static loginWithValidCredentials() {
        this.fillUsername(credentials.standardUsername);
        this.fillPassword(credentials.systemPassword);
        
    }

    static loginWithInvalidCredentials() {
        this.fillUsername(credentials.dummyUsername);
        this.fillPassword(credentials.dummyPassword);
        
    }
}

export default LoginPage;
