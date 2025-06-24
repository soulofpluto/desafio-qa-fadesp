describe('Componentes Especiais e Comportamento', () => {
    beforeEach(() => {
      cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })
  
    it('Validar comportamento do botão simples', () => {
      cy.get('#buttonSimple').click().should('have.value', 'Obrigado!')
    })
  
    it('Validar botão com atraso', () => {
      cy.get('#buttonLazy').click()
      cy.get('#buttonLazy', { timeout: 4000 }).should('have.value', 'zZz ZzZ!')
    })
  
    it('Validar que o botão contador muda de valor ao clicar', () => {
        cy.get('#buttonCount')
          .then(($btn) => {
            const valorAntes = $btn.val()
            cy.wrap($btn).click()
            cy.get('#buttonCount').should(($btn2) => {
              expect($btn2.val()).to.not.equal(valorAntes)
            })
          })
      })
  
    it('Validar inserção de campo após delay', () => {
      cy.get('#buttonDelay').click()
      cy.get('#novoCampo', { timeout: 6000 }).should('exist')
    })

it('Validar exibição de data e hora atual ao clicar no botão "Hora certa"', () => {
    cy.clock(new Date(2023, 11, 24, 15, 30, 0).getTime()) // trava o relógio para teste previsível
    cy.get('#buttonNow').click()
    cy.get('#resultado span').should('contain.text', '24/12/2023') // formato pt-BR
    cy.get('#resultado span').should('contain.text', '15:30')
  })

  it('Validar exibição de timestamp ao clicar no botão "Tempo corrido"', () => {
    cy.window().then((win) => {
      const agora = Date.now()
      cy.get('#buttonTimePassed').click()
      cy.get('#resultado span').invoke('text').then((texto) => {
        const valor = parseInt(texto)
        expect(valor).to.be.closeTo(agora, 500) // tolerância de 500ms
      })
    })
  })
  })