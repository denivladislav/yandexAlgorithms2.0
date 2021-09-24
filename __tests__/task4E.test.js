import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const appFilepath = path.join(__dirname, '../tasks/task4E.js');
let app;

beforeEach(() => {
  app = spawn('node', [appFilepath]);
});

test('test1', (done) => {
  app.stdin.write('1\n0\ntopic 1\nbody 1');
  app.stdin.end();

  app.stdout.on('data', (data) => {
    const parsedData = data.toString().trim();
    expect(parsedData).toEqual('topic 1');
    done();
  });
});

test('test2', (done) => {
  app.stdin.write(`7\n0\nОлимпиада по информатике\nСкоро третья командная олимпиада?
  \n0\nНовая компьютерная игра\nВышла новая крутая игра!\n1\nОна пройдет 24 ноября\n1
  \nВ Санкт-Петербурге и Барнауле\n2\nГде найти?\n4\nПримет участие более 50 команд
  \n6\nИнтересно, какие будут задачи`);
  app.stdin.end();

  app.stdout.on('data', (data) => {
    const parsedData = data.toString().trim();
    expect(parsedData).toEqual('Олимпиада по информатике');
    done();
  });
});

test('test3', (done) => {
  app.stdin.write(`4\n0\nОлимпиада по информатике\nСкоро третья командная олимпиада?
  \n0\nНовая компьютерная игра\nВышла новая крутая игра!\n1\nОна пройдет 24 ноября
  \n2\nГде найти?`);
  app.stdin.end();

  app.stdout.on('data', (data) => {
    const parsedData = data.toString().trim();
    expect(parsedData).toEqual('Олимпиада по информатике');
    done();
  });
});
