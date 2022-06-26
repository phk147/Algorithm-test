let input = require("fs")
  .readFileSync("input.txt") //"/dev/stdin"
  .toString()
  .split("\n")
  .map((val) => val.trim());

function solution(input) {
  //input
  let s = input[0];
  //Submit
  s = s.split("");
  let len = s.length;

  let max = 0;
  for (let i = 0; i < len; i++) {
    let temp = [s[i]];
    for (let j = i + 1; j < len; j++) {
      if (temp.includes(s[j])) {
        break;
      } else {
        temp.push(s[j]);
      }
    }
    max = Math.max(max, temp.length);
  }

  console.log(max);
}

solution(input);
