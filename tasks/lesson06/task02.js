console.log('%c\nЗадача 2:\n', rainbow);

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = allCashbox.reduce((acc, item, index, arr) => {
  const sum = acc + item

  if (index === arr.length - 1) {
    return sum / arr.length
  }
  return sum
}, 0)

let average = Math.floor(getAverageValue)

console.log(`Средний чек за день ${average}`)