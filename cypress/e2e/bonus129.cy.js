/// <reference types="cypress" />

it('spies on the request and makes the same request from the test', () => {
  cy.visit('/with-cookie')
  // spy on the "GET /api/with-cookie" request
  // and give it an alias "pageRequest"
  // https://on.cypress.io/intercept
  // https://on.cypress.io/as
  //
  // click on the button "Make request"
  //
  // confirm the application is making the "pageRequest" call
  // and it is successful
  // https://on.cypress.io/wait

  // confirm the "pageRequest" has response {ok: true}

  // try making "GET /api/with-cookie" request from the test
  // and see it fail since it does not have the same headers
  // as the application sets. The status code should be 401

  // how can you make the cy.request using the same
  // request headers as the application?
  // Tip: you have the good headers in the "pageRequest"
})
