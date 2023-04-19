/// <reference types="cypress"/>

describe('Testando minha LP',() =>{
    
    it ('Visitar', () =>{

        cy.visit('https://api.new.mentorama.com.br/storage/media-files/QA1/M4/tarefa_1.html')

        cy.wait(2000);


        cy.get('input[name="name"]').type('Flavio Augusto');

        cy.wait(1000);

        cy.get('input[name="height"]').type('155');

        cy.wait(1000);

        cy.get('input[name="weight"]').type('68');
        
        cy.wait(1000);
        
        cy.get('button').click();
    })

    

})
