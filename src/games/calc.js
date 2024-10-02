import { runGameProcess } from '../game-process.js';
import generateNumber from '../utils.js';

const operators = ['+', '-', '*'];

  const calculateExpression = (operator, number1, number2) => {
    switch (operator) {
      case '-':
        return number1 - number2;
      case '+':
        return number1 + number2;
      case '*':
        return number1 * number2;
      default:
        throw new Error( `Unknown operator: ${operator}`);
    }
  };

const getRoundData = () => {
  const operator = operators[generateNumber(0, operators.length - 1)];
  const number1 = generateNumber(0, 100);
  const number2 = generateNumber(0, 100);

  const expression = `${number1} ${operator} ${number2}`;


  const answer = calculateExpression(operator, number1, number2).toString();

  return [expression, answer];
};

export default () => {
  runGameProcess(
    'What is the result of the expression?',
    getRoundData,
  );
};
