/// <reference types="Cypress" />

const URL = 'http://192.168.0.14:8080'


context('test', () =>{

    before(() => {
        cy.visit(URL)
    })

    describe('Ingresa un grupo familiar', () => {
        let familia1 = 2
        it('Usa a la familia1', () => {
            cy.get('#cantidad-familiares').type(familia1)
            cy.get('#siguiente-paso').click()
            cy.get('.integrante').should('have.length', familia1)
            
            cy.get('.integrante input').eq(0).type('20') //con eq(n) se toma el elemento en de orden n con el mismo nombre
            cy.get('.integrante input').eq(1).type('25')
            cy.get('#calcular').click()

            cy.get('#mayor-edad').should('have.text', '25')
            cy.get('#menor-edad').should('have.text', '20')
            cy.get('#promedio-edad').should('have.text', '22.5')

        })
    })
})
