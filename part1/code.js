class CreateUserProfile {
  static beforeCreate(email) {
    
    var profiles = SocialMediaProfiles.fetchSocialProfiles(email);
    console.log("p", profiles)
    var result = SocialMediaProfiles.saveProfiles(profiles);
//     console.error("r", result)
    return result.success;
  }
}

