/// <reference types="cypress" />

// https://github.com/bahmutov/cypress-recurse
import { recurse } from 'cypress-recurse'

it('waits for the item to be created', () => {
  // make the item name unique
  // to avoid finding previously created items
  const name = `apple-${Cypress._.random(1_000)}`
  cy.log(name)

  const item = {
    'item-name': name,
    price: 10,
  }
  // create the item by making a POST request
  cy.request('POST', '/add-item', item)
  // it might take a while to create an item
  // so just to be sure we sleep for 1 minute
  // Can you remove such long sleep?
  // and instead ping the item's page until it returns
  // a success HTTP status code?
  // Tip: use cypress-recurse utility
  cy.wait(60_000)
  cy.visit(`/items/${name}`)
  // confirm the item was found
  cy.contains('h3', name)
})
