/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
/* eslint-disable import/extensions */
import * as selectors from './elements.js';

function Board() {
  const moves = ['', '', '', '', '', '', '', '', ''];
  const winningCases = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
  let win = false;

  const playerMoves = (s) => {
    const arr = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < moves.length; i++) {
      if (moves[i] === s) {
        arr.push(i);
      }
    }
    this.steps = arr;
    return arr;
  };

  const checkWin = (b) => {
    const w = winningCases;
    for (let i = 0; i < w.length; i++) {
      if (b.includes(w[i][0]) && b.includes(w[i][1]) && b.includes(w[i][2])) {
        return true;
      }
    }
  };

  const valid = (idx, p) => {
    if (moves[idx] === '' && !win) {
      moves[idx] = p;
    } else if (win) {
      throw new Error('Game Over!');
    } else {
      // eslint-disable-next-line no-alert
      // alert('Please choose an empty spot!');
      throw new Error('Illegal Move!');
    }
  };

  const show = (w = null, p = null) => {
    let places = '';
    for (let i = 0; i < moves.length; i++) {
      places += `<div data-target='${i}'>${moves[i]}</div>`;
    }
    selectors.gameBoard.innerHTML = places;
    if (w) {
      win = true;
      selectors.winner.innerHTML = `${p} wins!🎉🎉🎉🎉`;
      selectors.contentField.classList.add('hidden');
      selectors.replay.classList.remove('hidden');
    } else if (!w && !moves.includes('')) {
      selectors.winner.innerHTML = 'Draw!';
    }
  };

  return {
    moves,
    playerMoves,
    checkWin,
    show,
    valid,
  };
}

export default { Board };
