let input = require("fs")
  .readFileSync("input.txt") //"/dev/stdin"
  .toString()
  .split(",")
  .map((val) => val.trim());

function solution(input) {
  //input
  //Submit
  console.log(input);
  let len = input.length;
  let nums = input.map((v) => +v);
}

solution(input);
