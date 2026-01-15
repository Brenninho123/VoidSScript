#!/usr/bin/env node
import fs from "fs";
import { transpileToJS } from "./src/transpile-js.js";

const file = process.argv[2];
const code = fs.readFileSync(file, "utf8");

console.log(transpileToJS(code));
