class LojaModalidadeAvulsoPage {
  // Clica no botão "Adicionar ao Carrinho Auto"
  btnAddCarrinhoAuto() {
    cy.get('#btn-adicionar-carrinho-auto').click();
  }

  // Clica no botão "Meu Carrinho"
  btnMeuCarrinho(){
    cy.get('#btn-meu-carrinho').click();
  }

  // Insere uma quantidade aleatória de produtos no campo de quantidade
  inputQuantidadeAuto() {
    // Gera um número aleatório entre 1 e 50
    const randomQuantidadeAuto = Math.floor(Math.random() * 50) + 1;
    // Limpa o campo de quantidade e digita o valor gerado
    cy.get('#produto-auto-quantidade').clear().type(randomQuantidadeAuto.toString());
    // Retorna a quantidade gerada
    return randomQuantidadeAuto;
  }

  // Insere um valor aleatório para o produto no campo de valor
  inputValorAuto() {
    // Gera um valor aleatório entre 0.01 e 21.00 (em reais)
    const randomValorAuto = (Math.floor(Math.random() * 9100) + 1000) / 100;
    // Limpa o campo de valor, formata o valor gerado e digita no campo
    cy.get('#produto-auto-valor').clear().type(randomValorAuto.toFixed(2).replace('.', ','));
    // Retorna o valor gerado
    return randomValorAuto;
  }

  // Valida se o valor total no carrinho está correto
  validarValorTotalCarrinho(randomQuantidadeAuto, randomValorAuto) {
    // Calcula o valor total esperado multiplicando a quantidade pelo valor unitário
    const expectedTotalValue = (randomQuantidadeAuto * randomValorAuto).toFixed(2);
    // Exibe o valor total esperado no console de teste
    cy.log(`Expected Total Value in Cart: ${expectedTotalValue}`);
    // Obtém o valor total atual do carrinho na página
    cy.get('.information__total-value').then(($totalValue) => {
      // Extrai o valor total atual, remove o símbolo 'R$', substitui vírgulas por pontos e remove espaços em branco
      const actualTotalValue = $totalValue.text().replace('R$', '').replace('.', '').replace(',', '.').trim();
      // Converte o valor total atual para um número decimal
      const actualTotalFloat = parseFloat(actualTotalValue);

      // Compara o valor total atual com o valor total esperado
      if (actualTotalFloat !== parseFloat(expectedTotalValue)) {
        // Se os valores não forem iguais, exibe um erro no console de teste
        cy.log(`Valor diferente: esperado ${expectedTotalValue}, mas foi ${actualTotalValue}`);
        throw new Error(`Valor diferente: esperado ${expectedTotalValue}, mas foi ${actualTotalValue}`);
      } else {
        // Caso os valores sejam iguais, valida a igualdade usando a função `expect` do Cypress
        expect(actualTotalFloat).to.eq(parseFloat(expectedTotalValue));
      }
    });
  }
}

export default LojaModalidadeAvulsoPage;
