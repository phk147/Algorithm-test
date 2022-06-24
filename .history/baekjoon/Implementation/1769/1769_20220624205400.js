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
  let num = input[0];
  let cnt = 0;
  let answer = "";
  while (1) {
    let Num = num.split("").map((v) => +v);
    if (Num.length === 1) {
      if (Num[0] % 3 === 0) answer = "Yes";
      else answer = "No";
      break;
    }
    let psum = Num.reduce((a, c) => a + c);
    num = String(psum);

    cnt++;
  }

  console.log(cnt);
  console.log(answer);
}

solution(input);
