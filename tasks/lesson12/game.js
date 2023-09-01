'use strict';

(() => {
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
  
  let winMatrix = [
    ['x', 1, 0],
    [0, 'x', 1],
    [1, 0, 'x'],
  ];
  
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  const getFigure = lang => {
    lang = prompt('Выберите язык\nВведите En или Eng для выбора английского языка.\n' +
      'Для выбора русского языка просто нажмите ОК');
    lang = lang.slice(0, 1).toUpperCase() + lang.slice(1).toLowerCase();
    return lang;
  };
  
  const findFigure = (length, str, indexFigure, lang) => {
    let tempArr = lang.map(item => item.substring(0, str.length));
    return tempArr.findIndex(item => item === str.substring(0, str.length));
  };
  
  const getChoicePlayer = (lang) => {
    const choice = prompt(lang.join(', ') + '?');
    let indexPlayer = null;
    if (choice !== null) {
      indexPlayer = findFigure(choice.length, choice.toLowerCase(), indexPlayer, lang);
      return indexPlayer;
    }
  };
  
  const getChoiceComp = () => {
    return getRandomIntInclusive(0, 2);
  };
  
  const determiningWinner = (a, b) => {
    if (winMatrix[a][b] === 1) {
      return a;
    } else if (winMatrix[a][b] === 0) {
      return b;
    }
    return null;
  };
  
  const showResults = (result, lang) => {
    const more = lang === FIGURES_RUS ? confirm('Еще?') : confirm('More?');
    if (!more) {
      let showResult;
      if (lang === FIGURES_RUS) {
        showResult = `Результат игры\nКомпьютер: ${result.compScore}\nИгрок: ${result.playerScore}`;
      } else {
        showResult = `Game results\nComputer: ${result.compScore}\nPlayer: ${result.playerScore}`;
      }
      alert(showResult);
      return true;
    }
    return false;
  };
  
  const game = (language) => {
    language = getFigure('');
    const result = {
      player: 0,
      computer: 0,
      
      get playerScore() {
        return this.player;
      },
      get compScore() {
        return this.computer;
      },
      
      set addPlayScore(score) {
        this.player += score;
      },
      set addCompScore(score) {
        this.computer += score;
      },
    };
    const lang = language === 'En' || language === 'Eng' ? FIGURES_ENG : FIGURES_RUS;
    return function start() {
      let indexPlayer;
      let indexComp;
      let partialResult = 0;
      let showPartialResult = '';
      let whoWon = '';
      indexPlayer = getChoicePlayer(lang);
      if (indexPlayer === -1 || indexPlayer === null || indexPlayer === undefined) return start();
      indexComp = getChoiceComp();
      partialResult = determiningWinner(indexPlayer, indexComp);
      if (partialResult === indexPlayer) {
        whoWon = lang === FIGURES_RUS ? 'Вы выиграли' : 'You won';
        result.addPlayScore = 1;
      } else if (partialResult === indexComp) {
        whoWon = lang === FIGURES_RUS ? 'Компьютер выиграл' : 'Computer won';
        result.addCompScore = 1;
      } else {
        whoWon = lang === FIGURES_RUS ? 'ничья' : 'draw';
      }
      if (lang === FIGURES_RUS) {
        showPartialResult = 'Компьютер: ' + lang[indexComp] + '\n' +
          'Игрок: ' + lang[indexPlayer] + '\n' + whoWon;
      } else {
        showPartialResult = 'Computer: ' + lang[indexComp] + '\n' +
          'Player: ' + lang[indexPlayer] + '\n' + whoWon;
      }
      alert(showPartialResult);
      if (showResults(result, lang)) {
        return;
      }
      return start();
    };
  };
  
  return window.RPS = game;
})();
