from preloaded import *

class CreateUserProfile:
  @staticmethod
  def before_create(email):
    profiles = SocialMediaProfiles.fetch_social_profiles(email)
    print(profiles)
    result = SocialMediaProfiles.save_profiles(profiles)
    print(result)
    return result['success']