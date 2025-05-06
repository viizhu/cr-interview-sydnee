**From:** Qwelian

**To:** Casey (senior engineer teammate)

**Subject:** re: User creation error

Hey Casey, I just looked into the issue with users not saving. Whats interesting is that

`SocialMediaProfiles.fetchSocialProfiles(email)`

succesully returns the user profiles.

However when logging the result of

`SocialMediaProfiles.saveProfiles(profiles)`

I get

`{     success: false,     error: 'ERROR:  invalid input syntax for integer: 24ab21dd47a7'   }`

This indicates the save call in the database isnt handling the id for a user. Our schema probably expects an integer for the user string.

See:

* https://www.postgresql.org/message-id/1591B4EE-E7FC-4858-BBE7-D077990D7926@ausvet.com.au
* https://github.com/jackc/pgx/issues/1194
* https://stackoverflow.com/questions/18297980/pg-copy-error-invalid-input-syntax-for-integer

This profile in particular is what's causing the error.

`  {       network: 'instagram',       id: '24ab21dd47a7',     .....     },`

`24ab21dd47a7` is not an integer. Maybe all instagram users return a string id becasue I am not seeing any instagram accounts in the `'test some users that work'` test that pass.

For now we could put something like this in our functions when getting the user profiles.

`if (error) in result     toast(error, "Error pulling in ${profiles.find((profile)=>profile.id === badId).network} information")
`

At least users would have a clear error message. Do we have toast messaging setup yet?

Some downstream solutions could be

* migrating to using string for the id column (seems reasonable)
* adding string_id to the schema (adds latency but supports type)

Let me know what you think the best path forward is given the findings.

----------


**Ticket #9584 Comment** to Tamara (customer support colleague)

Afternoon Tamera. Its looking like a bug snuck into how we are saving user profiles. Some of the profile Id's are causing an error when saved to the database because they are expecting an integer(1234) not a string(1234abcd). I am not exactly sure why but I can take a closer look soon.