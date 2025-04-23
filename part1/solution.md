**From:** You
**To:** Casey (senior engineer teammate)
**Subject:** re: User creation error

Hello Casey,

There is a type issue present in the id of some user profiles. Console log/error is expecting an integer value for id, however receiving the following error:

`'ERROR:  invalid input syntax for integer: 24ab21dd47a7'`

Mixes of letters and characters is a consistent theme across all users that fail, whereas review of users that pass are use strictly numeric strings.

There is a potential issue with the schema and I would recommend reviewing the type checking as there is a schema mismatch, adding some validation (example per Stack Overflow: https://stackoverflow.com/questions/18297980/pg-copy-error-invalid-input-syntax-for-integer) to ensure only integer values are accepted as an id. Additionally, would need to query all uses to see if numeric values are included in their id to allow for targeted override to values that fit the expected numeric requirements. We will need to do a schema update to ensure better compliance, as well as updating existing ids to ensure that a new unique id as used instead.

Also, temporarily would need a try...catch to safely attempt fetching data to reduce inconvenience to user. If TypeError persists, would allow for users and customer service to more efficiently communicate problems.

Best regards,

Adam

-----

**Ticket #9584 Comment to Tamara (customer support colleague)**

Hello Tamara,

I have reviewed the case data and found that there was invalid formatting being sent along with the customer account information that would need correction. Sent recommendations to my superior for how to capture all cases with the improper formatting, as well as recommendations on a temporary fix as we review data and make the necessary updates.

Best regards,

Adam