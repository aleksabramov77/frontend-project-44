import readlineSync from 'readline-sync';

export function readUserName() {
    return  readlineSync.question('May I have your name? ');
}
