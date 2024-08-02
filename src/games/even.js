import { readAnswer } from '../common/index.js';
import {
  gameProcess, generateNumber,
} from './utils.js';
import playCalc from './calc.js';

function correctAnswerCreator() {
  const hiddenNumber = generateNumber();

  console.log(`Question: ${hiddenNumber}`);

  const isHiddenNumberEval = hiddenNumber % 2 === 0;
  return isHiddenNumberEval ? 'yes' : 'no';
}

function userAnswerCreator() {
  return readAnswer();
}

function playEven() {
  return gameProcess('Answer "yes" if the number is even, otherwise answer "no".', correctAnswerCreator, userAnswerCreator);
}

export default playEven;
