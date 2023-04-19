/// <reference types="cypress"/>

describe('Testando site Amazon',() =>{
    
    it ('Visitar', () =>{

        cy.visit('https://www.amazon.com.br/ap/register?showRememberMe=true&openid.pape.max_auth_age=0&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=brflex&ignoreAuthState=1&mobileBrowserWeblabTreatment=C&openid.return_to=https%3A%2F%2Fwww.amazon.com.br%2F%3Fref_%3Dnav_signin&prevRID=1NG6VE4QYAAN98Z3BHPX&openid.assoc_handle=brflex&openid.mode=checkid_setup&desktopBrowserWeblabTreatment=C&prepopulatedLoginId=&failedSignInCount=0&ref_=ap_sw_aa&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&disableLoginPrepopulate=1&switch_account=signin&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0');

        cy.wait(2000);

        cy.get('input[name="customerName"]').type('Caio Lorenzo Benedito da Mota');

        cy.wait(1000);

        cy.get('input[name="email"]').type('caio_lorenzo_damota@regional.com.br');

        cy.wait(1000);

        cy.get('input[name="password"]').type('gIuzmxcFre');

        cy.wait(1000);

        cy.get('input[name="passwordCheck"]').type('gIuzmxcFre');

        cy.wait(1000);

        cy.get('#continue').click();
    })

    

})











