// cypress/support/e2e.js
import './commands';
import HomePage from '../e2e/pages/homePage';
import LojaPage from '../e2e/pages/lojaPage';
import LojaModalidadeAvulsoPage from '../e2e/pages/lojaModalidadeAvulsoPage';

// Adicionar o Page Object ao ambiente do Cypress
Cypress.env('HomePage', new HomePage());
Cypress.env('LojaPage', new LojaPage());
Cypress.env('LojaModalidadeAvulsoPage', new LojaModalidadeAvulsoPage());

Cypress.on('uncaught:exception', (err, runnable) => {
  // Retorne false para evitar que o Cypress falhe o teste
  // Você pode adicionar condições específicas aqui para filtrar erros que deseja ignorar
  if (err.message.includes('getAttribute')) {
    return false;
  }
  // Se você deseja ignorar todas as exceções, apenas retorne false
  return false;
});
