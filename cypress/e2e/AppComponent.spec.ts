/// <reference types="cypress" />

describe('AppComponent', () => {
    it('should display the header and navigation links', () => {
      // Visit the home page
      cy.visit('/');
  
      // Check if the header is present and has the correct title
      cy.get('header').should('be.visible');
      cy.get('header h1').should('contain.text', 'User Management Application');
  
      // Check if the navigation links are present and have the correct text
      cy.get('nav').should('be.visible');
      cy.get('nav a').eq(0).should('contain.text', 'Home').and('have.attr', 'routerLink', '/');
      cy.get('nav a').eq(1).should('contain.text', 'Add User').and('have.attr', 'routerLink', '/add');
  
      // Optional: Check that the links navigate correctly (requires a working router setup)
      cy.get('nav a').eq(0).click();
      cy.url().should('include', '/');
      cy.get('nav a').eq(1).click();
      cy.url().should('include', '/add');
    });
  });
  