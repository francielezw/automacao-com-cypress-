/// <reference types="cypress"/>


describe('Testando minha LP',() => {

    it('Testando o cadastro', () => {

        cy.visit ('https://api.new.mentorama.com.br/storage/media-files/QA1/M1/tarefa_1.html')

        cy.get('input[name="name"]').type('Franciele');

        cy.get('input[name="email"]').type('francielezwirtes@gmail.com');

        cy.get('input[name="phone"]').type('(96)98403-7629');

        cy.get ('button').click();
    })
    

})

