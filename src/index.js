import readFromConsole from './cli.js';

const state = { userName: undefined };

export function greetUser() {
  console.log('Welcome to the Brain Games!');
  state.userName = readFromConsole('May I have your name? ');
  console.log(`Hello, ${state.userName}!`);
}

function printResult(isGameWon) {
  const { userName } = state;

  if (isGameWon) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
}

export function runGameProcess(gameTask, getRoundData) {
  const CORRECT_ATTEMPTS_COUNT = 3;

  greetUser();

  console.log(gameTask);

  let correctAttemptsCount = 0;

  while (CORRECT_ATTEMPTS_COUNT > correctAttemptsCount) {
    const { question, correctAnswer } = getRoundData();

    console.log(`Question: ${question}`);

    const userAnswer = readFromConsole('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAttemptsCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);

      printResult(false);
      return;
    }
  }

  printResult(true);
}

export function generateNumber(max = 100, min = 0) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
