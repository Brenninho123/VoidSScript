#!/usr/bin/env node
import fs from "fs";
import { toJS } from "../src/transpilers/js.js";

const file = process.argv[2];
const code = fs.readFileSync(file, "utf8");

console.log(toJS(code));