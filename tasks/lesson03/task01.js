'use strict';

console.log('%c\nВыполняются скрипты из папки \"tasks\"\nЗадача 1:\n', rainbow);

const productName = prompt('Введите наименование товара:');

const productCount = +prompt('Количество:');

const productCategory = prompt('Категория:');

const productPrice = +prompt('Цена:');

if (Number.isFinite(productCount) && Number.isFinite(productPrice)) {
  console.log(`На складе ${productCount} единицы товара "${productName}" на сумму ${productPrice * productCount} деревянных`);
} else {
  console.log('Вы ввели некорректные данные');
  alert('Вы ввели некорректные данные');
}


