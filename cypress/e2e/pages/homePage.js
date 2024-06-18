// cypress/e2e/pages/homePage.js
class HomePage {
  visit() {
    cy.visit('https://loja.vr.com.br/', {
      onBeforeLoad: (win) => {
        // Desabilitar erro uncaught exceptions
        cy.stub(win.console, 'error').callsFake((msg) => {
          // Ignora os erros específicos
          if (!msg.includes('getAttribute')) {
            console.error(msg);
          }
        });
      },
    });
    // Aguarda o carregamento completo da página
    cy.document().its('readyState').should('eq', 'complete');
  }

  // esse metodo abaixo não está sendo usado, pois esse botão abre uma nova janela e o cypress não está reconhecendo a troca de uma nova janela
  clickButtonById(buttonId) {
    cy.get(`button[id=${buttonId}]`).should('exist').then(($button) => {
      // Intercepta o evento de clique e força a abertura na mesma guia
      cy.window().then((win) => {
        const button = $button[0];
        button.removeAttribute('target');
        button.click();
      });
    });
  }  
}

export default HomePage;
