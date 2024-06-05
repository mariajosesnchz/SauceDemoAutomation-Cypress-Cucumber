class VerificationCartPage{
    static clickCart(){
        cy.get('.shopping_cart_link') // Selecciona el icono del carrito usando su clase CSS específica
        .click(); // Hace clic en el icono
    }

    static verifyCart(){
        cy.get('.cart_item') // Selecciona cada elemento del producto en el carrito
    .should('have.length.greaterThan', 0) // Verifica que hay al menos un producto en el carrito
    .each(($el) => {
      cy.wrap($el).find('.inventory_item_name') // Verifica que el nombre del producto esté visible
        .should('be.visible');
      cy.wrap($el).find('.inventory_item_price') // Verifica que el precio del producto esté visible
        .should('be.visible');
      cy.url().should('include', '/cart.html'); // Verifica que la URL contenga '/inventory-item.html'
    });

    }


}
export default VerificationCartPage;