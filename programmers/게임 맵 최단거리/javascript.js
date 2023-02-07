function solution() {
  let input = require("fs")
    .readFileSync("input.txt") //"/dev/stdin"
    .toString()
    .split("\n")
    .map((val) => val.trim());

  input = input.map((v) => v.split("").map((v) => +v));
  let n = input.length;
  let m = input[0].length;

  let vis = new Array(n).fill().map((v) => new Array(m).fill(0));

  let dx = [0, 1, 0, -1];
  let dy = [1, 0, -1, 0];

  const bfs = (x, y) => {
    let queue = [];
    vis[x][y] = 1;
    queue.push([x, y]);
    while (queue.length) {
      let [cx, cy] = queue.shift();
      for (let dir = 0; dir < 4; dir++) {
        let nx = cx + dx[dir];
        let ny = cy + dy[dir];
        if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
        if (input[nx][ny] === 0 || vis[nx][ny] !== 0) continue;
        vis[nx][ny] = vis[cx][cy] + 1;
        queue.push([nx, ny]);
      }
    }
  };

  bfs(0, 0);
  console.log(vis[n - 1][m - 1]);
}

solution();
