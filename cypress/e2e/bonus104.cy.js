/// <reference types="cypress" />

// in this test use the base url "http://calculator.com:4200"
// tip: you will need to set up "hosts" mapping in the cypress.config.js file
// to point "calculator.com" at your local web server
it('visits the calculator.com', () => {
  // visit the calculator.html page
  //
  // confirm the we are testing domain "calculator.com"
  cy.location('hostname').should('equal', 'calculator.com')
  // spy on the "POST /calculate" call and give it an alias "calculate"
  //
  // enter two numbers and confirm their sum is shown
  //
  // confirm the network call "@calculate"
  // returns the correct answer
})
