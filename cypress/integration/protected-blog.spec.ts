describe('When visiting blog posts', () => {

    it('should only show blog posts after authorization', () => {
        cy.visit('localhost:3000/blog')
            .get('button')
            .click()
            .wait(5000)

        cy.contains('Blog Post')

    })
})