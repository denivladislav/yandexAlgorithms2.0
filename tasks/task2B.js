import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
});

const lines = [];
rl.on('line', (line) => {
  lines.push(line);
}).on('close', () => {
  const [line] = lines;
  const buildings = line.split(' ').reduce((acc, item, i) => {
    acc[i + 1] = parseInt(item, 10);
    return acc;
  }, {});
  const shortestLengthsToShops = Object.keys(buildings).reduce((acc, key) => {
    if (buildings[key] !== 1) {
      return acc;
    }
    const allLengthsToShops = Object.keys(buildings).reduce((subAcc, subKey) => {
      if (buildings[subKey] === 2) {
        subAcc.push(Math.abs(key - subKey));
      }
      return subAcc;
    }, []);
    const shortestLengthToShop = Math.min(...allLengthsToShops);
    acc.push(shortestLengthToShop);
    return acc;
  }, []);
  const result = Math.max(...shortestLengthsToShops);
  console.log(result);
});
