class CreateUserProfile {
  static beforeCreate(email) {
    var profiles = SocialMediaProfiles.fetchSocialProfiles(email);

    var result = SocialMediaProfiles.saveProfiles(profiles);

    return result.success;
  }
}
