let data 

import {faker} from '@faker-js/faker'


before(()=>{
    cy.fixture('elements').then((ell)=>{
        data = ell
    });
})

//command to click all the buttons
Cypress.Commands.add('clickButton', (text)=>{
    cy.get('#checkout-products').contains(text)
    .should('be.visible')
    .click({force: true})
})

Cypress.Commands.add('clickRadioButton', (text)=>{
    cy.get('.radio').contains(text)
    .should('be.visible')
    .click({force: true})
})

Cypress.Commands.add('clickPaymentCard', ()=>{
    cy.clickAnElement(data.pamentType)
})


Cypress.Commands.add('clickBuyTicket', ()=>{
    cy.clickAnElement(data.buyTicket)
})

//command to insert all the field
Cypress.Commands.add('insertDetails', (field)=>{
    switch(field){
    case 'First / Given name':
        cy.insertValue(data.firstName, faker.person.firstName())
        break
    case 'Last / Surname':
        cy.insertValue(data.lastName, faker.person.lastName())
         break 

    case 'From city / Origin':
        cy.insertValue(data.fromCity, faker.address.city())
         break

    case 'To city. /Dest.':
        cy.insertValue(data.toCity, faker.address.city())
         break

    case 'Departure date':
            cy.insertValue(data.depatureDate, '17/09/2024')
            break
        
    case 'Return date':
                cy.insertValue(data.returnDate, '25/09/2024')
                break

    case 'Phone':
            cy.insertValue(data.phone, faker.phone.number('08135826992'))
                break

    case 'Email address':
            cy.insertValue(data.emailAddress, faker.internet.email())
                break

    case 'Street address':
            cy.insertValue(data.streetAddress, faker.address.street())
                break

    case 'Town / City':
            cy.insertValue(data.town, faker.address.city())
                break
                
    case 'Date of birth':
                cy.insertValue(data.dateOfBirth, '10/09/1994')
                           


                 
}})

Cypress.Commands.add('country', (text)=>{
    cy.clickAnElement(data.country)  
    cy.get(data.selectCountry).contains(text).click()
})

Cypress.Commands.add('selectState', (text)=>{
    cy.clickAnElement(data.newState)  
    cy.get(data.state).select(text, { force: true })

})

Cypress.Commands.add('insertExpirationDate', (date) => {
    cy.frameLoaded('iframe[name="__privateStripeFrame77213"]'); 
    cy.iframe().find('[name="exp-date"]').type(date);
});


// #billing_state_field .woocommerce-input-wrapper

// cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
// cy.get('a[href="https://js.stripe.com/v3/elements-inner-card-f2918a79cff512ac9f9752c215050427.html#wait=false&mids[guid]=NA&mids[muid]=e4e3d26f-587b-4245-8abb-ac168bd5dd28edb7c2&mids[sid]=NA&sh"]').should('be.visible').click()
// cy.get('[title="Secure card number input frame"]').should('be.visible').wait(2000)
// cy.get('[title="Secure card number input frame"]').checkIframe().find('[aria-label="Credit or debit card number"]').should('exist').click()