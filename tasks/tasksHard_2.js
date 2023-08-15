console.log('%c\nДополнительное задание 2:', rainbow);

const foreignSalary = +prompt('Укажите свой доход')

let foreignTax;

if (foreignSalary < 15000) {
  foreignTax = foreignSalary * 0.13
}

if (foreignSalary >= 15000 && foreignSalary <= 50000) {
  foreignTax = (foreignSalary - 15000) * 0.2
}

if (foreignSalary > 50000) {
  foreignTax = (foreignSalary - 50000) * 0.3
}

console.log(`Сумма налога: ${foreignTax} рублей.`)


