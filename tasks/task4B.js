import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
});

const lines = [];
rl.on('line', (line) => {
  lines.push(line);
}).on('close', () => {
  const packagesLines = lines.filter((line) => line.trim().length > 0);
  const packagesData = packagesLines.reduce((acc, item) => {
    const [key, value] = item.trim().split(' ').filter((i) => i.trim().length > 0);
    if (!acc[key]) {
      acc[key] = parseInt(value, 10);
    } else {
      acc[key] += parseInt(value, 10);
    }
    return acc;
  }, {});
  const result = Object.keys(packagesData)
    .sort()
    .map((key) => `${key} ${packagesData[key]}`);
  console.log(result.join('\n'));
});
