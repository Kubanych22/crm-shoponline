console.log('%c\nДополнительное задание 1:\n', rainbow);

const calcLeapYears = (n) => {
  return !((n % 4) || (!(n % 100) && (n % 400))) ? n : calcLeapYears(++n)
}

const getLeapYears = (n, m) => {
  let min = Math.min(n, m) - 4
  let max = Math.max(n, m)
  min = calcLeapYears(min)
  max = calcLeapYears(max)
  return Array.from(Array((max - min) / 4)).map(() => min += 4)
}

console.log(calcLeapYears(2022))

console.log(getLeapYears(1992, 2047))