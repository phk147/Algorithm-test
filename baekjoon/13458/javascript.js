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
    .split("\n")
    .map((val) => val.trim());

  let n = +input.shift();
  let arr = input
    .shift()
    .split(" ")
    .map((v) => +v);
  let [b, c] = input
    .shift()
    .split(" ")
    .map((v) => +v);

  let ans = 0;

  for (let i = 0; i < arr.length; i++) {
    arr[i] -= b;
    ans++;

    if (arr[i] > 0) {
      ans += arr[i] % c === 0 ? parseInt(arr[i] / c) : parseInt(arr[i] / c) + 1;
    }
  }

  console.log(ans);
}

solution();
