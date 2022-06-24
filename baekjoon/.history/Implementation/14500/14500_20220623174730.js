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
  const [n, m] = input
    .shift()
    .split(" ")
    .map((v) => +v);
  let maxNum = 0;
  const answer = [];
  const graph = [];
  for (let i = 0; i < n; i++) {
    graph.push(
      input
        .shift()
        .split(" ")
        .map((v) => +v)
    );
  }
  // 최대값 찾기
  graph.forEach((v) => {
    for (let i = 0; i < v.length; i++) {
      maxNum = Math.max(maxNum, v[i]);
    }
  });

  // 상하좌우 비교해서 최대값쪽으로 진행
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] === maxNum) {
        let ans = maxNum + checkNum(graph, i, j, n, m);
        answer.push(ans);
      }
    }
  }
  // max값
  let result = Math.max(...answer);
  console.log(result);
}

//상하좌우값 비교
function checkNum(graph, i, j, n, m) {
  let dx = [1, 0, -1, 0];
  let dy = [0, 1, 0, -1];
  let cnt = 0;
  let psum = 0;
  let Q = [];
  Q.push([i, j]);

  while (cnt !== 4) {
    let curX = +Q[0][0];
    let curY = +Q[0][1];
    Q.shift();
    let max = 0;

    for (let dir = 0; dir < 4; dir++) {
      let nx = curX + dx[dir];
      let ny = curY + dy[dir];
      if (nx < 0 || nx > n || ny < 0 || ny > m) continue;
      if (max < graph[nx][ny]) {
        max = graph[nx][ny];
        Q.push(nx, ny);
      }
    }
    psum += max;
    cnt++;
  }

  return psum;
}

solution(input);
