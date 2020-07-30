// eslint-disable-next-line no-unused-vars
class Game {
  constructor() {
    this.myForm = document.querySelector('form');
    this.ply1 = document.getElementById('pl1');
    this.ply2 = document.getElementById('pl2');
    this.contentField = document.querySelector('.content');
    this.input1 = document.getElementById('p1');
    this.input2 = document.getElementById('p2');
    this.replay = document.getElementById('replay');
    this.reload = document.getElementById('reload');
    this.gameBoard = document.getElementById('board');
    this.winner = document.getElementById('winner');
  }

  // eslint-disable-next-line class-methods-use-this
  selectors() {
    const {
      myForm,
      ply1,
      ply2,
      contentField,
      input1,
      input2,
      replay,
      reload,
      gameBoard,
      winner,
    } = this;
    return {
      myForm,
      ply1,
      ply2,
      contentField,
      input1,
      input2,
      replay,
      reload,
      gameBoard,
      winner,
    };
  }
}
