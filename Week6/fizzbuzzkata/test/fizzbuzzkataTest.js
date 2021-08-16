const assert = require('chai').assert;
const fizzBuzz = require('../fizzbuzzkata').fizzBuzz;

describe('App', function(){
    it('app should call fizzbuzz', function(){
        assert.equal(fizzBuzz())
    });

    it('app should return 1', function(){
        assert.equal(fizzBuzz(1),'1')
    });

    it('app should return 2', function(){
        assert.equal(fizzBuzz(2),'2')
    });

    it('app should return Fizz', function(){
        assert.equal(fizzBuzz(6),'Fizz')
    });

    it('app should return Fizz', function(){
        assert.equal(fizzBuzz(3),'Fizz')
    });

    it('app should return Buzz', function(){
        assert.equal(fizzBuzz(5),'Buzz')
    });

    it('app should return Buzz', function(){
        assert.equal(fizzBuzz(10),'Buzz')
    });

    it('app should return FizzBuzz', function(){
        assert.equal(fizzBuzz(15),'FizzBuzz')
    });
})