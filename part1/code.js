class CreateUserProfile {
  static beforeCreate(email) {
    var profiles = SocialMediaProfiles.fetchSocialProfiles(email);
    console.log(profiles);
    var result = SocialMediaProfiles.saveProfiles(profiles);

    return result.success;
  }
}