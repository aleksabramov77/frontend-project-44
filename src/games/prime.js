import { gameProcess, generateNumber } from './utils.js';
import { readAnswer } from '../common/index.js';

function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i ** 2 <= num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function correctAnswerCreator() {
  const hiddenNumber = generateNumber();

  console.log(`Question: ${hiddenNumber}`);

  const isHiddenNumberPrime = isPrime(hiddenNumber);

  return isHiddenNumberPrime ? 'yes' : 'no';
}

function userAnswerCreator() {
  return readAnswer();
}

export function playPrime() {
  return gameProcess('Answer "yes" if given number is prime. Otherwise answer "no".', correctAnswerCreator, userAnswerCreator);
}
