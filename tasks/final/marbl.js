'use strict';

(() => {
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  const isEven = (number) => number % 2;
  
  const getChoiceComp = (numberBalls) => getRandomIntInclusive(1, numberBalls);
  
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
        if (isEven(inputValue) === random) { // Комп угадал
          result.addCompScore = inputValue;
          result.denyPlayScore = inputValue;
        } else {
          result.addPlayScore = inputValue;
          result.denyCompScore = inputValue;
        }
        return true;
      } else {
        return false;
      }
    }
  };
  const checkAnswerPlayer = (answer, computerMoved, result) => {
    if (answer) {
      if (isEven(computerMoved) === 0) { // Игрок угадал четное
        result.addPlayScore = computerMoved;
        result.denyCompScore = computerMoved;
      } else {
        result.addCompScore = computerMoved;
        result.denyPlayScore = computerMoved;
      }
    } else {
      if (isEven(computerMoved) === 1) { // Игрок угадал нечетное
        result.addPlayScore = computerMoved;
        result.denyCompScore = computerMoved;
      } else {
        result.addCompScore = computerMoved;
        result.denyPlayScore = computerMoved;
      }
    }
  };
  
  const movePlayer = (playerScore, computerScore, result, flag) => {
    let numberBalls;
    let error;
    let str;
    if (lang === 0) {
      str = guessNumberRu(playerScore, computerScore);
      numberBalls = prompt(str);
      error = computerGuesses(numberBalls, playerScore, result);
    } else {
      str = guessNumberEn(playerScore, computerScore);
      numberBalls = prompt(str);
      error = computerGuesses(numberBalls, playerScore, result);
    }
    return flag = !error;
  };
  
  const guessNumberRu = (playerScore, computerScore) => {
    return `Количество шариков у вас: ` + `${playerScore}` + `\n` +
      `Количество шариков у компьютера: ` + `${computerScore}` + `\n` +
      `Ваш ход. Загадайте число от 1 до ` + `${playerScore}`;
  };
  const guessNumberEn = (playerScore, computerScore) => {
    return `You have: ` + `${playerScore}` + ` balls\n` +
      `The number of balls at the computer: ` + `${computerScore}` + `\n` +
      `Guess the number from 1 to ` + `${playerScore}`;
  };
  const answerRu = (result) => {
    return `Количество шариков у вас: ${result.playerScore}\n` +
      `Количество шариков у компьютера: ${result.compScore}\n` +
      `Компьютер загадал число.\n` +
      `Число четное?`;
  };
  const answerEn = (result) => {
    return `The number of balls you have: ${result.playerScore}\n` +
      `The number of balls at the computer: ${result.compScore}\n` +
      `The computer made a number.\n` +
      `Is the number even?`;
  };
  const moveComputer = (computerScore, result) => {
    let computerMoved;
    let answer;
    let str;
    if (lang === 0) {
      str = answerRu(result);
      answer = confirm(str);
      computerMoved = getRandomIntInclusive(1, computerScore);
      checkAnswerPlayer(answer, computerMoved, result);
    } else {
      str = answerEn(result);
      answer = confirm(str);
      computerMoved = getRandomIntInclusive(1, computerScore);
      checkAnswerPlayer(answer, computerMoved, result);
    }
  };
  const playerWonRu = (result) => {
    return `Вы выиграли!\nКоличество шариков у вас: ${result.playerScore}\n` +
      `Количество шариков у компьютера: ${result.compScore}`;
  }
  const playerWonEn = (result) => {
    return `You have won!\nThe number of balls you have: ${result.playerScore}\n` +
      `The number of balls at the computer: ${result.compScore}`;
  }
  const playerWon = (result) => {
    let str;
    if (lang === 0) {
      str = playerWonRu(result)
      alert(str);
      if (confirm('Хотите сыграть еще?')) {
        result.restore();
        window.repeatGame = true;
        return true;
      } else {
        window.repeatGame = false;
        return false;
      }
    }
    str = playerWonEn(result)
    alert(str);
    if (confirm('Do you want to play some more?')) {
      result.restore();
      window.repeatGame = true;
      return true;
    } else {
      window.repeatGame = false;
      return false;
    }
  };
  const computerWonRu = (result) => {
    return `Выиграл компьютер!\nКоличество шариков у вас: ${result.playerScore}\n` +
    `Количество шариков у компьютера: ${result.compScore}`
  }
  const computerWonEn = (result) => {
    return `Won the computer!\nThe number of balls you have: ${result.playerScore}\n` +
      `The number of balls at the computer: ${result.compScore}`
  }
  const computerWon = (result) => {
    let str;
    if (lang === 0) {
      str = computerWonRu(result)
      alert(str);
      if (confirm('Хотите сыграть еще?')) {
        result.restore();
        window.repeatGame = true;
        return true;
      } else {
        window.repeatGame = false;
        return false;
      }
    }
    str = computerWonEn(result)
    alert(str);
    if (confirm('Do you want to play some more?')) {
      result.restore();
      window.repeatGame = true;
      return true;
    } else {
      window.repeatGame = false;
      return false;
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
      
      restore() {
        this.computer = 5;
        this.player = 5;
      },
    };
    
    let flag;
    return function start(whoWon, lang) {
      let playerScore = result.playerScore;
      let computerScore = result.compScore;
      if (whoWon === 0) {
        flag = true;
        whoWon = -1;
      } else if (whoWon === 1) {
        flag = false;
        whoWon = -1;
      }
      if (flag) { // Ход игрока
        flag = movePlayer(playerScore, computerScore, result, flag);
      } else { // Ход компьютера
        flag = true;
        moveComputer(computerScore, result);
      }
      // определение победителя
      if (result.compScore === 0) {        
        playerWon(result);
        return;
      }
      if (result.playerScore === 0) {
        computerWon(result); 
        return;
      }
      return start(whoWon, lang);
    };
  };
  
  return window.marbleGame = marble;
})();

