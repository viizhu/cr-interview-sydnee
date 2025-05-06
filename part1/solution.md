**From:** You

**To:** Casey (senior engineer teammate)

**Subject:** re: User creation error

Hi Casey,

For the test_some_users_that_fail, the result yields an error message that states, 'error': 'ERROR: invalid input syntax for integer: 24ab21dd47a7'. That is the instagram id for one of the users whose test case failed. In Python, you get an "invalid input syntax for integer" error when attempting to convert a value that is not a valid integer representation into an integer data type, commonly occurring when using the int() function or when Python is implicitly trying to convert a value to an integer (source: Google). The tests that passed all have ids that only contain numbers. Python might be implicitly trying to convert the instagram id to an integer which might be causing a data consistency issue. I'll keep working on it and get back to you.


----------

**Ticket #9584 Comment** to Tamara (customer support colleague)

Hi Tamara,

I'm troubleshooting this issue and the problem might be with certain social media integrations (e.g., instagram) that needs further investigation. I'll follow up with more information as I continue to work on it.