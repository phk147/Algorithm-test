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
let [m, n] = input
  .shift()
  .split(" ")
  .map((v) => +v);

let graph = [];
for (let i = 0; i < n; i++) {
  graph.push(input.shift().split(" "));
}
let visited = new Array(n).fill().map(() => new Array(m).fill(-2));

let dx = [0, 1, 0, -1];
let dy = [1, 0, -1, 0];
function solution() {
  let answer = 0;
  let check = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] === "1") check.push([i, j]);
      if (graph[i][j] === "0") visited[i][j] = -1;
    }
  }

  if (check.length === 0) console.log(answer);
  else {
    let queue = [];
    check.forEach((v) => {
      visited[v[0]][v[1]] = 0;
      queue.push(v);
    });

    while (queue.length !== 0) {
      let [curX, curY] = queue.shift();
      for (let dir = 0; dir < 4; dir++) {
        let nx = curX + dx[dir];
        let ny = curY + dy[dir];
        if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
        if (graph[nx][ny] === "-1" || visited[nx][ny] >= 0) continue;
        visited[nx][ny] = visited[curX][curY] + 1;
        queue.push([nx, ny]);
      }
    }
    console.log(visited);

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (graph[i][j] === -1) {
          console.log(-1);
          return 0;
        } else {
          answer = Math.max(answer, graph[i][j]);
        }
      }
    }
    console.log(answer);
  }
}

solution();
