# Checking for Compromised Accounts
### Overview
We want to inform our users if their email has been involved in a security breach on another site. Since people sometimes reuse passwords across multiple websites, we'll encourage them to update their information incase their password is no longer secure. As breached emails are critical, we want to notify users as soon as they log into our app.

## Tasks
You'll see the current login logic in `src/login.js` with some hardcoded values for testing purposes. Your goal is to get this code hitting an external breach data API called Hack Check and notify the user of those breaches in a modal upon logging in successfully

1. Using the Hack Check API, retrieve the breaches for the user that just logged in (if there are any)
You can click here to read the API documentation.

2. The API provides some breaches that we aren't interested in displaying to the user. Limit breaches you return to those that fit the following criteria:
* `IsSensitive` is false AND
* `DataClasses` array contains the value `'Passwords'` AND
* `AddedDate` is after the user's `lastLogin`

If the user has breaches, return the following information in this format:
```
    {
      success: true,
      meta: {
        suggestPasswordChange: true,
        breachedAccounts: [{
          name: <Name>,
          domain: <Domain>,
          breachDate: <BreachDate>,
          addedDate: <AddedDate>
        }]
      }
    }
```

### Test users
Before hitting the API, the app is hard coded to return the same 3 breaches for either user.

| User        | Email            | Password | API response                   |
|-------------|------------------|----------|--------------------------------|
| Safe User   | safe@example.com | pw       | no breaches found (HTTP 404)   |
| Unsafe User | test@example.com | pw       | some breaches found (HTTP 200) |

### Other notes
**No UI changes needed:** You should not modify any user interface code.

**Error handling:** Only light API error handling is expected. Note that the API will respond with HTTP 404 if the user has no known breaches.

**Testing:** Open the Web Preview. There will be a login form and a box below it that shows the result of the last login attempt. We will not evaluate changes to the automated tests.

* If you see Web Preview Qualified 404 errors, please disable any content blockers you may have running and try reloading the page.
* If you have API issues, double-check your request URL and API endpoint.

To use a debugger or see detailed console logs, open your browser's Javascript console / devtools.

**Hot Reloading:** You may disable hot reloading by clicking the green Auto switch on the Web Preview.