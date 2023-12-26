import React from 'react'
import Search from '../../app/components/navbar/Search'

describe('<Search />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Search />)
  })


describe('<Search />', () => {
  it('renders', () => {
    cy.mount(<Search />)
    cy.get('.search-input').should('exist')
  })

  it('displays search results', () => {
    const searchQuery = 'Cypress'
    cy.mount(<Search />)
    cy.get('.search-input').type(searchQuery)
    cy.get('.search-results').should('contain', searchQuery)
  })

  it('triggers search callback', () => {
    const onSearch = cy.stub()
    cy.mount(<Search  />)
    const searchQuery = 'Cypress'
    cy.get('.search-input').type(searchQuery)
    cy.get('.search-button').click()
    expect(onSearch).to.be.calledWith(searchQuery)
  })
})
})
