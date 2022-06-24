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

  let ret = input.join("").split("");

  let arr = Array.from({ length: 26 }, () => 0);

  for (let i = 97; i < 123; i++) {
    let temp = ret.indexOf(i);
    console.log(temp);
    if (temp === -1) {
      arr[i - 97] = -1;
    } else {
      arr[i - 97] = temp;
    }
  }

  // console.log(arr);
}

solution();
