
class inventoryNavigationPage{
    
    static inventoryPage() {
        cy.get('.app_logo').should('have.text', 'Swag Labs');
    }

    static listOfProducts() {
        cy.get('.inventory_item').should('have.length.greaterThan', 0);
        cy.get('.inventory_item').each(($product) => {
            cy.wrap($product).within(() => {
              cy.get('.inventory_item_img').should('be.visible'); 
              cy.get('.inventory_item_name').should('be.visible'); 
              cy.get('.inventory_item_desc').should('be.visible');
              cy.get('.inventory_item_price').should('be.visible'); 
            });
          });
    }

    static cartIcon(quantity){
        cy.get('.shopping_cart_badge') // Ajusta este selector según tu página
        .should('have.text', quantity); // Verifica que el texto del ícono sea '1'
    }

    
    static verifyCart(){
        cy.get('.shopping_cart_badge') // Selecciona el icono del carrito
        .should('not.exist'); // Verifica que el icono del carrito no esté presente en la página
    }

    static priceLowToHigh(){
        cy.get('.product_sort_container') // Selecciona el dropdown de ordenamiento
        .select('lohi'); // Selecciona la opción por su valor en el atributo 'value'
    }

    static ascendingOrder(){
        cy.get('.inventory_item_price') // Selecciona los elementos que contienen los precios de los productos
        .then($prices => {
        const prices = $prices.map((index, el) => parseFloat(Cypress.$(el).text().replace('$', ''))).get();
      // Obtiene los precios como un array de números
        const sortedPrices = [...prices].sort((a, b) => a - b); // Ordena los precios en orden ascendente
        expect(prices).to.deep.equal(sortedPrices); // Comprueba que los precios estén ordenados correctamente
    });
    }
    static orderByNameAtoZ(){
        cy.get('.product_sort_container')
  .contains('option', 'Name (A to Z)')
  .then(option => {
    cy.get('.product_sort_container').select(option.val());
  });   
    }

    static alphabeticalOrder(){
        cy.get('.inventory_item_name')
        .then($items => {
          const itemNames = $items.map((index, html) => Cypress.$(html).text()).get();
          const sortedNames = [...itemNames].sort((a, b) => a.localeCompare(b));
          expect(itemNames).to.deep.equal(sortedNames);
        });
    }

    static productName(){
        cy.contains('.inventory_item_name', 'Sauce Labs Backpack') // Busca el elemento que contiene el nombre del producto
        .click(); // Hace clic en el elemento
    }
    static productDetailPage(){
        cy.url().should('include', '/inventory-item.html'); // Verifica que la URL contenga '/inventory-item.html'
    }

    static inventoryItemDetails(){
        cy.get('.inventory_details_container') // Selecciona el contenedor de detalles del producto
    .should('be.visible') // Verifica que el contenedor esté visible
    .within(() => { // Realiza las siguientes verificaciones dentro del contenedor
      cy.get('.inventory_details_name').should('be.visible'); // Verifica que el nombre del producto esté visible
      cy.get('.inventory_details_img').should('be.visible').and('have.attr', 'src').should('include', '/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg'); // Verifica que la imagen esté visible y tenga el src correcto
      cy.get('.inventory_details_desc').should('be.visible'); // Verifica que la descripción esté visible
      cy.get('.inventory_details_price').should('be.visible'); // Verifica que el precio esté visible
    });
    }
    static backToProducts(){
        cy.get('.inventory_details_back_button') // Selecciona el botón usando su clase CSS específica
        .click(); // Hace clic en el botón
    }
    static menuBurger(){
        cy.get('.bm-burger-button')
        .click();
    }
    static logOut(){
        cy.get('[data-test="logout-sidebar-link"]') // Selecciona el enlace de logout usando un atributo de datos personalizado
        .click(); // Hace clic en el enlace
    }
    static verifyLoginPage(){
        cy.url().should('eq', 'https://www.saucedemo.com/')
    }

}
export default inventoryNavigationPage;