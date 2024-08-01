import readlineSync from 'readline-sync';

export function sayHello(name) {
  console.log(`Hello, ${name}!`);
}

export function readUserAnswer() {
  return readlineSync.question('Your answer: ');
}

export function generateNumber() {
  return Math.floor(Math.random() * 100);
}
