import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const appFilepath = path.join(__dirname, '../tasks/task4B.js');
let app;

beforeEach(() => {
  app = spawn('node', [appFilepath]);
});

test('test1', (done) => {
  app.stdin.write(`
    McCain 10
    McCain 5
    Obama 9
    Obama 8
    McCain 1
  `);
  app.stdin.end();

  app.stdout.on('data', (data) => {
    const parsedData = data.toString().trim();
    expect(parsedData).toEqual('McCain 16\nObama 17');
    done();
  });
});

test('test2', (done) => {
  app.stdin.write(`
    ivanov 100
    ivanov 500
    ivanov 300
    petr 70
    tourist 1
    tourist 2  
  `);
  app.stdin.end();

  app.stdout.on('data', (data) => {
    const parsedData = data.toString().trim();
    expect(parsedData).toEqual('ivanov 900\npetr 70\ntourist 3');
    done();
  });
});

test('test3', (done) => {
  app.stdin.write(`
    bur 1
  `);
  app.stdin.end();

  app.stdout.on('data', (data) => {
    const parsedData = data.toString().trim();
    expect(parsedData).toEqual('bur 1');
    done();
  });
});
