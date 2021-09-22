import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const appFilepath = path.join(__dirname, '../tasks/task3B.js');
let app;

beforeEach(() => {
  app = spawn('node', [appFilepath]);
});

test('all numbers are same', (done) => {
  app.stdin.write('0 0 0 0 0 0 0 0 0 0 0 0 0');
  app.stdin.end();

  app.stdout.on('data', (data) => {
    const parsedData = data.toString().trim();
    expect(parsedData).toEqual('NO\nYES\nYES\nYES\nYES\nYES\nYES\nYES\nYES\nYES\nYES\nYES\nYES');
    done();
  });
});

test('various numbers', (done) => {
  app.stdin.write('1 2 3 2 3 4');
  app.stdin.end();

  app.stdout.on('data', (data) => {
    const parsedData = data.toString().trim();
    expect(parsedData).toEqual('NO\nNO\nNO\nYES\nYES\nNO');
    done();
  });
});

test('last number is a unique number', (done) => {
  app.stdin.write('0 0 0 0 0 0 0 0 0 1');
  app.stdin.end();

  app.stdout.on('data', (data) => {
    const parsedData = data.toString().trim();
    expect(parsedData).toEqual('NO\nYES\nYES\nYES\nYES\nYES\nYES\nYES\nYES\nNO');
    done();
  });
});
