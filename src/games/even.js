import { runGameProcess } from '../game-process.js';
import generateNumber from '../utils.js';

const isEven = (number) => number % 2 === 0;

const getRoundData = () => {
  const hiddenNumber = generateNumber(0, 100);

  return [hiddenNumber, isEven(hiddenNumber) ? 'yes' : 'no'];
};

export default () => {
  runGameProcess(
    'Answer "yes" if the number is even, otherwise answer "no".',
    getRoundData,
  );
};
