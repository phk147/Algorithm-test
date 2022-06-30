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

let n = +input.shift();
let Map = new Array(n).fill().map(() => new Array(n).fill(0));

let k = +input.shift();
for (let i = 0; i < k; i++) {
  let [x, y] = input
    .shift()
    .split(" ")
    .map((v) => +v);
  Map[x - 1][y - 1] = 1;
}

let dx = [0, 1, 0, -1];
let dy = [1, 0, -1, 0];

function solution() {
  let l = +input.shift();
  let answer = 0;
  let dir = 0;
  let snake = [0, 0];
  for (let i = 0; i < l; i++) {
    let [X, C] = input.shift().split(" ");
    let cnt = 0;
    while (cnt !== +X) {
      cnt++;
      let nx = snake[0] + dx[dir];
      let ny = snake[1] + dy[dir];
      if (nx < 0 || nx > n || ny < 0 || ny > n) continue;

      if (Map[nx][ny] === 1) {
        Map[nx][ny] = -1;
        k--;
        if (k === 0) {
          answer += cnt;
          console.log(answer);
          return;
        }
      }
      snake[0] = nx;
      snake[1] = ny;
      console.log(k, snake, Map, cnt);
    }
    if (C === "D") {
      if (dir + 1 >= 4) dir = 0;
      else dir++;
    }
    if (C === "L") {
      if (dir - 1 < 0) dir = 3;
      else dir--;
    }
    answer += cnt;
  }
}

solution();
