/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */

function solution(inputs) {
  const [testNum, ...input] = inputs;
  const [n, m] = testNum.split(" ").map((val) => +val);
  const map = input.map((arr) => arr.split(" "));

  for (let i = 0; i < m; i++) {
    map.push(input[i].split(" "));
  }

  return m;
}
const inputs = require("fs").readFileSync("예제.txt").toString().trim().split("\n");
console.log(solution(inputs));

// 0 empty  1wall 2 virus
