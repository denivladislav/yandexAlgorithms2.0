import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
});

const lines = [];
rl.on('line', (line) => {
  lines.push(line);
}).on('close', () => {
  const textLines = lines.filter((line) => line);
  const textData = textLines.reduce((acc, item) => {
    const words = item.trim().split(' ').filter((word) => word.trim());
    words.forEach((word) => {
      if (!acc[word]) {
        acc[word] = 1;
      } else {
        acc[word] += 1;
      }
    });
    return acc;
  }, {});
  const result = Object.entries(textData)
    .sort(([, a], [, b]) => b - a)
    .sort(([key1, value1], [key2, value2]) => {
      if (value1 !== value2) {
        return 0;
      }
      if (key1 < key2) {
        return -1;
      }
      if (key1 > key2) {
        return 1;
      }
      return 0;
    })
    .map(([key]) => key);
  console.log(result.join('\n'));
});
