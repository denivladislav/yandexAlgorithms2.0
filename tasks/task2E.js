import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
});

const lines = [];
rl.on('line', (line) => {
  lines.push(line);
}).on('close', () => {
  const [, folderLine] = lines;
  const sortedFolders = folderLine.split(' ').map((item) => parseInt(item, 10))
    .sort((a, b) => a - b);
  const slicedFolders = sortedFolders.slice(0, sortedFolders.length - 1);
  const time = slicedFolders.reduce((acc, folder) => acc + folder, 0);
  console.log(time);
});
