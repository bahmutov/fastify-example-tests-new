/// <reference types="cypress" />

// https://github.com/bahmutov/cypress-cdp
import 'cypress-cdp'
// https://github.com/bahmutov/cypress-map
import 'cypress-map'

it('wait for all images to load', () => {
  // disable network caching using cy.CDP command
  // See "Bonus 11" lesson and cypress-cdp plugin
  cy.CDP('Network.setCacheDisabled', {
    cacheDisabled: true,
  })

  // spy on every image request
  // https://on.cypress.io/intercept
  // this page will load at least 1 image
  cy.visit('/unpredictable-images.html')
  // confirm each image request has completed successfully
  // by getting all interceptions and checking their state property
  // replace this hard-coded wait
  cy.wait(1000)

  // confirm that each image on the page has loaded successfully
  // Note: cy.each does NOT retry, so we need to ensure the image
  // requests have completed earlier
  // https://on.cypress.io/get
  // https://on.cypress.io/each
  // Tip: to check if the image has loaded, see the recipe
  // "Image Has Loaded"
  // https://glebbahmutov.com/cypress-examples/recipes/image-loaded.html
})
