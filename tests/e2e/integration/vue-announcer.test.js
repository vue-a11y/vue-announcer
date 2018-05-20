describe('index', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Element must be empty when page is loaded', () => {
    cy.get('[data-va="announcer"]').should('empty')
  })

  it('Should contain the default complement when the route changes', () => {
    cy.get('a[href="/about"]').click()
    cy.get('[data-va="announcer"]').should('contain', 'has loaded')
  })
})
