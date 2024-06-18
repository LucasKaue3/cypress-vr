class LojaPage {
    handleModal() {
        // Aguarda 3 segundos e verifica se o modal aparece
        cy.wait(3000).then(() => {
          cy.get('body').then($body => {
            if ($body.find('.modal-box__container').length > 0) {
              // Se o modal aparecer, clicar no botão de fechar
              cy.get('.modal-box__container .close-button').click();
            }
          });
        });
      }
    
      clickCartaoVR() {
        cy.get('button[id=btn-selecionar-modalidade-avulso]').should('exist').click();
      }
}

export default LojaPage;