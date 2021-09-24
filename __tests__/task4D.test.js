import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const appFilepath = path.join(__dirname, '../tasks/task4D.js');
let app;

beforeEach(() => {
  app = spawn('node', [appFilepath]);
});

test('test1', (done) => {
  app.stdin.write('Party One 100000\nParty Two 200000\nParty Three 400000');
  app.stdin.end();

  app.stdout.on('data', (data) => {
    const parsedData = data.toString().trim();
    expect(parsedData).toEqual('Party One 64\nParty Two 129\nParty Three 257');
    done();
  });
});

test('test2', (done) => {
  app.stdin.write('Party number one 100\nPartytwo 100');
  app.stdin.end();

  app.stdout.on('data', (data) => {
    const parsedData = data.toString().trim();
    expect(parsedData).toEqual('Party number one 225\nPartytwo 225');
    done();
  });
});

test('test3', (done) => {
  app.stdin.write('Party number one 449\nPartytwo 1');
  app.stdin.end();

  app.stdout.on('data', (data) => {
    const parsedData = data.toString().trim();
    expect(parsedData).toEqual('Party number one 449\nPartytwo 1');
    done();
  });
});
