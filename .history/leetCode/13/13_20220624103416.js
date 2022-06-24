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

  let psum = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I") {
      if (s[i + 1] === "V") {
        psum += 4;
        i++;
      } else if (s[i + 1] === "X") {
        psum += 9;
        i++;
      } else psum += 1;
    } else if (s[i] === "V") psum += 5;
    else if (s[i] === "X") {
      if (s[i + 1] === "L") {
        psum += 40;
        i++;
      } else if (s[i + 1] === "C") {
        psum += 90;
        i++;
      } else psum += 10;
    } else if (s[i] === "L") psum += 50;
    else if (s[i] === "C") {
      if (s[i + 1] === "D") {
        psum += 400;
        i++;
      } else if (s[i + 1] === "M") {
        psum += 900;
        i++;
      } else psum += 100;
    } else if (s[i] === "D") psum += 500;
    else if (s[i] === "M") psum += 1000;
  }

  // console.log(psum);
  return psum;
}

solution(input);
