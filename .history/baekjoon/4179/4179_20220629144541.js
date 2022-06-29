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

let [n, m] = input
  .shift()
  .split(" ")
  .map((v) => +v);

let graph = [];
for (let i = 0; i < n; i++) {
  graph.push(input.shift().split(""));
}
let visit1 = Array.from(Array(n), () => new Array(m).fill(-1));
let visit2 = Array.from(Array(n), () => new Array(m).fill(-1));

class Queue {
  constructor() {
    this.arr = [];
    this.head = 0;
    this.tail = 0;
  }

  push(data) {
    this.arr[tail++] = data;
  }
  pop() {
    return this.arr[this.head++];
  }
  size() {
    return this.tail - this.head;
  }
}
function solution() {
  let q1 = new Queue();
  let q2 = new Queue();
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] === "F") {
        q1.push([i, j]);
        visit1[i][j] = 0;
      }
      if (graph[i][j] === "J") {
        q2.push([i, j]);
        visit2[i][j] = 0;
      }
    }
  }

  console.log(visit1);
  console.log(visit2);
}

solution();
