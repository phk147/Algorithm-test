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

let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];

const bfs = (map, visited, x, y) => {
  let queue = [];
  visited[x][y] = 1;
  queue.push([x, y]);
  while (queue.length !== 0) {
    let [cx, cy] = queue.shift();
    for (let dir = 0; dir < 4; dir++) {
      let nx = cx + dx[dir];
      let ny = cy + dy[dir];
      if (nx < 0 || nx >= map.length || ny < 0 || ny >= map[0].length) continue;
      if (map[nx][ny] === 0 || visited[nx][ny] === 1) continue;
      visited[nx][ny] = 1;
      queue.push([nx, ny]);
    }
  }
};

const dfs = (map, visited, x, y) => {
  visited[x][y] = 1;
  for (let dir = 0; dir < 4; dir++) {
    let nx = x + dx[dir];
    let ny = y + dy[dir];
    if (nx < 0 || nx >= map.length || ny < 0 || ny >= map[0].length) continue;
    if (map[nx][ny] === 0 || visited[nx][ny] === 1) continue;
    dfs(map, visited, nx, ny);
  }
};

function solution() {
  let t = +input.shift();
  while (t--) {
    let [m, n, k] = input
      .shift()
      .split(" ")
      .map((v) => +v);
    let map = new Array(n).fill().map((v) => new Array(m).fill(0));
    let visited = new Array(n).fill().map((v) => new Array(m).fill(0));
    let count = 0;
    for (let i = 0; i < k; i++) {
      let [x, y] = input
        .shift()
        .split(" ")
        .map((v) => +v);
      map[y][x] = 1;
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (map[i][j] === 1 && visited[i][j] === 0) {
          dfs(map, visited, i, j);
          count++;
        }
      }
    }

    console.log(count);
  }
}

solution();
