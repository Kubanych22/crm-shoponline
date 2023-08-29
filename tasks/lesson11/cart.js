// eslint-disable-next-line no-undef
console.log('%c\nЗадача #2:\n', rainbow);

const cart = {
  items: [],
  count: 0,
  discount: 0,
  
  get totalPrice() {
    return this.calculateItemPrice();
  },
  set setDiscount(promocode) {
    if (promocode.toUpperCase() === 'METHED') {
      this.discount += 15;
    }
    if (promocode.toUpperCase() === 'NEWYEAR') {
      this.discount += 21;
    }
  },
  
  add(nameProduct, priceProduct, countProduct = 1) {
    this.increaseCount(countProduct);
    return this.items.push({nameProduct, priceProduct, countProduct});
  },
  increaseCount(countProduct) {
    this.count += countProduct;
  },
  calculateItemPrice() {
    let totalCost = this.items.reduce((acc, item) =>
        acc + item.countProduct * item.priceProduct, 0);
    // console.log('Сумма = ', totalCost);
    if (this.discount !== 0) {
      totalCost = totalCost - totalCost * this.discount / 100;
    }
    return totalCost;
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
    const cloneItems = JSON.stringify(this.items);
    console.log('cloneItems', cloneItems);
    let sum = this.totalPrice;
    console.log(`Общая стоимость ${sum} руб.`);
    console.log(`Сумма дисконта ${sum / (1 - this.discount / 100) * this.discount / 100}`);
    
    // вывод в виде таблицы
    const summaryTable = JSON.parse(cloneItems);
    for (const element of summaryTable) {
      const iterableEl = Object.values(element);
      const [, priceProduct, countProduct] = iterableEl;
      element.sum = priceProduct * countProduct;
    }
    
    let nameProduct = 'Общая стоимость';
    summaryTable.push({nameProduct, sum});
    nameProduct = 'Сумма дисконта';
    sum = sum / (1 - this.discount / 100) * this.discount / 100;
    summaryTable.push({nameProduct, sum})
    console.table(summaryTable);
  },
};

cart.add('Телефон', 10000, 2);
cart.add('Компьютер', 70000);
cart.add('Телевизор', 50000);
cart.add('Настольная игра', 3500, 3);

cart.setDiscount = 'METHED';
cart.setDiscount = 'Newyear';

cart.calculateItemPrice();

cart.print();

// cart.clear();
//
// cart.print();
