import { runGameProcess } from '../game-process.js';
import { generateNumber, getGcd } from '../utils.js';

const getRoundData = () => {
  const number1 = generateNumber(0, 100);
  const number2 = generateNumber(0, 100);

  return [`${number1} ${number2}`, getGcd(number1, number2).toString()];
};

export default () => {
  runGameProcess(
    'Find the greatest common divisor of given numbers.',
    getRoundData,
  );
};
