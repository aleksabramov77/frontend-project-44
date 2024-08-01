#!/usr/bin/env node
import {
  initialization, playEven, printResult,
} from '../src/index.js';

console.log('node bin/brain-even.js');

initialization();

const isPlayWon = playEven();

printResult(isPlayWon);
