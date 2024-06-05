import credentials from '../../fixtures/fixtures-demo/sauceCredentials.json';
class CheckoutProcessPage{
    static onTheCartPage(){
      cy.url().should('include', '/cart.html'); // Verifica que la URL incluye '/cart.html'
    }
    static checkoutButton(){
      cy.contains('button', 'Checkout') // Busca el botón que contiene el texto "Checkout"
    .click();
    }
    static fillFirstN(firstname) {
      cy.get('[data-test="firstName"]').type(firstname);
  }
  static fillLastN(lastname) {
    cy.get('[data-test="lastName"]').type(lastname);
  }
  static fillPostalC(postal) {
    cy.get('[data-test="postalCode"]').type(postal);
}

    static paymantInformation() {
      this.fillFirstN(credentials.firstN);
      this.fillLastN(credentials.lastN);
      this.fillPostalC(credentials.postalC);
  }
  static continueButton(){
    cy.get('[data-test="continue"]').click();
  }
  static finishButton(){
    cy.get('[data-test="finish"]').click();
  }
  static confMessage(){
    cy.contains('Thank you for your order!') // Busca el texto "THANK YOU FOR YOUR ORDER" en cualquier parte de la página
    .should('be.visible'); 
  }
}
export default CheckoutProcessPage;