console.log('%c\nЗадача 3:\n', rainbow);

const reverse = str => {
  let reverseStr = '';
  for (let i = 0; i < str.length; i++) {
    reverseStr += str[str.length - i - 1]
  }
  return reverseStr
}

console.log(reverse('Привет мир!'))

