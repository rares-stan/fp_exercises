// Ex. 3: Create a function that receives a list and a number N and returns the first N items from the list
// takeN : T[] -> number -> T[]

// your code here...

function takeN<T>(arr: readonly T[], n: number): T[] {
  if (n === 0 || arr.length === 0) return [];
  if (n < 0) {
    return [...takeN(arr.slice(0, arr.length - 1), n + 1), arr[arr.length - 1]];
  }
  return [arr[0], ...takeN(arr.slice(1), n - 1)];
}

const ex3test1 = [[1, 2, 3, 4, 5, 6, 7, 8, 9], 5] as const;
const ex3test2 = [[1, 2, 3, 4, 5, 6, 7, 8, 9], 15] as const;
const ex3test3 = [[1, {}, 'test', 'blabla', { a: 3 }, 6, 7, 8, 9], 7] as const;
const ex3test4 = [[1, 2, 3, 4, 5, 6, 7, 8, 9], -3] as const;

export function runBeginnerEx3() {
  console.log(`Starting exercise 3 from category Beginner`);
  console.log(takeN(ex3test1[0], ex3test1[1]));
  console.log(takeN(ex3test2[0], ex3test2[1]));
  console.log(takeN(ex3test3[0], ex3test3[1]));
  console.log(takeN(ex3test4[0], ex3test4[1]));
  console.log(`Finished exercise 3 from category Beginner`);
}
