import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
});

const lines = [];
rl.on('line', (line) => {
  lines.push(line);
}).on('close', () => {
  const [line] = lines;
  const numbers = line.trim().split(' ');
  const obj = numbers.reduce((acc, item) => {
    const key = ' '.concat(item);
    if (acc[key] === undefined) {
      acc[key] = 1;
    } else {
      acc[key] += 1;
    }
    return acc;
  }, {});
  const result = Object.keys(obj).filter((key) => obj[key] === 1);
  const trimmedResult = result.map((item) => item.trim()).join(' ');
  console.log(trimmedResult);
});
