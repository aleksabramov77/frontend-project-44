import { runGameProcess, generateNumber } from './utils.js';

function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i ** 2 <= num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function createCorrectAnswer() {
  const hiddenNumber = generateNumber();

  console.log(`Question: ${hiddenNumber}`);

  const isHiddenNumberPrime = isPrime(hiddenNumber);

  return isHiddenNumberPrime ? 'yes' : 'no';
}

function playPrime() {
  return runGameProcess('Answer "yes" if given number is prime. Otherwise answer "no".', createCorrectAnswer);
}

export default playPrime;
