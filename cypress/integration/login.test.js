describe('SignIn', () => {
  it('asd', () => {
    cy.visit('/');
    cy.get('.Nav__Button-sc-1teq4z9-0').click();
    cy.wait(3000);
    cy.get('.filterContainer > :nth-child(2)').click();
    cy.wait(3000);
    cy.get('.filterContainer > :nth-child(3)').click();
    cy.wait(3000);
    cy.get('.DisplayCoin__Display-sc-740c35-0 > span').should('contain', 100);
  });
});
