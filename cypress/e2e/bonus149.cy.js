/// <reference types="cypress" />

it('changes the stub response after observing the page', () => {
  // mock the initial "GET /app-data" calls
  // using cy.intercept and respond with 404 status
  // Problem: there might be 1 or 2 initial calls
  // made by the application
  // https://on.cypress.io/intercept
  // Tip: see "overwriting intercepts" section
  // https://glebbahmutov.com/blog/cypress-intercept-problems/#no-overwriting-interceptors
  //
  cy.visit('/unpredictable-retry')
  cy.contains('h1', 'Unpredictable Retry')
  // the page should show an error message
  cy.contains('.error', 'Something went wrong')
  // now change the stub response to send { serverNumber: 42 }
  //
  cy.contains('button', 'Retry').click()
  cy.get('.error').should('not.exist')
  // confirm the page shows the successful data
  cy.get('#main').should('have.text', '42')
  // Bonus: confirm there were only 1 or 2 initial "GET /app-data" calls
  // when the stub returned 404
})
