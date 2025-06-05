/// <reference types="cypress" />

// https://github.com/bahmutov/cypress-map
import 'cypress-map'

it('checks if the app sends the analytics event "purchase"', () => {
  // application is making several POST /analytics calls
  // https://on.cypress.io/intercept
  cy.visit('/analytics/app1.html')
  // we do not know the order of the analytics calls
  // but we want to confirm that one of the calls
  // has the request body with the property "eventId" equal to "purchase"
  //
  // Tip: think of all intercepted calls as an array
  // of objects, where each object has the "request" property
  // which has the "body" property, which is an object
  // with the "eventId" property
  // at the end, the subject is an array of strings
  // which should include the string "purchase"
})
