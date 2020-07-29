/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
// eslint-disable-next-line no-unused-vars
class GameBoard extends Game {
  constructor() {
    super();
    this.moves = ['', '', '', '', '', '', '', '', ''];
    this.winningCases = [
      [0, 1, 2],
      [0, 4, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [3, 4, 5],
      [6, 7, 8],
    ];
  }

  playerMoves(s) {
    const arr = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < this.moves.length; i++) {
      if (this.moves[i] === s) {
        arr.push(i);
      }
    }
    return arr;
  }

  checkWin(b) {
    const w = this.winningCases;
    let won = false;
    for (let i = 0; i < w.length; i++) {
      if (b.includes(w[i][0]) && b.includes(w[i][1]) && b.includes(w[i][2])) {
        won = true;
        break;
      }
    }
    return won;
  }

  show(w = null, p = null) {
    let places = '';
    for (let i = 0; i < this.moves.length; i++) {
      places += `<div data-target='${i}'>${this.moves[i]}</div>`;
    }
    this.gameBoard.innerHTML = places;
    if (w) {
      this.winner.innerHTML = `${p} wins!🎉🎉🎉🎉`;
      this.contentField.classList.add('hidden');
      this.replay.classList.remove('hidden');
    } else if (!w && !this.moves.includes('')) {
      this.winner.innerHTML = 'Draw!';
      this.contentField.classList.add('hidden');
      this.replay.classList.remove('hidden');
    }
  }

  valid(idx, p, s, won) {
    if (this.moves[idx] === '' && !won) {
      this.moves[idx] = s(p);
    } else if (won) {
      throw new Error('Game Over!');
    } else {
      // eslint-disable-next-line no-alert
      alert('Please choose an empty spot!');
      throw new Error('Illegal Move!');
    }
  }
}
