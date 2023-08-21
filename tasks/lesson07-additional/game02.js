console.log('%c\nДополнительное задание 2:\n', rainbow);

const getNumber = (order) => {
  let number = +prompt(`Введите ${order}`);
  while (!Number.isFinite(number) || number % 1 !== 0) {
    number = +prompt(`Вы ввели некорректное число\n` +
        `Введите заново ${order}. Оно должно быть целым`);
  }
  return number;
};

const calcCountAttempts = (min, max) => {
  if (min === 50 && max === 100) {
    return 15;
  }
  return Math.round((max - min + 1) * 0.3);
}

const playImprovedGame = () => {
  let n = getNumber('первое число');
  let m = getNumber('второе число');
  
  console.log('n: ', n);
  console.log('m: ', m);
  
  const min = Math.min(n, m);
  const max = Math.max(n, m);
  
  if (min === 0 && max === 0) {
    return
  }
  
  let random = Math.floor(Math.random() * (max - min + 1)) + min;
  
  let countAttempts = calcCountAttempts(min, max)
  
  // console.log(`Число попыток: ${countAttempts}`);
  
  let gamerNum;
  let answersArray = [];
  while (countAttempts-- > 0) {
    gamerNum = prompt(`Введите число в диапазоне от ${min} до ${max}\n` +
        `Для завершения игры нажмите \"Отмена\"\n`);
    while (!Number.isFinite(Number(gamerNum))) {
      gamerNum = prompt('Введи число!');
    }
  
    if (gamerNum === null) {
      break;
    }
    
    gamerNum = Number(gamerNum);
  
    console.log('random: ', random);  // для облегчения проверки
    
    console.log(`Осталось попыток: ${countAttempts}`);  // для облегчения проверки
  
    if (answersArray.some(item => item === gamerNum && item !== random)) {
      alert('Это число вы уже вводили');
      console.log('Это число вы уже вводили');
      continue;
    }
    answersArray = answersArray.filter(item => item !== random)
    answersArray.push(gamerNum);
    console.log(answersArray);
    
    if (gamerNum > random) {
      console.log('Меньше!');
      alert('Меньше!');
    }
    
    if (gamerNum < random) {
      console.log('Больше!');
      alert('Больше!');
    }
    
    if (gamerNum === random) {
      console.log('Правильно!');
      alert('Правильно!');
      if (countAttempts === 0) {
        break;
      }
      if(confirm(`У вас еще остались попытки. Хотите продолжить игру в том же дипазоне?\nРазумеется я загадаю другое число`)) {
        random = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log('random: ', random); // для облегчения проверки
      } else {
        break;
      }
    }
  }
  console.log('Игра окончена!');
  alert('Игра окончена!');
};

playImprovedGame()

