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
  input;
  console.log(input);
  let n = +input.splice(0, 1)[0];
  let max = -999;
  let schedule = [];
  for (let i = 0; i < n; i++) {
    schedule.push(input[i].split(" ").map((v) => +v));
  }

  // check
  for (let i = 0; i < n; i++) {
    if (i + schedule[i][0] >= n) {
      continue;
    }
    ans = solve(n, schedule, i, 0, max);
  }

  console.log(ans);
}

function solve(n, schedule, day, sum, max) {
  let nextDay = day + schedule[day][0];

  if (day === n - 1 || nextDay >= n) {
    max = Math.max(max, sum);
    return max;
  } else {
    for (let i = nextDay; i < n; i++) {
      if (i + schedule[i][0] < n) {
        solve(n, schedule, i, sum + schedule[i][1], max);
      }
    }
  }
  max = Math.max(max, sum);

  console.log(nextDay);
  return max;
}

solution();
