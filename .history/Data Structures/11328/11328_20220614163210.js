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

  let n = +input.splice(0, 1)[0];

  for (let i = 0; i < n; i++) {
    let [s1, s2] = input[0].split(" ");
    let arr = new Array(26).fill(0);

    for (let j = 0; j < s1.length; j++) {
      arr[s1.charCodeAt(j) - 97]++;
      arr[s2.charCodeAt(j) - 97]--;
    }

    for (let i = 0; i < 26; i++) {
      if (arr[i] != 0) {
        check = false;
        break;
      }
    }

    if (check) {
      console.log("Possible");
    } else {
      console.log("Impossible");
    }
  }
}

solution();
