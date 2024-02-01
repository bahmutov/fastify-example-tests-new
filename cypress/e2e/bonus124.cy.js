/// <reference types="cypress" />

describe('cy.request', () => {
  it('sends custom headers', () => {
    // make your own HTTP "GET" request
    // to the endpoint "/headers"
    // with custom headers
    // 'x-custom-header': 'foo'
    // 'Some-OtherKey': 'Some-OtherValue',
    // 'Age-Limit': 90
    //
    // the server should respond with a JSON object
    // that has the headers sent.
    // Confirm the 3 sent headers are in the response,
    // and ignore the rest of the headers
    // Tip: headers are lowercased and stringified
  })
})
