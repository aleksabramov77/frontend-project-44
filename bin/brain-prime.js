#!/usr/bin/env node
import {
  initialization, playPrime, printResult,
} from '../src/index.js';

console.log('node bin/brain-prime.js');

initialization();

const isPlayWon = playPrime();

printResult(isPlayWon);
