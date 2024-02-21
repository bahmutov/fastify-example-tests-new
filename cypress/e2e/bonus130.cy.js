/**
 * Queries the cy.state() object to find the network intercept
 * with the given alias. Then looks at the number of requests
 * that the test did not "cy.wait". These requests will have "requestWaited: false"
 * and "responseWaited: false" properties.
 * Yields the number of such requests.
 * @warning This command uses unofficial Cypress internal API.
 */
Cypress.Commands.addQuery(
  'getPendingIntercepts',
  // alias is without "@" prefix
  (alias) => {
    return () => {
      const intercept = Cypress._.find(cy.state('routes'), {
        alias,
      })
      if (!intercept) {
        throw new Error(
          `Cannot find intercept with alias "${alias}"`,
        )
      }
      const pending = Object.values(
        intercept.requests,
      ).filter((r) => !r.requestWaited)
      return pending.length
    }
  },
)

/**
 * Resets the "requestWaited" and "responseWaited" properties
 * for all network requests currently inside cy.state implementation details.
 * This "skips" all network requests, effectively resetting them.
 * @warning This command uses unofficial Cypress internal API.
 */
Cypress.Commands.add(
  'resetPendingIntercepts',
  // alias is without "@" prefix
  (alias) => {
    const intercept = Cypress._.find(cy.state('routes'), {
      alias,
    })
    if (!intercept) {
      throw new Error(
        `Cannot find intercept with alias "${alias}"`,
      )
    }
    Object.values(intercept.requests).forEach((r) => {
      r.requestWaited = r.responseWaited = true
    })
  },
)

it('yields the number of waiting requests', () => {
  // every click of the "add" button sends a "POST /calculate" request
  // click the button 3 times
  cy.visit('/calculator.html')
  cy.get('#num1').type('2')
  cy.get('#num2').type('7')
  cy.intercept('POST', '/calculate', { answer: 9 }).as(
    'calculate',
  )
  cy.get('#add').click()
  cy.contains('#answer', 9)
  cy.get('#add').click()
  cy.get('#add').click()
  // confirm the application made 3 requests
  // and we never called "cy.wait('@calculate')" to wait for even one of them
  //
  // consume 2 intercepted requests "@calculate"
  // by calling cy.wait twice
  //
  // confirm a single request is still pending
  //
  // wait for the 3rd and last "@calculate" request
  //
  // confirm no requests are pending
  //
  // click the "add" button again
  //
  // there should be a single pending "calculate" request
})

it('resets the waiting requests', () => {
  cy.visit('/calculator.html')
  cy.get('#num1').type('2')
  cy.get('#num2').type('7')
  cy.intercept('POST', '/calculate', { answer: 9 }).as(
    'calculate',
  )
  cy.get('#add').click()
  cy.contains('#answer', 9)
  cy.get('#add').click()
  cy.get('#add').click()
  // confirm the application made 3 "calculate" requests
  // and they are all are pending
  //
  // reset the number of pending requests to "calculate"
  //
  // and confirm no requests are pending
  //
  // check if the number of total requests is 3
  // using cy.get('@calculate.all') command
})
