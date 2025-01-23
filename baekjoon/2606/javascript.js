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

  let num = +input.shift();
  let edge = +input.shift();

  input = input.map((v) => v.split(" ").map((val) => +val));

  let graph = Array.from({ length: num + 1 }, () =>
    Array.from({ length: num + 1 }).fill(0)
  );

  for (let i = 0; i < edge; i++) {
    const [n, m] = input[i];
    graph[n][m] = 1;
    graph[m][n] = 1;
  }
  // 1번부터 검사
  let ans = new Set();
  let visited = new Array(num + 1).fill(0);
  visited[1] = 1;
  const checkGraph = (start) => {
    const arr = graph[start];
    for (let i = 0; i < arr.length; i++) {
      if (!arr[i]) continue;
      else {
        if (!visited[i]) {
          visited[i] = 1;
          ans.add(i);
          checkGraph(i);
        }
      }
    }
  };
  checkGraph(1);
  console.log(ans.size);
}

solution();
