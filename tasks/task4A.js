import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
});

const lines = [];
rl.on('line', (line) => {
  lines.push(line);
}).on('close', () => {
  // somehow this solution did not pass Yandex tests
  const dataLines = lines.slice(1)
    .map((line) => line.trim())
    .filter((trimmedLine) => trimmedLine);

  const packagesData = dataLines.reduce((acc, line) => {
    const [key, value] = line.split(' ');
    if (!acc[key]) {
      acc[key] = Number(value);
    } else {
      acc[key] += Number(value);
    }
    return acc;
  }, {});

  const result = Object.entries(packagesData)
    .sort(([key1], [key2]) => Number(key1) - Number(key2))
    .map(([key, value]) => [key, value].join(' '));

  console.log(result.join('\n'));
});
