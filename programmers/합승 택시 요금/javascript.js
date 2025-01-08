function solutions() {
  let input = require("fs")
    .readFileSync("input.txt") //"/dev/stdin"
    .toString()
    .split("\n")
    .map((val) => val.trim());

  input.forEach((value) => {
    const [n, s, a, b, faresString] = value.split(" ");
    const fares = JSON.parse(faresString); // fares 문자열을 JSON으로 파싱
    solution(+n, +s, +a, +b, fares);
  });
}
const solution = (n, s, a, b, fares) => {
  let answer = 0;
  const graph = Array.from({ length: n + 1 }, () =>
    Array(n + 1).fill(Infinity)
  );

  for (let i = 1; i <= n; i++) {
    graph[i][i] = 0;
  }

  for (let [c, d, f] of fares) {
    graph[c][d] = f;
    graph[d][c] = f;
  }

  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
      }
    }
  }

  answer = graph[s][a] + graph[s][b];

  for (let i = 1; i <= n; i++) {
    answer = Math.min(answer, graph[s][i] + graph[i][a] + graph[i][b]);
  }
  return answer;
};

solutions();
