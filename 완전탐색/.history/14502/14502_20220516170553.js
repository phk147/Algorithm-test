/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */

function solution() {
  let input = require("fs").readFileSync("예제.txt").toString().trim().split("\n");

  const [n, m] = input.shift().split(" ");
  const map = [];

  for (let i = 0; i < m; i++) {
    map.push(input[i].split(" "));
  }

  console.log(map, n, m);
}
const inputs = require("fs").readFileSync("예제.txt").toString().trim().split("\n");
solution();

// 0 empty  1wall 2 virus
