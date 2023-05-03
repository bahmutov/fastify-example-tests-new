/// <reference types="cypress" />

// https://github.com/bahmutov/cy-spok
import spok from 'cy-spok'

describe('ETags and caching', () => {
  it('responds with 200', () => {
    // make a request to fetch all todos from 'GET /todos'
    // https://on.cypress.io/request
    // the response should have status code 200
  })

  it('returns an etag header', () => {
    // request all todos from 'GET /todos'
    // https://on.cypress.io/request
    //
    // the response header should have "etag" property
    // which is a string
    // Tip: all headers are lowercase
  })

  it('returns todos with at least one object', () => {
    // request all todos from 'GET /todos'
    // https://on.cypress.io/request
    //
    // grab the response body
    // and confirm it is a non-empty array
    // https://on.cypress.io/its
    //
    // confirm the first item has string properties "id" and "title"
    // and a boolean property "completed"
    // Tip: use the "satisfy" assertion
    // https://glebbahmutov.com/cypress-examples/
  })

  it('Bonus: check the entire response at once using cy-spok', () => {
    // request all todos from 'GET /todos'
    // https://on.cypress.io/request
    //
    // the response should:
    // have status code 200
    // have a string response header "etag"
    // have an array body
    // with the first object having
    // id and title string properties
    // boolean completed property
  })

  it('sends 304 cached response for if-none-match request header', () => {
    // request all todos from 'GET /todos'
    // https://on.cypress.io/request
    //
    // and grab its response header "etag"
    //
    // pass the etag value into a cy.then callback
    //
    // and make another request, this time using the "etag"
    // in the request header "if-none-match"
    //
    // the response should have status code 304
    // and an empty string response body
  })

  it('sends 200 and data if the etag does not match if-none-match', () => {
    // make a request to get all todos
    // but on purpose try sending a wrong "if-none-match" header
    //
    // the response should have status code 200
    // and the body should be an array of data
  })
})
