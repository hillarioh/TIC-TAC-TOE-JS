class Player {
  constructor(p1 = 'X', p2 = 'O') {
    this.p1 = p1;
    this.p2 = p2;
  }

  changePlayer(p) {
    return p % 2 == 0 ? [this.p1, this.p2] : [this.p2, this.p1];
  }

  playerSign(p) {
    return p == this.p1 ? 'X' : 'O';
  }
}

export default Player;
