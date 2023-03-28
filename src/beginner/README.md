# Getting started with Functional Programming

## What is Functional Programming

In OOP the base of the program are objects with methods to update/change the object properties, in imperative programming there are actions that change data available as global variables or arguments, functional programming is based on functions (in the mathematical sens) that map inputs to outputs. Detailing more from the previous comparison functional programming has only values and functions that return new values, based from arguments.

## The basic concepts

- Functions as First Class Citizens/Higher Order Functions
- Pure Functions
- Referential Transparency
- Immutability
- Type System

### Functions as First Class Citizens/Higher Order Functions

Higher Order Functions mean that the program treats functions the same as values, meaning that you can pass functions as arguments, return functions from other functions, store functions in objects and variables. This is implicitly supported by JS, without this we would not be able to have the array methods for `map`, `filter` and `reduce`.

### Pure Functions

By definition a pure function is a function that returns every time the same output for the same parameter values. From this we can further conclude that pure functions do not have side-effects, e.g. modifying arguments and global variable, or are outputting something, meaning that the result of a pure function is only its returned value. With this pure functions are easy to test and have a well defined scope.

### Referential Transparency

We refer to a statement as being referentially transparent if we can replace it with its output and this does not alter the programs behaviour. This can be achieved only if the function is already pure.

### Immutability

After assigning a value you are not able to change it, you must create a new value based on the old one. This prevents side-effects and helps keep a consistent state. Unfortunately JS only can have immutability for primitive types, using `const` and on a shallow level for objects, using `Object.freeze`, thus we need to be careful when working with non-primitive types to not alter its state inside our functions.

### Type System

The type system helps us to be sure that the argument/returns are what we expect and help us to avoid making basic mistakes. JS does not have a type system by default, and that is why we wil use TS, even thought its type system does not have all the features needed to easily write very generic functions or Monads.

---

## Type Signature

### Hindley-Milner

In FP the standard type signatures are defined using Hindley-Milner notation, but in TS the IDE/Parser can extract type information for you, and are defined a bit different, but a lot of FP libraries and learning resources use them.  
The Hindley-Milner type signatures are build upon functions that take one value and returns another value, for example:

```ts
// makeDouble: number -> number
function makeDouble(n: number): number {
  return n * 2;
}
```

where `makeDouble` takes a `number` and return another `number`. In these type signature we do not care about the implementation, they just specify how the function look for the ones that use the function.

We can take this up a notch like so:

```ts
/// myAdd: number -> number -> number
const myAdd = (a: number) => (b: number) => a + b;
```

here we have a function that takes a number and returns another function which also take a number and finally returns a number. We could also define this as: `myAdd: number -> (number -> number)` to be more specific as to what the first function returns, but usually these parentheses are omitted if it is trivial to determine the return type, as in:

```ts
/// customConcat: a -> (b -> (c -> (d -> e)))
/// customConcat: a -> b -> c -> d -> e
```

When we want to specify that a function is a parameter, we will always include the parentheses:

```ts
/// myMap: a[] -> (a -> b) -> b[]
const myMap = <a>(arr: a[]) => {
  return <b>(f: a => b) => {
    ...
  }
}
```

here if we omitted the parentheses we would not be able to determine that the second function takes a function as parameter.

### Currying

Most, if not all FP languages have currying build in, but JS does not, there are utilities that can help you achieve this e.g. `lodash` or you can write it yourself, but after u define the function you need to redefine it with the curried version.  
If we only take into consideration the out of the box experience, then in JS we do not have the same experience like in a FP programming language, because:

- we can only chose the function to be curried or not
- if we do not define a curried version, then we lose the possibility to create partial applications

```ts
function test(a: number, b: string, c: number[]): string {
...
}

// we cannot do this:
test(1, 'ttt')([1, 2, 3])
test(1)('ttt')([1, 2, 3])

function test2(a: number) => (b: string) => (c: number[]): string => {
  ...
}

/// with test 2 we can only call it like so:
test2(1)('ttt')([1, 2, 3])
/// but we can have partial application
const fist2Calls = test2(1)('ttt')
const res = first2Calls([1, 2, 3])
```

As we can see in the example before, in JS we need to chose beforehand if we want to have currying and partial applications or to be able to specify multiple parameters to a function. Not always we will prefer to have multiple call until we have the final result. In languages that support currying we would define de function as we did on `test` and we would be able to call it normally or like in the `test2` examples and have partial application.

---

## Iteration

Usually in FP iteration is done recursively, because we cannot change the value of a variable once it is set, in JS we can avoid doing recursive calls by using the `for(.. of/in ..)` notation or function like `map` of `forEach`, but for the exercises here please do all iterations recursively.

A small example how this is achieved:

```ts
// get the n-th number from a provided array
// getNth: T[] -> number -> T
function getNth<T>(arr: T[], n: number): T {
  const [head, ...tail] = arr;

  if (arr.length === 1 || n <= 1) {
    return head;
  }

  return getNth(tail, n - 1);
}
```

here we start with an array `arr` and a number `n`, if there is only one element in `arr` or we have reached the desired number, we return the first element from `arr`, otherwise we return the value from another call to our function, but with all the elements in `arr` without the first one and a decreased value for `n`, because we moved 1 position closer to the desired element.

---

## Composition

To do more complex flows or logic we will need to call multiple functions one after another, usually passing data from one to another, meaning that we compose them together. There are multiple way to do this, some are easy to understand, other are easy to write, some use helper functions.  
The simplest way to do it is to nave nested function calls

```ts
const res = func3(func2(func1(data)));
```

but this can get hard to read and comprehend very fast and depending on how you stile your code you can get either a long line of nested functions or the dreaded callback hell.  
Moving forward we could have each function call separate

```ts
const res1 = func1(data);
const res2 = func2(res1);
const resFinal = func3(res2);
```

which is easy to read and comprehend but we need to save each result in a new variable and pass it to the next function call, and it can get tedious. Maybe we can improve this if we have some function or language feature to automatically pass the result from one function call to the next one

```ts
const res = data | func1 | func2 | func3 ...
```

eventually keeping the type information to help us make sure that we return what the next function is set to receive, akin to piping the functions together in one continuous flow.

```ts
const flow = pipe(func1, func2, func3);

const res = flow(data);
```

Well, we have an already define utility that does this, called `pipe`, that us defined in the `utils` folder. When you use it, firstly define the function flow (by specifying the functions and their call order) on the `pipe` call, which will return a new function, and then with the flow created you can reuse it gow many times you want. The call order is left to right.
