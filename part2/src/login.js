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
     const sampleBreaches = verifyAccount(account)
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


async function verifyAccount(account) {
  
  const url = "https://hackcheck.woventeams.com/api/v4/breachedaccount/#{account}";
  try {
    const response = await fetch(url);

    const json = await response.json();
    console.log(json);
    
    const results = json.filter((json) => json["IsSensitive"] == false && json["DataClasses"].includes('Passwords') && json["AddedDate"] < account)
  } catch (error) {
    console.error(error.message);
  }
}

export default login;
