console.log('%c\nВыполняются скрипты из ДЗ урока 7\nЗадание I\n\nЗадача 1:\n', rainbow);

const genRandomArray1 = (length) => {
 // return Array(length).fill(null).map(() => Math.floor(Math.random() * 100) + 1)
 
 return Array.from(Array(length)).map(() => Math.floor(Math.random() * 100) + 1)
}

console.log(genRandomArray1(8))