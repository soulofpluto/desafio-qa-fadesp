# Desafio QA Fadesp

Projeto de automação de testes utilizando Cypress para validar funcionalidades de uma aplicação web de exemplo disponível em https://www.wcaquino.me/cypress/componentes.html.

---

## 🛠️ Ferramentas Utilizadas

- **Node.js** (v22.16.0) — Ambiente de execução JavaScript
- **npm** — Gerenciador de pacotes do Node.js
- **Cypress** — Framework de testes end-to-end para aplicações web
- **VSCODE** — Para edição dos arquivos de teste

## 🛠️ Requisitos

- Node.js versão **22.16.0** (ou superior)
- npm (gerenciador de pacotes do Node.js)

---

## ⚙️ Instalação

Caso não tenha o Node.js instalado, siga os passos abaixo:

### Instalar Node.js

- Acesse o site oficial: https://nodejs.org/
- Faça o download da versão **22.16.0** ou superior para seu sistema operacional
- Execute o instalador e siga as instruções

Após a instalação, verifique a versão instalada no terminal/cmd:

bash
node -v
# Deve retornar algo como: v22.16.0

## 🚀 Inicialização do projeto:

1. No diretório do seu projeto, execute os comandos abaixo para iniciar o projeto Node.js e instalar o Cypress:
npm init -y
npm install cypress --save-dev

2. Para abrir a interface do Cypress e executar os testes:
npx cypress open

## Descrição do Fluxo de Automação
O fluxo de automação desenvolvido neste projeto tem como objetivo validar diversas funcionalidades da aplicação web disponibilizada em https://www.wcaquino.me/cypress/componentes.html, utilizando o Cypress como framework de testes end-to-end.

### Passos do Fluxo:
1. Acesso à aplicação
Antes de cada teste, a aplicação é carregada na URL base para garantir um estado limpo e consistente, utilizando o comando cy.visit().

2. Interação com elementos da interface
O fluxo contempla a interação com múltiplos componentes da interface com base no código fonte, incluindo:

- Botões com comportamento simples e com atraso

- Formulários com validações e regras de negócio

- Links, iframes e popups

- Alertas, confirmações e prompts

- Elementos em tabelas, como botões, checkboxes e radios

- Validação dos resultados e estados

### Após as interações, o fluxo valida os efeitos esperados, por exemplo:

- Mensagens exibidas em alertas

- Mudança de valores ou estados dos botões e campos

- Exibição correta de textos, datas e valores

- Comportamento esperado de confirmações e prompts

- Atualização e presença dos elementos na página

- Simulação e controle de eventos do navegador

Para garantir a previsibilidade dos testes, o fluxo faz uso de técnicas como:

- Stubs para interceptar e controlar alertas, confirmações e prompts

- Controle do relógio para testar exibição de datas e horários fixos

- Manipulação de atributos para testar popups abrindo em mesma aba

### Cobertura modular e organizada
Os testes são organizados em arquivos específicos para diferentes funcionalidades, garantindo fácil manutenção e escalabilidade:

1. alertas.cy.js
Testa interações com alertas simples, confirmações e prompts.

2. botoes.cy.js
Valida comportamentos de botões com atrasos, contadores, inserção dinâmica de campos e manipulação de data/hora.

3. formulario.cy.js
Testa validações e regras de negócio no formulário, incluindo campos obrigatórios, conflitos de seleção e alertas.

4. navegacao.cy.js
Valida links, iframes, popups, e interações em páginas externas (iframe).

5. tabela.cy.js
Realiza testes em tabelas, verificando botões que disparam alertas, checkboxes e radios com atributos customizados.

## 📋 Como executar os testes
1. Abra o terminal na pasta raiz do projeto.

2. Execute o comando para abrir a interface do Cypress:
npx cypress open

3. Na interface, selecione o teste que deseja executar (exemplo: alertas.cy.js) e observe os resultados

## 📚 Referências
Cypress Documentation: https://docs.cypress.io/

Site de teste usado: https://www.wcaquino.me/cypress/componentes.html

### QA Responsável
- Yasmim Barros.