import { readAnswer } from '../common/index.js';

export function generateNumber(max = 100, min = 0) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const CORRECT_ATTEMPTS_COUNT = 3;

export function runGameProcess(title, createCorrectAnswer) {
  console.log(title);

  let correctAttemptsCount = 0;

  while (CORRECT_ATTEMPTS_COUNT > correctAttemptsCount) {
    const correctAnswer = createCorrectAnswer();
    const userAnswer = readAnswer();

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAttemptsCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);

      return false;
    }
  }

  return true;
}
