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
  console.log(input);

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

  maxNum = max(...graph);

  console.log(graph, maxNum);

  // 최대값 찾기
  // 상하좌우 비교해서 최대값쪽으로 진행
  // cnt 4 종료 //answer.push
  // max값
}

solution(input);
