import { Match } from './Match';

describe('Match', () => {
  let match: Match;

  beforeEach(() => {
    match = new Match('Player 1', 'Player 2');
  });

  test('should start with an initial score of "0-0, 0-0"', () => {
    expect(match.score()).toBe('0-0, 0-0');
  });

  test('should update the score when a player wins a point', () => {
    match.pointWonBy('Player 1');
    expect(match.score()).toBe('0-0, 15-0');
  });

  test('should handle deuce correctly', () => {
    match.pointWonBy('Player 1');
    match.pointWonBy('Player 1');
    match.pointWonBy('Player 1');
    match.pointWonBy('Player 2');
    match.pointWonBy('Player 2');
    match.pointWonBy('Player 2');
    expect(match.score()).toBe('0-0, Deuce');
  });

  test('should handle advantage correctly', () => {
    match.pointWonBy('Player 1');
    match.pointWonBy('Player 1');
    match.pointWonBy('Player 1');
    match.pointWonBy('Player 2');
    match.pointWonBy('Player 2');
    match.pointWonBy('Player 2');
    match.pointWonBy('Player 1');
    expect(match.score()).toBe('0-0, Advantage Player 1');
  });

  test('should update the game score when a player wins a game', () => {
    match.pointWonBy('Player 1');
    match.pointWonBy('Player 1');
    match.pointWonBy('Player 1');
    match.pointWonBy('Player 1');
    expect(match.score()).toBe('1-0, 0-0');
  });
});
