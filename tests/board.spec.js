import currentBoard from '../Js/board';

const board = currentBoard.Board();

it('returns an array of indexes of player steps', () => expect(board.playerMoves('X')).toEqual([]));

it('returns true if win', () => expect(board.checkWin([0, 4, 8])).toBe(true));

it('returns false if no win', () => expect(board.checkWin([0, 4, 6])).toBe(undefined));

it('allows move if valid', () => expect(board.valid(0, 'X')).toBe(undefined));
