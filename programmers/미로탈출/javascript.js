function solution() {
  let input = require("fs")
    .readFileSync("input.txt") //"/dev/stdin"
    .toString()
    .split("\n")
    .map((val) => val.trim());

  let maps = input.map((v) => v.split(""));

  let n = maps.length;
  let m = maps[0].length;

  console.log(maps);
  let dx = [0, 1, 0, -1];
  let dy = [1, 0, -1, 0];
  const bfs = (start, end, vis) => {
    let [x, y] = start;
    let queue = [];
    vis[x][y] = 1;
    queue.push([x, y]);
    while (queue.length) {
      let [cx, cy] = queue.shift();
      for (let dir = 0; dir < 4; dir++) {
        let nx = cx + dx[dir];
        let ny = cy + dy[dir];
        if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
        if (maps[nx][ny] === "X" || vis[nx][ny] !== 0) continue;
        if (nx === end[0] && ny === end[1]) {
          console.log(vis);
          return vis[cx][cy];
        }
        vis[nx][ny] = vis[cx][cy] + 1;
        queue.push([nx, ny]);
      }
    }
  };

  // 레버를 먼저 당겨야함
  // 그후에 출구로 나간다
  // 스타트->레버 bfs

  let s = [];
  let l = [];
  let e = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (maps[i][j] === "S") s = [i, j];
      if (maps[i][j] === "L") l = [i, j];
      if (maps[i][j] === "E") e = [i, j];
    }
  }

  let vis1 = new Array(n).fill().map((_) => new Array(m).fill(0));
  let vis2 = new Array(n).fill().map((_) => new Array(m).fill(0));

  let cnt1 = bfs(s, l, vis1);
  let cnt2 = bfs(l, e, vis2);
  console.log(cnt1);
  console.log(cnt2);

  console.log(cnt1 && cnt2 ? cnt1 + cnt2 : -1);
}

solution();
