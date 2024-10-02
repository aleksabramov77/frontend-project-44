import { runGameProcess } from '../game-process.js';
import { generateNumber } from '../utils.js';

const generateProgression = (length, start, step) => {
  const result = [];

  for (let i = 0; i < length; i += 1) {
    const item = start + i * step;
    result.push(item);
  }

  return result;
};


const getRoundData = () => {
  const minProgressionLength = 5;
  const progressionLength = generateNumber(minProgressionLength, 10);
  const startNumber = generateNumber(0, 100);
  const progressionStep = generateNumber(1, 5);
  const hiddenIndex = generateNumber(0, progressionLength - 1);

  const progressionItems = generateProgression(progressionLength, startNumber, progressionStep);

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
