import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const appFilepath = path.join(__dirname, '../tasks/task1A.js');
let app;

beforeEach(() => {
  app = spawn('node', [appFilepath]);
});

test('test1', (done) => {
  app.stdin.write('0\n0\n0');
  app.stdin.end();

  app.stdout.on('data', (data) => {
    const parsedData = data.toString().trim();
    const result = parseInt(parsedData, 10);
    expect(result).toEqual(0);
    done();
  });
});

test('test2', (done) => {
  app.stdin.write('-1\n0\n1');
  app.stdin.end();

  app.stdout.on('data', (data) => {
    const parsedData = data.toString().trim();
    const result = parseInt(parsedData, 10);
    expect(result).toEqual(3);
    done();
  });
});

test('test3', (done) => {
  app.stdin.write('42\n1\n6');
  app.stdin.end();

  app.stdout.on('data', (data) => {
    const parsedData = data.toString().trim();
    const result = parseInt(parsedData, 10);
    expect(result).toEqual(6);
    done();
  });
});

test('test4', (done) => {
  app.stdin.write('44\n7\n4');
  app.stdin.end();

  app.stdout.on('data', (data) => {
    const parsedData = data.toString().trim();
    const result = parseInt(parsedData, 10);
    expect(result).toEqual(1);
    done();
  });
});

test('test5', (done) => {
  app.stdin.write('1\n4\n0');
  app.stdin.end();

  app.stdout.on('data', (data) => {
    const parsedData = data.toString().trim();
    const result = parseInt(parsedData, 10);
    expect(result).toEqual(3);
    done();
  });
});

test('test6', (done) => {
  app.stdin.write('-3\n2\n4');
  app.stdin.end();

  app.stdout.on('data', (data) => {
    const parsedData = data.toString().trim();
    const result = parseInt(parsedData, 10);
    expect(result).toEqual(2);
    done();
  });
});
