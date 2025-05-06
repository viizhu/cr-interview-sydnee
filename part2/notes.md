Fetch API resource: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
resource2: https://dmitripavlutin.com/javascript-fetch-async-await/

I. create a main function to handle the user login and breach checking.

A. It will fetch the breach data from the api, filter andmap it, and authenticates the user.

1. construc the url and pass in a provided email
2. initialize variables to track breach status and breached account
3. fetch breached data
    1. handle non okay responses
    2. handle no breaches
    3. handle unexpected errors (network issues)
4. parse the response to json for workability
5. find the user's last login date from the sample users
6. filter and map the breached accounts
7. "catch" errors after the try


B. it will then authentiate the user with the provided email adn password

1. show if successful
2. show if there are breaches found and suggest a pw change
3. show if o breaches found
4. boilerplate for the invalid credentials on auth

II. abstract into a helper function logic to filter the breached accounts based on specific criteria which filters out sensitive accounts, ensure the breach includes "Passwords", and checks if the breach occured after the user's last login -- I didn't have enough time to craft this

III. create another helper function to map the breached account data to a simplified format and conver the api response to the correct format -- I didn't have enough time to complete this :(