import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
});

const lines = [];
rl.on('line', (line) => {
  lines.push(line);
}).on('close', () => {
  const [line1, line2] = lines;
  const list1 = line1.trim().split(' ').map((item) => parseInt(item, 10));
  const list2 = line2.trim().split(' ').map((item) => parseInt(item, 10));
  const list = [...list1, ...list2];
  const listOfUniques = [...new Set(list)];
  console.log(list1.length + list2.length - listOfUniques.length);
});
