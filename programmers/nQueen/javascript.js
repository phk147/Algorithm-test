function solution() {
  let input = require("fs")
    .readFileSync("input.txt") //"/dev/stdin"
    .toString()
    .split("\n")
    .map((val) => val.trim());

  let n = +input.shift();

  let graph = new Array(n).fill().map((v) => new Array(n).fill(0));

  // Q은 가로 세로 대각선으로 이동가능
  // n은 12 이하의 자연수
  // Q을 배치하고 가로세로 대각선을 확인?

  const queen = (graph, n) => {
    if (n === 0) return;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (graph[i][j] === 0) {
          graph[i][j] = 1;
          break;
        }
      }
    }
    queen(graph, n - 1);
  };

  console.log(graph);
}

solution();
