describe('Links, Iframes e Navegação', () => {
    beforeEach(() => {
      cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })
  
    it('Valida que o iframe está visível e aponta para o arquivo correto', () => {
      cy.get('#frame1').should('be.visible').and('have.attr', 'src', './frame.html')
    })
  
    it('Valida clique no link "Voltar" atualiza resultado', () => {
      cy.contains('a', 'Voltar').click()
      cy.get('#resultado').should('contain', 'Voltou!')
    })
  
it('deve abrir o popup2 em uma nova aba quando o link for clicado', () => {
  cy.visit('https://www.wcaquino.me/cypress/componentes.html')
  cy.contains('a', 'Popup2').invoke('removeAttr', 'target').click()
  cy.url().should('include', '/cypress/frame.html')
})

it('deve exibir o campo de texto com id tfield e permitir digitar', () => {
  cy.visit('https://www.wcaquino.me/cypress/frame.html')
    cy.get('#tfield')
      .should('be.visible')
      .and('have.attr', 'type', 'text')
      .type('Teste de input')
      .should('have.value', 'Teste de input')
  })

  it('deve exibir o botão "Elemento Externo" e reagir ao clique com alerta', () => {
    cy.visit('https://www.wcaquino.me/cypress/frame.html')
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Click OK!')
    })

    cy.get('#otherButton')
      .should('be.visible')
      .and('have.attr', 'type', 'button')
      .and('have.value', 'Elemento Externo')
      .click()
  })

})
  