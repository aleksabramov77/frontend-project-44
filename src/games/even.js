import { runGameProcess } from '../game-process.js';
import { generateNumber, isEven } from '../utils.js';

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
