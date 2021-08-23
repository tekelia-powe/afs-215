var assert = require('assert');
var Checkout = require('../');
var checkout = new Checkout();

describe('Checkout', function () {
	it('Can add an item', function () {
		checkout.addItem('Oranges');
		assert.equal(checkout.items.length, 1);
		});

    it('Can add an item price', function () {
		
        checkout.addItemPrice('Oranges','3.40');
		assert.equal(checkout.prices.length, 1);
		});
	
    it('Can calculate current total', function () {
        
        checkout.addItem("Apples");
        
        var amount = checkout.getTotal();

        assert.equal(amount, 80);
    });
       
    it('Can calculate add multiple items and calculate total', function () {
        
        checkout.addItem("Oranges");
        checkout.addItem("Grapes");
        checkout.addItem("Apples");

        var amount2 = checkout.getTotal();

        assert.equal(amount2, 180);
    });

    it('Can add discount rules', function () {
        
        checkout.addItem("Oranges");
        checkout.addItem("Grapes");
        checkout.addItem("Apples");

        assert.equal(checkout.addDiscount(),'Discount Added');
    });

})