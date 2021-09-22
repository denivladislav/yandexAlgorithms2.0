import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const appFilepath = path.join(__dirname, '../tasks/task3C.js');
let app;

beforeEach(() => {
  app = spawn('node', [appFilepath]);
});

test('all numbers are same', (done) => {
  app.stdin.write('0 0 0 0 0 0 0 0 0 0');
  app.stdin.end();

  app.stdout.on('data', (data) => {
    const parsedData = data.toString().trim();
    expect(parsedData).toEqual('');
    done();
  });
});

test('last number is different', (done) => {
  app.stdin.write('0 0 0 0 0 0 0 0 0 100');
  app.stdin.end();

  app.stdout.on('data', (data) => {
    const parsedData = data.toString().trim();
    expect(parsedData).toEqual('100');
    done();
  });
});

test('various numbers 1', (done) => {
  app.stdin.write('1 2 2 3 3 3');
  app.stdin.end();

  app.stdout.on('data', (data) => {
    const parsedData = data.toString().trim();
    expect(parsedData).toEqual('1');
    done();
  });
});

test('various numbers 2', (done) => {
  app.stdin.write('4 3 5 2 5 1 3 5');
  app.stdin.end();

  app.stdout.on('data', (data) => {
    const parsedData = data.toString().trim();
    expect(parsedData).toEqual('4 2 1');
    done();
  });
});
