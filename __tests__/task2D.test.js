import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const appFilepath = path.join(__dirname, '../tasks/task2D.js');
let app;

beforeEach(() => {
  app = spawn('node', [appFilepath]);
});

test('test1', (done) => {
  app.stdin.write('5 2\n0 2');
  app.stdin.end();

  app.stdout.on('data', (data) => {
    const parsedData = data.toString().trim();
    expect(parsedData).toEqual('2');
    done();
  });
});

test('test2', (done) => {
  app.stdin.write('13 4\n1 4 8 11');
  app.stdin.end();

  app.stdout.on('data', (data) => {
    const parsedData = data.toString().trim();
    expect(parsedData).toEqual('4 8');
    done();
  });
});

test('test3', (done) => {
  app.stdin.write('14 6\n1 6 8 11 12 13');
  app.stdin.end();

  app.stdout.on('data', (data) => {
    const parsedData = data.toString().trim();
    expect(parsedData).toEqual('6 8');
    done();
  });
});

test('test4', (done) => {
  app.stdin.write('4 4\n0 1 2 3');
  app.stdin.end();

  app.stdout.on('data', (data) => {
    const parsedData = data.toString().trim();
    expect(parsedData).toEqual('1 2');
    done();
  });
});
