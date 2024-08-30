/**
 * The server returns an object with a single field "fruit"
 * which can be one of several available fruits.
 */
type GetFruitResponse = {
  fruit:
    | 'Apples'
    | 'Oranges'
    | 'Bananas'
    | 'Pears'
    | 'Grapes'
}

it('intercepts a typed network response', () => {
  cy.intercept('GET', '/fruit').as('getFruit')
  cy.visit('/')
  // wait for the network request to complete
  // and confirm the "body.fruit" is a string
  // Make the TypeScript compiler happy by using
  // by telling it the type of the response
  cy.wait('@getFruit')
    .its('response')
    .its('body')
    .then((body) => {
      // TS should know the "body" type is GetFruitResponse
    })
})
