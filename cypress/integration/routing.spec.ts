// things to cover

/**
 * Base Routing
 * Clicking on elements/flows
 * viewports testing forEach
 * CI with artifacts?
 *
 *
 *
 */

describe('Main Navigation', () => {
    it('Contains navigation entries', () => {
        cy.visit('localhost:3000')
        cy.contains(/To get started/)
    })
})