/// <reference types="cypress" />

it('sends the Origin request header', () => {
  // spy on the "/tiger.png" image and give it an alias "img"
  // https://on.cypress.io/intercept
  // https://on.cypress.io/as

  cy.visit('/origin.html')
  // wait for the image to load
  // and get its request headers
  // confirm the "Origin" header is set to the base url
  // and the "Host" header is set to the base url's host
  // Tip: use the URL constructor to get the host from the base url
})
