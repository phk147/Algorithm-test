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

  let n = +input.shift();
  let k = +input.shift();
  let apple = [];
  for (let i = 0; i < k; i++) {
    [x, y] = input
      .shift()
      .split(" ")
      .map((v) => +v);
    apple.push([x - 1, y - 1]);
  }
  let l = +input.shift();
  let move = [];
  for (let i = 0; i < l; i++) {
    [x, y] = input.shift().split(" ");
    move.push([+x, y]);
  }

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let dir = 1;

  let time = 0;
  let snake = [[0, 0]];
  let cnt = 0;

  while (1) {
    let [t, c] = move[cnt];
    if (t === time) {
      if (c === "D") {
        dir = (dir + 1) % 4;
      } else dir = dir === 0 ? 3 : (dir - 1) % 4;

      if (cnt < l - 1) cnt++;
    }

    time++;

    let [x, y] = snake.at(-1);
    let nx = x + dx[dir];
    let ny = y + dy[dir];

    if (nx < 0 || nx >= n || ny < 0 || ny >= n || snake.find((v) => v[0] === nx && v[1] === ny)) {
      console.log(time);
      break;
    }

    let idx = apple.findIndex((v) => v[0] === nx && v[1] === ny);
    if (idx !== -1) {
      apple.splice(idx, 1);
    } else {
      snake.shift();
    }

    snake.push([nx, ny]);
  }
}

solution();
