console.log('%c\nЗадача 2:', rainbow);

const rain = Math.round(Math.random());

if (rain === 1) {
  console.log('Пошёл дождь. Возьмите зонт!')
} else {
  console.log('Дождя нет!')
}

console.log('%c\nЗадача 3:', rainbow);

let error = 0

let result = 0

let score = +prompt('Введите кол-во баллов по математике:');

if (Number.isFinite(score)) {
  result += score
} else {
  error++
}

score = +prompt('Введите кол-во баллов по русскому языку:');

if (Number.isFinite(score)) {
  result += score
} else {
  error++
}

score = +prompt('Введите кол-во баллов по информатике:');

if (Number.isFinite(score)) {
  result += score
} else {
  error++
}

if (error > 0) {
  console.log('Вы неправильно ввели данные')
} else {
  if (result >= 265) {
    console.log('Поздравляю, вы поступили на бюджет!')
  } else {
    console.log('У вас недостаточно баллов')
  }
}

console.log('%c\nЗадача 4:', rainbow);

const money = Math.floor(+prompt('Сколько денег вы хотите снять?'))
if (money % 100 !== 0) {
  console.log(`Вы запросили сумму ${money} руб.`)
  console.log(`К сожалению, у нас таких купюр ${money % 100} руб. нет`)
  console.log('У нашего банка минимальные купюры 100 руб. Введите сумму, кратной 100 руб.')
}

