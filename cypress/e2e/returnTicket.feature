
    Feature: Return Ticket
    
        Scenario: Verify user is able to complete the process of purchasing a return ticket
            Given I am on the home page
            Then I confirm I am on the homepage using the URL
            Then I click on Buy Ticket under Dummy Return Ticket
            And I confirm I am on the booking page
            When I select " Dummy return ticket " as my order
            And I input my "First / Given name"
            And I input my "Last / Surname"
            And I input my "Date of birth"
            And I select "Female" as the sex 
            And I select "Round trip" as the trip type 
            And I input my "From city / Origin" 
            And I input my "To city. /Dest."
            And I input my "Departure date"
            And I input my "Return date"
            And I selcet "Email" to receive the dummy ticket
            And I input my "Phone"
            And I input my "Email address"
            And I select my country as "Nigeria"
            And I input my "Street address"
            And I input my "Town / City"
            And I select my state as "Lagos"
            And I confirm my order details
            And I select the payment by Debit and Credit Card  
            And I input the Credit card number
            And I input the Expiration date
            And I input in the security code
            And I click on place order
            Then I should get error message "Your card was declined. Your request was in live mode, but used a known test card."

           

          



            