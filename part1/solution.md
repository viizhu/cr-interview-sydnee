we have some accounts getting created properly and some are not
some things to check

* inspect logs if I could to see if there was a helpful error message of why the account creation failed (since we dont have access to postgresql then we can use puts to log are variables and inspect to show the full objects )
  * this should show us what is getting passed in
* log:

```
fetched profiles: [{"network"=>"facebook", "id"=>"724326566405", "email"=>"avocado@hipmail.com", "follower_count"=>380, "active_since"=>2015-04-12 17:10:57.282882225 +0000},
{"network"=>"twitter", "id"=>"568901789289", "email"=>"avocado@hipmail.com", "follower_count"=>760, "active_since"=>2019-04-11 17:10:57.282894617 +0000},
{"network"=>"linkedin", "id"=>"367594050433", "email"=>"avocado@hipmail.com", "follower_count"=>285, "active_since"=>2017-04-11 17:10:57.28292083 +0000},
{"network"=>"instagram", "id"=>"24ab21dd47a7", "email"=>"avocado@hipmail.com", "follower_count"=>1520, "active_since"=>2021-04-10 17:10:57.282929184 +0000},
{"network"=>"snapchat", "id"=>"3af170bb82d6", "email"=>"avocado@hipmail.com", "follower_count"=>1900, "active_since"=>2023-04-10 17:10:57.282932674 +0000}]
save result: {"success"=>false, "error"=>"ERROR: invalid input syntax for integer: 24ab21dd47a7"}
```

Things to check and have in mind:

* what is the criteria for a valid account (what makes the account valid to be created, what are the validations)

**From:** You
**To:** Casey (senior engineer teammate)
**Subject:** re: User creation error

Hey Casey,
The issue is coming from the SocialMediaProfiles.save_profiles(profiles) call where the system has been throwing the 500 error for some users. After doing some more debugging, I retreived this error from the logs when I print out the save profile result: "ERROR: invalid input syntax for integer: 24ab21dd47a7".

So this means that at least one of the fields expected to be an integer is recieving an invalid input.

The next steps are to

* log and inspect the profiles hash for the failing emails to identify the problematic fields
* validate the data types
* add some safeguards and error handling to catch unexpected formats before DB insertion

Let me know if you would like to hop on a call to discuss this more.

-----

**Ticket #9584 Comment** to Tamara (customer support colleague)

Hello tamara, we figured the issue out and will be taking care of it asap. There was a small issue with the way some of the input values were getting stored. Once we make this code update, I will reach out and let you know the status of this matter.