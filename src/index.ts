import { runBeginner } from './beginner';
import { runRefactor } from './refactoring';

async function main() {
  await runBeginner();
  // runRefactor();
}

main().catch(console.log);
