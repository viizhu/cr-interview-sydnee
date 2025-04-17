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

async function checkEmail(email, lastLogin) {
  const response = await fetch(`https://hackcheck.woventeams.com/api/v4/breachedaccount/${email}`);
//   if (!response.ok) return [];
  const data = await response.json();
  
  return data.filter(breach => !breach.IsSensitive && breach.DataClasses.includes("Passwords") && new Date(breach.AddedDate) > new Date(lastLogin));
  
}
// The object returned from this function will be displayed in
// a modal upon clicking submit on the login form.

async function login(email, password) {
  const account = authenticate(email, password);
  if (account) {
    const breaches = await checkEmail(email, account.lastLogin);
    // A new breach was detected!
    if (breaches.length > 0) {
      return {
        success: true,
        meta: {
          suggestPasswordChange: true,
          // hardcoded for now...
          breachedAccounts: breaches.map(breach => ({
            name: breach.Name,
            domain: breach.domain,
            breachDate: breach.breachDate,
            addedDate: breach.addedDate,
          }))
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
