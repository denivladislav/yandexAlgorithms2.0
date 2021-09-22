import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const appFilepath = path.join(__dirname, '../tasks/task1E.js');
let app;

beforeEach(() => {
  app = spawn('node', [appFilepath]);
});

test('point inside triangle', (done) => {
  app.stdin.write('5\n1 1');
  app.stdin.end();

  app.stdout.on('data', (data) => {
    const parsedData = data.toString().trim();
    const result = parseInt(parsedData, 10);
    expect(result).toBe(0);
    done();
  });
});

test('point outside triangle; A is the closest', (done) => {
  app.stdin.write('3\n-1 -1');
  app.stdin.end();

  app.stdout.on('data', (data) => {
    const parsedData = data.toString().trim();
    const result = parseInt(parsedData, 10);
    expect(result).toBe(1);
    done();
  });
});

test('point outside triangle; B and C are equidistant from the point', (done) => {
  app.stdin.write('4\n4 4');
  app.stdin.end();

  app.stdout.on('data', (data) => {
    const parsedData = data.toString().trim();
    const result = parseInt(parsedData, 10);
    expect(result).toBe(2);
    done();
  });
});

test('point is on triangle side', (done) => {
  app.stdin.write('4\n2 2');
  app.stdin.end();

  app.stdout.on('data', (data) => {
    const parsedData = data.toString().trim();
    const result = parseInt(parsedData, 10);
    expect(result).toBe(0);
    done();
  });
});
