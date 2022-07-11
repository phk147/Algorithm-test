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
let graph = [];
let vis = new Array(n).fill().map(() => new Array(n).fill(0));

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

let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];

function BFS(x, y, cgraph, cvis, i) {
  cvis[x][y] = 1;
  let q = new Queue();
  q.push([x, y]);
  while (q.size() !== 0) {
    let [X, Y] = q.pop();
    for (let dir = 0; dir < 4; dir++) {
      let nx = X + dx[dir];
      let ny = Y + dy[dir];
      if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
      if (cgraph[nx][ny] <= i || cvis[nx][ny] === 1) continue;
      cvis[nx][ny] = 1;
      q.push([nx, ny]);
    }
  }
}

function solution() {
  for (let i = 0; i < n; i++) {
    graph.push(
      input
        .shift()
        .split(" ")
        .map((v) => +v)
    );
  }

  let answer = 0;

  for (let i = 1; i <= 100; i++) {
    let copyGraph = [...graph.slice()];
    let copyVis = [...vis.slice()];
    let cnt = 0;
    for (let a = 0; a < n; a++) {
      for (let b = 0; b < n; b++) {
        if (copyGraph[a][b] > i && copyVis[a][b] === 0) {
          cnt++;
          BFS(a, b, copyGraph, copyVis, i);
        }
      }
    }

    if (answer < cnt) {
      console.log(i, cnt, copyGraph, copyVis);
    }
    answer = Math.max(answer, cnt);
  }

  console.log(answer);
}

solution();
