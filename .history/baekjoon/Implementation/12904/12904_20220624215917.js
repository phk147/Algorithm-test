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
let [s, t] = input;
function solution(s, t) {
  s = s.split("");
  t = t.split("");

  while (1) {
    if (s.length === t.length) break;
    let T = t[t.length - 1];
    if (T === "A") t.pop();
    else {
      t.pop();
      t.reverse();
    }
  }
  if (s.join("") === t.join("")) console.log(1);
  else console.log(0);
}

solution(s, t);
