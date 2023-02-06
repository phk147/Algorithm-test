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

  let [n, k] = input[0].split(" ").map((v) => +v);

  let max = 1000000;

  let vis = new Array(max + 4);
  let cnt = 1;
  const bfs = (start, end) => {
    if (start === end) {
      console.log(0);
      return;
    }
    let queue = [];
    vis[start] = [1, [start]];
    queue.push(start);
    while (queue.length) {
      let cur = queue.shift();
      end += cnt;
      cnt++;
      if (end > 500000) {
        console.log(-1);
        return;
      }
      for (let dir = 0; dir < 3; dir++) {
        let next;
        if (dir === 0) next = cur * 2;
        else if (dir === 1) next = cur + 1;
        else next = cur - 1;

        if (next >= 0 && next < max) {
          if (next === end) {
            console.log(vis[cur][0]);
            // console.log([...vis[cur][1], next].join(" "));
            return;
          }
          if (!vis[next]) {
            queue.push(next);
            vis[next] = [vis[cur][0] + 1, [...vis[cur][1], next]];
          } else if (vis[next][0] === vis[cur][0] + 1) {
            vis[next][1] = [...vis[cur][1], next];
          }
        }
      }
    }
  };

  bfs(n, k);
}

solution();
