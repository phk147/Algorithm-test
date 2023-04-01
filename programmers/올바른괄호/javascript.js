function solution() {
  let input = require("fs")
    .readFileSync("input.txt") //"/dev/stdin"
    .toString()
    .split("\n")
    .map((val) => val.trim());
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push("(");
    else {
      if (stack.at(-1) === "(") stack.pop();
      else stack.push(")");
    }
  }

  return !stack.length;
}

solution();
