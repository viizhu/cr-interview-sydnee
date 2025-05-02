**From:** You

**To:** Casey (senior engineer teammate)

**Subject:** re: User creation error

Hi Casey, the first thing I noticed was the error message "ERROR: invalid input syntax for integer: 24ab21dd47a7".
After realizing that that integer was one of the id's we are using I compared it to the rest of the id's and did determine it seems to be the only one that includes letters(along with the id from snapchat which is also erroring) and not just numbers. I believe this is why we are getting the error, there is something off with that value that our db does not allow, I presume it is the letters included.

I think one of the first places to start here is to look up what we are returning from the "#fetch_social_profiles" method, and to be sure we are fetching what we think we are.
Then I would check to make sure we are not altering the value in some way that is making it incompatible for saving.

-------

**Ticket #9584** Comment to Tamara (customer support colleague)

Hi Tamara, I believe this is a problem with the Instargram and Snapchat integrations at the moment. As a quick fix, untill we can investigate this matter further, I would suggest unchecking the Instagram and Snapchat boxes when trying to create a profile. Once we have fixed this, we will send you a notification that it's working.

Thanks