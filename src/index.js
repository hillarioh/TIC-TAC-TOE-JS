import Board from './board';
import Player from './players';
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

const gameBoard = document.getElementById('board');

const board = new Board(moves);
const player = new Player();
gameBoard.innerHTML = board.display();

let count = 0;
gameBoard.addEventListener('click', (e) => {
  const slot = e.target.nodeName === 'DIV';
  if (!slot) return;
  const tabs = e.target.dataset.target;
  let currentPlayer = player.changePlayer(count);
  console.log(currentPlayer);
  let sign = player.playerSign(currentPlayer);
  board.play(tabs, sign);
  count++;
  gameBoard.innerHTML = board.display();
});
