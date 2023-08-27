'use strict';

// eslint-disable-next-line no-undef
console.log('%c\n\nЗадача 2:\n', rainbow);

// eslint-disable-next-line no-undef
console.log(`Количество IP-адресов в исходном массиве = ${listIPv4.length}`);

// eslint-disable-next-line max-len,no-undef
console.log(`Количество уникальных IP-адресов = ${[...new Set(listIPv4)].length}`);
