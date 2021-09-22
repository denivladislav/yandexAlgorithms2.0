import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const appFilepath = path.join(__dirname, '../tasks/task1C.js');
let app;

beforeEach(() => {
  app = spawn('node', [appFilepath]);
});

test('ambiguous data', (done) => {
  app.stdin.write('1 2 2003');
  app.stdin.end();

  app.stdout.on('data', (data) => {
    const parsedData = data.toString().trim();
    const result = parseInt(parsedData, 10);
    expect(result).toEqual(0);
    done();
  });
});

test('clear data1', (done) => {
  app.stdin.write('2 29 2008');
  app.stdin.end();

  app.stdout.on('data', (data) => {
    const parsedData = data.toString().trim();
    const result = parseInt(parsedData, 10);
    expect(result).toEqual(1);
    done();
  });
});

test('clear data2', (done) => {
  app.stdin.write('9 9 2008');
  app.stdin.end();

  app.stdout.on('data', (data) => {
    const parsedData = data.toString().trim();
    const result = parseInt(parsedData, 10);
    expect(result).toEqual(1);
    done();
  });
});
