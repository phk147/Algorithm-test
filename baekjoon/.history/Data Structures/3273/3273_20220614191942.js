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

  let n = +input.splice(0, 1)[0];
  let arr = input[0].split(" ").map((v) => +v);
  let x = +input[1];
  let cnt = 0;

  let i = 0;
  let j = n - 1;
  while (i < j) {
    if (arr[i] + arr[j] === x) {
      i++;
      cnt++;
    } else if (arr[i] + arr[j] > x) {
      j--;
    } else {
      i++;
    }
  }

  console.log(cnt);
}
solution();
