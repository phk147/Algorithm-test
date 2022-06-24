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
  let s = input[0].split("");
  let num = +input[1];
  let len = s.length;
  let arr = [[], [], []];

  let cnt = 0;
  while (!s.length) {
    let tmp = cnt % num;
    cnt++;
    let str = s.shift();
  }

  console.log(s, arr);
}

solution(input);
