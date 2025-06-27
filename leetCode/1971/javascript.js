/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */
function solution(n, edges, source, destination) {
  // 양방향
  const graph = Array.from({ length: n }, () => []);
  const visited = new Array(n).fill(false);
  let ans = false;
  for (let i = 0; i < edges.length; i++) {
    const [x, y] = edges[i];

    graph[x].push(y);
    graph[y].push(x);
  }

  const dfs = (start) => {
    if (visited[start]) return;
    if (start === destination) {
      ans = true;
      return;
    }
    visited[start] = true;
    if (graph[start]?.length) {
      graph[start].forEach((val) => {
        dfs(val);
      });
    }
  };

  dfs(source);

  console.log(visited, ans);
}

solution(
  6,
  [
    [0, 1],
    [0, 2],
    [3, 5],
    [5, 4],
    [4, 3],
  ],
  0,
  5
);
