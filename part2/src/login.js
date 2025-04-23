import {
  users as sampleUsers,
  breaches as sampleBreaches,
} from "./sample";

// service
 const checkIfBreached = async (email, password) => {
    try {
        const res = await fetch(`https://hackcheck.woventeams.com/api/v4/breachedaccount/${email}`, {
            method: 'GET',
            headers: {                
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })
        console.log("rs", res.status)
        if (res.status === 404) {
          return {
            success: true,
            message: 'no breach found'
          }
        } else if (res.status === 200) {
          return {
            success: false,
            message: 'breach found',
//              meta: {
      //          suggestPasswordChange: true,
          //      breachedAccounts: [{
        //        name: <Name>, //res.name
        //        domain: <Domain>, // res.domain
        //        breachDate: <BreachDate>, //res.breachDate
      //          addedDate: <AddedDate> // res.addedDate
          //      }]
          }
        } else {
          throw new Error("Other unexpected error")
        }
   
    } catch (err) {
        console.log(err)
    }
}

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
  console.log('ep', email, password)
  const account = authenticate(email, password);
  console.log("a", account)
  if (account) {
      checkIfBreached(email, password)
  } else {
    return {
      success: false,
      message: "The username or password you entered is invalid."
    };
  }
}


export default login;