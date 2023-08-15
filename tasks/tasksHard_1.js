console.log('%c\nДополнительное задание 1:', rainbow);

const salary = +prompt('Укажите свой доход')

let tax;

if (salary < 15000) {
  tax = salary * 0.13
}

if (salary >= 15000 && salary <= 50000) {
  tax = salary * 0.2
}

if (salary > 50000) {
  tax = salary * 0.3
}

console.log(`Сумма налога: ${tax} рублей.`)


