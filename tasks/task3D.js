import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
});

const lines = [];
rl.on('line', (line) => {
  if (line.length > 0) {
    lines.push(line);
  }
}).on('close', () => {
  // this solution did not pass Yandex tests due to time limits
  const maxValue = parseInt(lines[0], 10);
  let possibleNumbers = Array.from({ length: maxValue }, (_, i) => String(i + 1));
  lines.forEach((line, index) => {
    if (line.trim() === 'YES') {
      const approvedNumbers = lines[index - 1].split(' ');
      possibleNumbers = possibleNumbers
        .filter((num) => approvedNumbers.includes(num));
    }
    if (line.trim() === 'NO') {
      const bannedNumbers = lines[index - 1].split(' ');
      possibleNumbers = possibleNumbers
        .filter((num) => !(bannedNumbers.includes(num)));
    }
  });
  console.log(possibleNumbers.join(' '));
});
