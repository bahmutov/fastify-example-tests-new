/// <reference types="cypress" />

// can you refactor the test to remove potential flake?
// can you simplify the loading element check?

describe('Page loads slowly', () => {
  beforeEach(() => {
    cy.visit('/loading.html')
  })

  it('shows the loading element', () => {
    cy.intercept('GET', '/fruit', (req) => {
      req.on('response', (res) => {
        res.setDelay(1500) // 1.5 seconds delay
      })
    }).as('fetchFruit')

    cy.get('div').contains('loading').should('be.visible')
    cy.wait('@fetchFruit')
    cy.get('div').contains('loading').should('not.exist')
  })
})
