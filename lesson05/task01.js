console.log('%c\nВыполняются скрипты из папки \"lesson05\"\nЗадача 1:\n', rainbow);

let arrayIJ = [];
for (let i = 1; i <= 10; i++) {
  console.log('-------------------')
  arrayIJ[i] = [];
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} ** ${j} = ${i ** j}`)
    arrayIJ[i][j] = i ** j;
  }
}

console.log('%c\nВывод таблицы с помощью console.table:\n', rainbow);

console.table(arrayIJ);


