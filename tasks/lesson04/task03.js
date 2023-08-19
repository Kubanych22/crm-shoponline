console.log('%c\nЗадача 3:\n', rainbow);

const calculate = (sum, count, promoCode) => {
  if (count > 10) {
    sum -= sum * 0.03
  }
  
  if (sum > 30000) {
    sum -= (sum - 30000) * 0.15
  }
  
  if (promoCode === 'METHED') {
    sum -= sum * 0.1
  }
  
  if ((promoCode === 'G3H2Z1') && (sum > 2000)) {
    sum -= 500
  }
  
  return sum
}

console.log(`Стоимость корзины товаров составляет ${calculate(35000, 7)} рублей`);
console.log(`Стоимость корзины товаров составляет ${calculate(35000, 11, 'METHED')} рублей`);
console.log(`Стоимость корзины товаров составляет ${calculate(35000, 11, 'G3H2Z1')} рублей`);
console.log(`Стоимость корзины товаров составляет ${calculate(20000, 11, 'G3H2Z1')} рублей`);
