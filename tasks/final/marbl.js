'use strict';

(() => {
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  const isEven = (number) => number % 2;
  
  const getChoiceComp = (numberBalls) => {
    return getRandomIntInclusive(1, numberBalls);
  };
  
  const checkPlayerInput = (inputValue) => {
    if (!Number.isNaN(parseFloat(inputValue)) && isFinite(inputValue)) {
      return +inputValue;
    }
    return null;
  };
  
  const computerGuesses = (inputValue, score, result) => {
    inputValue = checkPlayerInput(inputValue);
    if (inputValue !== null) {
      if (inputValue <= score) {
        const random = getRandomIntInclusive(0, 1);
        if (isEven(inputValue) === random) {  // Комп угадал
          result.addCompScore = inputValue;
          result.denyPlayScore = inputValue;
        } else {
          result.addPlayScore = inputValue;
          result.denyCompScore = inputValue;
        }
        return true;
      } else return false;
    }
  };
  const checkAnswerPlayer = (answer, computerMoved, result) => {
    if (answer) {
      if (isEven(computerMoved) === 0) {  // Игрок угадал четное
        result.addPlayScore = computerMoved;
        result.denyCompScore = computerMoved;
      } else {
        result.addCompScore = computerMoved;
        result.denyPlayScore = computerMoved;
      }
    } else {
      if (isEven(computerMoved) === 1) {  // Игрок угадал нечетное
        result.addPlayScore = computerMoved;
        result.denyCompScore = computerMoved;
      } else {
        result.addCompScore = computerMoved;
        result.denyPlayScore = computerMoved;
      }
    }
  }
  
  const marble = (whoWon, lang) => {
    const result = {
      player: 5,
      computer: 5,
      
      get playerScore() {
        return this.player;
      },
      get compScore() {
        return this.computer;
      },
      
      set addPlayScore(score) {
        if (score > this.compScore) {
          this.player += this.compScore;
        } else {
          this.player += score;
        }
      },
      set addCompScore(score) {
        if (score > this.playerScore) {
          this.computer += this.playerScore;
        } else {
          this.computer += score;
        }
      },
      set denyPlayScore(score) {
        if ((this.player - score) >= 0) {
          this.player -= score;
        } else {
          this.player = 0;
        }
      },
      set denyCompScore(score) {
        if ((this.computer - score) >= 0) {
          this.computer -= score;
        } else {
          this.computer = 0;
        }
      },
  
      restore () {
        this.computer = 5;
        this.player = 5;
      }
    };
    let flag;
    return function start(whoWon, lang) {
      let playerScore = result.playerScore;
      let compScore = result.compScore;
      let numberBalls;
      if (whoWon === 0) {
        flag = true;
        whoWon = -1;
      } else if (whoWon === 1) {
        flag = false;
        whoWon = -1;
      }
      if (flag) {  // Ход игрока
        let error;
        if (lang === 0) {
          numberBalls = prompt(`Количество шариков у вас: ${playerScore}\n` +
            `Количество шариков у компьютера: ${compScore}\n` +
            `Ваш ход. Загадайте число от 1 до ${playerScore}`);
          error = computerGuesses(numberBalls, playerScore, result);
          flag = !error;
        } else {
          numberBalls = prompt(`You have ${playerScore} balls.\n` +
          `The number of balls at the computer: ${compScore}\n` +
          `Guess the number from 1 to ${playerScore}`);
          error = computerGuesses(numberBalls, playerScore, result);
          flag = !error;
        }
      } else {  // Ход компьютера
        flag = true;
        let computerMoved;
        let answer;
        if (lang === 0) {
          answer = confirm(`Количество шариков у вас: ${result.playerScore}\n` +
            `Количество шариков у компьютера: ${result.compScore}\n` +
            `Компьютер загадал число.\n` +
            `Число четное?`);
          computerMoved = getRandomIntInclusive(1, compScore);
          checkAnswerPlayer(answer, computerMoved, result);
        } else {
          answer = confirm(`The number of balls you have: ${result.playerScore}\n` +
            `The number of balls at the computer: ${result.compScore}\n` +
            `The computer made a number.\n` +
            `Is the number even?`);
          computerMoved = getRandomIntInclusive(1, compScore);
          checkAnswerPlayer(answer, computerMoved, result);
        }
      }
      // определение победителя
      if (result.compScore === 0) {
        if (lang === 0) {
          alert(`Вы выиграли!\n` + `Количество шариков у вас: ${result.playerScore}\n` +
            `Количество шариков у компьютера: ${result.compScore}`);
          if (confirm('Хотите сыграть еще?')) {
            result.restore();
            window.repeatGame = true;
            return;
          } else {
            window.repeatGame = false;
            return;
          }
        }
        alert(`You have won!\n` + `The number of balls you have: ${result.playerScore}\n` +
          `The number of balls at the computer: ${result.compScore}`);
        if (confirm('Do you want to play some more?')) {
          result.restore();
          window.repeatGame = true;
          return;
        } else {
          window.repeatGame = false;
          return;
        }
      }
      if (result.playerScore === 0) {
        if (lang === 0) {
          alert(`Выиграл компьютер!\n` + `Количество шариков у вас: ${result.playerScore}\n` +
            `Количество шариков у компьютера: ${result.compScore}`);
          if (confirm('Хотите сыграть еще?')) {
            result.restore();
            window.repeatGame = true;
            return;
          } else {
            window.repeatGame = false;
            return;
          }
        }
        alert(`Won the computer!\n` + `The number of balls you have: ${result.playerScore}\n` +
          `The number of balls at the computer: ${result.compScore}`);
        if (confirm('Do you want to play some more?')) {
          result.restore();
          return;
        } else {
          return;
        }
      }
      return start(whoWon, lang);
    };
  };
  
  return window.marbleGame = marble;
})();

