RSpec.describe "CreateUserProfile" do
  it "test some users that work" do
    expect(CreateUserProfile.before_create("flowerchild@60s.com")).to eq(true)
    expect(CreateUserProfile.before_create("programmer@gizmo.com")).to eq(true)
  end
  
  # Creating these accounts should work, but something is wrong!
  # (We won't evaluate whether this test passes or not, you can use it if it is helpful)
  it "test some users that fail" do
    expect(CreateUserProfile.before_create("avocado@hipmail.com")).to eq(true)
    expect(CreateUserProfile.before_create("squadgoals@gmail.com")).to eq(true)
    expect(CreateUserProfile.before_create("defaultdance@fortnitefan.com")).to eq(true)
  end
end