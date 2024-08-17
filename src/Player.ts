export class Player {
  [x: string]: any;
  private name: string;
  private points: number = 0;
  private games: number = 0;

  constructor(name: string) {
    this.name = name;
  }

  // getName returns the name of the player.
  public getName(): string {
    return this.name;
  }

  // winPoint increments the points of the player by 1.
  public winPoint(): void {
    this.points += 1;
  }

  // getPoints returns the current points of the player.
  public getPoints(): number {
    return this.points;
  }

  public winGame(): void {
    this.games += 1;
    this.points = 0;
  }

  public getGames(): number {
    return this.games;
  }

  public resetPoints(): void {
    this.points = 0;
  }
}
