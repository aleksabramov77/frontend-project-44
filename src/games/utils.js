import { CORRECT_ATTEMPTS_COUNT } from './constants.js';

export function generateNumber(max = 100, min = 0) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function generateOperator() {
  const operators = ['+', '-', '*'];
  return operators[Math.floor(operators.length * Math.random())];
}

export function printWrongResult(answer, correctAnswer) {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
}

export function gameProcess(title, correctAnswerCreator, userAnswerCreator) {
  console.log(title);

  let correctAttemptsCount = 0;

  while (CORRECT_ATTEMPTS_COUNT > correctAttemptsCount) {
    const correctAnswer = correctAnswerCreator();

    const userAnswer = userAnswerCreator();

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAttemptsCount += 1;
    } else {
      printWrongResult(userAnswer, correctAnswer);

      return false;
    }
  }

  return true;
}
