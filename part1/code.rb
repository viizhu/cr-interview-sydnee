class CreateUserProfile
  def self.before_create(email)
    profiles = SocialMediaProfiles.fetch_social_profiles(email)
    puts profiles

    result = SocialMediaProfiles.save_profiles(profiles)
    puts result

    result['success']
  end
end