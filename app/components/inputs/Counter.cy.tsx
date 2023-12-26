import React from 'react'
import Counter from './Counter'

describe('<Counter />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Counter title="Test Title" subtitle="Test Subtitle" value={0} onChange={() => {}} />);

    // Check if the Counter component renders successfully
    cy.get('.font-medium').should('contain', 'Test Title');
    cy.get('.font-light').should('contain', 'Test Subtitle');
    cy.get('.text-xl').should('contain', '0'); 

    
  })

  it('increments', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Counter title="Test Title" subtitle="Test Subtitle" value={0} onChange={() => {}} />);

    cy.get('.text-xl').click();
    cy.get('.text-xl').should('contain', '1'); 
  })
})