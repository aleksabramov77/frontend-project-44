#!/usr/bin/env node
import { generateNumber, readUserAnswer, sayHello } from '../src/utils.js';
import { readUserName } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const userName = readUserName();
sayHello(userName);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const CORRECT_ATTEMPTS_COUNT = 3;
let correctAttemptsCount = 0;

while (CORRECT_ATTEMPTS_COUNT > correctAttemptsCount) {
  const currentNumber = generateNumber();
  console.log(`Question: ${currentNumber}`);

  const isCurrentNumberEval = currentNumber % 2 === 0;
  const userAnswer = readUserAnswer();

  if ((userAnswer === 'yes' && isCurrentNumberEval) || (userAnswer === 'no' && !isCurrentNumberEval)) {
    console.log('Correct!');
    correctAttemptsCount += 1;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isCurrentNumberEval ? 'yes' : 'no'}'.`);

    break;
  }
}

if (CORRECT_ATTEMPTS_COUNT === correctAttemptsCount) {
  console.log(`Congratulations, ${userName}!`);
} else {
  console.log(`Let's try again, ${userName}!`);
}
