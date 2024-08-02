import { gameProcess, generateNumber } from './utils.js';
import { readAnswer } from '../common/index.js';
import playCalc from './calc.js';

const MIN_PROGRESSION_LENGTH = 5;

function correctAnswerCreator() {
  const progressionLength = generateNumber(10, MIN_PROGRESSION_LENGTH);
  const startNumberInPosition = generateNumber();
  const progressionStep = generateNumber(5, 1);
  const hiddenNumberPosition = generateNumber(progressionLength - MIN_PROGRESSION_LENGTH);

  let progressionString = '';
  let hiddenNumber;

  for (let i = 0; i < progressionLength; i += 1) {
    const progressionItem = startNumberInPosition + i * progressionStep;

    if (hiddenNumberPosition === i) {
      hiddenNumber = progressionItem;
      progressionString += '.. ';
    } else {
      progressionString += `${progressionItem} `;
    }
  }

  console.log(`Question: ${progressionString}`);

  return hiddenNumber;
}

function userAnswerCreator() {
  return Number(readAnswer());
}

function playProgression() {
  return gameProcess('What number is missing in the progression?', correctAnswerCreator, userAnswerCreator);
}

export default playProgression;
