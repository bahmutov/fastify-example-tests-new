/// <reference types="cypress" />

// https://github.com/bahmutov/cypress-recurse
import { recurse } from 'cypress-recurse'

// unskip the test to run it and observe failures
it.skip('stops retrying if the app returns an error', () => {
  // the "POST /create-user" endpoint can return
  // a "wait, still creating user"
  // or an error response. If it is an error,
  // we should stop retrying and simply fail the test.
  //
  // 20% chance of an error with response body having "error" field
  // if no error, then the response will have the "data" string field
  // with possible values: "created" or "creating..."
  recurse(
    () =>
      cy.request('POST', '/create-user', {
        userId: '0x1234',
      }),
    (response) => response.body.data === 'created',
    {
      // fail fast if the response has an error field
      // Tip: instead of returning true to immediately fail,
      // return the error message string if need to fail
      log: 'user created',
      timeout: 60_000,
      delay: 3_000,
      post({ value }) {
        // log either the success or error response
        cy.log(
          `Server response: ${
            value.body.error || value.body.data
          }`,
        )
      },
    },
  )
})
