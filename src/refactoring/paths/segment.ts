import { Point } from './point';

export class Segment {
  constructor(private readonly start: Point, private readonly destination: Point) {}

  distance(): number {
    const deltaX = this.start.x - this.destination.x;
    const deltaY = this.start.y - this.destination.y;

    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  }
}
