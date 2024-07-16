import readlineSync from 'readline-sync';

// eslint-disable-next-line import/prefer-default-export
export function readUserName() {
  return readlineSync.question('May I have your name? ');
}
