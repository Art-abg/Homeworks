class CoffeeShop {
  constructor(name, menu = [], orders = []) {
    this.name = name;
    this.menu = menu;
    this.orders = orders;
  }

  addOrder(itemName) {
    if (this.menu.find((item) => item.name === itemName)) {
      this.orders.push(itemName);
      return "Order added!";
    } else {
      return "This item is currently unavailable!";
    }
  }

  fulfillOrder() {
    if (this.orders.length > 0) {
      const fulfilledOrder = this.orders.shift();
      return `The ${fulfilledOrder} is ready!`;
    } else {
      return "All orders have been fulfilled!";
    }
  }

  listOrders() {
    return this.orders;
  }

  dueAmount() {
    let totalAmount = 0;
    this.orders.forEach((order) => {
      const item = this.menu.find((item) => item.name === order);
      if (item) {
        totalAmount += item.price;
      }
    });
    return Number(totalAmount.toFixed(2));
  }

  addMenuItem(item) {
    this.menu.push(item);
  }
}

const menuItems = [
  { name: "cinnamon roll", price: 1.1 },
  { name: "iced coffee", price: 1.07 }
];
const tcs = new CoffeeShop("Coffee Shop", menuItems);

console.log(tcs.addOrder("hot cocoa")); // "This item is currently unavailable!"
console.log(tcs.addOrder("iced tea")); // "This item is currently unavailable!"
console.log(tcs.addOrder("cinnamon roll")); // "Order added!"
console.log(tcs.addOrder("iced coffee")); // "Order added!"
console.log(tcs.listOrders()); // ["cinnamon roll", "iced coffee"]
console.log(tcs.dueAmount()); // 2.17
console.log(tcs.fulfillOrder()); // "The cinnamon roll is ready!"
console.log(tcs.fulfillOrder()); // "The iced coffee is ready!"
console.log(tcs.fulfillOrder()); // "All orders have been fulfilled!"
console.log(tcs.listOrders()); // []
console.log(tcs.dueAmount()); // 0.0
