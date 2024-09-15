Cypress.Commands.add('clickAnElement',(element)=>{
    cy.get(element).should('be.visible')
    cy.get(element).click();
})

Cypress.Commands.add('insertValue',(field,text)=>{
    cy.get(field).should('exist').fill(text);
})

Cypress.Commands.add('checkIframe', {prevSubject: 'element'}, (iframe) => {
    const win = iframe.prop('contentWindow')
    return new Promise((resolve) => {
        if(win && win.document.readyState === 'complete') {
            resolve(win.document.body)
        }else {
            iframe.on('load', () =>{
                resolve(win.document.body)
            })
        }
    })

})