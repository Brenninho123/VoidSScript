export function toJS(code) {
  return code
    .replace(/print/g, "console.log")
    .replace(/func/g, "function");
}