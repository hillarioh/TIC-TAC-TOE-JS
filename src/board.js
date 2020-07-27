class Board {
  constructor(moves) {
    this.moves = moves;
  }
  display() {
    let places = '';
    for (let i = 0; i < this.moves.length; i++) {
      places += `<div data-target='${i}'>${this.moves[i]}</div>`;
    }
    return places;
  }

  play(idx, player) {
    this.moves[idx] = player;
  }
}

export default Board;
