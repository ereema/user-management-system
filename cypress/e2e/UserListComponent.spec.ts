/// <reference types="cypress" />

describe('UserListComponent', () => {
  beforeEach(() => {
    // Stub the API response for users
    cy.intercept('GET', '/api/users', {
      statusCode: 200,
      body: [
        { id: 1, firstName: 'John', lastName: 'Doe', department: 'Engineering', isAdmin: true },
        { id: 2, firstName: 'Jane', lastName: 'Smith', department: 'Marketing', isAdmin: false }
      ]
    }).as('getUsers');
  });

  it('should display a list of users', () => {
    // Visit the root path where UserListComponent is rendered
    cy.visit('/');

   // Check if the table is visible
    cy.get('table').should('be.visible');

   
  });
});
