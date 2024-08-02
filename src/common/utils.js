import { readUserName } from './cli.js';
import state from './state.js';

export function initialization() {
  console.log('Welcome to the Brain Games!');

  state.userName = readUserName();

  console.log(`Hello, ${state.userName}!`);
}

export function printResult(playResult) {
  const { userName } = state;
  if (!userName) {
    return;
  }

  if (playResult) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
}
