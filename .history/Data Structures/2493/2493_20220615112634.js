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

  let n = +input[0];
  let arr = input[1].split(" ").map((v) => +v);
  let tower = [[100000001, 0]];
  let ans = [];

  for (let i = 1; i <= n; i++) {
    if (tower[tower.length - 1][0] < arr[i - 1]) {
      tower.pop();
    }
    ans.push(tower[tower.length - 1][1]);
    tower.push([arr[i - 1], i]);
  }

  console.log(ans.join(" "));
}

solution();
