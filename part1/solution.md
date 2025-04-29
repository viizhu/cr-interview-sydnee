**From:** You

**To:** Casey (senior engineer teammate)

**Subject:** re: User creation error

Hey Casey,

I spent some time looking at this issue and was able to find a quick solution and really I think get to the root of what the issue may be. I was not sure initially what the solution or problem might have been but I kept seeing an error message come up - {'success': False, 'error': 'ERROR: invalid input syntax for integer: 24ab21dd47a7'} for some of the test cases you created.

I thought this was strange so I logged some of the results for the failing and passing test cases as well as the response from the fetch_social_profiles function.

Here is a very interesting one I would like you to check out
[{'network': 'facebook', 'id': '740150092536', 'email': 'squadgoals@gmail.com', 'follower_count': 400, 'active_since': datetime.datetime(2015, 4, 22, 12, 51, 56, 267736)}, {'network': 'twitter', 'id': '145248020360', 'email': 'squadgoals@gmail.com', 'follower_count': 800, 'active_since': datetime.datetime(2019, 4, 21, 12, 51, 56, 267747)}, {'network': 'linkedin', 'id': '652173572942', 'email': 'squadgoals@gmail.com', 'follower_count': 300, 'active_since': datetime.datetime(2017, 4, 21, 12, 51, 56, 267756)}, {'network': 'instagram', 'id': '2eddba8ac85e', 'email': 'squadgoals@gmail.com', 'follower_count': 1600, 'active_since': datetime.datetime(2021, 4, 20, 12, 51, 56, 267765)}, {'network': 'snapchat', 'id': '77d02a5e9583', 'email': 'squadgoals@gmail.com', 'follower_count': 2000, 'active_since': datetime.datetime(2023, 4, 20, 12, 51, 56, 267768)}]

As we can see here the id for the snapchat profile and the id for the instagram account both coming back as identifiers that contain non numeric values for this squadgoals@gmail.com profile. It seems that when we try and save these two profiles that have these nonumeric ids in our save function it will throw an error. Although I didn't have time to see how we are handling saving ids exactly in the database I think we are not expecting this type of value.

I also wanted to mention that although this test case was created I did not see how it was failing
self.assertEqual(CreateUserProfile.before_create("defaultdance@fortnitefan.com"), True),
the profile object looked valid.

I have also found in documentation for Snapchat and Instagram that the API's are supposed to be sending backing alphanumeric strings so it must have been an oversight on our part when we added this feature.

Snapchat user id is a UUID - https://developers.snap.com/api/marketing-api/Public-Profile-API/Profiles
I have seen conflicting information on whether or not the Instagram userid is a string or integer from stack overflow and there own docs - https://developers.facebook.com/docs/instagram-platform/instagram-graph-api/reference/ig-user/ , https://stackoverflow.com/questions/11796349/instagram-how-to-get-my-user-id-from-username .

So I would definitely like to get your thoughts on this.

For the time being before we can address how we are actually saving the profile I have added a for loop to clean up and remove profiles that have ids we cannot handle as an example.

For future and final changes I think of course we should change the type of the id we are expecting to be a string in our database but I am unsure of the downstream effects this may cause with how we are expecting the format to be from these third party social media sites in other areas of the platform. I would reccomend we do a serious search in our codebase to see how we handle things and if this is a solution we can implement based on that.

Please let me know what you think and if there is more information I can provide for you about this bug.

Thank you,
Andrew Mumford

--------

**Ticket #9584 Comment** to Tamara (customer support colleague)

Tara,

Thank you for bringing this issue to our attention, it seems that an integration with some of the social media sites is causing a downstream issue when saving there profile informatio to the database.

The issue on our end definitely seems to be related to the social media enrichment feature.
I would reccomend letting the customers know that we are having some issues with that feature that involves various different social media platforms giving us some data we are not handling properly.

For them to still partially use this feature and import some profiles it looks like if they only enable Facebook, Twitter, and LinkedIn they shouldnt have any issues importing. As for the other sites we are still trying to resolve a root cause fix for those platforms and have disabled them until we get a full fix implemented to support those platforms.

Thank you,
Andrew Mumford