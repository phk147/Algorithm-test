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

  let [n, m, x, y, k] = input
    .shift()
    .split(" ")
    .map((v) => +v);

  let moveArr = input
    .pop()
    .split(" ")
    .map((v) => +v);
  let graph = input.map((v) => v.split(" ").map((val) => +val));

  const dice = {
    top: 0,
    bot: 0,
    right: 0,
    left: 0,
    front: 0,
    back: 0,
  };

  const move = (num) => {
    const { top, right, left, bot, front, back } = dice;
    let arr;
    switch (num) {
      case 0: {
        arr = [left, top, right, bot, front, back];
        break;
      }
      case 1: {
        arr = [right, bot, left, top, front, back];
        break;
      }
      case 2: {
        arr = [front, right, back, left, bot, top];
        break;
      }
      case 3: {
        arr = [back, right, front, left, top, bot];
        break;
      }
    }
    dice.top = arr[0];
    dice.right = arr[1];
    dice.bot = arr[2];
    dice.left = arr[3];
    dice.front = arr[4];
    dice.back = arr[5];
  };

  moveArr = moveArr.map((v) => v - 1);

  const dx = [0, 0, -1, 1];
  const dy = [1, -1, 0, 0];
  let cnt = 0;
  while (1) {
    if (cnt === k) break;
    let nx = x + dx[moveArr[cnt]];
    let ny = y + dy[moveArr[cnt]];
    if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
      cnt++;
      continue;
    }
    move(moveArr[cnt]);

    if (graph[nx][ny] === 0) {
      graph[nx][ny] = dice.bot;
    } else {
      dice.bot = graph[nx][ny];
      graph[nx][ny] = 0;
    }

    console.log(dice.top);
    x = nx;
    y = ny;
    cnt++;
  }
}

solution();
