console.log('%c\nДополнительное задание 2:\n', rainbow);

let firstNum = prompt('Введите первое число')
let secondNum = prompt('Введите второе число')

const findMin = (a, b) => (b - a) > 0 ? a : b

console.log(`Минимальное число из ${firstNum} и ${secondNum} равен ${findMin(firstNum, secondNum)}`)

alert(`Минимальное число: ${findMin(firstNum, secondNum)}`)
