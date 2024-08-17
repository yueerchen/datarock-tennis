import { Player } from './Player';
import { Scoreboard } from './Scoreboard';

describe('Scoreboard', () => {
  let player1: Player;
  let player2: Player;
  let scoreboard: Scoreboard;

  beforeEach(() => {
    player1 = new Player('Player 1');
    player2 = new Player('Player 2');
    scoreboard = new Scoreboard(player1, player2);
  });

  test('should display "0-0, 0-0" as the initial score', () => {
    expect(scoreboard.displayScore()).toBe('0-0, 0-0');
  });

  test('should update score when a player wins a point', () => {
    player1.winPoint();
    scoreboard.updateGameScore(player1, player2);
    expect(scoreboard.displayScore()).toBe('0-0, 15-0');
  });

  test('should display "Deuce" when both players have 3 or more points and are tied', () => {
    player1.winPoint(); player1.winPoint(); player1.winPoint();
    player2.winPoint(); player2.winPoint(); player2.winPoint();
    expect(scoreboard.displayScore()).toBe('0-0, Deuce');
  });

  test('should display "Advantage" when one player has a one-point lead at 3 or more points', () => {
    player1.winPoint(); player1.winPoint(); player1.winPoint(); player1.winPoint();
    player2.winPoint(); player2.winPoint(); player2.winPoint();
    scoreboard.updateGameScore(player1, player2);
    expect(scoreboard.displayScore()).toBe('0-0, Advantage Player 1');
  });

  test('should update the game score and reset points after a player wins a game', () => {
    player1.winPoint(); player1.winPoint(); player1.winPoint(); player1.winPoint();
    scoreboard.updateGameScore(player1, player2);
    expect(scoreboard.displayScore()).toBe('1-0, 0-0');
  });
});
