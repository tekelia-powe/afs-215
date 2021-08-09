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
})