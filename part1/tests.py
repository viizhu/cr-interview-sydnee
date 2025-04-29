import unittest
from preloaded import *
from solution import CreateUserProfile

# Note: the class must be called Test
class Test(unittest.TestCase):
    def test_some_users_that_work(self):
        self.assertEqual(CreateUserProfile.before_create("flowerchild@60s.com"), True)
        self.assertEqual(CreateUserProfile.before_create("programmer@gizmo.com"), True)

    def test_some_users_that_fail(self):
        # Creating these accounts should work, but something is wrong!
        # (We won't evaluate whether this test passes or not, you can use it if it is helpful)

        self.assertEqual(CreateUserProfile.before_create("avocado@hipmail.com"), True)
        self.assertEqual(CreateUserProfile.before_create("squadgoals@gmail.com"), True)
        self.assertEqual(CreateUserProfile.before_create("defaultdance@fortnitefan.com"), True)