/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
const myForm = document.querySelector('form');
const ply1 = document.getElementById('pl1');
const ply2 = document.getElementById('pl2');
const contentField = document.querySelector('.content');
const input1 = document.getElementById('p1');
const input2 = document.getElementById('p2');
const replay = document.getElementById('replay');
const reload = document.getElementById('reload');
const gameBoard = document.getElementById('board');
const winner = document.getElementById('winner');

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

function Players() {
  // eslint-disable-next-line no-unused-expressions
  this.p1 = 'X';
  this.p2 = 'O';
}

const players = new Players();
let won = false;

function changePlayer(p) {
  const { p1, p2 } = players;
  return p % 2 === 0 ? [p1, p2] : [p2, p1];
}

function playerSign(p) {
  return p === players.p1 ? 'X' : 'O';
}

function playerMoves(s) {
  const arr = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === s) {
      arr.push(i);
    }
  }
  this.steps = arr;
  return arr;
}
function checkWin(b) {
  const w = winningCases;
  for (let i = 0; i < w.length; i++) {
    if (b.includes(w[i][0]) && b.includes(w[i][1]) && b.includes(w[i][2])) {
      return true;
    }
  }
}

const show = (w = null, p = null) => {
  let places = '';
  for (let i = 0; i < moves.length; i++) {
    places += `<div data-target='${i}'>${moves[i]}</div>`;
  }
  gameBoard.innerHTML = places;
  if (w) {
    winner.innerHTML = `${p} wins!🎉🎉🎉🎉`;
    contentField.classList.add('hidden');
    replay.classList.remove('hidden');
  } else if (!w && !moves.includes('')) {
    winner.innerHTML = 'Draw!';
    contentField.classList.add('hidden');
    replay.classList.remove('hidden');
  }
};
show();

const valid = (idx, p) => {
  if (moves[idx] === '' && !won) {
    moves[idx] = playerSign(p);
  } else if (won) {
    throw new Error('Game Over!');
  } else {
    // eslint-disable-next-line no-alert
    alert('Please choose an empty spot!');
    throw new Error('Illegal Move!');
  }
};

myForm.addEventListener('submit', (e) => {
  e.preventDefault();
  players.p1 = input1.value || 'Player 1';
  players.p2 = input2.value || 'Player 2';
  contentField.style.display = 'flex';
  myForm.style.display = 'none';
  ply1.innerHTML = players.p1;
  ply2.innerHTML = players.p2;
});

let count = 0;
gameBoard.addEventListener('click', (e) => {
  const slot = e.target.nodeName === 'DIV';
  if (!slot) return;

  const tabs = e.target.dataset.target;
  const currentPlayer = changePlayer(count);
  valid(tabs, currentPlayer[0]);
  const moveArr = playerMoves(playerSign(currentPlayer[0]));
  won = checkWin(moveArr);
  show(won, currentPlayer[0]);
  count++;
});

reload.addEventListener('click', () => {
  window.location.reload();
});
