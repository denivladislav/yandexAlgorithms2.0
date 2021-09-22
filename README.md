# yandexAlgorithms2.0
This repository contains my solutions for tasks from Yandex Algorithms2.0 education course.

You may find all tasks descriptions <a href="https://yandex.ru/yaintern/algorithm-training#schedule">here</a> (in russian).

Yandex.Contest environment used stdin/stdout for their own tests. In order to pass them, in all task solutions I used cli and readline from Node.js. Hence I used stdin/stdout and Jest library to write my own tests, which you may see in this repo.

Before starting the course, I did not know how to write Jest tests for stdin/stdout, but <a href="https://javascript.plainenglish.io/how-to-test-stdout-output-in-node-js-6c36edc610d1">this article</a> helped me a lot. I suppose one may use jest-mock-console for such tasks. However, I decided to stick to the way, which does not require mocks.

## How to use
Run these commands from your command line:

```bash
# Clone this repository.
$ git clone https://github.com/denivladislav/yandexAlgorithms2.0.git

# Install dependencies.
$ npm install

# Run this command to start tests
$ make test

# Run this command to start lint
$ make lint