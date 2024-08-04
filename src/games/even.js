import {
  runGameProcess, generateNumber,
} from './utils.js';

function createCorrectAnswer() {
  const hiddenNumber = generateNumber();

  console.log(`Question: ${hiddenNumber}`);

  const isHiddenNumberEval = hiddenNumber % 2 === 0;
  return isHiddenNumberEval ? 'yes' : 'no';
}

function playEven() {
  return runGameProcess('Answer "yes" if the number is even, otherwise answer "no".', createCorrectAnswer);
}

export default playEven;
