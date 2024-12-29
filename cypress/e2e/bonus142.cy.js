/// <reference types="cypress" />

// https://github.com/bahmutov/cypress-recurse
import { recurse } from 'cypress-recurse'
// https://github.com/bahmutov/cypress-data-session
import 'cypress-data-session'

// each test creates a new item which is slow
// we could reuse the same created item for both tests

beforeEach(() => {
  // Please create the random data item just once in
  // a before each hook and cache it using cypress-data-session
})

it('checks the created item`s name', () => {
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
  recurse(
    () =>
      cy.request({
        url: `/items/${name}`,
        failOnStatusCode: false,
      }),
    (resp) => resp.status === 200,
    {
      log: 'found the new item ✅',
      delay: 4_000,
      timeout: 70_000,
    },
  )
  cy.visit(`/items/${name}`)
  // confirm the item was found
  cy.contains('h3', name)
})

it('checks the created item`s price', () => {
  // make the item name unique
  // to avoid finding previously created items
  const name = `apple-${Cypress._.random(1_000)}`
  // use random price for the item
  const price = Cypress._.random(1, 100)
  cy.log(`${name} price is ${price}`)

  const item = {
    'item-name': name,
    price,
  }
  // create the item by making a POST request
  cy.request('POST', '/add-item', item)
  // it might take a while to create an item
  recurse(
    () =>
      cy.request({
        url: `/items/${name}`,
        failOnStatusCode: false,
      }),
    (resp) => resp.status === 200,
    {
      log: 'found the new item ✅',
      delay: 4_000,
      timeout: 70_000,
    },
  )
  cy.visit(`/items/${name}`)
  // confirm the correct price is shown
  cy.contains('p', `Price ${price}`)
})
