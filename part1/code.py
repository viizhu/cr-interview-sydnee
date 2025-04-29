from preloaded import *

class CreateUserProfile:
  @staticmethod
  def before_create(email):
    profiles = SocialMediaProfiles.fetch_social_profiles(email)

    result = SocialMediaProfiles.save_profiles(profiles)

    return result['success']
