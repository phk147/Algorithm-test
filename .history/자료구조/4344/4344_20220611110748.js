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
    .trim()
    .split("\n")
    .map((val) => val.trim());

  let c = +input.splice(0, 1)[0];
  for (let i = 0; i < c; i++) {
    const arr = input[i].split(" ").map((v) => +v);
    const [n, ...score] = arr;

    const avg = score.reduce((a, b) => a + b) / n;
    const aboveAvg = score.filter((v) => v > avg).length;
    const ans = (aboveAvg * 100) / n;
    console.log(ans.toFixed(3));
  }
}

solution();
