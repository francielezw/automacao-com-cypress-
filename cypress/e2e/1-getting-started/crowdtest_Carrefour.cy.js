/// <reference types="cypress"/>

require('@cypress/xpath');

describe('Testando site Americanas',() =>{
    
    it ('Visitar', () =>{

        cy.visit('https://www.carrefour.com.br/auth/login?');

        cy.wait(2000);

        cy.get('input[id="inputEmail"]').type('pablolunardi@gmail.com');

        


    })



})







