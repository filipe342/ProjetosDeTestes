class CadastroPage {
    constructor() {
      this.nomeInput = '[data-testid="nome"]';
      this.emailInput = '[data-testid="email"]';
      this.passwordInput = '[data-testid="password"]';
      this.confirmacaoEmailInput = '[data-testid="confirmaEmail"]'; //  Mantenha se usar confirmação de email
      this.adminCheckbox = '[data-testid="checkbox"]';
      this.cadastrarButton = '[data-testid="cadastrar"]';
      this.entrarLink = '[data-testid="entrar"]';
    }

    preencherCampoNome(nome) {
      cy.get(this.nomeInput).type(nome);
    }

    preencherCampoEmail(email) {
      cy.get(this.emailInput).type(email);
    }

    preencherCampoSenha(senha) {
      cy.get(this.passwordInput).type(senha);
    }

    preencherCampoConfirmacaoEmail(emailConfirmacao) { // Mantenha se usar confirmação de email
      cy.get(this.confirmacaoEmailInput).type(emailConfirmacao);
    }

    marcarCheckboxAdministrador() {
      cy.get(this.adminCheckbox).check();
    }

    desmarcarCheckboxAdministrador() {
      cy.get(this.adminCheckbox).uncheck();
    }

    clicarBotaoCadastrar() {
      cy.get(this.cadastrarButton).click();
    }

    clicarLinkEntrar() {
      cy.get(this.entrarLink).click();
    }


    formularioCadastroVisivel() { // Função opcional - para verificar se o formulário está visível
      cy.get('.register-page.container').should('be.visible'); // Seletor do container principal do formulário
    }

    mensagemSucessoCadastroVisivel() { // Função para verificar mensagem de sucesso - Adapte o seletor e texto
      cy.contains('Cadastro realizado com sucesso').should('be.visible'); // Adapte o texto da mensagem de sucesso
    }
  }

  export default new CadastroPage();