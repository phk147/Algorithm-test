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

  let time = 9999999;
  let height = 0;

  for (let h = Max; h >= Min; h--) {
    let t = 0;
    let bag = b;
    for (let a = 0; a < n; a++) {
      for (let b = 0; b < m; b++) {
        if (map[a][b] === h) continue;
        else if (map[a][b] > h) {
          t += (map[a][b] - h) * 2;
          bag += map[a][b] - h;
        } else {
          t += h - map[a][b];
          bag -= h - map[a][b];
        }
      }
    }
    if (bag < 0) break;

    console.log(h, t, bag);
    if (t <= time) {
      if (t === time && h < height) {
        time = t;
      } else {
        time = t;
        height = h;
      }
    }
  }

  let answer = [time, height].join(" ");
  console.log(answer);
}
solution(input);
