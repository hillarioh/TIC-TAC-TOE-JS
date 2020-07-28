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
const winner = document.getElementById('winner');

const board = new Board(moves, winningCases);
const player = new Player();
gameBoard.innerHTML = board.display();

let count = 0;
function won(name) {
  return (winner.innerHTML = `${name} wins!`);
}

gameBoard.addEventListener('click', (e) => {
  const slot = e.target.nodeName === 'DIV';
  if (!slot) return;
  const tabs = e.target.dataset.target;
  let currentPlayer = player.changePlayer(count);
  let sign = player.playerSign(currentPlayer[0]);
  let steps = board.playerMoves(sign);
  board.play(tabs, sign, steps);
  count++;
  if (board.checkWin(steps)) {
    won(currentPlayer[1]);
  }
  gameBoard.innerHTML = board.display();
});
