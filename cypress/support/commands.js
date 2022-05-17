Cypress.Commands.add('vrt', title => {
  cy.vrtStart()
  cy.vrtTrack(title)
  cy.vrtStop()
})
