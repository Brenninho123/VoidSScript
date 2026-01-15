export function interpret(ast) {
  let code = ast.body.join(" ");

  code = code
    .replace(/print/g, "console.log")
    .replace(/func/g, "function");

  eval(code);
}