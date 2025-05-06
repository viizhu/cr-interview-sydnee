//we're importing the sampleUsers and sampleBreaches data
import {
  users as sampleUsers,
  breaches as sampleBreaches,
} from "./sample";

// helper function to authenticate users
function authenticate(email, password) {
  const account = sampleUsers.find(a => a.email === email);
  if (account && account.password === password) {
    return account;
  } else {
    return null;
  }
}



// The object returned from this function will be displayed in
// a modal upon clicking submit on the login form.

API_BASE_URL = "https://hackcheck.woventeams.com/api/v4/breachedaccount/"

async function login(email, password) {
  const url = (`${API_BASE_URL}${email}`)
  
  let breachCheckStatus = 'ok';
  //first handle errors
  try {
    // get the breach data from the API (GET)
    const response = await fetch(url);
    //handle when the response isn't good
    if (!response.ok) {
      console.log(`Api request status: ${response.status}`)
    //handle if you don't find any breaches
    if (response.status === 404) {
      console.log("No breaches found for this account")
      breachCheckStatus = "not_found"
    } else {
      //handle an unexpected error
      console.log("An error occured while checking for breaches")
      breachCheckStatus = "error"
      throw new Error(`Unexpected API response: ${response.status}`)
    }
    } else {
      //parse the response as json
      const data = await response.json();
      //find the users last login to compare validity
      const foundUser = sampleUsers.find((user) => user.email => email)
      const lastLogin = foundUser ? foundUser.lastLogin : null
      //filter and map over all breached accounts
      breachedAcc
    }
   
    
    //then handle when it succeeds
    
  } catch (error) {
    //log errors that occur during the fetch and set those to empty ar
    console.error("Error processing the breach records")
    breachedAccounts = []
  }
  
  
  
  
  const account = authenticate(email, password);
  if (account) {
    // A new breach was detected!
    if (sampleBreaches.length > 0) {
      return {
        success: true,
        meta: {
          suggestPasswordChange: true,
          // hardcoded for now...
          breachedAccounts: sampleBreaches
        }
      };
    } else {
      return { success: true };
    }
  } else {
    return {
      success: false,
      message: "The username or password you entered is invalid."
    };
  }
}

export default login;
