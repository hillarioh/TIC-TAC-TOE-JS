/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
function Players(p1 = 'X', p2 = 'O') {
  const changePlayer = (p) => {
    return p % 2 === 0 ? [p1, p2] : [p2, p1];
  };

  const playerSign = (p) => {
    return p === p1 ? 'X' : 'O';
  };

  return {
    p1, p2, changePlayer, playerSign,
  };
}

export default { Players };
