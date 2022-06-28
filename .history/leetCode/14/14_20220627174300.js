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
  let min = 9999;
  for (let i = 0; i < str.length; i++) {
    let temp = str[i].length;
    min = Math.min(min, temp);
  }

  console.log(str, min);
}

solution(input);
