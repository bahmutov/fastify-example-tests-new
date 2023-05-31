/// <reference types="cypress" />

it('loads and applies CSS resources', () => {
  // intercept the calculator.css network request
  // and give it an alias "css"
  // https://on.cypress.io/intercept
  // https://on.cypress.io/as
  //
  // visit the calculator page
  cy.visit('/calculator.html')
  // confirm the CSS intercept loads successfully
  // by checking its response status code to be 200 or 304
  // https://on.cypress.io/wait
  // https://on.cypress.io/its
  // https://on.cypress.io/should

  // confirm the document has a stylesheet loaded
  // from the ".../calculator.css" resource
  const isCalculatorCss = (style) =>
    style.href.endsWith('calculator.css')
  // https://on.cypress.io/document
  // https://on.cypress.io/its
  // https://on.cypress.io/should

  // confirm some style from the calculator.css is applied
  // use the "have.css" assertion. For example, check the #answer
  // element and its text align CSS property.
})
