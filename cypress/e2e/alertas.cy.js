describe('Interações com Alertas e Popups', () => {
    beforeEach(() => {
      cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })
  
    it('Valida alert simples', () => {
      cy.get('#alert').click()
      cy.on('window:alert', (msg) => {
        expect(msg).to.equal('Alert Simples')
      })
    })
  
    it('Confirmar ação via confirm', () => {
      cy.window().then(win => cy.stub(win, 'confirm').returns(true))
      cy.window().then(win => cy.stub(win, 'alert').as('alerta'))
      cy.get('#confirm').click()
      cy.get('@alerta').should('have.been.calledWith', 'Confirmado')
    })
  
    it('Negar ação via confirm', () => {
      cy.window().then(win => cy.stub(win, 'confirm').returns(false))
      cy.window().then(win => cy.stub(win, 'alert').as('alerta'))
      cy.get('#confirm').click()
      cy.get('@alerta').should('have.been.calledWith', 'Negado')
    })
  
    it('Prompt com resposta e confirmação', () => {
      cy.window().then(win => {
        cy.stub(win, 'prompt').returns('42')
        cy.stub(win, 'confirm').returns(true)
        cy.stub(win, 'alert').as('alerta')
      })
      cy.get('#prompt').click()
      cy.get('@alerta').should('have.been.calledWith', ':D')
    })
  })