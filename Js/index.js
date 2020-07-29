/* eslint-disable no-undef */
const game = new Game();
const selectors = game.selectors();

const player = new Player();
const players = player.players();

const board = new GameBoard();

board.show();

selectors.myForm.addEventListener('submit', (e) => {
  e.preventDefault();
  players.p1 = selectors.input1.value || 'Player 1';
  players.p2 = selectors.input2.value || 'Player 2';
  selectors.contentField.style.display = 'flex';
  selectors.myForm.style.display = 'none';
  selectors.ply1.innerHTML = players.p1;
  selectors.ply2.innerHTML = players.p2;
});

let count = 0;
selectors.gameBoard.addEventListener('click', (e) => {
  const slot = e.target.nodeName === 'DIV';
  if (!slot) return;
  let won = false;
  const tabs = e.target.dataset.target;
  const currentPlayer = player.changePlayer(count);
  board.valid(tabs, currentPlayer[0], player.playerSign, won);
  const moveArr = board.playerMoves(player.playerSign(currentPlayer[0]));
  won = board.checkWin(moveArr);
  board.show(won, currentPlayer[0]);
  // eslint-disable-next-line no-plusplus
  count++;
});

selectors.reload.addEventListener('click', () => {
  window.location.reload();
});
