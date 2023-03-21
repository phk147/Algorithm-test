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

  let [n, k] = input
    .shift()
    .split(" ")
    .map((v) => +v);
  let durability = input
    .shift()
    .split(" ")
    .map((v) => +v);

  let track1 = durability.slice(0, n);
  let track2 = durability.slice(n);

  let cnt = 0;
  let robots = [];
  while (1) {
    console.log("t1", track1);
    console.log("t2", track2);
    console.log("robot", robots);

    if (track1.filter((v) => v === 0).length + track2.filter((v) => v === 0).length >= k) {
      console.log(cnt);
      break;
    }

    // 컨테이너 벨트 한 칸 이동
    let temp1 = track1.pop();
    let temp2 = track2.shift();
    track1.unshift(temp2);
    track2.push(temp1);

    if (robots.length) {
      for (let i = 0; i < robots.length; i++) {
        robots[i]++;
        track1[robots[i]]--;
        if (robots[i] >= n - 1) {
          robots.splice(i, 1);
          i--;
        }
      }

      for (let i = 0; i < robots.length; i++) {
        robots[i]++;
        track1[robots[i]]--;
        if (robots[i] >= n - 1) {
          robots.splice(i, 1);
          i--;
        }
      }
    }

    if (track1[0]) {
      robots.push(0);
      track1[0]--;
    }
    cnt++;
  }
}

solution();
