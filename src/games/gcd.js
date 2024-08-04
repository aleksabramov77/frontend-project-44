import { runGameProcess, generateNumber } from './utils.js';

function getGcd(number1, number2) {
  let a = number1;
  let b = number2;

  while (a && b) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }

  a += b;
  return a;
}

function createCorrectAnswer() {
  const number1 = generateNumber() + 1;
  const number2 = generateNumber() + 1;

  console.log(`Question: ${number1} ${number2}`);

  return getGcd(number1, number2).toString();
}

function playGcd() {
  return runGameProcess('Find the greatest common divisor of given numbers.', createCorrectAnswer);
}

export default playGcd;
