class Checkout:
    class Discount:
        def __init__(self, numItems, price):
            self.numItems = numItems
            self.price = price

    def __init__(self):
        self.prices = {}
        self.discounts = {}
        self.items = {}

    def addDiscount(self, item, numItems, price):
        discount = self.Discount(numItems, price)
        self.discounts[item] = discount

    def addItem(self, item):

        if item not in self.prices:
            raise Exception("Bad Item")

        if item in self.items:
            self.items[item] += 1
        else:
            self.items[item] = 1

    def addItemPrice(self, item, price):
        self.prices[item] = price

    def calculateTotal(self):
        total = 0
        for item, cnt in self.items.items():
            total += self.calculateItemTotal(item, cnt)
        return total


    def calculateItemTotal(self, item, cnt):
        total = 0
        if item in self.discounts:
            discount = self.discounts[item]
            if cnt >= discount.numItems:
                numofDiscounts = cnt / discount.numItems
                total += numofDiscounts * discount.price
                remainder = cnt % discount.numItems
                total += remainder * self.prices[item]
            else:
                total += self.prices[item] * cnt
        else:
            total += self.prices[item] * cnt
        return total

    def calculateItemDiscountedTotal(self, item, cnt, discount):
        total = 0
        nbrOfDiscounts = cnt / discount.nbrItems
        total += nbrOfDiscounts * discount.price
        remainder = cnt % discount.nbrItems
        total += remainder * self.prices[item]
        return total