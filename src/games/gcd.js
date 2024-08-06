import { generateNumber, runGameProcess } from '../index.js';

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

function getRoundData() {
  const number1 = generateNumber() + 1;
  const number2 = generateNumber() + 1;

  return { question: `${number1} ${number2}`, correctAnswer: getGcd(number1, number2).toString() };
}

export default () => {
  runGameProcess(
    'Find the greatest common divisor of given numbers.',
    getRoundData,
  );
};
