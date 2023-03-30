// Ex. 1: Find the maximum number from a list of numbers
// findMax : number[] -> number

// your code here.....

function findMax(arr: readonly number[]): number {
  const [head, ...tail] = arr;

  if (arr.length === 1) return head;

  return Math.max(head, findMax(tail));
}

const ex1test1 = [1, 2, 3, 4, 5, 6] as const;
const ex1test2 = [7, 2, 5, 7, 1] as const;
const ex1test3 = [12, 4, 11, 20, 15, 10, 9, 19, 7, 14] as const;
const ex1test4 = [-10, 19, 17, 6, 16, 13, 12, 10, 8, 20, 19, 20, 18, 7] as const;

export function runBeginnerEx1() {
  console.log(`Starting exercise 1 from category Beginner`);
  console.log(findMax(ex1test1));
  console.log(findMax(ex1test2));
  console.log(findMax(ex1test3));
  console.log(findMax(ex1test4));
  console.log(`Finished exercise 1 from category Beginner`);
}
