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
    // A new breach was detected!
    // get account breaches
    // will return [] and a 404 if account is not found and not breached
    // will return an object array otherwise
    const accountBreaches = await getBreaches(email);
    

    const validBreaches = accountBreaches.filter((breach) => { return !breach.IsSensitive && breach.DataClasses.includes("Passwords") && new Date(breach.AddedDate) > new Date(account.lastLogin)})
    
    if (validBreaches.length > 0) {
      const formattedBreaches = validBreaches.map((breach) => {
        return { name: breach.Name, domain: breach.Domain, breachDate: breach.BreachDate, addedDate: breach.AddedDate } });

      return {
        success: true,
        meta: {
          suggestPasswordChange: true,
          breachedAccounts: formattedBreaches
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

async function getBreaches(email){
  const response = await fetch(`https://hackcheck.woventeams.com/api/v4/breachedaccount/${email}`) 
  
  if(!response.ok){
    if(response.status !== 404){
          throw new Error(`Error fetching account ${response.status}`)
    }else{
      return []
    }
  }
  const breachData = await response.json();
  return breachData;
}

export default login;
