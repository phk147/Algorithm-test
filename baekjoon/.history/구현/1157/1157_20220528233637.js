/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */

const { stringify } = require("querystring");

function solution() {
  let input = require("fs")
    .readFileSync("input.txt") //"/dev/stdin"
    .toString()
    .trim()
    .split("\n")
    .map((val) => val.trim());

  let ret = input.join("").toUpperCase().split("");
  let arr = Array.from({ length: 26 }, () => 0);

  for (let i = 0; i < ret.length; i++) {
    arr[ret[i].charCodeAt(0) - 65]++;
  }
  let cnt = Math.max(...arr);
  let flag = 0;

  let ans = arr.filter((val) => val >= cnt);

  console.log(ans);
}

solution();
