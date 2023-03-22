// Ex. 3: Create a function that receives a list and a number N and returns the first N items from the list
// takeN : T[] -> number -> T[]

// your code here...

const ex3test1 = [[1, 2, 3, 4, 5, 6, 7, 8, 9], 5] as const;
const ex3test2 = [[1, 2, 3, 4, 5, 6, 7, 8, 9], 15] as const;
const ex3test3 = [[1, {}, 'test', 'blabla', { a: 3 }, 6, 7, 8, 9], 7] as const;
const ex3test4 = [[1, 2, 3, 4, 5, 6, 7, 8, 9], -1] as const;

// console.log(takeN(ex3test1[0], ex3test1[1]));
// console.log(takeN(ex3test2[0], ex3test2[1]));
// console.log(takeN(ex3test3[0], ex3test3[1]));
// console.log(takeN(ex3test4[0], ex3test4[1]));
