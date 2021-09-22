import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
});

const lines = [];
rl.on('line', (line) => {
  lines.push(line);
}).on('close', () => {
  const [legLengthLine, coordinatesLine] = lines;
  const d = parseInt(legLengthLine, 10);
  const [x, y] = coordinatesLine.split(' ').map((c) => parseInt(c, 10));
  const prod1 = -(x * d);
  const prod2 = x * d - d * d + d * y;
  const prod3 = -(d * y);
  let result;
  if (prod1 === 0 || prod2 === 0 || prod3 === 0) {
    result = 0;
  } else if (Math.sign(prod1) === Math.sign(prod2) && Math.sign(prod2) === Math.sign(prod3)) {
    result = 0;
  } else {
    const lengthToA = x ** 2 + y ** 2;
    const lengthToB = (x - d) ** 2 + y ** 2;
    const lengthToC = x ** 2 + (y - d) ** 2;
    const lengthsToPoints = { 1: lengthToA, 2: lengthToB, 3: lengthToC };
    const minLength = Math.min(...Object.values(lengthsToPoints));
    const allClosestPoints = Object.keys(lengthsToPoints)
      .filter((point) => lengthsToPoints[point] === minLength);
    [result] = allClosestPoints.sort((a, b) => a < b);
  }
  console.log(result);
});
