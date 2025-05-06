# Managing User Permissions
## Background
Our app recently started supporting multiple types of users. As a result, we need to add the concept of role-based access control. When users log in, they should only be able to view certain pages according to their roles.

We have already laid out the framework for this change on the database end by adding a roles property to our user model and creating a permissions table that contains all the roles we want to give the users and their associated permissions.

[Here is a graphic to help visualize the two data structures, Users and Permissions](https://woven-scenario-assets.s3.amazonaws.com/managing_user_permssions_graphic.png)


*Note: This is a graphic to represent the two data structures using pseudocode and not written within the grammar/naming conventions of any one programming language*

We have determined the next step in the process is to build two functions that will give us the ability to check all the permissions associated with each role and check whether a user has specific permission.

## Testing
The automated tests we provide only cover a few key cases, so you should plan to add some of your own tests or modify the existing ones to ensure that your solution handles any edge cases. You should be able to follow the existing patterns for naming and constructing tests to add your own.

## Notes
* It’s more important for the return value to be correct than for the algorithm to be highly optimized.
* You should not change the name, arguments, or return types of the provided functions since our test cases depend on those not changing.
* The data in the internal tests will be different from the data we gave in the examples, so do not hardcode your solutions to the examples.
* Feel free to add additional functions beyond those provided if they improve the structure of your solution.