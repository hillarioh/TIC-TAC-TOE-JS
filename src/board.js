const winner = document.getElementById('winner');
class Board {
  constructor(moves, cases) {
    this.moves = moves;
    this.winningCases = cases;
  }
  display() {
    let places = '';
    for (let i = 0; i < this.moves.length; i++) {
      places += `<div data-target='${i}'>${this.moves[i]}</div>`;
    }

    return places;
  }

  play(idx, player, steps) {
    if (this.moves[idx] === '') {
      this.moves[idx] = player;
      console.log(steps)
      // if(this.checkWin(steps)){
      //   winner.innerHTML = `${player} wins!`
      // }
    } else {
      alert('Please choose an empty spot!');
      throw new Error('Illegal move!');
    }
  }

  playerMoves(s) {
    let arr = [];
    console.log(s);
    console.log(this.moves);
    for (let i = 0; i < this.moves.length; i++) {
      if (this.moves[i] === s) {
        arr.push(i);
      }
    }
    return arr;
  }
  checkWin(b) {
    let w = this.winningCases;
    for (let i = 0; i < w.length; i++) {
      if (b.includes(w[i][0]) && b.includes(w[i][1]) && b.includes(w[i][2])) {
        return true;
      }
    }
  }
}

export default Board;
