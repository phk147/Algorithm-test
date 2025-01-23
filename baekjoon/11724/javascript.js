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
  const [node, edge] = input
    .shift()
    .split(" ")
    .map((v) => +v);
  let graph = Array.from({ length: node + 1 }, () =>
    Array.from({ length: node + 1 }).fill(0)
  );
  const visited = new Array(node + 1).fill(0);
  let ans = 0;

  for (let i = 0; i < edge; i++) {
    const [n, m] = input[i].split(" ").map((v) => +v);
    graph[n][m] = 1;
    graph[m][n] = 1;
  }

  //연결된 수 -> 순회하다가 더이상 갈 곳이 없으면 +1을하고 종료
  const dfs = (start) => {
    visited[start] = 1;
    for (let i = 0; i < graph[start].length; i++) {
      if (graph[start][i] && !visited[i]) {
        dfs(i);
      }
    }
  };
  for (let i = 1; i <= node; i++) {
    if (!visited[i]) {
      dfs(i);
      ans++;
    }
  }

  console.log(ans);
}

solution();
