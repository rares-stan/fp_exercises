// 1. refactor the existing methods to be in a functional way
// 2. create methods to filter segments that have a length grater than a provided number
// 3. determine the longest path and the longest segment in it
// 4. add stops to paths
// 5. determine witch provided stops are on the path
// 6. filter the paths that have a given list of stops on the path

import { Segment } from './segment';
import { Point } from './point';
import { Path } from './path';

export function runPath() {
  console.log('----------------------start run path--------------------------');

  const rawSegments = [
    [
      { x: 1, y: 2 },
      { x: 1, y: 3 },
    ],
    [
      { x: 1, y: 3 },
      { x: 5, y: 3 },
    ],
    [
      { x: 5, y: 3 },
      { x: 7, y: 7 },
    ],
  ];

  const segments = rawSegments.map((rawSegment) => {
    const p1 = new Point(rawSegment[0].x, rawSegment[0].y);
    const p2 = new Point(rawSegment[1].x, rawSegment[1].y);
    return new Segment(p1, p2);
  });

  const path = new Path(segments);

  // your code here...

  console.log('----------------------end run path--------------------------');
}
