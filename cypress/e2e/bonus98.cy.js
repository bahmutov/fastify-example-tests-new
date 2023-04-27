/// <reference types="cypress" />

// https://github.com/anonrig/fast-querystring#readme
const qs = require('fast-querystring')

it(
  'stubs form submission and checks the sent fields',
  { viewportWidth: 1000, viewportHeight: 500 },
  () => {
    // visit the horizontal-form page
    cy.visit('/horizontal-form.html')
    // our server does not handle "POST /my-form" calls (yet)
    // thus we need to stub such submissions and redirect the browser
    // back to the "GET /horizontal-form.html" page
    // Tip: use the "303 See Other" status
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/303
    // and set the "location" header
    // The browser will use GET "location header"
    // when it receives the 303 status code
    //
    // Give the intercept alias "submit"
    //
    // get the form on the page and fill it with values
    // https://on.cypress.io/within
    // https://on.cypress.io/select
    // https://on.cypress.io/check
    //
    // submit the form using the cy.submit command
    // https://on.cypress.io/submit
    //
    // confirm the page was reloaded by checking the input fields
    // the form should not be filled
    //
    // we should be redirected back to the form
    // confirm the location pathname
    // https://on.cypress.io/location
    //
    // the form submission network call should send all fields
    // https://on.cypress.io/wait
    // which you can verify by parsing the request body
    // using the fast-querystring module
    //
    // confirm the form fields sent
    // using the "deep.equal" assertion
  },
)
