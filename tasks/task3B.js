import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
});

const lines = [];
rl.on('line', (line) => {
  lines.push(line);
}).on('close', () => {
  const [line] = lines;
  const numbers = line.trim().split(' ').map((item) => parseInt(item, 10));
  const uniques = {};
  const result = numbers.reduce((acc, item) => {
    if (uniques[item] !== 'exists') {
      uniques[item] = 'exists';
      acc.push('NO');
    } else {
      acc.push('YES');
    }
    return acc;
  }, []);
  console.log(result.join('\n').trim());
});
