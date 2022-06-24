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
  let answer = [];
  answer.push(addA(s));
  answer.push(reverseB(s));
  console.log(answer);
  while (1) {
    if (s.length === t.length) break;

    for (let i = 0; i < answer.length; i++) {
      answer.push(addA(answer[i]));
      answer.push(reverseB(answer[i]));
    }
  }
}

function addA(s) {
  return s + "A";
}

function reverseB(s) {
  let temp = s.split("").reverse();
  temp.push("B");
  return temp.join("");
}

solution(s, t);
