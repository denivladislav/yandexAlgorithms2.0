import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
});

const lines = [];
rl.on('line', (line) => {
  lines.push(line);
}).on('close', () => {
  const [line] = lines;
  const [pieceOfData1, pieceOfData2] = line.split(' ').map((item) => parseInt(item, 10));
  let result;
  if (pieceOfData1 === pieceOfData2) {
    result = 1;
  } else if (pieceOfData1 <= 12 && pieceOfData2 <= 12) {
    result = 0;
  } else {
    result = 1;
  }

  console.log(result);
});
