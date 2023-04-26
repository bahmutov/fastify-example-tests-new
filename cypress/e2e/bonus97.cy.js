/// <reference types="cypress" />

// see also "spec04"
// "Spec 04: The application is showing the loading element"

// We want to intercept the "GET /fruit" calls and
// return a promise. The promise should be resolved AFTER
// the commands that check the loading element on the page

it('tests the loading element and completes the intercept', () => {
  // stub the network call the application makes
  // and return this fruit AFTER checking the loading element
  const fruit = 'Kiwi'

  // assuming we have a single matching network request
  // use a variable to store the promise resolve function
  let resolve
  // intercept the "GET /fruit" requests and return a promise
  // the Promise should be resolved later
  // and the resolution callback should reply with { fruit } object
  //
  // visit the page
  cy.visit('/')
  // the "resolve" variable should be set
  // which we can confirm with retries using
  // cy.wrap + cy.should(callback) combination
  //
  // check if the loading element is visible
  //
  // and call the function "resolve" to let the network intercept proceed
  //
  // confirm the loading text is gone
  //
  // confirm the displayed fruit
})

it('Refactor: use an object to keep the resolve method', () => {
  // stub the network call the application makes
  // and return this fruit AFTER checking the loading element
  const fruit = 'Kiwi'

  // assuming we have a single matching network request
  // use an object to store the promise resolve function
  // in its property "resolve"
  const resolvers = {}
  // intercept the "GET /fruit" requests and return a promise
  // the Promise should be resolved later
  // store the "resolve" value in the "resolvers.resolve" property
  // and the resolution callback should reply with { fruit } object
  //
  // visit the page
  cy.visit('/')
  // confirm the resolvers object has property "resolve"
  // using cy.wrap + property assertion
  //
  // check if the loading element is visible
  //
  // call the function "resolve" to let the network intercept proceed
  // https://on.cypress.io/wrap
  // https://on.cypress.io/invoke
  //
  // confirm the loading text is gone
  //
  // confirm the displayed fruit
})

it('Refactor: use jQuery deferred', () => {
  // stub the network call the application makes
  // and return this fruit AFTER checking the loading element
  const fruit = 'Kiwi'

  // assuming we have a single matching network request
  // https://api.jquery.com/category/deferred-object/
  const deferred = Cypress.$.Deferred()
  // intercept the "GET /fruit" requests and return a promise
  // from the deferred object
  // and the resolution callback should reply with { fruit } object
  //
  // visit the page
  cy.visit('/')
  // check if the loading element is visible
  //
  // call the method resolve in the deferred object
  // to complete the intercept
  //
  // confirm the loading text is gone
  //
  // confirm the displayed fruit
})
