console.log('%c\nЗадача 2:\n', rainbow);

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (acc, item, index, arr) => {
  const sum = acc + item

  if (index === arr.length - 1) {
    return sum / arr.length
  }
  
  return sum
}

const average = Math.floor(allCashbox.reduce(getAverageValue, 0))

console.log(`Средний чек за день ${average}`)