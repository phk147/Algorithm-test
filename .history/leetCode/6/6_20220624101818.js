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
  let num = +input[1];
  if (num === 1) {
    return s;
  }

  const len = s.length;
  const arr = [...Array(numRows)].map((r) => []);

  for (let i = 0; i < len; i++) {
    const pos = i % (2 * numRows - 2);
    const ii = pos < numRows ? pos : 2 * numRows - 2 - pos;
    arr[ii].push(s[i]);
  }
  console.log(arr);

  return arr.map((r) => r.join("")).join("");
}

solution(input);
