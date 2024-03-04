/// <reference types="cypress" />

// set a common header on every request
// by overwriting cy.request
describe('overwrite cy.request', () => {
  // overwrite the "cy.request" command
  // to add a common header to every request
  // https://on.cypress.io/custom-commands
  //
  // Important: you need to support different types of arguments
  // cy.request(url)
  // cy.request(options)

  it('has the common header', () => {
    // confirm every cy.request has the custom header
    // sent by the overwritten command
    // The endpoint "/headers" returns the request headers
    // as a JSON object
    cy.request('/headers')
      .its('body')
      .should('have.property', 'x-custom-header', 'my-test')
  })
})

// set a common header on every request
// by adding another command as a wrapper around cy.request
describe('a custom network call command', () => {
  // wrap the "cy.request" command
  // to add a common header to every request
  // https://on.cypress.io/custom-commands
  // If you add a log to the cy.networkCall command
  // hide it in the cy.request call

  it('has the common header', () => {
    // confirm every call has the custom header
    // sent by the overwritten command
    // The endpoint "/headers" returns the request headers
    // as a JSON object
    cy.networkCall('/headers')
      .its('body')
      .should('have.property', 'x-custom-header', 'my-test')
  })
})
