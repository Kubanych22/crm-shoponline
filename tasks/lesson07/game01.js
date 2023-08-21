console.log('%c\nЗадание II\n\nЗадача 1:\n', rainbow);

let random = Math.floor(Math.random() * 100) + 1;

const playGame = (random) => {
  let gamerNum;
  do {
    gamerNum = prompt('Введите число от 1 до 100.\n' +
        'Для завершения игры нажмите \"Отмена\"\n');
    while (!Number.isFinite(Number(gamerNum))) {
      gamerNum = prompt('Введи число!');
    }
    
    console.log('gamerNum: ', gamerNum);
    console.log('random: ', random);
  
    if (gamerNum === null) {
      break;
    }
  
    gamerNum = Number(gamerNum);
    
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
      random = Math.floor(Math.random() * 100) + 1;
    }
  } while (true);
  
  console.log('Игра закончена!');
  alert('Игра закончена!');
}

playGame(random)

