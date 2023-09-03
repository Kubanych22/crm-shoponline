'use strict';

window.firstGame = true; // Для выбора языка при первом запуске игры

const game = () => {
  const startGame = window.RPS();
  startGame(window.firstGame);
  
  const startMarble = window.marbleGame();
  startMarble(window.winner, window.lang);
  if (window.repeatGame) {
    game();
  }
}

game();
