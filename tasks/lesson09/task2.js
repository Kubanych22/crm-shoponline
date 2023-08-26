console.log('%c\n\nЗадача 2:\n', rainbow);

console.log(`Количество IP-адресов в исходном массиве = ${listIPv4.length}`);

console.log(`Количество уникальных IP-адресов = ${[...new Set(listIPv4)].length}`);
