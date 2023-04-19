/// <reference types="cypress" />

// write custom command "waitForNetwork" that takes a network alias
// like "@fetches" and gets all intercepts using "alias" + ".all" cy.get command
// This yields an array of intercepts. An intercept might be already waited on
// so filter the array to leave only "responseWaited: false" items
// Then for each remaining intercept, call "cy.wait"
// and confirm its response status message is "OK"
Cypress.Commands.add(
  'waitForNetwork',
  (networkAliasName) => {},
)

it('waits for all API calls to finish successfully', () => {
  // intercept all "fetch" requests the application is making
  // https://on.cypress.io/intercept
  // Tip: use the resource type property
  // give this intercept alias "fetches"
  // https://on.cypress.io/as
  //
  // visit the calculator page "/calculator.html"
  // https://on.cypress.io/visit
  //
  // wait for all "@fetches" calls using your custom command
  // cy.waitForNetwork
  //
  // type "20" into the first input number
  // and type "6" into the second input
  //
  // wait for all "@fetches" calls using your custom command
  // cy.waitForNetwork
  //
  // click on the "Add" button
  // and confirm the result shown is 26
  //
  // wait for all "@fetches" calls using your custom command
  // cy.waitForNetwork
})
