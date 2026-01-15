export function run(ast) {
  const safe = ast
    .replace(/print/g, "console.log");
  eval(safe);
}
