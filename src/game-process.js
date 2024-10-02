import readlineSync from 'readline-sync';
import { getUserNameFromCli } from './utils.js';

const runGameProcess = (gameTask, getRoundData) => {
  const correctsAttemptsCount = 3;

  const userName = getUserNameFromCli();

  console.log(gameTask);

  for (let i = 0; i < correctsAttemptsCount; i += 1) {
    const [question, correctAnswer] = getRoundData();

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);

      console.log(`Let's try again, ${userName}!`);

      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default runGameProcess;
