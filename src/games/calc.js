import { runGameProcess, generateNumber } from './utils.js';

function generateOperator() {
  const operators = ['+', '-', '*'];

  return operators[Math.floor(operators.length * Math.random())];
}

function createCorrectAnswer() {
  const operator = generateOperator();
  const max = operator === '*' ? 10 : 100;
  const leftOperand = generateNumber(max);
  const rightOperand = generateNumber(max);

  const expression = `${leftOperand} ${operator} ${rightOperand}`;

  console.log(`Question: ${expression}`);

  // eslint-disable-next-line no-eval
  return eval(expression).toString();
}

function playCalc() {
  return runGameProcess('What is the result of the expression?', createCorrectAnswer);
}

export default playCalc;
