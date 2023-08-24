console.log('%c\nДомашнее задание урока 8:\n', rainbow);

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,
  getTotalPrice() {
    return this.totalPrice;
  },
  add(nameProduct, priceProduct, countProduct = 1) {
    this.increaseCount(countProduct);
    return this.items.push({nameProduct, priceProduct, countProduct});
  },
  increaseCount(countProduct) {
    this.count += countProduct;
  },
  calculateItemPrice() {
    return this.totalPrice = this.items.reduce((acc, item) => acc + item.countProduct * item.priceProduct, 0);
  },
  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },
  print() {
    console.log('Ваша корзина:');
    let cloneItems = JSON.stringify(this.items);
    console.log(cloneItems);
    console.log(`Общая стоимость ${this.getTotalPrice()} руб.`);
    
    // вывод в виде таблицы
    let summaryTable = JSON.parse(cloneItems);
    for(const element of summaryTable) {
      let iterableEl = Object.keys(element);
      element.sum = element[iterableEl[1]] * element[iterableEl[2]]
    }
  
    const nameProduct = 'Общая стоимость';
    const sum = this.getTotalPrice();
    summaryTable.push({nameProduct, sum});
    console.table(summaryTable);
  }
};

cart.add('Телефон', 10000, 2);
cart.add('Компьютер', 70000);
cart.add('Телевизор', 50000);
cart.add('Настольная игра', 3500, 3);

cart.calculateItemPrice();

cart.print()

// cart.clear()

