import { gameProcess, generateNumber } from './utils.js';
import { readAnswer } from '../common/index.js';
import playCalc from './calc.js';

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

function correctAnswerCreator() {
  const number1 = generateNumber() + 1;
  const number2 = generateNumber() + 1;

  console.log(`Question: ${number1} ${number2}`);

  return getGcd(number1, number2);
}

function userAnswerCreator() {
  return Number(readAnswer());
}

function playGcd() {
  return gameProcess('Find the greatest common divisor of given numbers.', correctAnswerCreator, userAnswerCreator);
}

export default playGcd;
