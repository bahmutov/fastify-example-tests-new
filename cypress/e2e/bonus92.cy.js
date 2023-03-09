/// <reference types="cypress" />

// https://github.com/bahmutov/cypress-map
// import cypress-map plugin

// all fruits the server knows about
const fruits = [
  'Apples',
  'Oranges',
  'Bananas',
  'Pears',
  'Grapes',
]

// Can you rewrite this test to avoid using
// the intermediate "prices" variable?
// Tip: use cy.mapChain command from cypress-map
it('fetches a price for each fruit', () => {
  // make a call to fetch a price for each fruit
  // from the array of fruits. store the fetched prices
  // in this array "prices"
  const prices = []
  fruits.forEach((fruit) => {
    cy.request('GET', `/fruits/price/${fruit}`)
      .its('body.price')
      .should('be.within', 0, 100)
      .then((price) => prices.push(price))
  })
  // the final "prices" array should have the same length
  // as the "fruits" array
  cy.wrap(prices).should('have.length', fruits.length)
})
