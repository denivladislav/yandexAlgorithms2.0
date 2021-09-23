import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const appFilepath = path.join(__dirname, '../tasks/task4C.js');
let app;

beforeEach(() => {
  app = spawn('node', [appFilepath]);
});

test('test1', (done) => {
  app.stdin.write(`
    hi
    hi
    what is your name
    my name is bond
    james bond
    my name is damme
    van damme
    claude van damme
    jean claude van damme  
  `);
  app.stdin.end();

  app.stdout.on('data', (data) => {
    const parsedData = data.toString().trim();
    expect(parsedData).toEqual('damme\nis\nname\nvan\nbond\nclaude\nhi\nmy\njames\njean\nwhat\nyour');
    done();
  });
});

test('test2', (done) => {
  app.stdin.write(`
    oh you touch my talala
    mmm my ding ding dong    
  `);
  app.stdin.end();

  app.stdout.on('data', (data) => {
    const parsedData = data.toString().trim();
    expect(parsedData).toEqual('ding\nmy\ndong\nmmm\noh\ntalala\ntouch\nyou');
    done();
  });
});

test('test3', (done) => {
  app.stdin.write(`
    ai ai ai ai ai ai ai ai ai ai  
  `);
  app.stdin.end();

  app.stdout.on('data', (data) => {
    const parsedData = data.toString().trim();
    expect(parsedData).toEqual('ai');
    done();
  });
});
