import unittest
from fizzbuzz import fizzbuzz

class TestFizzBuzz(unittest.TestCase):
    def test_1(self):
        for num in [1]:
            assert fizzbuzz(num) == '1'
    def test_2(self):
        for num in [2]:
            assert fizzbuzz(num) == '2'