/// <reference types="cypress" />

it('shows network status', () => {
  // visit the offline page
  // and confirm the page shows "online" status
  // https://on.cypress.io/visit
  // https://on.cypress.io/contains
  cy.visit('/offline.html')
  // wait a second for demo purpose
  // https://on.cypress.io/wait

  // get the application's window object
  // and stub the window.navigator.onLine property
  // https://on.cypress.io/window
  // https://on.cypress.io/stub
  // Tip: https://glebbahmutov.com/cypress-examples/commands/spies-stubs-clocks.html
  // give the stub alias "status"
  //
  // the application is listening to the "offline" event
  // window.addEventListener('offline', updateNetworkStatus)
  // so dispatch the event "offline" to the application's window

  // confirm the network status is showing "offline"
  // wait a second for demo purpose
  // https://on.cypress.io/wait
  //
  // get the status stub and set its value to true
  // https://on.cypress.io/get
  // https://on.cypress.io/invoke
  //
  // dispatch the "online" event to the application's window
  //
  // confirm the page shows "online" status
})

it('shows network status refactored', () => {
  // prepare the "navigator.onLine" property stub
  // visit the offline page
  // and grab the navigator property
  // from the subject yielded by cy.visit command
  // https://on.cypress.io/visit
  // https://on.cypress.io/its
  // https://on.cypress.io/then
  cy.visit('/offline.html')
  //
  // stub the navigator onLine property
  // and give the stub an alias "status"

  // confirm the network status is showing "online"
  // wait a second for demo purpose

  // set the alias "status" to value false
  //
  // dispatch the "offline" event to the application's window
  // https://on.cypress.io/window
  // https://on.cypress.io/trigger
  //
  // confirm the network status is showing "offline"
  // wait a second for demo purpose

  // set the alias "status" to value true
  //
  // dispatch the "online" event to the application's window
  // https://on.cypress.io/window
  // https://on.cypress.io/trigger
  //
  // confirm the network status is showing "online"
})
