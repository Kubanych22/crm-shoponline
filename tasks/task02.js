console.log('%c\nЗадача 2:\n', rainbow);

const modifyString = str =>
 str.slice(0, 1).toUpperCase().concat(str.slice(1).toLowerCase())

console.log(modifyString('привет Мир'));
