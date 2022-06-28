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
  let minStr = str.splice(min_idx, 1);

  for (let i = 0; i < minStr.length; i++) {
    let check = false;
    for (let j = 0; j < str.length; j++) {
      if (str[j].includes(minStr[i])) check = true;
    }
    if (check) {
      answer += minStr[i];
    }
  }

  console.log(minStr, answer);
}

solution(input);
