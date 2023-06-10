/// <reference types="cypress" />

// https://github.com/bahmutov/cypress-cdp
import 'cypress-cdp'
// https://github.com/bahmutov/cypress-map
import 'cypress-map'

it(
  'observes all network calls',
  { viewportWidth: 1280, viewportHeight: 914 },
  () => {
    // disable network caching using cy.CDP command
    // See "Bonus 11" lesson and cypress-cdp plugin
    //
    // spy on every request made by the browser
    // and give this spy an alias "resources"
    // https://on.cypress.io/intercept
    //
    cy.visit('/resources')
    // confirm the page has 4 resources
    // - the HTML itself
    // - two CSS stylesheets
    // - one background image
    // confirm the resource URLs are (if sorted)
    // "/resources", "/resources/reset.css"
    // "/resources/style.css", "/resources/tiger.png"
  },
)

it(
  'observes image network calls',
  { viewportWidth: 1280, viewportHeight: 914 },
  () => {
    // disable network caching using cy.CDP command
    // See "Bonus 11" lesson and cypress-cdp plugin
    //
    // spy on every request to load image resources
    // and give this spy an alias "image"
    // https://on.cypress.io/intercept
    //
    cy.visit('/resources')
    // wait for the image network call
    // and confirm its request URL ends with "tiger.png"
  },
)
