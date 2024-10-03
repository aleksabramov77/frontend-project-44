import runGameProcess from '../gameProcess.js';
import generateNumber from '../utils.js';

const getGcd = (number1, number2) => {
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
};

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
