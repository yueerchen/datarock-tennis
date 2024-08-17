import { Match } from './Match';
import readlineSync from 'readline-sync';

// Get players names
const player1 = readlineSync.question('Enter the name of player 1: ');
const player2 = readlineSync.question('Enter the name of player 2: ');

if (!player1 || !player2) {
  console.error("Both players names are required.");
  process.exit(1);
}

// Initialize match
const match = new Match(player1, player2);
const displayScore = () => {
  const score = match.score();
  readlineSync.question(`Current score: ${score}\nPress Enter to continue...`);
};

// eslint-disable-next-line no-constant-condition
while (true) {
  const pointWinner = readlineSync.question('Enter the player who won the point (player 1/player 2): ');

  if (pointWinner === "exit") {
    break;
  }

  match.pointWonBy(pointWinner);
  displayScore();
}