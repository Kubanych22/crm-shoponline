console.log('%c\nДомашнее задание урока 9\n\nЗадача 1:\n', rainbow);

const cart = {
  items: [],
  get totalPrice() {
   return this.calculateItemPrice();
  },
  count: 0,
  add(nameProduct, priceProduct, countProduct = 1) {
    this.increaseCount(countProduct);
    return this.items.push({nameProduct, priceProduct, countProduct});
  },
  increaseCount(countProduct) {
    this.count += countProduct;
  },
  calculateItemPrice() {
    return this.items.reduce((acc, item) => acc + item.countProduct * item.priceProduct, 0);
  },
  clear() {
    if (!confirm('Вы действительно хотите очистить корзину')) {
      return;
    }
    this.items = [];
    this.count = 0;
  },
  print() {
    if (this.items.length === 0) {
      console.log('\nВаша корзина пуста');
      return;
    }
    console.log('Ваша корзина:');
    let cloneItems = JSON.stringify(this.items);
    console.log(cloneItems);
    console.log(`Общая стоимость ${this.totalPrice} руб.`);
    
    // вывод в виде таблицы
    let summaryTable = JSON.parse(cloneItems);
    for(const element of summaryTable) {
      let iterableEl = Object.values(element);
      const [, priceProduct, countProduct] = iterableEl;
      element.sum  = priceProduct * countProduct;
    }
  
    const nameProduct = 'Общая стоимость';
    const sum = this.totalPrice;
    summaryTable.push({nameProduct, sum});
    console.table(summaryTable);
  }
};

cart.add('Телефон', 10000, 2);
cart.add('Компьютер', 70000);
cart.add('Телевизор', 50000);
cart.add('Настольная игра', 3500, 3);

cart.totalPrice = 10;

cart.calculateItemPrice();

cart.totalPrice = 10;

cart.print();

// cart.clear();
//
// cart.print();
