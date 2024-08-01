import { CORRECT_ATTEMPTS_COUNT } from './constants.js';

export function generateNumber(digits = 2) {
  return Math.floor(Math.random() * 10 ** digits);
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
