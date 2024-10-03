import runGameProcess from '../gameProcess.js';
import generateNumber from '../utils.js';

const isPrime = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i ** 2 <= num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const getRoundData = () => {
  const hiddenNumber = generateNumber(0, 100);
  const isHiddenNumberPrime = isPrime(hiddenNumber);

  return [hiddenNumber, isHiddenNumberPrime ? 'yes' : 'no'];
};

export default () => {
  runGameProcess(
    'Answer "yes" if given number is prime. Otherwise answer "no".',
    getRoundData,
  );
};
