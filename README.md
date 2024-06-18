# Executando Testes Automatizados com Cypress

Este projeto demonstra como automatizar testes de interface de usuário utilizando Cypress para o site da [VR](https://www.vr.com.br/).

### 📋 Pré-requisitos

Certifique-se de ter Node.js instalado no seu sistema. Para instalar as dependências do projeto, execute o seguinte comando:

```
npm install
```
Isso instalará o Cypress e outras dependências necessárias listadas no arquivo package.json.


### 🔧 Configuração

O projeto utiliza o Cypress para execução de testes. As configurações estão definidas no arquivo cypress.config.js. Aqui estão as configurações principais:

- baseUrl: URL base do site da VR.
- viewportWidth e viewportHeight: Dimensões da janela do navegador virtual.
- defaultCommandTimeout: Tempo máximo de espera para comandos Cypress.
- requestTimeout e responseTimeout: Tempo máximo de espera para solicitações e respostas de rede.
- pageLoadTimeout: Tempo máximo de espera para o carregamento de páginas.
- screenshotOnRunFailure: Captura screenshots em caso de falha.
- video: Gravação de vídeos dos testes.
- videosFolder: Diretório para armazenamento dos vídeos de teste.
- screenshotsFolder: Diretório para armazenamento dos screenshots de falhas.
- reporter: Gerador de relatórios utilizado (Mochawesome neste caso).
- reporterOptions: Opções para o gerador de relatórios (HTML e JSON habilitados).

## ⚙️ Executando os testes

Para executar os testes, utilize o seguinte comando:


```
npx cypress run
```
Este comando inicia a execução dos testes definidos no diretório cypress/e2e em modo headless (sem interface gráfica). Os resultados serão gravados nos diretórios configurados (reports/videos para vídeos e reports para relatórios).

Após a execução dos testes, você encontrará os relatórios em HTML e JSON no diretório reports.

## ✒️ Autor

Lucas Borgato