// cypress/integration/app.spec.js

describe('Navigation', () => {
  it('should render homepage, and find trending films, and show these', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // Find categories to filter videos
    cy.get('h2').contains('Trending').click()

    // // The new url should include "/about"
    cy.url().should('include', '/?genre=fetchTrending')
  })
  it('should find Avenger Collection', () => {
    cy.visit('http://localhost:3000/collections')
    // Find categories to filter videos
    cy.get('h2').contains('The Avengers Collection')
  })
})