let input = require("fs")
  .readFileSync("input.txt") //"/dev/stdin"
  .toString()
  .split("\n")
  .map((val) => val.trim());

function solution(input) {
  //input
  let s = input[0].split(" ").map((v) => v.toLowerCase());

  s = s.join("").split("");
  console.log(s);
  //Submit
}

solution(input);
