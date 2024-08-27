import { runGameProcess } from '../game-process.js';
import { generateNumber } from '../utils.js';

const MIN_PROGRESSION_LENGTH = 5;
const MAX_PROGRESSION_LENGTH = 10;
const MIN_PROGRESSION_STEP = 1;
const MAX_PROGRESSION_STEP = 5;

const getProgressionItems = (length, start, step) => {
  const result = [];

  for (let i = 0; i < length; i += 1) {
    const item = start + i * step;
    result.push(item);
  }

  return result;
};

const getRoundData = () => {
  const progressionLength = generateNumber(MIN_PROGRESSION_LENGTH, MAX_PROGRESSION_LENGTH);
  const startNumber = generateNumber(0, 100);
  const progressionStep = generateNumber(MIN_PROGRESSION_STEP, MAX_PROGRESSION_STEP);
  const hiddenIndex = generateNumber(0, progressionLength - MIN_PROGRESSION_LENGTH);

  const progressionItems = getProgressionItems(progressionLength, startNumber, progressionStep);

  const hiddenNumber = progressionItems[hiddenIndex];
  progressionItems[hiddenIndex] = '..';
  const progressionString = progressionItems.join(' ');

  return [progressionString, hiddenNumber.toString()];
};

export default () => {
  runGameProcess(
    'What number is missing in the progression?',
    getRoundData,
  );
};
