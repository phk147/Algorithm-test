function solution() {
  let input = require("fs")
    .readFileSync("input.txt") //"/dev/stdin"
    .toString()
    .split("\n")
    .map((val) => val.trim());

  let maps = input.map((v) => v.split(""));

  let n = maps.length;
  let m = maps[0].length;
  let vis = new Array(n).fill().map((v) => new Array(m).fill(0));

  let dx = [0, 1, 0, -1];
  let dy = [1, 0, -1, 0];

  const bfs = (x, y) => {
    let queue = [];
    vis[x][y] = 1;
    let cnt = +maps[x][y];
    queue.push([x, y]);
    while (queue.length) {
      let [cx, cy] = queue.shift();
      for (let dir = 0; dir < 4; dir++) {
        let nx = cx + dx[dir];
        let ny = cy + dy[dir];
        if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
        if (vis[nx][ny] || maps[nx][ny] === "X") continue;
        vis[nx][ny] = 1;
        cnt += Number(maps[nx][ny]);
        queue.push([nx, ny]);
      }
    }
    return cnt;
  };
  let ans = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (maps[i][j] !== "X" && !vis[i][j]) {
        ans.push(bfs(i, j));
      }
    }
  }

  ans.sort((a, b) => a - b);

  console.log(ans.length ? ans : [-1]);
}

solution();
