/// <reference types="cypress" />

// https://github.com/bahmutov/cypress-map
import 'cypress-map'

it('checks the parsed URL search params', () => {
  cy.visit('/url-params.html')
  cy.location('search').should((search) => {
    // parse the search URL string into an object
    // using the URLSearchParams constructor
    // Note: the parameters are decoded automatically
    // then convert the object into a plain object
    //
    // that object should have:
    // - callback "/my-profile-page.html"
    // - question "what is the meaning of life?"
    // - answer "42"
    // Note: all url parameters are strings
  })
})

// can you rewrite the above test solution using cypress-map?
// Think about how the search string can be transformed
// into URLSearchParams instance and then into a plain object
// the entire chain of queries should retry until the
// final value is equal to the expected object
it('checks the parsed URL search params using cypress-map', () => {
  cy.visit('/url-params.html')
  cy.location('search')
  // convert the search string into URLSearchParams
  // then into a plain object
  // and convert the property "answer" into a number
  //
  // that object should have:
  // - callback "/my-profile-page.html"
  // - question "what is the meaning of life?"
  // - answer 42
})
