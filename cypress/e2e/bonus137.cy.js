/// <reference types="cypress" />

it('skips waiting for the aborted request', () => {
  // spy on the "GET /delay/1000" call
  // and give it an alias "api"
  // https://on.cypress.io/intercept
  // https://on.cypress.io/as

  // the page makes 2 calls one after another
  // 1: GET /delay/1000 which the page aborts after 500ms
  // 2: GET /delay/1000 which the page completes
  cy.visit('/aborted-call.html')
  // if we try to wait for the call the app might abort
  // then the cy.wait never resolves
  // cy.wait('@api')
  // instead get all intercepted requests via "api" alias
  // and filter out the ones that are not completed
  //
  // Tip: all inflight / aborted requests have state "Received"
  // and we are interested in the fully completed requests
  // keep retrying until we have at least one completed request
  // its response body should be { ok: true }
})
