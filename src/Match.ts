import { Player } from './Player';
import { Scoreboard } from './Scoreboard';

export class Match {
  private player1: Player;
  private player2: Player;
  // Create a new Scoreboard to keep track of the scores of the two players.
  private scoreboard: Scoreboard;

  constructor(player1Name: string, player2Name: string) {
    this.player1 = new Player(player1Name);
    this.player2 = new Player(player2Name);
    this.scoreboard = new Scoreboard(this.player1, this.player2);
  }

  // The pointWonBy method is called when a player wins a point.
  public pointWonBy(playerName: string): void {
    if (playerName === this.player1.getName()) {
      this.player1.winPoint();
    } else if (playerName === this.player2.getName()) {
      this.player2.winPoint();
    }

    // Update the game score on the scoreboard.
    this.scoreboard.updateGameScore(this.player1, this.player2);
  }

  // The score method returns the current score of the match as a string.
  public score(): string {
    return this.scoreboard.displayScore();
  }
}
