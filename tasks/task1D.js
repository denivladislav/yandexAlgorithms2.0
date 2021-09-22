import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
});

const lines = [];
rl.on('line', (line) => {
  lines.push(line);
}).on('close', () => {
  const [studentsLine, coordinatesLine] = lines;
  const numberOfStudents = parseInt(studentsLine, 10);
  const coordinates = coordinatesLine.split(' ').map((item) => parseInt(item, 10));
  const result = coordinates[Math.round(numberOfStudents / 2) - 1];
  console.log(result);
});
