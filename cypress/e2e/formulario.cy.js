/// <reference types="cypress" />

describe('Formulário - Validações e Regras de Negócio', () => {
    beforeEach(() => {
      cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })
  
    const preencherCamposObrigatorios = () => {
      cy.get('#formNome').type('Joana')
      cy.get('[data-cy="dataSobrenome"]').type('Barros')
      cy.get('#formSexoFem').check()
    }
  
    it('Deve cadastrar corretamente com dados válidos', () => {
      preencherCamposObrigatorios()
      cy.get('#formComidaPizza').check()
      cy.get('#formEscolaridade').select('mestrado')
      cy.get('#formEsportes').select(['Natacao'])
      cy.get('#elementosForm\\:sugestoes').type('Nenhuma')
      cy.get('#formCadastrar').click()
  
      cy.get('#resultado').should('contain.text', 'Cadastrado!')
      cy.get('#descNome span').should('contain.text', 'Joana')
      cy.get('#descSobrenome span').should('contain.text', 'Barros')
    })
  
    it('Deve exibir alerta ao cadastrar sem preencher nome', () => {
      cy.get('[data-cy="dataSobrenome"]').type('Barros')
      cy.get('#formSexoFem').check()
      cy.get('#formCadastrar').click()
  
      cy.on('window:alert', (msg) => {
        expect(msg).to.equal('Nome eh obrigatorio')
      })
    })
  
    it('Deve exibir alerta ao cadastrar sem preencher sobrenome', () => {
      cy.get('#formNome').type('Joana')
      cy.get('#formSexoFem').check()
      cy.get('#formCadastrar').click()
  
      cy.on('window:alert', (msg) => {
        expect(msg).to.equal('Sobrenome eh obrigatorio')
      })
    })
  
    it('Alerta ao selecionar carne e vegetariano ao mesmo tempo', () => {
      preencherCamposObrigatorios()
      cy.get('#formComidaCarne').check()
      cy.get('#formComidaVegetariana').check()
      cy.get('#formCadastrar').click()
      cy.on('window:alert', (msg) => {
        expect(msg).to.include('Tem certeza que voce eh vegetariano?')
      })
    })
  
    it('Alerta ao selecionar esportes conflitantes', () => {
      preencherCamposObrigatorios()
      cy.get('#formEscolaridade').select('superior')
      cy.get('#formEsportes').select(['Futebol', 'O que eh esporte?'])
      cy.get('#formCadastrar').click()
      cy.on('window:alert', (msg) => {
        expect(msg).to.include('Voce faz esporte ou nao?')
      })
    })
  })
  