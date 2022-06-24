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

  let s1 = input[0].split("");
  let s2 = input[1].split("");

  let len = s1.length + s2.length;

  let cnt = [];
  s1.forEach((v) => {
    if (s2.includes(v)) {
      cnt.push(s2.splice(s2.indexOf(v), 1));
    }
  });

  len -= 2 * cnt.length;

  console.log(len);
}

solution();
