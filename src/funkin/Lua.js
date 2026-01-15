export function toLua(code) {
  return code
    .replace(/func/g, "function")
    .replace(/let |var |const /g, "")
    .replace(/{/g, "")
    .replace(/}/g, "end")
    .replace(/print/g, "print");
}