// Create a new implementation for the tennis scoring using functional programming
// https://sammancoaching.org/kata_descriptions/tennis.html

import { TennisGame1 } from './tennis-oop';

function oop() {
  const p1 = 'player1';
  const p2 = 'player2';
  const game = new TennisGame1(p1, p2);

  game.wonPoint(p1);
  console.log(game.getScore());
  game.wonPoint(p1);
  game.wonPoint(p2);
  game.wonPoint(p2);
  console.log(game.getScore());
  game.wonPoint(p2);
  console.log(game.getScore());
  game.wonPoint(p1);
  game.wonPoint(p2);
  console.log(game.getScore());
  game.wonPoint(p2);
  console.log(game.getScore());
}

function fp() {
  // your code here...
}

export function runTennis() {
  console.log('------------------start tennis-------------------');
  console.log('------------------oop-------------------');
  oop();
  console.log('------------------fp-------------------');
  fp();
  console.log('------------------tennis done-------------------');
}
