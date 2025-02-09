class CadastroPage {
    constructor() {
      this.nomeInput = '[data-testid="nome"]';
      this.emailInput = '[data-testid="email"]';
      this.passwordInput = '[data-testid="password"]';
      this.confirmacaoEmailInput = '[data-testid="confirmaEmail"]';
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

    preencherCampoConfirmacaoEmail(emailConfirmacao) {
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


    formularioCadastroVisivel() {
      cy.get('.register-page.container').should('be.visible');
    }

    mensagemSucessoCadastroVisivel() {
      cy.contains('Cadastro realizado com sucesso').should('be.visible'); 
    }
  }

  export default new CadastroPage();
