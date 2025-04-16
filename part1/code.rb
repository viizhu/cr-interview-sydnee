class CreateUserProfile
  def self.before_create(email)
    profiles = SocialMediaProfiles.fetch_social_profiles(email)

    result = SocialMediaProfiles.save_profiles(profiles)

    result['success']
  end
end
