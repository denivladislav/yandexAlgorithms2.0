import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const appFilepath = path.join(__dirname, '../tasks/task4A.js');
let app;

beforeEach(() => {
  app = spawn('node', [appFilepath]);
});

test('test1', (done) => {
  app.stdin.write('7\n1 5\n10 -5\n1 10\n4 -2\n4 3\n4 1\n4 0');
  app.stdin.end();

  app.stdout.on('data', (data) => {
    const parsedData = data.toString().trim();
    expect(parsedData).toEqual('1 15\n4 2\n10 -5');
    done();
  });
});

test('test2', (done) => {
  app.stdin.write('5\n5 -10000\n-5 100000000000\n10 2000000000000\n-5 -300000000000\n0 10000000000000');
  app.stdin.end();

  app.stdout.on('data', (data) => {
    const parsedData = data.toString().trim();
    expect(parsedData).toEqual('-5 -200000000000\n0 10000000000000\n5 -10000\n10 2000000000000');
    done();
  });
});

test('test3', (done) => {
  app.stdin.write('10\n2 2\n1 1\n3 3\n-4 4\n5 5\n6 6\n7 7\n8 8\n9 9\n10 10');
  app.stdin.end();

  app.stdout.on('data', (data) => {
    const parsedData = data.toString().trim();
    expect(parsedData).toEqual('-4 4\n1 1\n2 2\n3 3\n5 5\n6 6\n7 7\n8 8\n9 9\n10 10');
    done();
  });
});
