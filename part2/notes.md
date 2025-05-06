Notes for implementation thinking.

I included the try catch block to catch any unknown errors. I kind of regret this as it took time, not much but still. I dont know if that was required but I do it out of habit.

I initialized breaches to an empty array because that seems like a reasonable variable name. A more descriptive name could be userAccountBreaches.

I called the API endpoint using the basic fetch function and specified GET. I do not think I have to but I always find its nice for clarity.

It was clearer to await the json and destructure on seperate lines. Arguably "not very JS of me". I could have for example done:

`const breaches = json.filter...`
or
`return await res.json().filter...`

I dont know why I used `Datetime`. It could be elixir brain. I am learning elixir so things are a bit mixed for me. One sec.

yeah lol, from a small code snippet: `now = DateTime.utc_now()`

Still not camelCase though. Very PascalCase . Very unreasonable miss for an interview challenge in which I compete with others. I would so lose the hunger games.

I confused in for object usage. Big oof.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in

Bigger oof is using `forEach`.
`forEach` will not return an array. That is why I get an error stating `breaches has no length method`. I should have used `map`. Crazy thats in my 30 days of JS notes and i still forgot......🙃

the last major issue was not having 404 handled. I think the logic would be `if (!response.ok )return { success: true }`
this means I can remove the else `{ return { success: true }; }`