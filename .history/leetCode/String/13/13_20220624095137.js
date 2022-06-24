/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */
let input = require("fs")
  .readFileSync("input.txt") //"/dev/stdin"
  .toString()
  .split("\n")
  .map((val) => val.trim());

function solution(input) {
  let s = input[0];

  s = s.split("");

  let psum = 0;
  s.forEach((v, i) => {
    if (v === "I") {
      if (s[i + 1] === "V") psum += 4;
      else if (s[i + 1] === "X") psum += 9;
      else psum += 1;
    } else if (v === "V") psum += 5;
    else if (v === "X") {
      if (s[i + 1] === "L") psum += 40;
      else if (s[i + 1] === "C") psum += 90;
      else psum += 10;
    } else if (v === "L") psum += 50;
    else if (v === "C") psum += 100;
    else if (v === "D") psum += 500;
    else if (v === "M") psum += 1000;
  });

  console.log(psum);
}

solution(input);
