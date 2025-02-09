# Projeto de Testes de Performance com k6 📈

Este projeto contém scripts para testes de performance da API de crocodilos 🐊 (https://test-api.k6.io/public/crocodiles/), utilizando o k6.

## Estrutura do projeto 📂


*   **`scripts/`:** Contém todos os scripts de teste 📜.
    *   **`scenarios/`:** Scripts que simulam cenários de uso específicos da API 🎬.
    *   **`modules/`:** Pasta para módulos auxiliares (não utilizada neste exemplo) 🧰.
    *   **`reports.js`:** Funções para gerar relatórios HTML dos testes 📊.
    *   **`load_test.js`:** Script principal para testes de carga 🏋️‍♀️.
    *   **`smoke_test.js`:** Script para testes rápidos de fumaça 💨.
    *   **`stages.js`:** Configurações de estágios para os testes de carga 📈.
    *   **`thresholds.js`:** Limiares de desempenho para os testes 🎯.
*   **`data/`:** Pasta para armazenar dados de teste (não utilizada neste exemplo) 🗃️.
*   **`results/`:** Pasta para armazenar os relatórios gerados pelos testes 📊.
*   **`config.js`:** Arquivo de configuração com variáveis globais ⚙️.
*   **`package.json`:** Arquivo de gerenciamento de dependências do projeto 📦.

## Descrição dos testes 🧪

### `scripts/scenarios/get_crocodiles.js`

Este script simula um cenário de usuário obtendo a lista de crocodilos da API 🐊. Ele envia uma requisição GET para o endpoint `/crocodiles` e verifica se a resposta é bem-sucedida ✅.

### `scripts/load_test.js`

Este script executa um teste de carga na API 🏋️‍♀️, simulando 100 usuários virtuais acessando o endpoint `/crocodiles` simultaneamente. As configurações do teste de carga, como número de usuários virtuais, duração e estágios, são definidas no arquivo `stages.js`.

### `scripts/smoke_test.js`

Este script executa um teste de fumaça na API 💨, enviando uma única requisição GET para o endpoint `/crocodiles` e verificando se a resposta é bem-sucedida ✅. O objetivo deste teste é verificar se a API está respondendo corretamente e se não há erros críticos ❌.

## Como executar os testes 🏃‍♂️

1.  Clone este repositório 📥.
2.  Instale as dependências: `npm install` 📥.
3.  Execute os testes de carga: `k6 run scripts/load_test.js` 🏋️‍♀️.
4.  Execute os testes de fumaça: `k6 run scripts/smoke_test.js` 💨.

### Exemplos de comandos

*   Executar os testes de carga com 50 usuários virtuais: `k6 run --vus 50 scripts/load_test.js` 🏋️‍♀️.
*   Executar os testes de carga por 10 minutos: `k6 run --duration 10m scripts/load_test.js` ⏱️.

## Relatórios 📊

Os relatórios dos testes serão gerados na pasta `results`, no arquivo `summary.html`. O relatório contém informações detalhadas sobre o desempenho da API, como tempo de resposta, taxa de erro, número de requisições por segundo, latência e percentis de tempo de resposta.

# load_test.js

![Image](https://github.com/user-attachments/assets/d457c35f-7555-47e6-9205-f38fca0ed11f)
