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

let t = +input.shift();

let graph;
let vis;

function solution() {
  while (t--) {
    graph = new Array(51).fill().map(() => new Array(51).fill(0));
    vis = new Array(51).fill().map(() => new Array(51).fill(0));
    let [m, n, k] = input
      .shift()
      .split(" ")
      .map((v) => +v);

    for (let i = 0; i < k; i++) {}
  }
}

solution();
