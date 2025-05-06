TL;DR To summarize my issues with this assesment:

* missed .html from the template string in the alert card
* incorrectly pulled the emitted auth object into the dashboard
* incorrectly iterated over breaches in the card

Im not sure why the AlertSelector is throwing the error

`Could not consume error: TypeError: (e._originalFileName || e.fileName || "").replace is not a function`

i changed the selctor to `A` to be sure. i suppose i was missing .html. wow. lmaoo let me just start applying to other jobs cause aint no way.

I am not sure sure how emit works in angular and after trying to debug the type error i didnt have time to do much research. in next or react i might say

`const handleLogin(state: User){     try{        const res = saveUser(state)        if(!res.ok) thorw Error("Logging user in")        toast(mssg: "User logged in")     } catch (e){      toast(mssg: PrettyError(e))      }   }`

And I could `import` a hook in another component

`const loginData = getLoginData()`

Where `loginData` checks for a token. In next they have middleware that does this very nicely.

Angular is a bit magical for me. Would the token be verified in the dashboard? Is the normal pattern to set a cookie and just accept it exist in the client? How does an event propogate safely? I guess this explains it.

https://stackoverflow.com/questions/52413873/angular-invoking-a-function-in-one-component-with-events-on-another-component

After going through the Angular tutorial proor to taking this assesment I do know about the service pattern. I could have created a service that subscribed to the event emitted in the login. Then set `this.loginData = this.service.loginData` in `Dashboard` class constructor? Maybe? I feel I am over complicating things. What i want to say is I do not know how to get the data emitted from `onLoginSuccess` to the `Dashboard` component.

The last miss i will cover is the conditional rendering of the alert. I also learned about deferrable views from the tutorial. The dashboard html for the alert should have looked something like this.

```
<div>  
  @defer (when suggestPasswordChange) {  
  <AlertCard></AlertCard>  
  } @placeholder (minimum 2s) {  
  <p>Checking breached accounts</p>  
  } @loading (minimum 1s; after 500ms) {  
  <p>Loading results...</p>  
  } @error {  
  <p>Failed to load results</p>  
  }  
</div>
```

This would be sure we are only rendering the `AlertCard` when the `suggestPassword` is `true` and handle any routing issues that come from it.

I am also not sure how to iterate over list in the angular framework. in react or next i would pass the breach data into the card and do

```
<ul>
{breachs.map((breach)=>{
<li key={breach.domain}>
- {breach.addedDate} – {breach.name}
<li/>
})}

</ul>
```

i do think it would look something like what I had but time was up literally as I was typing.

```
<ul *ngFor= "let breach loginSuccess.meta.breaches"  
[breach]="breach"></ul>  
```

I suppose I will also say I am not sure if templates in Angular mean I have to create another component called `breaches-...` that can handle displaying said breaches. For instance, in the more magical elixir world they have this:
```
      <%= for device <- @devices do %>  
        <li>  
              <div>  
                <p>  
                  <%= device.type %>  
                </p>  
                <p>  
                  <%= device.device_id %>  
                </p>  
              </div>  
        </li>  
      <% end %> 
```

The positives are I understand the goal and do not think the html portion was a challenge as much as the data flow in Angular. If I could do this again I would ask to not do it in Angular because it does look wierd and scary lol.

I hope, however, these notes show my ability to diagnose issues with code and communicate them. I have shown that I am able to research new frameworks, debug them, and communicate challenges with said framework in a fairly short time span. Like a couple of days. I also hope this shows that in a real world scenario I would understand the goal of what we are doing and arrive at a solution before the workday is over. If not, I would be able to communicate my issues to a tteam member and go from there.