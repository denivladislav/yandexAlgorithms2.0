import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
});

const lines = [];
rl.on('line', (line) => {
  lines.push(line);
}).on('close', () => {
  const numbers = lines.map((line) => parseInt(line, 10));
  const maxValue = Math.max(...numbers);
  const result = numbers.filter((n) => n === maxValue).length;
  console.log(result);
});
