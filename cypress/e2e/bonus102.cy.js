/// <reference types="cypress" />

it('pings the page every 30 seconds (slow)', () => {
  // spy on the "GET /random-digit" calls under alias "random"
  // https://on.cypress.io/intercept
  // https://on.cypress.io/as
  //
  // visit the "periodic.html" page
  // https://on.cypress.io/visit
  //
  // find the button with text "Start" and click on it
  // https://on.cypress.io/contains
  // https://on.cypress.io/click
  //
  // wait 31 seconds
  // https://on.cypress.io/wait
  //
  // confirm there was one call to the "@random" alias
  // you can use cy.wait or get all intercepts
  //
  // wait 31 seconds
  // confirm there were two network calls
  //
  // wait 31 seconds
  // confirm there were three network calls
})

it('pings the page every 30 seconds', () => {
  // stop the application's clock
  // https://on.cypress.io/clock
  //
  // spy on the "GET /random-digit" calls
  //
  // visit the periodic.html page
  //
  // click the start button
  //
  // instead of waiting 31 seconds,
  // fast-forward the application's clock by 31 seconds
  //
  // the application should have called the server once
  //
  // fast-forward the application's clock by 31 seconds again
  // the application should have called the server twice
  //
  // fast-forward the application's clock by 31 seconds again
  // the application should have called the server three times
})

it('does not ping if the button was not pressed', () => {
  // stop the application's clock
  // https://on.cypress.io/clock
  //
  // spy on the "GET /random-digit" calls
  //
  // visit the periodic.html page
  //
  // without clicking the "Start" button
  // fast-forward the clock by 31 seconds
  //
  // confirm there were no calls made
  //
  // fast-forward the clock by 31 seconds
  // confirm there were no calls made
  //
  // fast-forward the clock by 31 seconds
  // confirm there were no calls made
})
