import { Segment } from './segment';

export class Path {
  constructor(public readonly segments: Segment[]) {}

  distance(): number {
    let total = 0;

    for (let i = 0; i < this.segments.length; i++) {
      total += this.segments[i].distance();
    }

    return total;
  }
}
