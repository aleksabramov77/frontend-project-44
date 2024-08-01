#!/usr/bin/env node
import {
  initialization, playProgression, printResult,
} from '../src/index.js';

console.log('node bin/brain-progression.js');

initialization();

const isPlayWon = playProgression();

printResult(isPlayWon);
