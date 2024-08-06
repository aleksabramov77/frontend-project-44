import readlineSync from 'readline-sync';

function readFromConsole(query) {
  return readlineSync.question(query);
}

export default readFromConsole;
