import { Player } from "./Player";

describe('Player', () => {
  let player: Player;

  beforeEach(() => {
    player = new Player('Test Player');
  });

  test('should initialize with zero points and games', () => {
    expect(player.getPoints()).toBe(0);
    expect(player.getGames()).toBe(0);
  });

  test('should increment points', () => {
    player.winPoint();
    expect(player.getPoints()).toBe(1);
  });

  test('should increment games and reset points', () => {
    player.winPoint();
    player.winGame();
    expect(player.getGames()).toBe(1);
    expect(player.getPoints()).toBe(0);
  });

  test('should reset points', () => {
    player.winPoint();
    player.resetPoints();
    expect(player.getPoints()).toBe(0);
  });
});