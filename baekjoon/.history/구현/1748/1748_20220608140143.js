/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */

function solution() {
  let input = require("fs")
    .readFileSync("input.txt") //"/dev/stdin"
    .toString()
    .trim()
    .split("\n")
    .map((val) => val.trim());

  input = input[0].split("");
  let len = input.length;
  let tmp = Number(input.splice(1, len).join(""));
  input = Number(input[0]);
  let ans = (tmp + 1) * len;
  if (len === 1) {
    console.log(input);
  }

  for (let i = 1; i < len; i++) {
    if (i === 1) {
      ans += 1 * 9;
    } else if (i === 2) {
      ans += 2 * 90;
    } else if (i === 3) {
      ans += 3 * 900;
    } else if (i === 4) {
      ans += 4 * 9000;
    } else if (i === 5) {
      ans += 5 * 90000;
    } else if (i === 6) {
      ans += 6 * 900000;
    } else if (i === 7) {
      ans += 7 * 9000000;
    } else if (i === 8) {
      ans += 8 * 90000000;
    } else if (i === 9) {
      ans += 9 * 900000000;
    } else {
      console.log(error);
    }
  }
  console.log(ans);
}

solution();
