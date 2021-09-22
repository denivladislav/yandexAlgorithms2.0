import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
});

const lines = [];
rl.on('line', (line) => {
  lines.push(line);
}).on('close', () => {
  const [exitCode, interactorVerdict, checkerVerdict] = lines.map((line) => parseInt(line, 10));
  let finalVerdict = interactorVerdict;
  switch (interactorVerdict) {
    case 0: {
      if (exitCode !== 0) {
        finalVerdict = 3;
      } else {
        finalVerdict = checkerVerdict;
      }
      break;
    }
    case 1: {
      finalVerdict = checkerVerdict;
      break;
    }
    case 4: {
      if (exitCode !== 0) {
        finalVerdict = 3;
      } else {
        finalVerdict = 4;
      }
      break;
    }
    case 6: {
      finalVerdict = 0;
      break;
    }
    case 7: {
      finalVerdict = 1;
      break;
    }
    default:
      finalVerdict = interactorVerdict;
  }

  console.log(finalVerdict);
});
