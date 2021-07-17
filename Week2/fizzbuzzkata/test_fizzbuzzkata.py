import unittest
from fizzbuzz import fizzbuzz


class TestFizzBuzz(unittest.TestCase):
    def test_1(self):
        for num in [1]:
            assert fizzbuzz(num) == '1'

    def test_2(self):
        for num in [2]:
            assert fizzbuzz(num) == '2'

    def test_3(self):
        for num in ['FizzBuzz']:
            assert fizzbuzz(num) == 'FizzBuzz'

    def test_4(self):
        for num in ['Buzz']:
            assert fizzbuzz(num) == 'Buzz'

    def test_5(self):
        for num in ['Fizz']:
            assert fizzbuzz(num) == 'Fizz'
