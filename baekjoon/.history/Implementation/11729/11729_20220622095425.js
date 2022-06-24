/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */
let answer = [];
let count = 0;
function solution() {
  let input = require("fs")
    .readFileSync("input.txt") //"/dev/stdin"
    .toString()
    .trim()
    .split("\n")
    .map((val) => val.trim());

  let n = +input[0];

  let ans = Hanoi(n, "1", "2", "3");
  console.log(count);
  console.log(ans);
}

function Hanoi(num, from, other, to) {
  if (num === 0) {
    return;
  } else {
    Hanoi(num - 1, from, to, other);
    answer.push([from, to]);
    count++;
    Hanoi(num - 1, other, from, to);
  }
}

solution();
