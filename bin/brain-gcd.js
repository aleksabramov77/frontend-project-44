#!/usr/bin/env node
import {
  initialization, playGcd, printResult,
} from '../src/index.js';

console.log('node bin/brain-gcd.js');

initialization();

const isPlayWon = playGcd();

printResult(isPlayWon);
