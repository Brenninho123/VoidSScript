export function lexer(code) {
  const tokens = [];
  const regex = /\s*(let|var|const|func|if|else|for|while|return|true|false|null|[A-Za-z_]\w*|\d+|"[^"]*"|==|!=|<=|>=|[(){};,+\-*/])/g;
  let match;

  while ((match = regex.exec(code)) !== null) {
    tokens.push(match[1]);
  }
  return tokens;
}