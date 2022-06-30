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

let n = +input.shift();
let Map = new Array(n).fill().map(() => new Array(n).fill(0));

let k = +input.shift();
for (let i = 0; i < k; i++) {
  let [x, y] = input
    .shift()
    .split(" ")
    .map((v) => +v);
  Map[x - 1][y - 1] = 1;
}
console.log(Map);

let dx = [0, 1, 0, -1];
let dy = [1, 0, -1, 0];

function solution() {
  let l = +input.shift();
  let answer = 0;
  let dir = 0;
  for (let i = 0; i < l; i++) {
    let [X, C] = input.shift().split(" ");
    let cnt = 0;
    while (cnt !== X) {
      cnt++;
    }
  }
}

solution();
