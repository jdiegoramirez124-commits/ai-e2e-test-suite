# Automated E2E Test Suite — SauceDemo

A complete end-to-end test suite built with Cypress and JavaScript for a real e-commerce application (SauceDemo). Covers the full user journey from login to checkout.

## Test Coverage

| Module | Tests |
|--------|-------|
| Login | Valid credentials, invalid credentials |
| Inventory | Product listing, add to cart |
| Cart | View cart, remove product |
| Checkout | Full checkout flow |
| Auth | Logout |

**8 tests — 8 passing — 0 failing**

## Tech Stack

- Cypress 15
- JavaScript
- Mochawesome (reporting)
- GitHub Actions (CI/CD ready)

## Project Structure

## How to Run

```bash
npm install
npx cypress run --spec "cypress/e2e/shop.cy.js"
```

## Use Case

Built to demonstrate real-world E2E test automation skills across login, inventory, cart, checkout, and authentication flows — simulating the QA workflow used in professional software teams.

---
Built by Julio Diego Ramírez Zambada · QA Engineer