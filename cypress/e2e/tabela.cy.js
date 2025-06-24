/// <reference types="cypress" />

describe("Tabelas - Validações e Interações com Componentes", () => {
  beforeEach(() => {
    cy.visit("https://www.wcaquino.me/cypress/componentes.html");
  });

  context("Botões com Alertas", () => {
    const usuarios = ["Francisco", "Maria", "Usuario A", "Usuario B"];

    usuarios.forEach((nome) => {
      it(`Deve exibir alerta com o nome "${nome}" ao clicar no botão correspondente`, () => {
        cy.contains("td", nome)
          .parent()
          .find('input[type="button"][value="Clique aqui"]')
          .click();

        cy.on("window:alert", (msg) => {
          expect(msg).to.equal(nome);
        });
      });
    });
  });

  context("Checkboxes na Tabela", () => {
    it("Deve marcar e desmarcar todos os checkboxes da tabela principal", () => {
      // Aqui você restringe para a primeira tabela da página, por exemplo
      cy.get("table")
        .first()
        .find('input[type="checkbox"]')
        .each(($el) => {
          cy.wrap($el).check({ force: true }).should("be.checked");
          cy.wrap($el).uncheck({ force: true }).should("not.be.checked");
        });
    });

    it("Deve identificar checkbox com atributos personalizados (data-cy e data-test)", () => {
      cy.get("table")
        .first()
        .find('[data-cy="data1"]')
        .should("exist")
        .and("have.attr", "data-test", "data2");
    });
  });

  context("Radios dentro da Tabela", () => {
    it("Deve identificar radio com atributo customizado", () => {
      cy.get('input[type="radio"][data-wc="achou"]').should("exist");
    });
  });
});
