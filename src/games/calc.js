import { generateNumber, runGameProcess } from '../index.js';

function generateOperator() {
  const operators = ['+', '-', '*'];

  return operators[Math.floor(operators.length * Math.random())];
}

function getRoundData() {
  const operator = generateOperator();
  const max = operator === '*' ? 10 : 100;
  const leftOperand = generateNumber(max);
  const rightOperand = generateNumber(max);

  const expression = `${leftOperand} ${operator} ${rightOperand}`;

  // eslint-disable-next-line no-eval
  return { question: expression, correctAnswer: eval(expression).toString() };
}

export default () => {
  runGameProcess(
    'What is the result of the expression?',
    getRoundData,
  );
};
