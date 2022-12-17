describe('santa', () => {
  beforeEach('passes', () => {
    cy.visit('https://staging.lpitko.ru/')
  })
  it('have text for init', () => {
    cy.get('#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.home-page-buttons > a:nth-child(1) > div > span').should('have.text', 'Создать коробку')
  })
})