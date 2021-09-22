import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
});

const lines = [];
rl.on('line', (line) => {
  lines.push(line);
}).on('close', () => {
  const [benchInfoLine, legCoordinatesLine] = lines;
  const [benchLength] = benchInfoLine.split(' ').map((item) => parseInt(item, 10));
  const legCoordinates = legCoordinatesLine.split(' ').map((item) => parseInt(item, 10));
  const legCenterCoordinates = legCoordinates.map((lc) => lc + 0.5);
  let result;
  const middle = benchLength / 2;
  const [middleLeg] = legCenterCoordinates.filter((c) => c === middle);
  if (middleLeg) {
    result = middleLeg - 0.5;
  } else {
    const leftSideLegLengthsToMiddle = legCenterCoordinates.filter((c) => c < middle)
      .map((c) => middle - c);
    const rightSideLegLengthsToMiddle = legCenterCoordinates.filter((c) => c > middle)
      .map((c) => c - middle);
    const leftSideLegClosesToMiddle = Math.min(...leftSideLegLengthsToMiddle);
    const rightSideLegClosestToMiddle = Math.min(...rightSideLegLengthsToMiddle);
    result = `${middle - leftSideLegClosesToMiddle - 0.5} ${rightSideLegClosestToMiddle + middle - 0.5}`;
  }
  console.log(result);
});
