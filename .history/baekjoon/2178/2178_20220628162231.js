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
function solution(input) {
  //input
  let [n, m] = input
    .shift()
    .split(" ")
    .map((v) => +v);
  let graph = [];
  for (let i = 0; i < n; i++) {
    graph.push(input.shift().split(""));
  }

  let visit = new Array(n).fill().map(() => new Array(m).fill(0));
  console.log(n, m, graph, visit);

  let answer = BFS(0, 0, graph, visit, n, m);

  console.log(answer);
}

function BFS(x, y, graph, visit, n, m) {
  let dx = [0, 1, 0, -1];
  let dy = [1, 0, -1, 0];
  let queue = [];
  let count = 0;
  visit[x][y] = 1;
  queue.push([x, y]);
  while (queue.length !== 0) {
    let [curX, curY] = queue.shift();
    console.log([curX, curY]);
    for (let dir = 0; dir < 4; dir++) {
      let nx = curX + dx[dir];
      let ny = curY + dy[dir];
      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (visit[nx][ny] === 1 || graph[nx][ny] === 0) continue;
      visit[nx][ny] = 1;
      count++;
      queue.push([nx, ny]);
    }
  }

  return count;
}

solution(input);
