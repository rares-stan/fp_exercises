// Ex. 4: Implement a custom filter function, only using map and reduce
// myFilter : T[] -> (T -> boolean) -> T[]

// your code here...

const ex4test1 = [[1, 2, 3, 4, 5, 6, 7, 8, 8, 5, 6, 9], (n: number): boolean => !!(n % 2)];
const ex4test2 = [[1, 2, 3, 4, 5, 6, 7, 8, 9], (n: number): boolean => n >= 5];
const ex4test3 = [['test', 'simba', 'dragons', 'spew', 'fire'], (s: string): boolean => s.length >= 5];
const ex4test4 = [
  [{ ab: 12 }, { cd: 55 }, { aa: 'test', ab: 60 }, 22, 'blabla'],
  (elem: unknown): boolean => typeof elem === 'object' && !!elem && Object.keys(elem).includes('ab'),
];

// console.log(myFilter(ex4test1[0], ex4test1[1]));
// console.log(myFilter(ex4test2[0], ex4test1[2]));
// console.log(myFilter(ex4test3[0], ex4test1[3]));
// console.log(myFilter(ex4test4[0], ex4test1[4]));
