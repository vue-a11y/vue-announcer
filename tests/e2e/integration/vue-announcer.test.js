describe('Announcer test', () => {
  before(() => {
    cy.visit('/')
  })

  it('Element must be empty when page is loaded', () => {
    cy.get('[data-va="announcer"]').should('empty')
  })

  it('Should contain the default complement when the route changes', () => {
    cy.get('a[href="/about"]').click()
    cy.get('[data-va="announcer"]').should('contain', 'has loaded')
  })

  it('Should contain the custom complement when the route changes', () => {
    cy.get('a[href="/contact"]').click()
    cy.get('[data-va="announcer"]').should('contain', 'has fully loaded')
  })

  it('Should handle setting the custom complement multiple times', () => {
    cy.get('a[href="/contact"]').click()
    cy.get('[data-va="announcer"]').should('contain', 'has fully loaded')

    cy.get('a[href="/about"]').click()
    cy.get('[data-va="announcer"]').should('contain', 'has loaded')
  })

  it('Should be equal error message with the announced', () => {
    cy.get('a[href="/about"]').click()
    cy.get('[data-va="handler-error-button"]').click()
    cy.get('[data-va="msg-error"]').should('not.be.empty')

    cy.get('[data-va="msg-error"]')
      .then(el => {
        cy.get('[data-va="announcer"]').should('contain', el.text().trim())
        cy.get('[data-va="announcer"]').should('have.attr', 'aria-live', 'assertive')
      })
  })
})
