let input = require("fs")
  .readFileSync("input.txt") //"/dev/stdin"
  .toString()
  .split(" ")
  .map((val) => val.trim());

function solution(input) {
  //input
  console.log(input);
  //Submit
  let answer = "";
  let str = input.map((v) => v.split(""));

  console.log(str);
}

solution(input);
