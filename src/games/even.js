import { readAnswer } from '../common/index.js';
import {
  gameProcess, generateNumber,
} from './utils.js';

function correctAnswerCreator() {
  const currentNumber = generateNumber();

  console.log(`Question: ${currentNumber}`);

  const isCurrentNumberEval = currentNumber % 2 === 0;
  return isCurrentNumberEval ? 'yes' : 'no';
}

function userAnswerCreator() {
  return readAnswer();
}

export function playEven() {
  return gameProcess('Answer "yes" if the number is even, otherwise answer "no".', correctAnswerCreator, userAnswerCreator);
}
