#!/usr/bin/env node
import {
  initialization, playCalc, printResult,
} from '../src/index.js';

console.log('node bin/brain-calc.js');

initialization();

const isPlayWon = playCalc();

printResult(isPlayWon);
