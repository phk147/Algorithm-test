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
  let [r, c, d] = input
    .shift()
    .split(" ")
    .map((v) => +v);
  let graph = input.map((v) => v.split(" ").map((v) => +v));

  const dx = [-1, 0, 1, 0];
  const dy = [0, -1, 0, 1];
  let vis = new Array(n).fill().map((_) => new Array(m).fill(0));
  let answer = 0;
  const bfs = (x, y, d, vis) => {
    // 현재 칸이 아직 청소되지 않은 경우 현재 칸을 청소
    let queue = [];
    vis[x][y] = 1;
    queue.push([x, y, d]);
    let cnt = 1;
    while (queue.length) {
      let [cx, cy, cd] = queue.shift();
      let flag = 1;
      let check = 4;
      // 현재 칸의 주변 4칸 중 청소되지 않은 칸이 있으면 반시계방향으로 90도 회전 후 청소되지 않은 칸이면 전진
      while (check) {
        check--;
        cd = (cd + 1) % 4;
        let nx = cx + dx[cd];
        let ny = cy + dy[cd];
        if (nx < 0 || nx >= n || ny < 0 || ny >= m || graph[nx][ny] === 1 || vis[nx][ny] === 1) {
          continue;
        }
        flag = 0;
        vis[nx][ny] = 1;
        cnt++;
        queue.push([nx, ny, cd]);
        break;
      }

      // 현재 칸의 주변 4칸 중 청소되지 않은 빈칸이 없으면 바라보는 방향을 유지하고, 한칸 후진 후 1번으로 돌아감
      // 뒤쪽이 벽이면 작동을 멈춘다.
      if (flag) {
        let nx = cx - dx[cd];
        let ny = cy - dy[cd];
        if (graph[nx][ny] === 1) return cnt;
        queue.push([nx, ny, cd]);
      }
    }
  };

  let ans = bfs(r, c, d, vis);

  console.log(ans);
}

solution();
