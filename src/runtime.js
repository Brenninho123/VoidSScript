export const platform =
  typeof window !== "undefined" ? "web" :
  typeof process !== "undefined" ? "node" :
  "unknown";