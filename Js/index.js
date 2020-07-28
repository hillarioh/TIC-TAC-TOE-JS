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

function Players() {
  (this.p1 = 'X'), (this.p2 = 'O');
}

const players = new Players();

function changePlayer(p) {
  let { p1, p2 } = players;
  return p % 2 == 0 ? [p1, p2] : [p2, p1];
}

function playerSign(p) {
  return p == players.p1 ? 'X' : 'O';
}

function playerMoves(s) {
  let arr = [];
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === s) {
      arr.push(i);
    }
  }
  this.steps = arr;
  return arr;
}
function checkWin(b) {
  let w = winningCases;
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
    winner.innerHTML = `${p} wins!`;
  } else if (!w && !moves.includes('')) {
    winner.innerHTML = `Draw!`;
  }
};
show();

const valid = (idx, p) => {
  if (moves[idx] === '') {
    moves[idx] = playerSign(p);
  } else {
    alert('Please choose an empty spot!');
    throw new Error('Illegal Move!');
  }
};

let count = 0;
gameBoard.addEventListener('click', (e) => {
  const slot = e.target.nodeName === 'DIV';
  if (!slot) return;

  const tabs = e.target.dataset.target;
  let currentPlayer = changePlayer(count);
  valid(tabs, currentPlayer[0]);
  let moveArr = playerMoves(currentPlayer[0]);
  let won = checkWin(moveArr);
  show(won, currentPlayer[0]);
  count++;
});
