// to properly type our utilities, let's import what we need
// from Cypress types
import {
  RouteMatcher,
  CyHttpMessages,
} from 'cypress/types/net-stubbing'

// prepare to intercept the given list of API calls
// each argument is something like { method: 'GET', url: '/fruit' }
function setupRecording(
  ...callsToIntercept: RouteMatcher[]
) {
  // Tip: you can store intercepted calls in a property
  // inside the Cypress env object
  const apiCalls = Cypress.env('apiCalls') || []
  Cypress.env('apiCalls', apiCalls)
  apiCalls.length = []

  const recordCall = (
    req: CyHttpMessages.IncomingHttpRequest,
  ) => {
    // save the request and the response bodies
    // in the "apiCalls" array
    // Question: what else do you want to save with each call?
  }

  // go through each call to intercept
  // and set up the interception using cy.intercept and "recordCall"
  // https://on.cypress.io/intercept
}

function saveApiCalls() {
  // get the apiCalls array from the Cypress env object
  // save all API calls to a JSON file
  // using some custom test filename
}

describe('Recording all API calls', () => {
  beforeEach(() => {
    setupRecording(
      { method: 'GET', url: '/fruit' },
      { method: 'POST', url: '/track' },
      { method: 'POST', url: '/calculate' },
    )
  })

  afterEach(saveApiCalls)

  it('saves JSON file with all API calls after each test', () => {
    // visit several pages to generate API calls
    cy.visit('/').wait(100)
    cy.visit('/calculator.html')
    cy.get('#num1').type('2')
    cy.get('#num2').type('3')
    cy.get('#add')
      .click()
      // wait for the calls to be recorded
      .wait(100)
  })
})
