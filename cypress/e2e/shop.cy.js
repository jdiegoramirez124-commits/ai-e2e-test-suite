describe('SauceDemo E2E Test Suite', () => {

  const BASE_URL = 'https://www.saucedemo.com'
  const USER = 'standard_user'
  const PASS = 'secret_sauce'

  beforeEach(() => {
    cy.visit(BASE_URL)
  })

  // ── 1. Login ─────────────────────────────────────────
  it('should login successfully with valid credentials', () => {
    cy.get('#user-name').type(USER)
    cy.get('#password').type(PASS)
    cy.get('#login-button').click()
    cy.url().should('include', '/inventory')
    cy.get('.inventory_list').should('be.visible')
  })

  it('should show error with invalid credentials', () => {
    cy.get('#user-name').type('wrong_user')
    cy.get('#password').type('wrong_pass')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('be.visible')
  })

  // ── 2. Inventory ─────────────────────────────────────
  it('should display at least one product on inventory page', () => {
    cy.get('#user-name').type(USER)
    cy.get('#password').type(PASS)
    cy.get('#login-button').click()
    cy.get('.inventory_item').should('have.length.greaterThan', 0)
  })

  it('should add a product to the cart', () => {
    cy.get('#user-name').type(USER)
    cy.get('#password').type(PASS)
    cy.get('#login-button').click()
    cy.get('.btn_inventory').first().click()
    cy.get('.shopping_cart_badge').should('have.text', '1')
  })

  // ── 3. Cart ───────────────────────────────────────────
  it('should navigate to cart and see added product', () => {
    cy.get('#user-name').type(USER)
    cy.get('#password').type(PASS)
    cy.get('#login-button').click()
    cy.get('.btn_inventory').first().click()
    cy.get('.shopping_cart_link').click()
    cy.url().should('include', '/cart')
    cy.get('.cart_item').should('have.length', 1)
  })

  it('should remove a product from the cart', () => {
    cy.get('#user-name').type(USER)
    cy.get('#password').type(PASS)
    cy.get('#login-button').click()
    cy.get('.btn_inventory').first().click()
    cy.get('.shopping_cart_link').click()
    cy.get('.cart_button').click()
    cy.get('.cart_item').should('not.exist')
  })

  // ── 4. Checkout ───────────────────────────────────────
  it('should complete the full checkout flow', () => {
    cy.get('#user-name').type(USER)
    cy.get('#password').type(PASS)
    cy.get('#login-button').click()
    cy.get('.btn_inventory').first().click()
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('Julio')
    cy.get('[data-test="lastName"]').type('Ramirez')
    cy.get('[data-test="postalCode"]').type('82000')
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="finish"]').click()
    cy.get('.complete-header').should('have.text', 'Thank you for your order!')
  })

  // ── 5. Logout ─────────────────────────────────────────
  it('should logout successfully', () => {
    cy.get('#user-name').type(USER)
    cy.get('#password').type(PASS)
    cy.get('#login-button').click()
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
    cy.url().should('eq', BASE_URL + '/')
  })

})