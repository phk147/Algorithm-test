/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */

function solution() {
  let input = require("fs")
    .readFileSync("input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((val) => val.trim());

  let t = +input.shift();
  while (t--) {
    let n = +input.shift();
    let arr = {};
    for (let i = 0; i < n; i++) {
      let tmp = input.shift().split(" ");
      if (arr[tmp[1]]) {
        arr[tmp[1]]++;
      } else {
        arr[tmp[1]] = 1;
      }
    }

    let cnt = 1;
    for (let key in arr) {
      cnt *= arr[key] + 1;
    }

    console.log(cnt - 1);
  }
}

solution();
