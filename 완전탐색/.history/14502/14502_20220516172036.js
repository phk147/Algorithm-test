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

  const graph = input.map((arr) => arr.trim().split(" "));

  const getSafeNum = (graph) => {
    let nums = 0;
    for (let row = n; row--; ) {
      for (let col = m; col--; ) {
        if (graph[row][col] === "0") nums += 1;
      }
    }
    return nums;
  };

  return graph;
}
const inputs = require("fs").readFileSync("예제.txt").toString().trim().split("\n");
console.log(solution(inputs));

// 0 empty  1wall 2 virus
