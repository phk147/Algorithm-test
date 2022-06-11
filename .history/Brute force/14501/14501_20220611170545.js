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
  //input
  console.log(input);
  let n = +input.splice(0, 1)[0];
  let max = -999;
  let schedule = [];
  for (let i = 0; i < n; i++) {
    schedule.push(input[i].split(" ").map((v) => +v));
  }
  console.log(n, schedule);

  // check
  for (let i = 0; i < n; i++) {
    let idx = i;
    let cnt = n;
    let money = 0;
    while (cnt > 0 && idx < n) {
      if (cnt >= 0) money += schedule[idx][1];
      cnt -= schedule[idx][0];
      idx += schedule[idx][0];
    }

    if (max < money) max = money;
  }

  console.log(max);
}

solution();
