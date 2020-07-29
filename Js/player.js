// eslint-disable-next-line no-unused-vars
class Player {
  constructor(p1 = 'X', p2 = 'O') {
    this.p1 = p1;
    this.p2 = p2;
  }

  players() {
    const { p1, p2 } = this;
    return {
      p1,
      p2,
    };
  }

  changePlayer(p) {
    const { p1, p2 } = this;
    return p % 2 === 0 ? [p1, p2] : [p2, p1];
  }

  playerSign(p) {
    const { p1 } = this;
    return p === p1 ? 'X' : 'O';
  }
}
