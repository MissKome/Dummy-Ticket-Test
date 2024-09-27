import {Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'



Given(/^I am on the home page$/, () => {
	cy.visit('/')
});

Then(/^I confirm I am on the homepage using the URL$/, () => {
    cy.url().should('equal', 'https://www.dummyticket.com/')
});


Then(/^I click on Buy Ticket under Dummy Return Ticket$/, () => {
	cy.clickBuyTicket()
});


When(/^I confirm I am on the booking page$/, () => {
	cy.get('.page-wrapper  h2 p:nth-of-type(2)').should('contain.text', 'Dummy ticket booking')
})



When(/^I select "([^"]*)" as my order$/, (order) => {
	cy.clickButton(order)
});



When(/^I input my "([^"]*)"$/, (args1) => {
	cy.insertDetails(args1)
});


When(/^I select "([^"]*)" as the sex$/, (sexType) => {
	cy.clickRadioButton(sexType)
});


When(/^I select "([^"]*)" as the trip type$/, (tripType) => {
	cy.clickRadioButton(tripType)
});


When(/^I selcet "([^"]*)" to receive the dummy ticket$/, (receiveTicket) => {
	cy.clickRadioButton(receiveTicket)
});


When(/^I select my country as "([^"]*)"$/, (coun) => {
	cy.country(coun)
});


When(/^I select my state as "([^"]*)"$/, (sta) => {
	cy.selectState(sta)
});


When(/^I confirm my order details$/, () => {
	cy.get('.product-details').should('contain.text', 'Dummy return ticket')
});


When(/^I select the payment by Debit and Credit Card$/, () => {
	cy.clickPaymentCard()
});


When(/^I input the Expiration date$/, () => {
	cy.insertExpirationDate('12/25');

});

When(/^I input the Credit card number$/, () => {

cy.get('a[href="https://js.stripe.com/v3/elements-inner-card-f2918a79cff512ac9f9752c215050427.html#wait=false&mids[guid]=NA&mids[muid]=e4e3d26f-587b-4245-8abb-ac168bd5dd28edb7c2&mids[sid]=NA&sh"]').should('be.visible').click()
cy.get('[title="Secure card number input frame"]').should('be.visible').wait(2000)
cy.get('[title="Secure card number input frame"]').checkIframe().find('div#yith-stripe-card-number').should('exist').click()
});


