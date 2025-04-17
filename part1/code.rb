class CreateUserProfile
  def self.before_create(email)
    profiles = SocialMediaProfiles.fetch_social_profiles(email)
    puts "fetched profiles: #{profiles.inspect}"
    result = SocialMediaProfiles.save_profiles(profiles)
     puts "save result: #{result.inspect}"
    result['success']
  end
end
