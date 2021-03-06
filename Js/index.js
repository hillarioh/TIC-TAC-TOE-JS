/* eslint-disable import/extensions */
/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
import * as selectors from './elements.js';
import player from './player.js';
import currentBoard from './board.js';

const board = currentBoard.Board();
let players = player.Players();

board.show();

selectors.myForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const p1 = selectors.input1.value || 'Player 1';
  const p2 = selectors.input2.value || 'Player 2';
  players = player.Players(p1, p2);
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
  const currentPlayer = players.changePlayer(count);
  const sign = players.playerSign(currentPlayer[0]);
  board.valid(tabs, sign);
  const moveArr = board.playerMoves(sign);
  won = board.checkWin(moveArr);
  board.show(won, currentPlayer[0]);
  count++;
});

selectors.reload.addEventListener('click', () => {
  window.location.reload();
});
