
console.log('%c\nВыполняются скрипты из папки \"tasks\"\nЗадача 1:\n', rainbow);

const converter = cost => (cost * 1.2 * 73).toFixed(2)

let money = prompt('Введите стоимость покупки в евро')

console.log(`Стоимость вашей покупки ${money} евро или ${converter(money)} рублей`)

alert(`Стоимость вашей покупки в рублях: ${converter(money)}`)

