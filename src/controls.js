let form = document.getElementById('form');
let pOne = document.getElementById('p1');
let pTwo = document.getElementById('p2');

let players = {};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  players.p1 = pOne.value;
  players.p2 = pTwo.value;
  form.classList.add('hidden')
});
export { players };
