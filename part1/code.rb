class CreateUserProfile
  def self.before_create(email)
    profiles = SocialMediaProfiles.fetch_social_profiles(email)
    print "profiles: #{profiles}"


    result = SocialMediaProfiles.save_profiles(profiles)
    print "results are: #{result}"

    result['success']
  end
end