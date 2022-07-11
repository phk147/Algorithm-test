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

let dx = [0, 1, 0, -1];
let dy = [1, 0, -1, 0];

function bfs(x, y) {
  let q = new Queue();
  vis[x][y] = 1;
  q.push([x, y]);
  let cnt = 0;
  while (q.size() !== 0) {
    let [curX, curY] = q.pop();
    for (let dir = 0; dir < 4; dir++) {
      let nx = curX + dx[dir];
      let ny = curY + dy[dir];
      if (nx < 0 || ny < 0 || nx > m || ny > n) continue;
      if (graph[nx][ny] === 1 || vis[nx][ny] === 1) continue;
      vis[nx][ny] = 1;
      q.push([nx, ny]);
      cnt++;
    }
  }
  return cnt;
}
function solution() {
  //graph
  for (let i = 0; i < k; i++) {
    let [y1, x1, y2, x2] = input
      .shift()
      .split(" ")
      .map((v) => +v);
    x1 = m - x1;
    x2 = m - x2;

    for (let i = x2; i < x1; i++) {
      for (let j = y1; j < y2; j++) {
        graph[i][j] = 1;
      }
    }
  }
  let count = 0;
  let answer = [];
  //check
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (graph[i][j] === 0 && vis[i][j] === 0) {
        count++;
        answer.push(bfs(i, j));
      }
    }
  }

  console.log(count);
  console.log(answer.join(" "));
}

solution();
