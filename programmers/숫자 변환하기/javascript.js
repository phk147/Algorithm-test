function solution() {
  let input = require("fs")
    .readFileSync("input.txt") //"/dev/stdin"
    .toString()
    .split(" ")
    .map((val) => val.trim());

  let [x, y, n] = input.map((v) => +v);

  // x에 n을 더한다.
  // x에 2를 곱한다.
  // x에 3을 곱한다.

  // 더하거나 곱하니까 y를 넘어가면 stop

  if (x === y) return 0;

  let queue = [];
  let vis = new Array(y * 2).fill(0);
  queue.push(x);
  vis[x] = 0;
  while (queue.length) {
    let cx = queue.shift();
    for (let i = 0; i < 3; i++) {
      let nx;
      if (i === 0) nx = cx + n;
      else if (i === 2) nx = cx * 2;
      else nx = cx * 3;
      if (nx < 0 || nx > y) continue;
      if (vis[nx]) continue;
      vis[nx] = vis[cx] + 1;
      queue.push(nx);
      if (nx === y) return vis[y];
    }
  }
  console.log(-1);
}

solution();
