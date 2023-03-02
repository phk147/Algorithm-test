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

  let board = input.map((v) => v.split(""));

  // 0,0은 말이 놓여져있음
  // 상하좌우, 같은 알파벳은 없어야한다.

  let vis = new Array(26).fill(0);

  let ans = 0;

  let dx = [0, 1, 0, -1];
  let dy = [1, 0, -1, 0];
  const dfs = (x, y, cnt) => {
    ans = Math.max(ans, cnt);
    vis[board[x][y].charCodeAt() - 65] = 1;
    for (let dir = 0; dir < 4; dir++) {
      let nx = x + dx[dir];
      let ny = y + dy[dir];
      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (vis[board[nx][ny].charCodeAt() - 65] === 0) {
        vis[board[nx][ny].charCodeAt() - 65] = 1;
        dfs(nx, ny, cnt + 1);
        vis[board[nx][ny].charCodeAt() - 65] = 0;
      }
    }
  };

  dfs(0, 0, 1);

  console.log(ans);
}

solution();
