describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('http://localhost:3000')

    // cy.get('[data-cy="username"]').type('test')
    cy.get('[data-cy="login"]')
  })
})