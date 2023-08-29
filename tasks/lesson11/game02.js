// eslint-disable-next-line no-undef
console.log('%c\nДомашнее задание урока 11', rainbow);
console.log('\nЗадания на рекурсию');
// eslint-disable-next-line no-undef
console.log('%c\n\nЗадача 1:\n', rainbow);

const getNumber = (order) => {
  let number = +prompt(`Введите ${order}`);
  while (!Number.isFinite(number) || number % 1 !== 0) {
    number = +prompt(`Вы ввели некорректное число\n` +
      `Введите заново ${order}. Оно должно быть целым`);
  }
  return number;
};

const getMinMaxRandom = () => {
  const n = getNumber('первое число диапазона');
  const m = getNumber('второе число диапазона');
  
  console.log('n: ', n);
  console.log('m: ', m);
  
  const min = Math.min(n, m);
  const max = Math.max(n, m);
  
  if (min === 0 && max === 0) {
    return null;
  }
  return [min, max, Math.floor(Math.random() * (max - min + 1)) + min];
};

const calcCountAttempts = (min, max) => {
  if (min === 50 && max === 100) {
    return 15;
  }
  return Math.round((max - min + 1) * 0.3);
};

const improvedGame = () => {
  let params = getMinMaxRandom();
  if (params === null) {
    return;
  }
  let [min, max, random] = params;
  const countAttempts = calcCountAttempts(min, max);
  console.log(`Число попыток: ${countAttempts}`);
  let answersArray = [];
  
  const playGame = (attempts) => {
    let gamerNum = 0;
    console.log('random: ', random); // для облегчения проверки
    console.log(`Осталось попыток: ${attempts}`); // для облегчения проверки
    if (attempts === 0) {
      return gamerNum === random;
    }
    while (true) {
      gamerNum = prompt(`Введите число в диапазоне от ${min} до ${max}\n` +
        `Для завершения игры нажмите "Отмена"\n`);
      while (!Number.isFinite(Number(gamerNum))) {
        gamerNum = prompt('Введи число!');
      }
      if ((gamerNum <= max && gamerNum >= min) || gamerNum === null) {
        break;
      }
      console.log('Вы ввели число вне указанного вами диапазона. Повторите ввод.');
      alert('Вы ввели число вне указанного вами диапазона. Повторите ввод.');
    }
    if (gamerNum === null) {
      return;
    }
    gamerNum = Number(gamerNum);
    console.log('Введено число: ', gamerNum);
    if (answersArray.some(item => item === gamerNum && item !== random)) {
      alert('Это число вы уже вводили');
      console.log('Это число вы уже вводили');
      return playGame(attempts - 1);
    }
    answersArray = answersArray.filter(item => item !== random);
    answersArray.push(gamerNum);
    console.log(answersArray);
    
    if (gamerNum > random) {
      console.log('Меньше!');
      alert('Меньше!');
      return playGame(attempts - 1);
    }
    
    if (gamerNum < random) {
      console.log('Больше!');
      alert('Больше!');
      return playGame(attempts - 1);
    }
    
    if (gamerNum === random) {
      console.log('Правильно!');
      alert('Правильно!');
      if (attempts === 1) {
        return true;
      }
      if (confirm(`У вас еще остались попытки. Хотите продолжить игру в том же дипазоне?
        \nРазумеется я загадаю другое число`)) {
        random = Math.floor(Math.random() * (max - min + 1)) + min;
        return playGame(attempts - 1);
      } else {
        params = getMinMaxRandom();
        if (params === null) {
          return;
        }
        [min, max, random] = params;
        answersArray = []; // очистка массива введенных чисел для нового диапазона
        return playGame(attempts - 1);
      }
    }
  };
  
  if (playGame(countAttempts)) {
    console.log('Игра окончена. Вы выиграли!');
    alert('Игра окончена. Вы выиграли!');
  } else {
    console.log('Игра окончена. Вы проиграли!');
    alert('Игра окончена. Вы проиграли!');
  }
};

improvedGame();

