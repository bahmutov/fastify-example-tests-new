/// <reference types="cypress" />

// https://github.com/bahmutov/cypress-recurse
import { recurse } from 'cypress-recurse'

// to verify this test, change the failure probability
// in the "public/quick-load-error.html" file in the "fastify-example" project
it('catches quick page errors', () => {
  cy.visit('/quick-load-error.html')
  // the page made a request and will eventually show "Loaded" text
  // BUT:
  // if the request fails, it will show "Failed" text
  // and will make another network request. The "Failed" text
  // will appear for a short time, then it will be replaced with "Loaded" text.
  // we want to ensure that the "Failed" text does not appear AT ALL

  // set the timeout to 2 seconds
  // and keep checking for "Failed" text
  // often. Do not wait for the "Failed" text to disappear
  // instead immediately fail the test if it appears
  // Tip: play with the "timeout" option
})

it('verifies only a single GET /delay/:ms call was made', () => {
  // spy on the "GET /delay/:ms" endpoint
  // and give it an alias "api"
  // https://on.cypress.io/intercept
  cy.visit('/quick-load-error.html')
  // confirm the page contains the "Loaded" text
  // that should appear within the 2 seconds
  //
  // confirm that the "GET /delay/:ms" endpoint
  // was called only once (what should the timeout be?)
})
