import { tokenize } from "./lexer.js";
import { parse } from "./parser.js";
import { run } from "./interpreter.js";

const code = `
print("Hello Void")
`;

run(parse(tokenize(code)));
