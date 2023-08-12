'use strict';

console.log('%c\nВыполняется скрипт из новой папки\nЗадача 1:', rainbow);

const nameProduct = prompt('Введите наименование товара:');

console.log(typeof nameProduct);

const countProduct = +prompt('Количество:');

console.log(typeof countProduct);

const categoryProduct = prompt('Категория:');

console.log(typeof categoryProduct);

const priceProduct = +prompt('Цена:');

console.log(typeof priceProduct);

console.log(`%cНа складе ${countProduct} единицы товара "${nameProduct}" на сумму ${priceProduct * countProduct} деревянных`, rainbow);
