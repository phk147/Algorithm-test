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
    .split("\n")
    .map((val) => val.trim());
  let [n, m] = input
    .shift()
    .split(" ")
    .map((v) => +v);
  let [x1, y1, x2, y2] = input
    .shift()
    .split(" ")
    .map((v) => +v);
  x1--;
  y1--;
  x2--;
  y2--;
  let graph = input.map((v) => v.split(""));

  let vis = new Array(n).fill().map((v) => new Array(m).fill(0));

  let dx = [0, 1, 0, -1];
  let dy = [1, 0, -1, 0];

  const bfs = (start) => {
    let [x, y] = start;
    let queue = [];
    vis[x][y] = 1;
    let cnt = 0;
    queue.push([x, y]);

    while (graph[x2][y2] !== "0") {
      cnt++;
      let temp = [];
      while (queue.length) {
        let [cx, cy] = queue.shift();
        for (let dir = 0; dir < 4; dir++) {
          let nx = cx + dx[dir];
          let ny = cy + dy[dir];
          if (nx < 0 || nx >= n || ny < 0 || ny >= m || vis[nx][ny]) continue;
          vis[nx][ny] = cnt;
          if (graph[nx][ny] !== "0") {
            graph[nx][ny] = "0";
            temp.push([nx, ny]);
          } else {
            queue.push([nx, ny]);
          }
        }
      }
      queue = temp;
    }
  };
  bfs([x1, y1]);

  console.log(vis[x2][y2]);
}

solution();
