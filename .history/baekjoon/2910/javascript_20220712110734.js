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

let [n, c] = input
  .shift()
  .split(" ")
  .map((v) => +v);
let arr = input[0].split(" ").map((v) => +v);
function solution() {
  let hs = new Map();

  for (let i = 0; i < n; i++) {
    let temp = arr[i];
    if (hs.has(temp)) {
      let [cnt, idx] = hs.get(temp);
      cnt++;
      hs.set(temp, [cnt, idx]);
    } else {
      hs.set(temp, [1, i]);
    }
  }

  let tmp = [];
  for (const [key, val] of hs) {
    tmp.push([key, val]);
  }

  tmp.sort((a, b) => {
    if (a[1][0] === b[1][0]) return a[1][1] - b[1][1];
  });

  console.log(tmp);
}

solution();
