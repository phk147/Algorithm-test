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

  let [a, b] = input
    .shift()
    .split(" ")
    .map((v) => +v);

  // 2를 곱한다.
  // 1을 수의 가장 오른쪽에 추가한다.

  let ans;
  const dfs = (a, b, cnt) => {
    if (a === b) {
      ans = cnt;
      return;
    } else if (a > b) return;

    dfs(a * 2, b, cnt + 1);
    dfs(+[a, 1].join(""), b, cnt + 1);
  };

  dfs(a, b, 0);

  console.log(!ans ? -1 : ans + 1);
}

solution();
