import {
  users as sampleUsers,
  breaches as sampleBreaches,
} from "./sample";

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

async function login(email, password) {
  const account = authenticate(email, password);
  if (account) {
    const url = `https://hackcheck.woventeams.com/api/v4/breachedaccount/${email}`
    
    try {
      let breaches = [];
      const response = await fetch(url, {method: "GET"})
      const json = await response.json()
      breaches = [...json];
      breaches = breaches.filter(breach => breach.IsSensitive === false).filter(breach=>  'Passwords' in breach.DataClasses).filter(breach => new Datetime(breach.addedDate) > account.lastLogin ).forEach((x)=>{
        
        
        
//         temp = {
//            name: x["Name"],
//            domain: x["Domain"],
//            breachDate: x["BreachDate"],
//            addedDate: x["AddedDate"]
//         }
//         x = temp
      })
      console.log(breaches );
      
      // A new breach was detected!
      if (breaches.length > 0) {
        return {
          success: true,
          meta: {
            suggestPasswordChange: true,
            breachedAccounts: breaches
          }
        };
      } else {
        return { success: true };
      }
      
    }
    catch(e){
      console.log(e)
    }
  } else {
    return {
      success: false,
      message: "The username or password you entered is invalid."
    };
  }
}

export default login;
