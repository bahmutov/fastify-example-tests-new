/// <reference types="cypress" />

// https://github.com/bahmutov/cypress-map
import 'cypress-map'

// a variation on the "bonus 145" lesson
it('checks if the app sends the analytics event "purchase"', () => {
  // application is making several POST /analytics calls
  // https://on.cypress.io/intercept
  cy.intercept('POST', '/analytics').as('analytics')
  cy.visit('/analytics/app2.html')
  // we do not know the order of the analytics calls
  // but we want to confirm that one of the calls
  // has the request body with the property "eventId" equal to "purchase"
  //
  // Problem: the app might group several events to call
  // so some analytics bodies are single events,
  // others are arrays of events, like this:
  // [ { eventId: ...},  { eventId: ... }, [ { eventId: ... } ] ]
})
