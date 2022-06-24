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
    .split(" ")
    .map((val) => val.trim());

  let [a, b] = input;
  let a_len = a.length;
  let b_len = b.length;
  let def = b_len - a_len;
  let ans = [];

  for (let i = 0; i <= def; i++) {
    let min = 0;
    for (let j = i; j < i + a_len; j++) {
      if (a[j - i] !== b[j]) min++;
    }
    ans.push(min);
  }

  console.log(ans, Math.min(...ans));
}

solution();
