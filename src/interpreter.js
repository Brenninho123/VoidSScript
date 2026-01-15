export function interpret(ast) {
  let js = ast.body.join(" ");

  js = js
    .replace(/print/g, "console.log")
    .replace(/func/g, "function");

  eval(js);
}