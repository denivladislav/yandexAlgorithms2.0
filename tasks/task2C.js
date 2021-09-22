import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
});

const lines = [];
rl.on('line', (line) => {
  lines.push(line);
}).on('close', () => {
  const [word] = lines;
  const halfWord = word.slice(0, word.length / 2).split('');
  const reversedHalfWord = word.slice(Math.ceil(word.length / 2), word.length).split('').reverse();
  const result = halfWord.reduce((acc, letter, index) => {
    if (letter !== reversedHalfWord[index]) {
      return acc + 1;
    }
    return acc;
  }, 0);
  console.log(result);
});
