console.log('%c\nЗадача 2:\n', rainbow);

const genRandomArray2 = (length, n, m) => {
  const min = Math.min(n, m)
  const max = Math.max(n, m)
 /* так тоже работает
  const min = (n - m) > 0 ? m : n
  const max = (n - m) > 0 ? n : m
 */
  console.log('min: ', min)
  console.log('max: ', max)
  // return Array(length).fill(null).map(() => Math.floor(Math.random() * (max - min + 1)) + min)
  return Array.from(Array(length)).map(() => Math.floor(Math.random() * (max - min + 1)) + min)
}

console.log(genRandomArray2(8, 0, 100))
// console.log(genRandomArray2(8, 1, 100))
// console.log(genRandomArray2(8, 100, 1))
// console.log(genRandomArray2(8, -100, 100))
// console.log(genRandomArray2(8, 100, -100))
// console.log(genRandomArray2(8, -100, -200))
// console.log(genRandomArray2(8, -100, -2))