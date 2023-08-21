console.log('%c\nЗадача 3:\n', rainbow);

const genRandomArray3 = (length, n, m, option = 'even') => {
  const min = (n - m) > 0 ? m : n
  const max = (n - m) > 0 ? n : m
  const evenArray = Array.from(Array(length)).map(() => Math.floor(Math.random() * (max - min + 1)) + min)
      .map(item => item * 2)
  
  const oddArray = Array.from(Array(length)).map(() => Math.floor(Math.random() * (max - min + 1)) + min)
      .map(item => item * 2 + 1)
  
  return option === 'odd' ? oddArray : evenArray
}

console.log(genRandomArray3(8, 0, 100))
console.log(genRandomArray3(8, 0, 100, 'odd'))