/// <reference types="cypress"/>

require('@cypress/xpath');

describe('Testando site Amazon',() =>{
    
    it ('Visitar', () =>{

        cy.visit('https://www.amazon.com.br/');

        cy.wait(2000);

        cy.get('input[name="field-keywords"]').type('relógios');

        cy.wait(1000);

        cy.get('input[id="nav-search-submit-button"]').click ();

        cy.xpath('/html/body/div[1]/div[2]/div[1]/div[1]/div/span[1]/div[1]/div[4]/div/div/div/div/div/div/div[1]/div/span/a/div/img').click();

        cy.wait(1000);

        cy.get('input[id="add-to-cart-button"]').click();

        cy.get('span[id="nav-cart-count"]').click();

        cy.get('input[name="proceedToRetailCheckout"]').click();



      
    })

})
