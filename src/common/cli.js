import readlineSync from 'readline-sync';

export function readUserName() {
  return readlineSync.question('May I have your name? ');
}

export function readAnswer(title = 'Your answer: ') {
  return readlineSync.question(title);
}
