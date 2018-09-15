// things to cover

/**
 * Base Routing
 * Clicking on elements/flows
 * viewports testing forEach
 * some tests with inputs
 * some tests with neat features of cy
 *
 *
 */

describe('Main Navigation', () => {
    it('Contains navigation entries', () => {
        cy.visit('localhost:3000/about')
        cy.contains(/About me/)
    })
})