
        import './commands';
        import './Pages/ticketPage'
        import 'cypress-fill-command'
        import 'cypress-iframe'



Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})