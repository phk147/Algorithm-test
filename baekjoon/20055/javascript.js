/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */
function solution() {
  let input = require("fs")
    .readFileSync("input.txt")
    .toString()
    .split("\n")
    .map((val) => val.trim());

  let [n, k] = input
    .shift()
    .split(" ")
    .map((v) => +v);

  let durability = input
    .shift()
    .split(" ")
    .map((v) => +v);

  let robots = new Array(n).fill(0);
  let ans = 0;

  const rotation = (durability, robots) => {
    let temp = durability.pop();
    durability.unshift(temp);
    robots.pop();
    robots.unshift(0);
    if (robots[n - 1] === 1) robots[n - 1] = 0;
  };

  const moveRobot = (durability, robots) => {
    for (let i = robots.length - 2; i >= 0; i--) {
      if (robots[i] && durability[i + 1] >= 1 && !robots[i + 1]) {
        durability[i + 1]--;
        robots[i] = 0;
        robots[i + 1] = 1;
      }
    }
    if (robots[n - 1] === 1) robots[n - 1] = 0;
  };

  while (1) {
    if (durability.filter((v) => v === 0).length >= k) {
      console.log(ans);
      break;
    }

    ans++;
    rotation(durability, robots);
    moveRobot(durability, robots);
    if (robots[0] === 0 && durability[0] > 0) {
      robots[0] = 1;
      durability[0]--;
    }
  }
}

solution();
