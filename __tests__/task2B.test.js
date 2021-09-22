import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const appFilepath = path.join(__dirname, '../tasks/task2B.js');
let app;

beforeEach(() => {
  app = spawn('node', [appFilepath]);
});

test('one house one shop near', (done) => {
  app.stdin.write('1 2 0 0 0 0 0 0 0 0');
  app.stdin.end();

  app.stdout.on('data', (data) => {
    const parsedData = data.toString().trim();
    const result = parseInt(parsedData, 10);
    expect(result).toEqual(1);
    done();
  });
});

test('complicated1', (done) => {
  app.stdin.write('2 0 1 1 0 1 0 2 1 2');
  app.stdin.end();

  app.stdout.on('data', (data) => {
    const parsedData = data.toString().trim();
    const result = parseInt(parsedData, 10);
    expect(result).toEqual(3);
    done();
  });
});

test('complicated2', (done) => {
  app.stdin.write('2 0 0 1 1 0 2 0 1 2');
  app.stdin.end();

  app.stdout.on('data', (data) => {
    const parsedData = data.toString().trim();
    const result = parseInt(parsedData, 10);
    expect(result).toEqual(3);
    done();
  });
});