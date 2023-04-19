/// <reference types="cypress"/>

describe('Testando minha LP',() =>{
    
    it ('Visitar', () =>{

        cy.viewport(1500, 1700)

        cy.visit('https://surpreenda.naotempreco.com.br/cadastro')

        cy.wait(2000);

        cy.get('#onetrust-accept-btn-handler').click();

        cy.wait(1000);


        cy.get('input[name="name"]').type('Flavio Augusto');

        cy.wait(1000);

        cy.get('input[name="lastName"]').type('Soares');

        cy.wait(1000);

        cy.get('input[name="cpf"]').type('489.922.010-36');

        cy.wait(1000);

        cy.get('.registerButtons').children('button').click();
    })

    

})





