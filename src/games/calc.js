import { runGameProcess } from '../game-process.js';
import { generateNumber } from '../utils.js';

const operators = ['+', '-', '*'];

const getRoundData = () => {
  const operator = operators[generateNumber(0, operators.length - 1)];
  const number1 = generateNumber(0, 100);
  const number2 = generateNumber(0, 100);

  const expression = `${number1} ${operator} ${number2}`;

  const getCorrectAnswer = () => {
    switch (operator) {
      case '-':
        return number1 - number2;
      case '+':
        return number1 + number2;
      case '*':
        return number1 * number2;
      default:
        return 'Unknown operator';
    }
  };

  const correctAnswer = getCorrectAnswer().toString();

  return [expression, correctAnswer];
};

export default () => {
  runGameProcess(
    'What is the result of the expression?',
    getRoundData,
  );
};
