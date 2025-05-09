My debugging process:

* printed profiles and result to console for each passing and failing test
* every failing test has thie error message: "ERROR: invalid input syntax for integer: [id]"
* based on this I know that the problelm is that some of the social profile ids contain letters
* upon further inspection those ids with letters are only coming from instagram and snapchat
* this is causing an error during id validation because the system is checking for type integer
* a solution to this problem can be to validate id as type String

**From:** Kayla George

**To:** Casey (senior engineer teammate)

**Subject:** re: User creation error

Good morning Casey,

I just took a look at that bug report you sent me and I was able to figure out the root cause of the issue. It looks like we're validating social profile ids as Integers when some of the ones from Instagram and Snapchat contain letters. If we validate those as type String, those failed tests will pass.

Let me know if you need anything else. I'm always happy to help :)

Best,
Kayla George

--------

**Ticket #9584 Comment** to Tamara (customer support colleague)

Hi Tamara,

This will be a quick fix. I'll let you know when it's live, but in the meantime they will be able to create users with Instagram and Snapchat turned off since that is the source of the bug.

Thanks,
Kayla George