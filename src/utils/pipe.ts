type Fnc<X, Y> = (a: X) => Y;

/**
 * This function chains the call of all provided functions, starting from an initial value and providing the result 
 * from one function as the argument to the next function. All provided functions must take one argument and 
 * return a value.
 * Ex: pipe(f1, f2, f3)(initialValue) is equivalent to f3(f2(f1(initialValue)))
 */
export function pipe<A, B, C, D, F, G, H>(f1: Fnc<A, B>, f2: Fnc<B, C>, f3: Fnc<C, D>, f4: Fnc<D, F>, f5: Fnc<F, G>, f6: Fnc<G, H>): (x: A) => H;
export function pipe<A, B, C, D, F, G>(f1: Fnc<A, B>, f2: Fnc<B, C>, f3: Fnc<C, D>, f4: Fnc<D, F>, f5: Fnc<F, G>): (x: A) => G;
export function pipe<A, B, C, D, F>(f1: Fnc<A, B>, f2: Fnc<B, C>, f3: Fnc<C, D>, f4: Fnc<D, F>): (x: A) => F;
export function pipe<A, B, C, D>(f1: Fnc<A, B>, f2: Fnc<B, C>, f3: Fnc<C, D>): (x: A) => D;
export function pipe<A, B, C>(f1: Fnc<A, B>, f2: Fnc<B, C>): (x: A) => C;
export function pipe<A, B>(f1: (a: A) => B): (x: A) => B;
export function pipe(...args: ((a: unknown) => unknown)[]) {
  return (x: unknown) => {
    return args.reduce((acc, fn) => fn(acc), x);
  };
}
