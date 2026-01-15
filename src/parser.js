export function parser(tokens) {
  return {
    type: "Program",
    body: tokens
  };
}