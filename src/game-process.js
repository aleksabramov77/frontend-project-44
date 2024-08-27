import readFromConsole from './cli.js';

export const runGameProcess = (gameTask, getRoundData) => {
  const CORRECT_ATTEMPTS_COUNT = 3;

  console.log('Welcome to the Brain Games!');

  const userName = readFromConsole('May I have your name? ');

  console.log(`Hello, ${userName}!`);

  console.log(gameTask);

  for (let i = 0; i < CORRECT_ATTEMPTS_COUNT; i++) {
    const [question, correctAnswer] = getRoundData();

    console.log(`Question: ${question}`);

    const userAnswer = readFromConsole('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);

      console.log(`Let's try again, ${userName}!`);

      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
