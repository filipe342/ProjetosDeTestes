import cadastroPage from '../pages/cadastroPage';
import { faker } from '@faker-js/faker';

describe('Testes de cadastro no Serverest (Cenários Essenciais)', () => {
  

  beforeEach(() => {
    cy.visit('/cadastrarusuarios');
  });

  it('Preenche o formulário corretamente e cadastra um usuário comum com sucesso', () => {
    cy.fixture('cadastro_sucesso').then((dadosCadastroSucesso) => { 
      const usuarioValido = dadosCadastroSucesso.usuario_valido;
      const nome = faker.name.fullName(); 
      const email = faker.internet.email(); 
      const senha = usuarioValido.senha; 

      cadastroPage.preencherCampoNome(nome);
      cadastroPage.preencherCampoEmail(email);
      cadastroPage.preencherCampoSenha(senha);
      cadastroPage.clicarBotaoCadastrar();
      cadastroPage.mensagemSucessoCadastroVisivel();
    });
  });

  it('Tenta cadastrar com campos obrigatórios vazios e verifica mensagens de erro', () => {
    cy.fixture('cadastro_campos_vazios').then((dadosCamposVazios) => { 
      const mensagens = dadosCamposVazios.mensagens_campos_vazios;

      cadastroPage.clicarBotaoCadastrar();

      cy.contains('span', mensagens.nome).should('be.visible'); 
      cy.contains('span', mensagens.email).should('be.visible'); 
      cy.contains('span', mensagens.password).should('be.visible');
    });
  });

  it('Tenta cadastrar com senha fraca (exemplo: "12345") e verifica erro de validação', () => {
    cy.fixture('cadastro_senha_fraca').then((dadosSenhaFraca) => { 
      const senhaFracaData = dadosSenhaFraca;
      const nome = faker.name.fullName();
      const email = faker.internet.email();
      const senhaFraca = senhaFracaData.senha_fraca; 

      cadastroPage.preencherCampoNome(nome);
      cadastroPage.preencherCampoEmail(email);
      cadastroPage.preencherCampoSenha(senhaFraca);
      cadastroPage.clicarBotaoCadastrar();

      cy.wait(1000);

      cy.contains('a.alert-link', 'Cadastro realizado com sucesso').should('not.visible');
    });
  });

  it('Tenta cadastrar com emails diferentes nos campos de "Email" e "Confirmação de Email" e verifica erro', () => {
    cy.fixture('cadastro_emails_invalidos').then((dadosEmailsInvalidos) => { 
      const emailInvalidoData = dadosEmailsInvalidos;
      const nome = faker.name.fullName();
      const emailInvalido = emailInvalidoData.email_invalido;
      const senha = 'SenhaSuperSegura123';

      cadastroPage.preencherCampoNome(nome);
      cadastroPage.preencherCampoEmail(emailInvalido); 
      cadastroPage.preencherCampoSenha(senha);
      cadastroPage.clicarBotaoCadastrar();

      it('Verifica mensagem de erro de emails diferentes', () => {
        cy.contains('span', emailInvalidoData.mensagem_email_invalido).should('be.visible'); 
      });
    });
  });
});