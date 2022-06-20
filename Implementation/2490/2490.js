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
  .trim()
  .split("\n")
  .map((val) => val.trim());

function solution(input) {
  input.forEach((v) => {
    let tmp = v.split(" ");
    let cnt = 0;
    for (let i = 0; i < tmp.length; i++) {
      if (tmp[i] === "1") cnt++;
    }
    if (cnt === 0) console.log("D");
    else if (cnt === 1) console.log("C");
    else if (cnt === 2) console.log("B");
    else if (cnt === 3) console.log("A");
    else console.log("E");
  });
}
solution(input);
