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
function solution() {
  while (input[0] !== "end") {
    let s = input.shift().split("");
    let check = true;
    let a = ["a", "e", "i", "o", "u"];
    //a e i o u check
    a.forEach((v) => {
      if (!s.filter((c) => v === c)) check = false;
    });

    //모음, 자음 3개 연속 check

    //같은 글자 연속, 단 ee, oo ok

    console.log(s);
  }
}

solution();
