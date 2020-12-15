// https://docs.cypress.io/api/introduction/api.html

describe('Validate Home Page', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Public API HUB')
    cy.contains('p', 'A place of public APIs.')
  })
})
