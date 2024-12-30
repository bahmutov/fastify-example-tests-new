/// <reference types="cypress" />

// https://github.com/bahmutov/cypress-recurse
import { recurse } from 'cypress-recurse'

/**
 * A function that checks if the item with the given name exists.
 * Uses cypress-recurse to ping the item again and again
 * until it is found or the timeout is reached.
 * @param {string} name - the item name
 * @returns {Cypress.Chainable<boolean>} true if the item was found
 */
function checkItem(name) {
  cy.log(`**checking for the new item ${name}**`)
  return (
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
        timeout: 30_000,
        // IMPORTANT:
        // if we keep pinging and the item is not found
        // we yield the last cy.request response
        doNotFail: true,
        yield: 'value',
      },
    )
      // the above "recurse" call always yields the lat
      // cy.request response, which we can check
      // and transform the response into a boolean
      // showing the success of the operation
      .then((resp) => resp.status === 200)
  )
}

function createItem(item) {
  // TODO: finish the test
  // use cypress-recurse to try creating the item
  // then call the checkItem function to confirm
  // that the item has been created and can be found
  // the function "checkItem" yields a boolean
  // if the boolean is false, try creating the item again
  // up to 3 times, total timeout 300 seconds
}

it('adds an item via a flaky api endpoint', function () {
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

  // the top-level function creates the item
  // and checks that it can be found
  // and retries the creation up to 3 times
  createItem(item)

  cy.log('**visiting the item**')
  cy.visit(`/items/${name}`)
  // confirm the item was found
  cy.contains('h3', name)
})
