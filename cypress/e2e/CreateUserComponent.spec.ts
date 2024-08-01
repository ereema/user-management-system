describe('CreateUserComponent', () => {
  beforeEach(() => {
    cy.visit('/add'); // Adjust the URL if necessary
  });

  it('should fill out and submit the create user form successfully', () => {
    // Fill out the form fields
    cy.get('input[name="firstName"]').type('John');
    cy.get('input[name="lastName"]').type('Doe');
    cy.get('input[name="username"]').type('johndoe');
    cy.get('select[name="department"]').select('Marketing');
    cy.get('input[name="isAdmin"]').check();

    // Submit the form
    cy.get('button[type="submit"]').click();

    // Verify redirection to home page
    cy.url({ timeout: 10000 }).should('eq', Cypress.config().baseUrl + '/');

    
  });
});
