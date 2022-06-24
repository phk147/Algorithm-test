/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */

function checkColor(map, a, b) {
  let num = 8;
  let cnt = 0;
  let newMap = [...map];
  console.log(newMap);
  for (let i = a; i < a + num; i++) {
    for (let j = b; j < a + num; j++) {
      if (newMap[i][j] === newMap[i][j + 1]) {
        if (newMap[i][j] === "W") {
          newMap[i][j + 1] = "B";
          cnt++;
        } else {
          newMap[i][j + 1] = "W";
          cnt++;
        }
      }
    }
  }

  return cnt;
}

function solution() {
  let input = require("fs")
    .readFileSync("input.txt") //"/dev/stdin"
    .toString()
    .trim()
    .split("\n")
    .map((val) => val.trim());

  let [n, m] = input.splice(0, 1)[0].split(" ");

  let graph = [];
  for (let i = 0; i < n; i++) {
    graph.push(input[i].split(""));
  }

  let ans = 0;
  let checkNum = 0;
  for (let i = 0; i <= n - 8; i++) {
    for (let j = 0; j <= m - 8; j++) {
      checkNum = checkColor(graph, i, j);
      ans = checkNum < ans ? checkNum : ans;
    }
  }

  console.log(checkColor(graph, 0, 0));
}

solution();
