import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const appFilepath = path.join(__dirname, '../tasks/task2A.js');
let app;

beforeEach(() => {
  app = spawn('node', [appFilepath]);
});

test('test1', (done) => {
  app.stdin.write('1\n0');
  app.stdin.end();

  app.stdout.on('data', (data) => {
    const parsedData = data.toString().trim();
    const result = parseInt(parsedData, 10);
    expect(result).toEqual(1);
    done();
  });
});

test('test2', (done) => {
  app.stdin.write('1\n3\n3\n1\n0');
  app.stdin.end();

  app.stdout.on('data', (data) => {
    const parsedData = data.toString().trim();
    const result = parseInt(parsedData, 10);
    expect(result).toEqual(2);
    done();
  });
});

test('test3', (done) => {
  app.stdin.write('1\n9\n1\n1\n0');
  app.stdin.end();

  app.stdout.on('data', (data) => {
    const parsedData = data.toString().trim();
    const result = parseInt(parsedData, 10);
    expect(result).toEqual(1);
    done();
  });
});
