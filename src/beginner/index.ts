export const Beginner = Symbol('Beginner');

import { runBeginnerEx1 } from './ex1';
import { runBeginnerEx2 } from './ex2';
import { runBeginnerEx3 } from './ex3';
import { runBeginnerEx4 } from './ex4';
import { runBeginnerEx5 } from './ex5';

export async function runBeginner() {
  runBeginnerEx1();
  runBeginnerEx2();
  runBeginnerEx3();
  runBeginnerEx4();
  await runBeginnerEx5();
}
