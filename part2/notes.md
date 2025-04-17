* first we need to create a function to check the email by utlilizing the HackCheckAPI
* then pass in the email and lastLogin as parameters and make sure to utlize the email in the api call
* next we will parse the response and then be sure to filter the breaches where

IsSensitive is false AND

DataClasses array contains the value 'Passwords' AND

AddedDate is after the user's lastLogin

* next is to modify the login function to call the new checkEmail function we create after successful authentication
* update the response object if breaches are found to include name, domain, breachDate and addedDate

to do: needed to update the variable names for domain, breachDate and addedDate... the first letters are capitalized