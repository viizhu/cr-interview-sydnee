One thing that hindered me is that I could not find where console log information is displayed on Qualified, making debugging a seriously more complicated and time consuming issue. Therefore, I wrote the shell of what I intended

The flow of what I was doing it to implement a service to the data breach api that would allow for user account information (email) to be as part of the url (per api documentation) to check if that accounted was affected.

1. pass the email and password to the service
2. interpolate email to url to allow for fetch request
3. pass json versions of email and password (password should have some encryption) in body to authenticate user
4. based on the result, update information displayed on log in to communicate if affect i.e. a conditional where if res.status was 200 they were affected and 404 if not.
5. develop a utilit function that filters the response to limit based on the criteria in step 2.
6. format the information in the meta to then display the information needed to the user

https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch