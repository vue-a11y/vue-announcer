describe('Announcer test', () => {
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

  it('Should be equal toasted message with the announced', () => {
    cy.get('a[href="/about"]').click()
    cy.get('[data-va="toasted"]').click()

    cy.get('.toasted-container')
        .find('.toasted')
        .invoke('text')
        .then(text1 => {
          cy.get('[data-va="announcer"]').invoke('text').should(text2 => {
            console.log(text1, text2)
            expect(text1).to.eq(text2)
          })
        })
  })
})
