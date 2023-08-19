console.log('%c\nЗадача 2:\n', rainbow);

const isPrime = n => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false
  }
  return true
}

let number = prompt('Введите целое число')

if (isPrime(number)) {
  console.log(`Число ${number} простое`)
  alert(`Число ${number} простое`)
} else {
  console.log(`Число ${number} не является простым`)
  alert(`Число ${number} не является простым`)
}

