describe('My First Test', () => {
  it('Visits the website', () => {
    cy.visit('http://localhost:3000')

    // cy.get('[data-cy="username"]').type('test')
    cy.get('[data-cy="login"]')
  })
})

describe('Register', () => {
  it('Can register', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="register"]').click()

    cy.get('[data-cy="name"]').type("    ")
    cy.get('[data-cy="nameError"]').should('have.text', 'Please enter a name')

    cy.get('[data-cy="email"]').type('test@mail')
    cy.get('[data-cy="emailError"]').should('have.text', 'Not valid email address')

    cy.get('[data-cy="password"]').type('badpass')
    cy.get('[data-cy="passwordError"]').should('include.text', 'Password must be at least 8 characters long')
    cy.get('[data-cy="passwordError"]').should('include.text', 'Password must contain at least 1 capital letter')
    // cy.get('[data-cy="passwordError"]').should('include.text', 'Password must contain at least 1 lowercase letter')
    cy.get('[data-cy="passwordError"]').should('include.text', 'Password must contain at least 1 number')
  })

})