// cypress/e2e/tests/homePageTest.js

// Descrição do conjunto de testes para a automação VR
describe('Automação VR', () => {
  // Definindo variáveis para as pages que vão ser utilizadas, obtidas do ambiente Cypress
  const homePage = Cypress.env('HomePage');
  const lojaPage = Cypress.env('LojaPage');
  const lojaModalidadeAvulsoPage = Cypress.env('LojaModalidadeAvulsoPage');

  // Teste para adicionar um produto no carrinho com sucesso
  it('Adicionar produto no carrinho com sucesso', () => {
    // Visita a página da loja do portal web VR
    homePage.visit();

    // Espera por 5 segundos para evitar problemas de carregamento
    cy.wait(5000);

    // Verifica se a URL contém o endereço esperado da loja
    cy.url().should('include', 'https://loja.vr.com.br/');

    // Manipula qualquer modal que possa aparecer na página da loja
    lojaPage.handleModal();

    // Clica no botão para selecionar o Cartão VR
    lojaPage.clickCartaoVR();

    // Gera uma quantidade aleatória de produtos
    const randomQuantidadeAuto = lojaModalidadeAvulsoPage.inputQuantidadeAuto();

    // Gera um valor aleatório para o produto e insere no campo de valor
    const randomValorAuto = lojaModalidadeAvulsoPage.inputValorAuto();

    // Clica no botão para adicionar o produto ao carrinho
    lojaModalidadeAvulsoPage.btnAddCarrinhoAuto();

    // Clica no botão para ir para o carrinho de compras
    lojaModalidadeAvulsoPage.btnMeuCarrinho();

    // Valida se o valor total no carrinho está correto, baseado na quantidade e valor gerados
    lojaModalidadeAvulsoPage.validarValorTotalCarrinho(randomQuantidadeAuto, randomValorAuto);
  });
});
