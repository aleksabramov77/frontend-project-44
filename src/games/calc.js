import { gameProcess, generateNumber } from './utils.js';
import { readAnswer } from '../common/index.js';

function generateOperator() {
  const operators = ['+', '-', '*'];

  return operators[Math.floor(operators.length * Math.random())];
}

function correctAnswerCreator() {
  const operator = generateOperator();
  const max = operator === '*' ? 10 : 100;
  const leftOperand = generateNumber(max);
  const rightOperand = generateNumber(max);

  const expression = `${leftOperand} ${operator} ${rightOperand}`;

  console.log(`Question: ${expression}`);

  // eslint-disable-next-line no-eval
  return eval(expression);
}

function userAnswerCreator() {
  return Number(readAnswer());
}

export function playCalc() {
  return gameProcess('What is the result of the expression?', correctAnswerCreator, userAnswerCreator);
}
