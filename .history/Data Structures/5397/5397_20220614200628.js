/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */

const { lstat } = require("fs/promises");

function solution() {
  let input = require("fs")
    .readFileSync("input.txt") //"/dev/stdin"
    .toString()
    .trim()
    .split("\n")
    .map((val) => val.trim());

  let t = +input.splice(0, 1)[0];

  for (let i = 0; i < t; i++) {
    let str = input[i].split("");

    let ans = [];
    let idx = 0;
    for (let i = 0; i < str.length; i++) {
      let c = str[i];
      if (c == "<") {
        if (idx != 0) idx--;
      } else if (c == ">") {
        if (idx != ans.length - 1) idx++;
      } else if (c == "-") {
        if (idx != 0) {
          idx--;
          ans.splice(idx, 1);
        }
      } else {
        ans.splice(idx, 0, c);
        idx++;
      }
    }
    console.log(ans);
  }
}

solution();
