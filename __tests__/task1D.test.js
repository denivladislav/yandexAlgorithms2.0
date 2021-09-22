import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const appFilepath = path.join(__dirname, '../tasks/task1D.js');
let app;

beforeEach(() => {
  app = spawn('node', [appFilepath]);
});

test('test1', (done) => {
  app.stdin.write('4\n1 2 3 4');
  app.stdin.end();

  app.stdout.on('data', (data) => {
    const parsedData = data.toString().trim();
    const result = parseInt(parsedData, 10);
    expect(result).toBeOneOf([2, 3]);
    done();
  });
});

test('test2', (done) => {
  app.stdin.write('3\n-1 0 1');
  app.stdin.end();

  app.stdout.on('data', (data) => {
    const parsedData = data.toString().trim();
    const result = parseInt(parsedData, 10);
    expect(result).toBe(0);
    done();
  });
});

test('test3', (done) => {
  app.stdin.write('1\n0');
  app.stdin.end();

  app.stdout.on('data', (data) => {
    const parsedData = data.toString().trim();
    const result = parseInt(parsedData, 10);
    expect(result).toBe(0);
    done();
  });
});

test('test4', (done) => {
  app.stdin.write('5\n1 4 10 25 100');
  app.stdin.end();

  app.stdout.on('data', (data) => {
    const parsedData = data.toString().trim();
    const result = parseInt(parsedData, 10);
    expect(result).toBe(10);
    done();
  });
});
