- Roles & permissions:
- Superuser can block users, but not view orders
- Some users don't have roles so handle empty roles array. If roles is empty or "beta tester", no permissions.
- There are two roles for "rider" that are both active, but have different permission names. Need to check both so that both permission names get added to the result list.

In the list_permissions function, I realized my line 23 should have been result.append(item["name"])

I didn't get to finish coding, but for the check_permitted my plan was to:
- Iterate through each user in users array
- If user["id"] matches the user_id
- Then iterate through role in user["roles"]:
- for permission in permissions:
- If permission["role"] equal to role and permissions["name"] equals permission_name and permissions["active"] == True:
- return True
- Otherwise, return False

If I had more time, I may have tried adding other test cases such as testing user_id 11 and 18 permissions to see if it would return an empty array since they don't have active permissions. And add other tests cases for when the check_permitted function should return False.
self.assertEqual(self.authorization.check_permitted("unlock user account", 2), False)
self.assertEqual(self.authorization.check_permitted("purchase widgets", 1), False)

## Full response:

```
# see graphic in instructions for visual explanation of the permission and user data structures
class Authorization:
  def __init__(self, permissions, users):
    self.permissions = permissions
    self.users = users

# @rtype: list of strings
# @returns: a list of all the active permission names that the user with the corresponding user_id has
# @note: The order in which the permission names are returned is not important
# @example: listPermissions(1) ➡ ["View Orders", "Block User Account"] (purchased widgets not included since it is not active)
  def list_permissions(self, user_id):
    # TODO: fill this out!
    # Iterate through users, access user["id"] and if it's equal to user_id
      # Iterate through user["roles"] and check if that role in permissions is active
      # Append to result 
      
    result = []
    for user in self.users:
      if user["id"] == user_id:
        for role in user["roles"]: 
          for item in self.permissions:
            if item["role"] == role and item["active"] == True:
              result.append(self.permissions["name"])
              print(result)
   
    return result


# @rtype: boolean value
# @returns: true or false based on if the user with the corresponding user_id has the role that corresponds with the specific permission_name and that particular permission is active
# @example: Example (Based on data from graphic)
# checkPermitted("scooters near me", 2) ➡ true
# checkPermitted("scooters near me", 1) ➡ false
  def check_permitted(self, permission_name, user_id):
    # TODO: fill this out!
    # Iterate through users, access user["id"] and see if it's equal to user_id
    for user in self.users:
      if user["id"] == user_id:
        for permission in 
    return
```