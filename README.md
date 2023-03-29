# FP Workshop

This is a collection of exercises aimed at helping developers getting into Functional Programming or polishing their skills in it.

In folder `src` the exercises will be grouped by category:

1. beginner
2. ~~medium~~
3. ~~advanced~~
4. ~~monads~~
5. refactoring

## Getting started

After you have cloned the repo locally run `npm install` from from the root of the project.

To run the exercises use the command `npm start`

## Selecting a category

When selecting a category to solve exercised in, please uncomment the call to the category runner from `./src/index.ts`

## Solving the exercises

Exercises are grouped in folders with the name of the category and are numbered inside each category. Inside an exercise file there are 4 main sections:

1. instructions
2. solution
3. test data
4. exercise runner

### 1. Instructions

Each exercise has instructions at the top of the file, at least the problem statement and main function signature. Additionally you may have hints or additional sub-exercises (for after the main problem is solved).

### 2. Solution

This is the file section where you write your solution, it is denoted by a comment `// your code here...`. Your solution must at least have 1 (one) function that respects the signature given in the problem statement.

### 3. Test data

Here are defined the test scenarios, they may vary in number.

### 4. Exercise runner

An exported function that runs and prints the output from your function. When you run the exercise you need to uncomment the function calls to your solution.

## Documentation and Learning materials

In each category you will find a `README.md` file which will contain documentation, learning materials, links to relevant articles or explications and examples.

Useful links:

- [James Sinclair](https://jrsinclair.com/web-development/)
- [Functional Light JS](https://github.com/getify/Functional-Light-JS)
- [Professor Frisby's Mostly Adequate Guide to Functional Programming](https://mostly-adequate.gitbook.io/mostly-adequate-guide/)
- [Functional Programming in 40 Minutes • Russ Olsen • GOTO 2018](https://www.youtube.com/watch?v=0if71HOyVjY)
- [Purifying Typescript - Timothy Clifford](https://www.youtube.com/watch?v=huIHUim76AM)
- [Why Isn't Functional Programming the Norm? – Richard Feldman](https://www.youtube.com/watch?v=QyJZzq0v7Z4)
