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
  let min_idx = 0;
  for (let i = 0; i < str.length; i++) {
    let temp = str[i].length;
    if (temp < min) {
      min = Math.min(min, temp);
      min_idx = i;
    }
  }

  console.log(str, min, min_idx);
}

solution(input);
