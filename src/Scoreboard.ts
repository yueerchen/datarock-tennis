import { Player } from './Player';

export class Scoreboard {
  private player1: Player;
  private player2: Player;

  // The constructor initializes the Scoreboard with two players.
  constructor(player1: Player, player2: Player) {
    this.player1 = player1;
    this.player2 = player2;
  }

  // updateGameScore checks the points of each player and updates the game score accordingly.
  public updateGameScore(player1: Player, player2: Player): void {
    // If player1 has at least 4 points and at least 2 points more than player2, player1 wins the game and player2's points are reset.
    if (player1.getPoints() >= 4 && player1.getPoints() >= player2.getPoints() + 2) {
      player1.winGame();
      player2.resetPoints();
    } else if (player2.getPoints() >= 4 && player2.getPoints() >= player1.getPoints() + 2) {
      player2.winGame();
      player1.resetPoints();
    }
  }

  // displayScore returns the current set score and game score as a string.
  public displayScore(): string {
    const gameScore = this.getGameScore();
    const setScore = this.getSetScore();
    return `${setScore}, ${gameScore}`;
  }

  // getGameScore returns the current game score as a string.
  private getGameScore(): string {
    // If both players have at least 3 points
    if (this.player1.getPoints() >= 3 && this.player2.getPoints() >= 3) {
      // and the score is tied, return "Deuce".
      if (this.player1.getPoints() === this.player2.getPoints()) {
        return 'Deuce';
      // If player1 has one more point than player2, player1 has the 'Advantage'.
      } else if (this.player1.getPoints() === this.player2.getPoints() + 1) {
        return `Advantage ${this.player1.getName()}`;
      // If player2 has one more point than player1, player2 has the 'Advantage'.
      } else if (this.player2.getPoints() === this.player1.getPoints() + 1) {
        return `Advantage ${this.player2.getName()}`;
      }
    }
    // If none of the above conditions are met, the game score is simply the points of each player
    return `${this.translatePoints(this.player1.getPoints())}-${this.translatePoints(this.player2.getPoints())}`;
  }

  // translatePoints translates to their corresponding points.
  private translatePoints(points: number): string {
    switch (points) {
      case 0: return "0";
      case 1: return "15";
      case 2: return "30";
      case 3: return "40";
      default: return "";
    }
  }

  // getSetScore returns the current set score as a string
  private getSetScore(): string {
    return `${this.player1.getGames()}-${this.player2.getGames()}`;
  }
}
