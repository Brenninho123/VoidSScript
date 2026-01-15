export function tokenize(code) {
  return code
    .replace(/\n/g, " \n ")
    .split(/\s+/)
    .filter(t => t.length);
}
