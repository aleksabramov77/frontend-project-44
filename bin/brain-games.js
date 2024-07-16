#!/usr/bin/env node
import {readUserName} from "../src/cli.js";
import {sayHello} from "../src/utils.js";

console.log("node bin/brain-games.js");
console.log("Welcome to the Brain Games!")
const name = readUserName()
sayHello(name)

