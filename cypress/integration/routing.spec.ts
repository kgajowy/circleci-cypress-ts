// things to cover

/**
 * Base Routing
 * Clicking on elements/flows
 * viewports testing forEach
 * CI with artifacts?
 * CircleCI workflows (separate jest & cypress)
 * some tests with inputs
 * some tests with neat features of cy
 *
 *
 */

describe('Main Navigation', () => {
    it('Contains navigation entries', () => {
        cy.visit('localhost:3000')
        cy.contains(/To get started/)
    })
})