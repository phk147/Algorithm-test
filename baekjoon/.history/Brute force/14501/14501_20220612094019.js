/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */
let ans;
function solution() {
  let input = require("fs")
    .readFileSync("input.txt") //"/dev/stdin"
    .toString()
    .trim()
    .split("\n")
    .map((val) => val.trim());

  let n = +input.splice(0, 1)[0];
  let schedule = [];
  for (let i = 0; i < n; i++) {
    schedule.push(input[i].split(" ").map((v) => +v));
  }

  // check
  for (let i = 0; i < n; i++) {
    if (i + schedule[i][0] > n) {
      continue;
    }
    solve(n, schedule, i, 0);
  }

  console.log(ans);
}

function solve(n, schedule, day, sum) {
  let nextDay = day + schedule[day][0];

  if (day > n - 1 || nextDay >= n) {
    ans = Math.max(ans, sum);
    return;
  } else {
    for (let i = nextDay; i < n; i++) {
      if (i + schedule[i][0] < n) {
        solve(n, schedule, i, sum + schedule[i][1]);
      }
    }
  }

  ans = Math.max(ans, sum);
}

solution();
