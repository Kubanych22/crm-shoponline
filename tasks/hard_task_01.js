console.log('%c\nДополнительное задание 1:\n', rainbow);

const findNOD = (a, b) => (a % b === 0) ? b : findNOD(b, a % b)

let first = prompt('Введите первое число')
let second = prompt('Введите второе число')

console.log(`Наибольший общий делитель ${first} и ${second} равен ${findNOD(first, second)}`)

alert(`Наибольший общий делитель равен ${findNOD(first, second)}`)
