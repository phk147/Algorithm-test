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
  let [n, m, b] = input
    .shift()
    .split(" ")
    .map((v) => +v);
  let map = [];
  let Max = -99999;
  let Min = 99999;
  for (let i = 0; i < n; i++) {
    let temp = input
      .shift()
      .split(" ")
      .map((v) => +v);
    let max = Math.max(...temp);
    let min = Math.min(...temp);

    Max = Math.max(Max, max);
    Min = Math.min(Min, min);

    map.push(temp);
  }

  let map_h = new Array(256).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      map_h[map[i][j]]++;
    }
  }

  for (let h = max; h >= min; h--) {
    let t = 0;
    let bag = b;
    for (let a = 0; a < n; a++) {
      for (let b = 0; b < n; b++) {
        if (map[a][b] === h) continue;
        else if (map[a][b] < h) {
        }
      }
    }
  }
}
solution(input);
