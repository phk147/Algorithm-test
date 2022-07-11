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

class Queue {
  constructor() {
    this.arr = [];
    this.head = 0;
    this.tail = 0;
  }

  push(data) {
    this.arr[this.tail++] = data;
  }
  pop() {
    return this.arr[this.head++];
  }
  size() {
    return this.tail - this.head;
  }
}

let [m, n, k] = input
  .shift()
  .split(" ")
  .map((v) => +v);

let graph = new Array(m).fill().map(() => new Array(n).fill(0));
let vis = new Array(m).fill().map(() => new Array(n).fill(0));
function solution() {
  //graph
  for (let i = 0; i < m; i++) {
    let [y1, x1, y2, x2] = input
      .shift()
      .split(" ")
      .map((v) => +v);
    x1 = m - x1;
    x2 = m - x2;
  }
}

solution();
