# Testes Automatizados de API com Jest e Supertest (JSONPlaceholder)

[![Status dos Testes](https://img.shields.io/badge/testes-passando-brightgreen.svg)](URL_PARA_SEU_CI)  [![Cobertura de Código](https://img.shields.io/badge/cobertura-80%25-brightgreen.svg)](URL_PARA_SEU_RELATORIO_DE_COBERTURA)

Este projeto demonstra a criação de testes automatizados para uma API RESTful utilizando o framework Jest, a biblioteca Supertest para requisições HTTP e a API mock JSONPlaceholder.

## 🚀 Visão Geral

O objetivo principal deste projeto é fornecer um exemplo prático e bem estruturado de como testar APIs REST em JavaScript/Node.js.  Os testes cobrem:

*   Requisições GET e POST.
*   Validação de status codes HTTP (200, 201, 404, 500 - simulado).
*   Validação da estrutura dos dados JSON de resposta usando schemas (com `jest-json-schema`).
*   Simulação de erros do servidor (mocking do Supertest).
*   Geração de relatórios de cobertura de código (HTML e LCOV).

## 🛠️ Tecnologias Utilizadas

*   **[Jest](https://jestjs.io/):**  Framework de testes JavaScript.  Fornece asserções, mocking, spies, snapshots e execução de testes.
*   **[Supertest](https://github.com/visionmedia/supertest):**  Biblioteca para fazer requisições HTTP em testes.  Facilita a escrita de testes de API.
*   **[jest-json-schema](https://github.com/jest-community/jest-json-schema):**  Extensão do Jest para validação de schemas JSON.  Permite verificar se a estrutura dos dados da API está correta.
*   **[JSONPlaceholder](https://jsonplaceholder.typicode.com/):** API REST *mock* (falsa) que retorna dados de exemplo (usuários, posts, etc.).  Usada como alvo dos testes.

## 📂 Estrutura do Projeto

**Descrição das Pastas e Arquivos:**

*   **`src/`:**  Contém todo o código-fonte do projeto.  A separação em `src` é uma convenção comum em projetos Node.js.
    *   **`src/__tests__/`:**  Contém os testes.  A subpasta `integration` organiza os testes de integração (testes que interagem com a API).
    *   **`src/api/`:**  Contém o módulo `api.js`, que encapsula a lógica de fazer requisições à API.  Isso torna os testes mais limpos e o código mais reutilizável.
    *   **`src/schemas/`:**  Contém os schemas JSON que definem a estrutura esperada dos dados da API.  Usados para validação com `jest-json-schema`.
    *   **`src/utils/`:**  (Opcional) Contém funções utilitárias que podem ser usadas em diferentes partes do projeto.
*   **`config/`:** Contém os arquivos de configuração do Jest.
    *   **`jest.config.js`:**  Arquivo de configuração principal do Jest.  Define como os testes são executados, onde encontrá-los, como gerar relatórios de cobertura, etc.
    * **`jest.setup.js`**: Arquivo que carrega as configurações antes dos testes serem executados.
*   **`coverage/`:**  Pasta criada automaticamente pelo Jest quando a cobertura de código é habilitada.  Contém os relatórios de cobertura.
*   **`node_modules/`:** Pasta criada automaticamente pelo npm (ou yarn) para armazenar as dependências do projeto.
*   **`package.json`:**  Arquivo de metadados do projeto.  Contém o nome do projeto, versão, descrição, dependências, scripts, etc.
*   **`package-lock.json`:**  Arquivo gerado automaticamente pelo npm para garantir instalações consistentes das dependências.


## ⚙️ Instalação


1.  **Navegue até a pasta do projeto:**

    ```bash
    cd JEST_SUPERTEST
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    ```
## ⚡ Execução dos Testes

Para executar os testes e gerar o relatório de cobertura, siga os passos abaixo:

1.  **Abra um terminal:** Abra um terminal (prompt de comando, PowerShell, terminal do VS Code, etc.) na *raiz* do seu projeto (a pasta onde está o arquivo `package.json`).

2.  **Execute os testes:** Digite o seguinte comando no terminal e pressione Enter:

    ```bash
    npm test
    ```

    Este comando fará o seguinte:

    *   Definirá a variável de ambiente `API_BASE_URL` (usada para configurar a URL da API mock).
    *   Executará o Jest, que encontrará e executará todos os seus arquivos de teste (localizados em `src/__tests__/integration/api.test.js`).
    *   Gerará relatórios de cobertura de código (na pasta `coverage`), incluindo um relatório HTML detalhado.
    *   Mostrará os resultados dos testes (quais passaram, quais falharam) no terminal.

3.  **Visualize o Relatório de Cobertura (HTML):**

    *   Após a execução dos testes, uma pasta chamada `coverage` será criada na raiz do seu projeto (se já não existir).
    *   Dentro da pasta `coverage`, haverá uma subpasta chamada `lcov-report`.
    *   Abra o arquivo `coverage/lcov-report/index.html` no seu navegador web (Chrome, Firefox, Edge, etc.). Você pode fazer isso de várias maneiras:
        *   **Arrastar e Soltar:** Arraste o arquivo `index.html` diretamente para a janela do seu navegador.
        *   **Abrir com...:** Clique com o botão direito no arquivo `index.html`, escolha "Abrir com..." e selecione o seu navegador.
        *   **Caminho Completo:** No seu navegador, digite o caminho completo para o arquivo `index.html` na barra de endereços (ex: `file:///C:/Users/SeuUsuario/Documents/JEST_SUPERTEST/coverage/lcov-report/index.html` no Windows, ou `/Users/SeuUsuario/Documents/JEST_SUPERTEST/coverage/lcov-report/index.html` no macOS/Linux).

    O relatório HTML mostrará a cobertura de código detalhada, com linhas destacadas em verde (cobertas) e vermelho (não cobertas).

**Execução sem Cobertura (Opcional):**

Se você quiser executar os testes *sem* gerar o relatório de cobertura (por exemplo, para uma execução mais rápida durante o desenvolvimento), você pode usar um script separado.  Adicione o seguinte à seção "scripts" do seu `package.json`:

```json
"scripts": {
  "test": "API_BASE_URL=https://jsonplaceholder.typicode.com jest --coverage",
  "test:no-coverage": "API_BASE_URL=https://jsonplaceholder.typicode.com jest"
},
```

Agora, você pode executar:

*   `npm test`:  Com cobertura (como antes).
*   `npm run test:no-coverage`: Sem cobertura.

**Execução com Limpeza de Cache (Opcional):**

Se você estiver tendo problemas com mocks ou com o Jest não detectando mudanças nos seus arquivos, você pode limpar o cache do Jest antes de executar os testes:

```bash
npm test -- --clearCache  
# ou
npx jest --clearCache --coverage
```
(ou com yarn: `yarn test -- --clearCache` / `yarn jest --clearCache --coverage`). O `--` é importante; ele diz ao npm para passar os argumentos seguintes (`--clearCache`) *para o Jest*, e não para o próprio npm.

**Execução de um Teste Específico (Opcional):**

Se você quiser executar *apenas um* teste específico (ou um conjunto de testes), você pode usar a opção `-t` (ou `--testNamePattern`) do Jest:

```bash
npm test -- -t "GET /users deve retornar"
#ou
npx jest -t "GET /users deve retornar" --coverage


```

## ✅ Resultados dos Testes

Os testes foram executados com sucesso, validando o comportamento da API e a integridade dos dados. A imagem abaixo mostra um resumo da execução dos testes no terminal, com todos os testes passando, e a tabela de cobertura de código:

![Image](https://github.com/user-attachments/assets/cd0be57f-7b2c-4c2c-b563-5d24ae009cec)

**Detalhes dos Resultados:**

A saída do terminal mostra os seguintes resultados:

*   **Testes:** Todos os 7 testes passaram (`7 passed, 7 total`).  Isso indica que todos os cenários testados estão funcionando conforme o esperado.
*   **Suites de Teste:**  1 suite de teste passou (`1 passed, 1 total`). Uma suite de teste, neste caso, corresponde ao arquivo `api.test.js`.
*   **Snapshots:** 0 total.  Este projeto não está usando snapshots do Jest (o que é correto, dado que estamos testando uma API).
*   **Tempo:** O tempo total de execução dos testes (ex: `2.773 s`).

**Cobertura de Código:**

A tabela de cobertura de código (parte da imagem e também gerada no terminal) mostra as seguintes porcentagens:

| File             | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s |
| ---------------- | ------- | -------- | ------- | ------- | ----------------- |
| All files        | 94.73   | 50       | 100     | 94.73   |                   |
| api              | 92.3    | 50       | 100     | 92.3    |                   |
| api.js           | 92.3    | 50       | 100     | 92.3    | 7                 |
| schemas          | 100     | 100      | 100     | 100     |                   |
| post.schema.js   | 100     | 100      | 100     | 100     |                   |
| user.schema.js   | 100     | 100      | 100     | 100     |                   |

*   **`api.js`:**  A cobertura de *statements* (declarações) e linhas é de 92.3%. A linha 7 não foi coberta.  Esta linha é: `if (!process.env.API_BASE_URL) {`.  Essa linha não é executada porque a variável de ambiente `API_BASE_URL` *está* sendo definida corretamente no script de teste (`"test": "API_BASE_URL=https://jsonplaceholder.typicode.com jest --coverage"`).  A cobertura de *branches* é de 50% porque o `if` tem dois caminhos possíveis (a variável de ambiente estar definida ou não), e apenas um deles (o caminho em que ela *está* definida) é executado nos testes.
*   **`schemas/`:** Os arquivos de schema têm 100% de cobertura.  Isso significa que todos os schemas definidos estão sendo usados nos testes de validação.
*   **`All files`**: Mostra a média geral de cobertura.
