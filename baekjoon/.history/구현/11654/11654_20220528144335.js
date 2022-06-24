/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */

function solution() {
  let input = require("fs")
    .readFileSync("input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((val) => val.trim());

  input.sort((a, b) => a - b);

  let arr = input.map((val) => +val);
  do {
    let psum = 0;
    for (let i = 0; i < 7; i++) psum += arr[i];
    if (psum === 100) break;
  } while (permutation(arr, 7));

  console.log(arr);
}

solution();
