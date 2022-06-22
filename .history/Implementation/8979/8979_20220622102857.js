let input = require("fs")
  .readFileSync("input.txt") //"/dev/stdin"
  .toString()
  .trim()
  .split("\n")
  .map((val) => val.trim());

function solution(input) {
  console.log(input);
  let [n, k] = input
    .shift()
    .split(" ")
    .map((v) => +v);

  console.log(n, k);
}

solution(input);
