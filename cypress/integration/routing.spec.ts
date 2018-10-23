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
        cy
            .setCookie('gdpr_permission_given', '1')
            .visit('https://allegro.pl/kategoria/pokoj-dzieciecy-meble-17273?order=m')
            .get('article[data-item=true]')
            .first()
            .click()
            .get('#add-to-cart-button')
            .click()
            .get('#add-to-cart-si-precart')
            .click()
            .get('.m-input')
            .type('0')
            .get('.cart-quantity').should('have.value', '10')


    })
})