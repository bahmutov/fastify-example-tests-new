/// <reference types="cypress" />

describe('Adding two numbers', () => {
  it('verifies the server data and controls the numbers received by the page', () => {
    // change the plain network stub to first verify the server response
    // - a single object with a single property "n" containing a number between 1 and 10
    // then return "known" numbers for the two requests
    cy.intercept(
      {
        pathname: '/random-digit',
        times: 1,
      },
      { n: 7 },
    ).as('secondNumber')
    cy.intercept(
      {
        pathname: '/random-digit',
        times: 1,
      },
      { n: 3 },
    ).as('firstNumber')
    cy.visit('/add/index.html')
    cy.wait(['@firstNumber', '@secondNumber'])
    cy.get('#addition.loaded').within(() => {
      cy.get('#num1').should('have.text', '3')
      cy.get('#num2').should('have.text', '7')
      cy.get('#sum').should('have.text', '10')
    })
  })
})
