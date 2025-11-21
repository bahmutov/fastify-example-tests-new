/// <reference types="cypress" />

describe('Adding two numbers', () => {
  it('checks numbers shown on the page', () => {
    cy.visit('/add/index.html')
    // the page should shown two numbers to be added
    // inside the element with id "addition"
    // important: check if the numbers have finished loading
    // by confirming the class "loaded" is present on the element
    //
    // get the two numbers using ids "num1" and "num2"
    // and convert their text to integers
    // compute the sum ourselves
    // get the element with id "sum" and confirm its text
    // is equal to the sum of the two numbers
  })

  it('checks the numbers using API traffic', () => {
    // spy on the API request that returns the two numbers
    // give the intercept an alias "randomDigit"
    // https://on.cypress.io/intercept
    // https://on.cypress.io/as
    cy.visit('/add/index.html')
    // wait for both API requests to complete
    // https://on.cypress.io/wait
    // https://on.cypress.io/spread
    //
    // extract the two numbers from the API responses
    // under the property "n"
    // compute the sum ourselves
    // confirm the sum shown on the page is correct
  })

  it('controls the numbers received by the page', () => {
    // stub the "/random-digit" API requests to return
    // specific different numbers we choose
    // give each intercept its own alias
    // note: there will be 2 requests made to this endpoint
    // note: the order of cy.intercept matters!
    // the later intercept will be applied FIRST

    cy.visit('/add/index.html')
    // confirm the network calls were made
    // https://on.cypress.io/wait
    //
    // confirm the two numbers are shown correctly on the page
    // confirm the sum shown on the page is correct
  })
})
