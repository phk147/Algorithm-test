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
  let num = +input[0];

  if (check3(num)) {
    console.log();
  }
}

function check3(number, cnt) {
  let Num = number.split(" ").map((v) => +v);
  if (Num.length === 1) {
    if (Num[0] === 3 || Num[0] === 6 || Num[0] === 9) return true;
    else return false;
  }
  let psum = Num.reduce((a, c) => a + c);
  check3(parseInt(psum / 3), cnt++);
}

solution(input);
