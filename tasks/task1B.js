import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
});

const lines = [];
rl.on('line', (line) => {
  lines.push(line);
}).on('close', () => {
  const [line] = lines;
  const [stations, startStation, finishStation] = line.split(' ').map((item) => parseInt(item, 10));
  const route1 = Math.abs(startStation - finishStation) - 1;
  const route2 = stations - Math.abs(startStation - finishStation) - 1;
  const result = route1 > route2 ? route2 : route1;
  console.log(result);
});
