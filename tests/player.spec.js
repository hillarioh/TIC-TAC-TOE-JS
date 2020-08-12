import player from '../Js/player';

const players = player.Players();

it('return an array with current player first', () => expect(players.changePlayer(2)).toEqual(['X', 'O']));

it('returns X if player name matches player 1', () => expect(players.playerSign('X')).toBe('X'));