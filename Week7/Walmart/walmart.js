function Checkout() {
	this.items = [];
    this.prices = [];
    this.discounts = [];
}

Checkout.prototype.addItem = function addItem(item) {
	this.items.push(item);
	return this.items;
    
};

Checkout.prototype.addItemPrice = function addItemPrice(item,price) {
	this.prices.push(price);
	return this.prices;
};

Checkout.prototype.getTotal = function add() {
	return this.items.reduce(function(accumulator, item) {
		return accumulator + price(item);
	}, 0);
};

Checkout.prototype.addDiscount = function addDiscount() {
	var numItems = this.items.length;
    if (numItems >= 2){
        return 'Discount Added';
    }
};
function price(item) {
	var itemPrices = { Oranges: 50, Apples: 30, Grapes: 20, Bananas: 15 };

	return itemPrices[item] ? itemPrices[item] : 0;
}
module.exports = Checkout;