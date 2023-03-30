// Ex. 2: Reverse a given string
// reverse : string -> string

// your code here...
function reverse(s: string): string {
  if (s.length <= 1) return s;

  return `${reverse(s.substring(1))}${s[0]}`;
}

const ex2test1 = 'test' as const;
const ex2test2 = 'rumba' as const;
const ex2test3 = 'higher oddo rehgih' as const;
const ex2test4 = '5o3sl7K8cAjC2z9' as const;
const ex2test5 = 'T3T7wxhJ9rPN7l1' as const;

export function runBeginnerEx2() {
  console.log(`Starting exercise 2 from category Beginner`);
  console.log(reverse(ex2test1));
  console.log(reverse(ex2test2));
  console.log(reverse(ex2test3));
  console.log(reverse(ex2test4));
  console.log(reverse(ex2test5));

  console.log('Bonus Exercise 2');

  console.log(ex2test1, 'is palindrome', ex2test1 === reverse(ex2test1));
  console.log(ex2test2, 'is palindrome', ex2test2 === reverse(ex2test2));
  console.log(ex2test3, 'is palindrome', ex2test3 === reverse(ex2test3));
  console.log(ex2test4, 'is palindrome', ex2test4 === reverse(ex2test4));
  console.log(ex2test5, 'is palindrome', ex2test5 === reverse(ex2test5));

  console.log(`Finished exercise 2 from category Beginner`);
}
