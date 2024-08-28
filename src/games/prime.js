import { runGameProcess } from '../game-process.js';
import { generateNumber, isPrime } from '../utils.js';

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
