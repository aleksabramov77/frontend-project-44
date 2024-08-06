import { generateNumber, runGameProcess } from '../index.js';

function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i ** 2 <= num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function getRoundData() {
  const hiddenNumber = generateNumber();
  const isHiddenNumberPrime = isPrime(hiddenNumber);

  return { question: hiddenNumber, correctAnswer: isHiddenNumberPrime ? 'yes' : 'no' };
}

export default () => {
  runGameProcess(
    'Answer "yes" if given number is prime. Otherwise answer "no".',
    getRoundData,
  );
};
