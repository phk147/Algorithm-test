let input = require("fs")
  .readFileSync("input.txt") //"/dev/stdin"
  .toString()
  .split("\n")
  .map((val) => val.trim());

function solution(input) {
  //input
  let arr = input[0].split(" ").map((v) => +v);
  let target = +input[1];
  //Submit
}

solution(input);
