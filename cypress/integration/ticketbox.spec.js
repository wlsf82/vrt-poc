describe('Ticketbox', function() {
  beforeEach(() => cy.visit('index.html'))

  it('successfully submits the form', function() {
    const { test } = this
    const { title } = test
    cy.vrt(`${title} - initial state`)
    cy.get('#first-name').type('Walmyr')
    cy.get('#last-name').type('Lima e Silva Filho')
    cy.get('#email').type('walmyr@example.com')
    cy.get('#agree').check()
    cy.vrt(`${title} - mandatory fields filled`)
    cy.contains('button', 'Confirm Tickets').click()
    cy.get('.success').should('be.visible')
    cy.vrt(`${title} - sent`)
  })

  it('does not accept invalid email format', function() {
    const { test } = this
    const { title } = test
    cy.get('#email').type('walmyr$example.com')
    cy.vrt(title)
  })
})
