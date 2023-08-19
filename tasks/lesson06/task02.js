console.log('%c\nВыполняются скрипты из папки \"lesson05\"\nЗадача 1:\n', rainbow);

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (acc, item, index, arr) => {
  const sum = acc + item

  if (index === arr.length - 1) {
    return sum / arr.length
  }
  
  return sum
}

console.log(Math.floor(allCashbox.reduce(getAverageValue, 0)))