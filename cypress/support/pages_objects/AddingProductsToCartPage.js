class addingProductsToCartPage{
    static addToCart(productName){
        
        cy.contains('.inventory_item', productName).within(() => {
            cy.get('button').then(($button) => {
              if ($button.text() === 'Add to cart') {
                cy.wrap($button).click();
              } else if ($button.text() === 'Remove') {
                // El producto ya está en el carrito, no necesitamos hacer nada.
              }
            });
          });
           // Selecciona el contenedor del producto específico y encuentra el botón dentro de ese contenedor
          
    
          
    }
    static remove(){
        cy.contains('.inventory_item_name', 'Sauce Labs Backpack') // Busca el nombre del producto
        .parents('.inventory_item') // Encuentra el elemento padre que contiene toda la información del producto
        .find('.btn_inventory') // Busca el botón dentro del elemento padre
        .contains('Remove') // Busca el botón de remover
        .click(); // Haz clic en el botón de remover  
    }

}
export default addingProductsToCartPage