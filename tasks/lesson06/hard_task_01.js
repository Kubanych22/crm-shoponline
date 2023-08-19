console.log('%c\nДополнительное задание 1:\n', rainbow);

const allCashbox2 = [
  [12, 4500],
  [7, 3210],
  [4, 650],
  [3, 1250],
  [9, 7830],
  [1, 990],
  [6, 13900],
  [1, 370]
];


const getAveragePriceGoods = (acc, item, index, arr) => {
  const sum = acc + item[1] / item[0]
  
  if (index === arr.length - 1) {
    return sum / arr.length
  }
  
  return sum
}

const averagePrice = allCashbox2.reduce(getAveragePriceGoods, 0).toFixed(2)

console.log(`Средняя стоимость одного товара в магазине ${averagePrice}`)