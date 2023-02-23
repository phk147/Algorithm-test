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

  let [n, m] = input
    .shift()
    .split(" ")
    .map((v) => +v);
  let map = input.map((v) => v.split(""));

  console.log(n, m, map);

  let count = 0;

  // 상하좌우 이동

  // 빨간구슬 성공 파란구슬 실패
  // 빨간구슬,파란구슬은 동시에 빠져도 실패, 동시에 같은 칸에 있을 수 없음
  // 10번 이하로 움직여서 빼낼 수 없으면 -1 출력
  if (count > 10) console(-1);
}

solution();
