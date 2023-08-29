
// eslint-disable-next-line no-undef
console.log('%c\nЗадача #2:\n', rainbow);
const generate = arr => {
  arr.push(Math.floor(Math.random() * (10 + 1)));
  let sum = 0;
  arr.forEach((item) => sum += item);
  if (sum >= 50) {
    return arr;
  } else return generate(arr);
};

const result = generate([]);
console.log(`Итоговый массив: [${result}]`);
let sum = 0;
result.forEach(item => sum += item);
console.log('Сумма элементов массива =', sum);
