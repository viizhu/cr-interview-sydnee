**From:** You

**To:** Casey (senior engineer teammate)

**Subject:** re: User creation error

Hello Casey,

I'm happy to look into this issue. With Support's help, I see that this is an occasional issue affecting some new user accounts but not all. As some accounts are succeeding and some are not, it maybe there's too much flexibility in the data types that were used for the row values. It may be we're not checking whether all input types are properly validated. If all input fields are validated, then is it possible the account ids we're passing for some of these social media profiles are incomplete? Given this started happening with the social media feature rollout and not prior, I think it's safe to say the answer is in the newly merged code.

The accounts that are succeeding are showing `created: true` where those that aren't are passing `created: false`.

I have added myself and the Support agent to the bug ticket watchlist so we can get updates on what you and/or the team determine. I'm available any time to provide additional context or smoke test any updates in the UI, if needed.

-------

**Ticket #9584 Comment** to Tamara (customer support colleague)

Hello Tamara,

Thanks so much for the great work surfacing this bug issue. For internal discussions only: I've taken a look at your notes and test cases, and it's possible that we're not consistently saving a user's social media information as intended. The Jira ticket has a 2-4 day SLA so we should have a resolution back from the team in that time frame. In the meantime, we may want to offer a temporary work around by asking new users to hold off adding their social media information to their platform upon creation and that we'll touch base soon to let them know when they can go in and fill out that information. I've added us both to the ticket so we'll receive timely updates on the progress of the fix. Please @mention me in the ticket if you need me to check out new findings.

Beth Notes:

1. what social media platforms are these five test users submitting in their profiles?
2. can we get a HAR file of the error the users are seeing (dev tools)?
3. is this happening on all browsers? in incognito?
4. when we're building an account in the db (Users table?), what are we indexing on?