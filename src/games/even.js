import { generateNumber, runGameProcess } from '../index.js';

function getRoundData() {
  const hiddenNumber = generateNumber();
  const isHiddenNumberEval = hiddenNumber % 2 === 0;

  return { question: hiddenNumber, correctAnswer: isHiddenNumberEval ? 'yes' : 'no' };
}

export default () => {
  runGameProcess(
    'Answer "yes" if the number is even, otherwise answer "no".',
    getRoundData,
  );
};
