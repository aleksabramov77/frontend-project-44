import { gameProcess, generateNumber, generateOperator } from './utils.js';
import { readAnswer } from '../common/index.js';

function correctAnswerCreator() {
  const operator = generateOperator();
  const digits = operator === '*' ? 1 : 2;
  const leftOperand = generateNumber(digits);
  const rightOperand = generateNumber(digits);

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
