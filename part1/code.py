from preloaded import *

class CreateUserProfile:
  @staticmethod
  def before_create(email):
#     print(f'{email}')
    profiles = SocialMediaProfiles.fetch_social_profiles(email)
    print(f'{profiles}')
    cleanedProfiles = []
    for profile in profiles:
      if profile["id"].isnumeric():
        cleanedProfiles.append(profile)
#     print(cleanedProfiles)
    result = SocialMediaProfiles.save_profiles(cleanedProfiles)
  #     for avocado@hipmail.com:
  # {'success': False, 'error': 'ERROR: invalid input syntax for integer: 24ab21dd47a7'}
  # avocado@hipmail.com - instagram id 24ab21dd47a7
  # avocado@hipmail.com - snapchat id 3af170bb82d6
  # it does not appear that we expect 
  
#     print(f'{result}')
#     a quick fix would be to check each link to make sure the id of each profile is a number
# but the deeper root issue is that we are not accounting for multiple different social media sites having different formats for their ids
    return result['success']